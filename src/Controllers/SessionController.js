const UserSchema = require('../Models/UserModel')
const bcrypt = require('bcrypt')

module.exports = {
    async signup(req, res) {
        const {name, password} = req.body;

        
            const user = await UserSchema.findOne({name})
            const comparePassword = await bcrypt.compare(password, user.password)
            
            if(comparePassword && !user.admin){
                return res.redirect('/chat')
            }
            return res.json({Login: "Usuário ou senha incorreto"})
        
    }
    
}