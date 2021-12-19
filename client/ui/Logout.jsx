import React from "react";

export const Logout = () => {
    const logout = () => Meteor.logout();
    
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}