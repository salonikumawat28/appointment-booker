import React from "react";
import { logout, getUser } from "../db/users";

export const Logout = () => {
    const username = getUser().username;
    
    return (
        <div className="user">
            <button onClick={logout}>Logout {username}</button>
        </div>
    );
}