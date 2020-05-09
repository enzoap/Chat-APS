import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function Admin() {
    const [show, setShow] = useState(false)
    const [badWord, setBadWord] = useState('')

    const admin = localStorage.getItem('admin')
    const name = localStorage.getItem('name')

    async function deleteMessages(e) {
        e.preventDefault()

        try {
            const response = await api.delete('messages', {
                headers: {
                    Authorization: admin
                }
            })
            alert(response.data.message)
        } catch (error) {
            alert('Não foi possível excluir as mensagens, tente novamente.')
        }
    }

    async function handleBadWord(e) {
        e.preventDefault()

        const data = {
            badWord
        }

        try {
            const response = await api.post('badword', data)
            alert(response.data.message)
        } catch (error) {
            alert('Não foi possível enviar a palavra, tente novamente.')
        }
    }

    return (
        <div className="container">
            <div className="button-group">
                <button className="button" type='submit' onClick={deleteMessages}>Apagar mensagens do banco</button>
                <button className="button" onClick={() => setShow(true)}>Inserir mensagem inadequada</button>
                {show ?
                    <form className="hiden" onSubmit={handleBadWord}>
                        <input
                            type="text"
                            placeholder="Digite uma palavra"
                            value={badWord}
                            onChange={e => setBadWord(e.target.value)}
                        />
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