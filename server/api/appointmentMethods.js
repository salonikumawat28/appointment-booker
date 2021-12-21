import { createAppointment, updateAppointment, isUserAuthorized } from '../db/appointments';
import { check } from 'meteor/check'; 

const validateInputs = (date, firstName, lastName) => {
    // Validate types
    check(date, Date);
    check(firstName, String);
    check(lastName, String);
}

// const checkUserAuthentication = function() {
//     if(!this.userId) throw new Meteor.Error("User should be logged in to perform this operation");
// }

Meteor.methods({
    insertAppointment: function(date, firstName, lastName) {
        validateInputs(date, firstName, lastName);
        if(!this.userId) throw new Meteor.Error("User should be logged in to perform this operation");
        createAppointment(this.userId, firstName, lastName, date);
    },
    editAppointment: function(appointmentId, date, firstName, lastName) {
        console.log('step 1');
        check(appointmentId, String);
        validateInputs(date, firstName, lastName);
        if(!this.userId) throw new Meteor.Error("User should be logged in to perform this operation");
        console.log('step 2');
        if(!isUserAuthorized(this.userId, appointmentId)) throw new Meteor.Error("User is not autherized to update this appointment");
        console.log('step 3');
        updateAppointment(appointmentId, date, firstName, lastName);

    }
});


