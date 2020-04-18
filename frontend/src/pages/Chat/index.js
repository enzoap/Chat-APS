import React from 'react'
import {Link} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './styles.css'

export default function Chat() {
    return (
        <>
        <form id="chat">
            <input readonly="true" id="username" name="username"/> 
            <div class="messages"></div>  
            <input type="text" id="message" name="message" placeholder="Digite sua mensagem"/>
            <button className="button" type="submit">Enviar</button>
            <Link className="back-link" to="/">
                <FiLogOut size={16} color="56bLinked"> </FiLogOut>
                Sair
            </Link>
        </form>
        </>
    )
}