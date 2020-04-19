import React, {useState} from 'react' 
import { Link,useHistory } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function Login(){
    const [user,setUser] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        const data = {
            name: user,
            password
        }

       try {
        const response = await api.post('login',data)
        if(response){
            localStorage.setItem('name', user)
            localStorage.setItem('admin', true)
            history.push('/admin')
        }else {
            localStorage.setItem('name', user)
            localStorage.setItem('admin', false)
            history.push('/chat')
        }
       } catch (error) {
           alert('Não foi possível fazer o login, tente novamente.')
       }
    }


    return (
        
        <div className="logon-container">
            <section className="form">
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>
                
                <input 
                placeholder="Usuário"
                value={user} 
                onChange={e => setUser(e.target.value)}  
                />
                <input 
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
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