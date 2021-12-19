import { Meteor } from 'meteor/meteor';

export const getUser = () => {
    return Meteor.user();
}

export const login = (username, password) => {
    Meteor.loginWithPassword(username, password);
}