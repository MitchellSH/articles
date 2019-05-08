const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  id: Number,
  title: String,
  content: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);
