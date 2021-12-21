import React from "react";
import { Session } from 'meteor/session';

export const Appointment = ({data}) => {
    const editAppointment = () => {
        Session.set('appointmentIdToEdit', data._id);
    }

    const getDateString = (date) => {
        return '' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    }

    return (
        <li>
            <div class="row">
                <div class="column left">
                    <div>{data.firstName} {data.lastName}</div>
                    <div>Date: {getDateString(data.date)}</div>
                </div>
                <div class="column right">
                    <button type="button" onClick={editAppointment}>Edit</button>
                </div>
            </div>

        </li>

    );
}
