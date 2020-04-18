import axios from 'axios'

const api = axios.create({
    baseURL: 'http://chat-unip.herokuapp.com'
})

export default api;