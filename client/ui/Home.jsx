import React from 'react';
import { AppointmentForm } from './AppointmentForm';
import { Logout } from './Logout';
import { AppointmentList } from './AppointmentList';

export const Home = () => {
    return (
        <div>
            <h1>Appointment Booker</h1>
            <div><Logout/></div>
            <div><AppointmentForm/></div>
            <div><AppointmentList/></div>
            
        </div>
    );
}