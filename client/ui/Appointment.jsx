import React from "react";
import { Session } from 'meteor/session';

export const Appointment = ({data}) => {
    const editAppointment = () => {
        Session.set('appointmentIdToEdit', data._id);
    }

    return (
        <li>
            <div>First name: {data.firstName}</div>
            <div>Last name: {data.lastName}</div>
            <div>Date: {data.date.toString()}</div>
            <button type="button" onClick={editAppointment}>Edit</button>
        </li>

    );
}
