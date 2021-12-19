import React from 'react';
import { AppointmentForm } from './AppointmentForm';
import { Logout } from './Logout';

export const Home = () => {
    return (
        <div>
            <header>Welcome To Home</header>
            <div><Logout/></div>
            <div><AppointmentForm/></div>
            
        </div>
    );
}