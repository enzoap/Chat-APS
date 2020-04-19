import React from 'react'
import {Link} from 'react-router-dom'
import {FiPower} from 'react-icons/fi'
import './styles.css'

export default function Chat() {

    const name = localStorage.getItem('name')

    return (
        <>
        <form id="chat">
            <input readOnly={true} id="username" name="username" value={name}/> 
            <div className="messages"></div>  
            <input type="text" id="message" name="message" placeholder="Digite sua mensagem"/>
            <button className="button" type="submit">Enviar</button>
            <button id="logout" type="button">
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