import { Accounts } from 'meteor/accounts-base';

const getUser = (username) => {
    return Accounts.findUserByUsername(username);
}

const doesUserExist = (username) => {
    return getUser(username);
}


export const findUserId = (username) => {
    return getUser(username)._id;
}

export const createUser = (username, password) => {
    if(!doesUserExist(username)) {
        Accounts.createUser({
            username: username,
            password: password
        });
    }
}
