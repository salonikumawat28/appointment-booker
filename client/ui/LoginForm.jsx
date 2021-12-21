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
            <input type="text" placeholder="Username" onChange={onUsernameChange} value={username} required></input>
            <input type="password" placeholder="Password" onChange={onPasswordChange} value={password} required></input>
            <button name="login-button" type="submit">Login</button>
        </form>
    );
}