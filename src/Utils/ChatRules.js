const MessagesModel = require('../Models/MessagesModel')
const InappropriateWordsSchema = require('../Models/InappropriateWordsModel')

module.exports = async function chatRules(io){
    let hasinappropriatemessage = false
    const inappropriatemessagesDocument = await InappropriateWordsSchema.find({})
    const inappropriatemessages = []

    inappropriatemessagesDocument.forEach(element => {
        inappropriatemessages.push(element.badWord)
    });

    io.on('connection', socket => {
        console.log(`Socket connection id: ${socket.id}`)

    
        socket.on('sendMessage', async data => {
            
            let messages = []
            messages.push(data)

            await MessagesModel.create({
                message: data.message
            })
            
            
            for(i = 0; i <= inappropriatemessages.length; i++){
                let word = inappropriatemessages[i]
                if(data.message.includes(word)){
                    hasinappropriatemessage = true
                }
            }
            
            if(hasinappropriatemessage){
                socket.emit('blockMessage',hasinappropriatemessage)
            }else {
                socket.emit('blockMessage',hasinappropriatemessage)
                socket.broadcast.emit('receivedMessage', data)
            }
            
            hasinappropriatemessage = false;
            
        })
    })

}