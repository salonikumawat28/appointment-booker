import React from 'react';
import { Session } from 'meteor/session';
import {getDateString} from '../utils'

export const Appointment = ({data}) => {
    const editAppointment = () => {
        Session.set('appointmentIdToEdit', data._id);
    }

    return (
        <li>
            <div className="row">
                <div className="column left">
                    <div>{data.firstName} {data.lastName}</div>
                    <div>Date: {getDateString(data.date)}</div>
                </div>
                <div className="column right">
                    <button type="button" onClick={editAppointment}>Edit</button>
                </div>
            </div>

        </li>

    );
}
