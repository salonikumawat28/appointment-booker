import React, { useEffect, useState } from 'react';
import { createAppointment, getAppointmentById, editAppointment } from '../db/appointments';
import { Session } from 'meteor/session';
import { useTracker } from 'meteor/react-meteor-data';

export const AppointmentForm = () => {
    const appointmentId = useTracker(() => Session.get('appointmentIdToEdit'));
    const [date, setDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if (!appointmentId) {
            setDate('');
            setFirstName('');
            setLastName('');
        } else {
            const appointment = getAppointmentById(appointmentId);
            if (!appointment) return;
            setDate(appointment.date.toString());
            setFirstName(appointment.firstName);
            setLastName(appointment.lastName);
        }
    }, [appointmentId]);

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
        if(!appointmentId) {
            createAppointment(new Date(date), firstName, lastName);
        } else {
            editAppointment(appointmentId, new Date(date), firstName, lastName);
        }
        Session.set('appointmentIdToEdit', null);
    }

    const cancel = () => {
        Session.set('appointmentIdToEdit', null);
    }

    return (
        <form className="AppointmentForm" onSubmit={onAppointmentFormSubmit}>
            <h2>{ appointmentId ? 'Edit Appointment' : 'Create Appointment'}</h2>
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