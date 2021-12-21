import React from 'react';
import { AppointmentForm } from './AppointmentForm';
import { Logout } from './Logout';
import { AppointmentList } from './AppointmentList';

export const Home = () => {
    return (
        <div className="main">
            <div className="row">
                <div className="column left">
                    <AppointmentForm/>
                </div>
                <div className="column right">
                    <AppointmentList/>
                </div>
            </div>
        </div>
    );
}