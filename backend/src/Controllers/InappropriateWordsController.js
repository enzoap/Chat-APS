const InappropriateWordsModel = require('../Models/InappropriateWordsModel')

module.exports = {
    async store(req, res) {
        const {badWord} = req.body;
        
        const wordExist = await InappropriateWordsModel.findOne({badWord})

        if(wordExist){
            return res.json({error: 'Essa palavra já foi adicionada.'})
        }

        const response = await InappropriateWordsModel.create({
            badWord
        })

        if(response) {
            return res.status(203).json({sucess: 'Palavra adicionada com sucesso!'})
        }
    },

    async index(req, res){
        const badWords = await InappropriateWordsModel.find()

        return res.json(badWords)
    }
}