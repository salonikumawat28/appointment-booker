import React, { useState } from 'react';
import { login } from '../db/users';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUsernameChange = (event) => {
        event.preventDefault();
        setUsername(event.target.value);
    }
    
    const onPasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const onLoginFormSubmit = (event) => {
        event.preventDefault();
        login(username, password);
    }

    return (
        <form className="login-form" onSubmit={onLoginFormSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input name="username" type="text" placeholder="Username" onChange={onUsernameChange} value={username}></input>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" placeholder="Password" onChange={onPasswordChange} value={password}></input>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}