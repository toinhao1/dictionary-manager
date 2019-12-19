const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DictionarySchema = new Schema({
  dictionary: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dictionary = mongoose.model('dictionarys', DictionarySchema);