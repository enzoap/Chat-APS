const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const chatRules = require('./Utils/ChatRules')

mongoose.connect("mongodb+srv://enzo:123@cluster0-v27vg.mongodb.net/chat?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.set('useCreateIndex', true);

app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname,'../public')))
app.set('views', path.join(__dirname, '../public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

chatRules(io)

server.listen(3000, () => {console.log('server on')})


