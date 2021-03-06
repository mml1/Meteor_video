import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import ContactsCtrl from '../controllers/contacts.controller';
import VideosCtrl from '../controllers/videos.controller';
import RoutesConfig from '../routes';
const App = 'Meteor_Video';

// App
Angular.module(App, [
	'angular-meteor',
	'ionic'
]);

new Loader(App)
	.load(ContactsCtrl)
	.load(VideosCtrl)
	.load(RoutesConfig);
// Startup
if (Meteor.isCordova) {
	Angular.element(document).on('deviceready', onReady);
}
else {
	Angular.element(document).ready(onReady);
}

function onReady() {
	Angular.bootstrap(document, [App]);
}