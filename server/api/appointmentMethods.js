import { createAppointment } from '../db/appointments';
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
    }
});


