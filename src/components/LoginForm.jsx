import axios from 'axios';
import React, { useState } from 'react'

const LoginForm = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': 'bef08aa9-c265-432e-b730-c6d017e1dac8',
            'User-Name': userName,
            'User-Secret': password
        };
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');

        } catch (error) {
            setError('Oops, incorrect credentials.');
        }
    };

    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='input' placeholder='userName' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='password' required />

                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h1 className='error'>{error}</h1>
                </form>
            </div>
        </div>
    )
}

export default LoginForm