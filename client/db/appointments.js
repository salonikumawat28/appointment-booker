import { Meteor } from 'meteor/meteor';
import { AppointmentsCollection } from '../../common/db/AppointmentsCollection';
import { getUserId } from './users';

export const createAppointment = (date, firstName, lastName) => {
    Meteor.call('insertAppointment', date, firstName, lastName);
}

export const getAppointments = () => {
    let handler = Meteor.subscribe('appointments');
    if (!handler.ready()) {
        return [];
    }
    return AppointmentsCollection.find({userId: getUserId}).fetch();
}