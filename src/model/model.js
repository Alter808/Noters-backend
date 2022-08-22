const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Note', dataSchema)
