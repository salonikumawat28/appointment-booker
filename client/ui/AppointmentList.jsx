import React from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import { getAppointments } from "../db/appointments";
import { Appointment } from "./Appointment";
import { useTracker } from 'meteor/react-meteor-data'

export const AppointmentList = () => {
    const appointments = useTracker(() => getAppointments());
    return (
        <div>
            <ul>
                {appointments.map((appointment) => <Appointment key={appointment._id} data={appointment}/>)}
            </ul>
        </div>
    );
}