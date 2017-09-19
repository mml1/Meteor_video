import { Controller } from 'angular-ecmascript/module-helpers';
import { Contacts } from '../../../lib/collections'

export default class ContactsCtrl extends Controller {
	constructor(){
		super(...arguments);

		this.helpers({
			data(){
				return Contacts.find();
			}
		});

	}
	remove(contact){
		console.log(contact,"in remove")
		Contacts.remove({_id:contact._id})
	}
	submitEmail(contact){
		console.log("in submitEmail");
		
		Meteor.call('sendEmail',
            'alice@example.com',
            'bob@example.com',
            'Hello from Meteor',
            'This is a test')
	}

}