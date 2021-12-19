import { Meteor } from 'meteor/meteor';
import { prePopulate } from './db/db_initializer';

Meteor.startup(() => {
  prePopulate();
});
