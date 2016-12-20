const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const episodeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  media: { type: String, required: true }, 
  date: { type: Date, required: true, default: Date.now() },
});

episodeSchema.plugin(uniqueValidator);

module.exports.episode = mongoose.model('episode', episodeSchema);