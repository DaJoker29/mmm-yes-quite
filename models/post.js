const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true, unique: true, trim: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
});

postSchema.plugin(uniqueValidator);

module.exports.post = mongoose.model('post', postSchema);