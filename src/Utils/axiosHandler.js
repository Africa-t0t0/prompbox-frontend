import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export function axiosHandler(endpoint, content, method=null) {

    if (!content) {
        content = 'dummy';
    }

    if (method === 'POST') {
        const response = axios.post(`${BACKEND_URL}${endpoint}`, content, {
            headers: { 'Content-Type': 'application/json' }
        });

        return response;

    } else if (method === 'GET') {
        const response = axios.get(`${BACKEND_URL}${endpoint}`, content, {
            headers: { 'Content-Type': 'application/json' }
        });

        return response;

    } else {
        alert('invalid method provided, check.')
    }

}