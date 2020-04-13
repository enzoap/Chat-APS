const mongoose = require('mongoose')

const InappropriateWordsSchema = new mongoose.Schema({
    badWord: String
})

module.exports = mongoose.model('InappropriateWordsSchema', InappropriateWordsSchema)