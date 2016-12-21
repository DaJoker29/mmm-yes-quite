const mongoose = require('mongoose');
const token = require('rand-token');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  displayName: { type: String, required: true, default: `Patient #${token.generate(6, '0123456789')}`, unique:true },
  createdOn: { type: Date, required: true, default: Date.now() },
  googleID: { type: String },
  googleToken: { type: String },
  flags: {
    admin: { type: Boolean, default: false },
  },
});

personSchema.plugin(uniqueValidator);

module.exports.person = mongoose.model('person', personSchema);