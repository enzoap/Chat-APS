const express = require('express')
const ChatController = require('./Controllers/ChatController')
const SessionController = require('./Controllers/SessionController')
const UserController = require('./Controllers/UserController')
const InappropriateWordsController = require('./Controllers/InappropriateWordsController')
const MessagesController = require('./Controllers/MessagesController')

const routes = express.Router()

routes.post('/login', SessionController.signup)

routes.get('/chat', ChatController.show)

routes.post('/badword', InappropriateWordsController.store)
routes.get('/badword', InappropriateWordsController.index)

routes.post('/user', UserController.store)
routes.get('/users', UserController.index)
routes.put('/user/:name', UserController.update)
routes.delete('/user/:name', UserController.delete)

routes.get('/messages', MessagesController.index)
routes.delete('/messages', MessagesController.delete)

module.exports = routes