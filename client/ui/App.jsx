import React from 'react';
import { LoginForm } from './LoginForm';
import { Home } from './Home';
import { getUser } from '../db/users';
import { useTracker } from 'meteor/react-meteor-data';
import { Header } from './Header';

export const App = () => {
    const user = useTracker(() => getUser());

    return (
        <div className="app">
            <Header />
            {user ? (<Home />) : (<LoginForm />)}
        </div>
    );
}
