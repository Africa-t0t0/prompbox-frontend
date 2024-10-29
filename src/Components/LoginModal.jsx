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

        try {
            const response = await axiosHandler(endpoint, loginJSON, method, 'auth');
            localStorage.setItem('token', response['data']['access_token']);
            setIsAuthorized(true);
        } catch (error) {
            let errorMessage = error['response']['data']['message']
            alert(errorMessage);
            setError(errorMessage);
        }
    }

    return (
        <div className='container-sm border-white rounded bg-dark my-4'>
            <div className="container-header m-4 text-center">
                <h4>
                    <b>Login</b>
                </h4>
            </div>
            <div className="container-body">
                <form
                    className=''
                    onSubmit={handleSubmit}
                >
                    <div className='row justify-content-center'>
                        <div>
                            <label htmlFor='username' className='col-sm-2 col-form-label'>Username:</label>
                        </div>
                        <div className='col-2'>
                            <input
                                id='username'
                                className='form-control'
                                type="text"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div>
                            <label htmlFor='password' className='col-sm-2 col-form-label'>Password:</label>
                        </div>
                        <div className='col-2'>
                            <input
                                id='password'
                                className='form-control'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button className='btn btn-primary' type="submit">Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
            </div>
        </div>
    );


}