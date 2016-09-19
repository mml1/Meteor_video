import { Meteor } from 'meteor/meteor';
import { Contacts } from '../lib/collections';


// Server startup file
Meteor.startup(function() {
  if (Contacts.find().count() !== 0) return;
 
  // Will not keep adding the data already there
  
  Contacts.remove({});
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
    },
    {
      name: 'Jessica Jones, DPT',
      email: 'mmlliguicota@gmail.com'
    }
  ];
 
  contacts.forEach((pt) => {
    Contacts.insert(pt);
  });
 
});