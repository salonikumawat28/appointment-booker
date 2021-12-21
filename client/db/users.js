import { Meteor } from 'meteor/meteor';

const loginCallback = (error) => {
    if (error) {
        alert(error.toString());
    }
}

export const getUser = () => {
    return Meteor.user();
}

export const getUserId = () => {
    return Meteor.userId();
}

export const login = (username, password) => {
    Meteor.loginWithPassword(username, password, loginCallback);
}

export const logout = () => {
    Meteor.logout();
}