import { Meteor } from 'meteor/meteor';
import { Contacts } from '../lib/collections';


// Server startup file
Meteor.startup(function() {
	const contacts = [
    {
      name: 'Kate Anderson, DPT',
      email: 'kanderson@stanfordPT.org'
    },
    {
      name: 'Jacob White, DPT',
      email: 'jwhite@health.com'
    },
    {
      name: 'Sabrina Chen, DPT',
      email: 'schen@therapy.com'
    }
  ];
 
  contacts.forEach((pt) => {
    Contacts.insert(pt);
  });
 
});