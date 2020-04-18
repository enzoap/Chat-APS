import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from  'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function Register(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()
        const data = {
            name,
            password
        }

        try {
            const response =  await api.post('user', data)
            alert(response.data.message)
            if (response.data.message === "Usuário criado com sucesso."){
                history.push('/')
            }
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
    }
    return (
        <div className="register-container">
        <div className="content">
            <section>

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, para utilizar o chat.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#56baed" />
                    Se já tiver uma conta, faça seu login.
                </Link>
            </section>

            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Seu nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
               
                <button className="button"  type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}