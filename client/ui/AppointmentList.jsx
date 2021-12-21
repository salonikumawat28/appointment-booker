import React, { useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import { getAppointments } from "../db/appointments";
import { Appointment } from "./Appointment";
import { useTracker } from 'meteor/react-meteor-data'
import { Loading } from "./Loading";

export const AppointmentList = () => {
    const [filterByName, setFilterByName] = useState('');
    const {isLoading, appointments} = useTracker(() => getAppointments(filterByName));

    const onFilterByNameChange = (event) => {
        setFilterByName(event.target.value.trim());
    }

    return (
        <div>
            {isLoading ? (<Loading/>) : (
                <div>
                    <div>
                        <input type="text" placeholder="Filter By Name" value={filterByName} onChange={onFilterByNameChange}></input>
                    </div>
                    <ul>
                        {appointments.map((appointment) => <Appointment key={appointment._id} data={appointment}/>)}
                    </ul>
                </div>
            )}
            
        </div>
    );
}
