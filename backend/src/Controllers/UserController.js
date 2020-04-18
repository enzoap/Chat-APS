const UserModel = require('../Models/UserModel')
const generateHash = require('../Utils/generateHash')

module.exports = {
    async index(req, res){
        const users = await UserModel.find()

        return res.json(users)
    },

    async store(req, res) {

        let {name, password, admin} = req.body; 

        const userExist = await UserModel.findOne({name})

        if(userExist){
            return res.json({message: "Nome Indisponível"})
        }

         password = await generateHash(password)

        user = await UserModel.create({
            name,
            password,
            admin
        })

        if(user){
            return res.status(200).json({message: 'Usuário criado com sucesso.'})
        }
    },

    async update(req, res){
        const {name: params} = req.params;
        const {name, password} = req.body; 


        let user = await UserModel.findOne({name: params})
        
        if(name){
            user.name = name
        }
        
        if(password){
            user.password = await generateHash(password)
        }

        try {
            await user.save()
        } catch (error) {
            return res.json({message: "Esse nome de usuário já está em uso."})
        }
        
        return res.json({message: "Atualizado com sucesso."})
    },

    async delete(req, res){
        const {name} = req.params
        const admin = req.headers.authorization

        if(!admin){
            return res.status(401).json({error: 'Operação não permitida.'})
        }

        await UserModel.findOneAndDelete({name})

        return res.json({message: 'Usuário deletado com sucesso.'})
    }

    
}