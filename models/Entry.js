const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Entry = mongoose.model('Entry', entrySchema);