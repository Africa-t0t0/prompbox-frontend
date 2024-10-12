import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_API_URL;


export function axiosHandler(endpoint, content) {
    axios.post(`${BACKEND_URL}/${endpoint}`, content, {
        headers: { 'Content-Type': 'application/json' }
    });

}