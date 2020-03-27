const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    message: {
        type: String
    }
})

module.exports = mongoose.model('MessageSchema', MessageSchema)