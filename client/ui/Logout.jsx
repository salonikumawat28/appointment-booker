import React from "react";
import { logout } from "../db/users";

export const Logout = () => {
    
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}