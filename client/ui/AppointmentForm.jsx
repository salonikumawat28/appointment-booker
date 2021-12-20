import React, { useState } from 'react';
import { createAppointment } from '../db/appointments';

export const AppointmentForm = () => {
    const [date, setDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onDateChange = (event) => {
        event.preventDefault();
        setDate(event.target.value.trim());
    }

    const onFirstNameChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value.trim());
    }

    const onLastNameChange = (event) => {
        event.preventDefault();
        setLastName(event.target.value.trim());
    }

    const onAppointmentFormSubmit = () => {
        createAppointment(new Date(date), firstName, lastName);
    }

    const cancel = () => {
        setDate("");
        setFirstName("");
        setLastName("");
    }

    return (
        <form className="AppointmentForm" onSubmit={onAppointmentFormSubmit}>
            <h2>Create Appointment</h2>
            <div>
                <input name="date" type="text" placeholder="YYYY-mm-dd" value={date} onChange={onDateChange} required></input>
            </div>
            <div>
                <input name="firstname" type="text" placeholder="First Name" value={firstName} onChange={onFirstNameChange} required></input>
            </div>
            <div>
                <input name="lastname" type="text" placeholder="Last Name" value={lastName} onChange={onLastNameChange} required></input>
            </div>
            <div>
                <button type="submit">Save</button>
                <button type="button" onClick={cancel}>Cancel</button>
            </div>
        </form>

    );
}