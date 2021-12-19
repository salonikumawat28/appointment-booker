import React, { useState } from "react";
import { createAppointment } from "../../server/db/appointments";

export const AppointmentForm = () => {
    const [date, setDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const onDateChange = (event) => {
        event.preventDefault();
        setDate(event.target.value);
    }

    const onFirstNameChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
    }

    const onLastNameChange = (event) => {
        event.preventDefault();
        setlastName(event.target.value);
    }

    const onAppointmentFormSubmit = () => {
        createAppointment(date, firstName, lastName);
    }


    return (
        <form className="AppointmentForm" onClick={onAppointmentFormSubmit}>
            <div>
                {/* <label htmlFor="date">Date:</label> */}
                <input name="date" type="text" placeholder="DD/MM/YYYY" value={date} onChange={onDateChange}></input>
            </div>
            <div>
                {/* <label htmlFor="firstname">First Name:</label> */}
                <input name="firstname" type="text" placeholder="First Name" value={firstName} onChange={onFirstNameChange}></input>
            </div>
            <div>
                {/* <label htmlFor="lastname">Last Name:</label> */}
                <input name="lastname" type="text" placeholder="Last Name" value={lastName} onChange={onLastNameChange}></input>
            </div>
            <div>
                <button type="submit">Create Appointment</button>
            </div>
        </form>

    );
}