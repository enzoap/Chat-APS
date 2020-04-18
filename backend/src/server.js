require('dotenv').config()
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const chatRules = require('./Utils/ChatRules')


mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.set('useCreateIndex', true);

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.static(path.join(__dirname,'../public')))
app.set('views', path.join(__dirname, '../public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

chatRules(io)

const port = process.env.PORT || 3000
server.listen(port, function () {
console.log(`Servidor executando em ${port}`)
})



