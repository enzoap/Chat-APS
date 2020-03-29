const MessagesModel = require('../Models/MessagesModel')

module.exports = {
    async index(req, res){
        const messages = await MessagesModel.find()
        
        return res.json(messages)
    }
}