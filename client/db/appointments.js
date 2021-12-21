import { Meteor } from 'meteor/meteor';
import { AppointmentsCollection } from '../../common/db/AppointmentsCollection';
import { getUserId } from './users';

export const createAppointment = (date, firstName, lastName) => {
    Meteor.call('insertAppointment', date, firstName, lastName);
}


const filterSpecifier = (filter) => {
    if (!filter) return { userId: getUserId() };

    const nameFilter = '^' + filter + '.*';
    const filterByFirstName =  { firstName: { $regex: nameFilter } };
    const filterByLastName =  { lastName: { $regex: nameFilter } };
    return {
        userId: getUserId(),
        $or: [ filterByFirstName, filterByLastName, ],
    };
}

export const sortSpecifier = {
    sort: {
        date: 1,
    }
};

export const getAppointmentById = (appointmentId) => {
    return AppointmentsCollection.findOne({
        _id: appointmentId
    });
}

export const editAppointment = (appointmentId, date, firstName, lastName) => {
    Meteor.call('editAppointment', appointmentId, date, firstName, lastName);
}

export const getAppointments = (filterByName) => {
    let handler = Meteor.subscribe('appointments');
    if (!handler.ready()) {
        return {
            isLoading: true,
            appointments: []
        }
    }
    return {
        isLoading: false,
        appointments: AppointmentsCollection.find(filterSpecifier(filterByName), sortSpecifier).fetch()
    }
}