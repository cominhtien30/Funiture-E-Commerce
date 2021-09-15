import axios from 'axios'
import baseURL from '../constants/api'

export default axios.create({
    baseURL: baseURL, // url định dạng kiểu này "http://localhost:4000/"
    timeout: 10000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
})
