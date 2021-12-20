import { getAppointments } from "../db/appointments";

Meteor.publish('appointments', function() {
    return getAppointments(this.userId);
});