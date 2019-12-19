const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DictionarySchema = new Schema({
  domain: {
    type: Object,
    required: true,
  },
  range: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dictionary = mongoose.model('dictionarys', DictionarySchema);