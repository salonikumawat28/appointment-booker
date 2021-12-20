import { Meteor } from 'meteor/meteor';
import { prePopulate } from './db/db_initializer';
import './api/appointmentMethods';
import './api/appointmentPublications';

Meteor.startup(() => {
  prePopulate();
});
