import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import io from 'socket.io-client'
import './styles.css'
import { render } from '@testing-library/react'

export default function Chat() {
    const socket = io('https://chat-unip.herokuapp.com/')
    const [message, setMessage] = useState('')
    const name = localStorage.getItem('name')
    let messageObject
    const history = useHistory()
    const blockmessage = {
        message: 'Mensagem inadequada removida',
        author: 'Servidor'
    }

    function handleMessage(e) {
        e.preventDefault()

        if (message.length > 0) {
            messageObject = {
                author: name,
                message
            }
            socket.emit('sendMessage', messageObject)
            setMessage('')

        }
    }
    function renderMessage(message) {
        let divMessage = document.createElement('div')
        divMessage.className = "message"
        divMessage.innerHTML = "<strong>" + message.author + "</strong>: " + message.message
        document.getElementsByClassName('messages')[0].appendChild(divMessage)
    }

    useEffect(() => {
        socket.on('receivedMessage', function (message) {
            renderMessage(message)
        })
    }, [])


    socket.on('blockMessage', function (blockedMessage) {
        if (blockedMessage) {
            renderMessage(blockmessage)
            console.log(blockedMessage)
        }
    })

    function logout() {
        localStorage.clear()
        alert('Você será desconectado em breve.')
        history.push('/')
    }
    return (
        <>
            <form id="chat" onSubmit={handleMessage}>
                <input readOnly={true} id="username" name="username" value={name} />
                <div className="messages"></div>
                <input
                    className="mes"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button className="button-e" type="submit">Enviar</button>
                <button id="logout" type="button" onClick={logout}>
                    <FiPower size={18} color="E02141"></FiPower>
                </button>
                {/* <Link className="back-link" to="/">
                <FiLogOut size={16} color="56bLinked"> </FiLogOut>
                Sair
            </Link> */}

            </form>
        </>
    )
}