import React from "react";
import { getUser } from "../db/users";
import { Logout } from "./Logout";
import { useTracker } from 'meteor/react-meteor-data';

export const Header = () => {
    const user = useTracker(() => getUser());

    return (
        <header>
            <div className="app-bar">
              <div className="app-header">
                <h1>Appointment Booker</h1>
              </div>
              <div className="user">
                {user ? (<Logout />) : (<div></div>)}
              </div>
              
            </div>
        </header>
    );
}