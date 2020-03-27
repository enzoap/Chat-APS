module.exports = function chatRules(io){
    let hasinappropriatemessage = false
    let inappropriatemessages = ['Foda', 'Cuzão']

    io.on('connection', socket => {
        console.log(`Socket connection id: ${socket.id}`)

    
        socket.on('sendMessage', data => {
            //Armazenar a mensagem de cada usuário e verificar as palavras
            let messages = []
            messages.push(data)
            
            for(i = 0; i <= inappropriatemessages.length; i++){
                let word = inappropriatemessages[i]
                if(data.message.includes(word)){
                    hasinappropriatemessage = true
                }
            }
            
            if(hasinappropriatemessage){
                socket.emit('blockMessage',hasinappropriatemessage)
                console.log('true')
            }else {
                socket.emit('blockMessage',hasinappropriatemessage)
                socket.broadcast.emit('receivedMessage', data)
                console.log(false)
            }
            
            hasinappropriatemessage = false;
            
        })
    })

}