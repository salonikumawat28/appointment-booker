import { AppointmentsCollection } from "../../common/db/AppointmentsCollection";

export const createAppointment = (userId, firstName, lastName, date) => {
    AppointmentsCollection.insert({
        firstName: firstName,
        lastName: lastName,
        date: date,
        userId: userId
    });
}

export const updateAppointment = (appointmentId, date, firstName, lastName) => {
    AppointmentsCollection.update(appointmentId, {
        $set: {
            firstName: firstName,
            lastName: lastName,
            date: date,
        }
    });
}

export const hasAppointments = () => {
    return AppointmentsCollection.find({}).count() !== 0;
}

export const getAppointments = (userId) => {
    return AppointmentsCollection.find({userId: userId});
}

export const isUserAuthorized = (userId, appointmentId) => {
    return AppointmentsCollection.find({
        userId: userId,
        _id: appointmentId
    }).count() !== 0;
}