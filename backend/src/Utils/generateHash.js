const bcrypt = require('bcrypt')

module.exports = async function generateHash(pPassword){
    const password = await bcrypt.hash(pPassword, 12)
    return password
}