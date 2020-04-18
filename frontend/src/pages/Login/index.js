import React from 'react' 
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

export default function Login(){
    return (
        
        <div className="logon-container">
            <section className="form">
            <form>
                <h1>Faça seu login</h1>
                
                <input placeholder="Usuário"/>
                <input placeholder="Senha"/>
                <button className="button" type="submit">Entrar</button>

                <Link to="/register">
                <FiLogIn size={16} color="#56bLinked" ></FiLogIn>
                    Não tenho cadastro
                </Link>
            </form>
            </section>

        </div>
    )
}