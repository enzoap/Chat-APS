const MessagesModel = require('../Models/MessagesModel')

module.exports = {
    async index(req, res){
        const messages = await MessagesModel.find()
        
        return res.json(messages)
    },
    async delete(req, res){
        const admin = req.headers.authorization;

        if(!admin) return res.status(401).json({message: 'Operação não permitida.'})
        
        const {deletedCount} = await MessagesModel.deleteMany()
        return res.json({message: `Foi deletado ${deletedCount} mensagens.`})
    }
}