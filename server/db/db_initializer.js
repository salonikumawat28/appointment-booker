import  {user1, user2, firstNames, lastNames} from '../constants';
import { createUser, findUserId } from './users';
import { createAppointment, hasAppointments } from './appointments';

const createTestUsers = () => {
   createUser(user1.username, user1.password);
   createUser(user2.username, user2.password);
}

const createAppointments = (userId, count) => {
    for(let i = 0; i < count; i++) {
        let firstName = getRandom(firstNames);
        let lastName = getRandom(lastNames);
        let date = getRandomDate(new Date(), new Date('31.01.2022'));
        createAppointment(userId, firstName, lastName, date);
    }
}

const createFakeAppointments = () => {
    if(!hasAppointments()) {
        createAppointments(findUserId(user1.username), 20);
        createAppointments(findUserId(user2.username), 20);
    }
}

export const prePopulate = () => {
  createTestUsers();
  createFakeAppointments();
}