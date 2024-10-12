import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export function axiosHandler(endpoint, content) {
    const response = axios.post(`${BACKEND_URL}${endpoint}`, content, {
        headers: { 'Content-Type': 'application/json' }
    });

    return response;
}