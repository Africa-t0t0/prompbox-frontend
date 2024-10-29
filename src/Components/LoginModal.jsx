import { useState } from 'react';

import { axiosHandler } from '../Utils/axiosHandler';

export default function LoginModal({ setIsAuthorized }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let endpoint = 'login';
        let method = 'POST';

        let loginJSON = {
            'username': username,
            'password': password,
        }
        debugger;

        try {
            const response = await axiosHandler(endpoint, loginJSON, method, 'auth');
            localStorage.setItem('token', response['data']['access_token']);
            setIsAuthorized(true);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className='container-xxl border-white rounded bg-dark my-4'>
            <div className="container-header m-4 text-center">
                <h4>
                    <b>Login</b>
                </h4>
            </div>
            <div className="container-body">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );


}