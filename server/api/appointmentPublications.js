import { getAppointments } from "../db/appointments";

Meteor.publish('appointments', function() {
    // Note: Using sleep to simulate the delay so that we can show loading.
    // Meteor._sleepForMs(2000);
    return getAppointments(this.userId);
});
