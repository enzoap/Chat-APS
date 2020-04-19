import axios from 'axios'

const api = axios.create({
    baseURL: 'https://chat-unip.herokuapp.com'
})

export default api;