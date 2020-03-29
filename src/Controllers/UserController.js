const UserModel = require('../Models/UserModel')
const bcrypt = require('bcrypt')

module.exports = {
    async index(req, res){
        const users = await UserModel.find()

        return res.json(users)
    },

    async create(req, res) {

        let {name, password} = req.body; 

        const userExist = await UserModel.findOne({name})

        if(userExist){
            return res.json({error: "Nome Indisponível"})
        }

         password = await bcrypt.hash(password, 12)

        user = await UserModel.create({
            name,
            password
        })

        if(user){
            return res.status(200).json({sucess: 'Usuário criado com sucesso.'})
        }
    },

    
}