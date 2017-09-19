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
process.env.MAIL_URL = "smtp://postmaster%40@sandboxd8e95a3b1ad54960a21a85f3432fdc21.mailgun.org:d9d6bd1a64ef32c09574f8c57b65e3b2@smtp.mailgun.org:587";

Meteor.methods({
    sendEmail: function (to, from, subject, text) {
      console.log("in meteor methods server")
      check([to, from, subject, text], [String]);

      this.unblock();
      Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }
  });