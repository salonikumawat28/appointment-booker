import React from "react";

export const Appointment = ({data}) => {
    return (
        <li>
            <div>First name: {data.firstName}</div>
            <div>Last name: {data.lastName}</div>
            <div>Date: {data.date.toString()}</div>
        </li>
    );
}
