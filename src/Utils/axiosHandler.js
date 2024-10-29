import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const AUTH_URL = process.env.REACT_APP_AUTH_URL;


export function axiosHandler(endpoint, content, method=null, server='backend') {

    let SELECTED_URL = '';
    if (server === 'backend') {
        SELECTED_URL = BACKEND_URL;
    } else {
        SELECTED_URL = AUTH_URL;
    }

    if (!content) {
        content = 'dummy';
    }

    if (method === 'POST') {
        debugger;
        const response = axios.post(`${SELECTED_URL}${endpoint}`, content, {
            headers: { 'Content-Type': 'application/json' }
        });

        return response;

    } else if (method === 'GET') {
        const response = axios.get(`${SELECTED_URL}${endpoint}`, content, {
            headers: { 'Content-Type': 'application/json' }
        });

        return response;

    } else {
        alert('invalid method provided, check.')
    }

}