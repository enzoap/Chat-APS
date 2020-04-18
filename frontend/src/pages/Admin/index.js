import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

export default function Admin(){
    const [show, setShow] = useState(false)

    return (
        <div className="container">
            <div className="button-group">
                <button className="button" type='submit'>Apagar mensagens do banco</button>
                <button className="button" onClick={() => setShow(true)}>Inserir mensagem inadequada</button>
                {show ? 
                <form className="hiden" >
                <input type="text" placeholder="Digite uma palavra"/>
                <button className="button" >Enviar</button>
                 </form> : null
                }
               
                <Link className="back-link" to="/chat">
                <FiLogIn size={16} color="#56bLinked" ></FiLogIn>
                    Acessar o chat.
                </Link>
            </div>
        </div>
    )
}