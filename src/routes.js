const express = require('express')
const ChatController = require('./Controllers/ChatController')
const SessionController = require('./Controllers/SessionController')
const UserController = require('./Controllers/UserController')

const routes = express.Router()

routes.get('/chat', ChatController.show)

routes.post('/', SessionController.signup)

routes.post('/user', UserController.create)
routes.get('/users', UserController.index)

module.exports = routes