import { Config } from 'angular-ecmascript/module-helpers';

export default class RoutesConfig extends Config {
  configure(){
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'client/templates/tabs.html'
      })
      .state('tab.videos',{
        url: '/videos',
        views:{
          'tab-videos':{
            templateUrl: 'client/templates/video.html'
            // controller:  'ChatsCtrl as chats'
          }
        }
      })
      .state('tab.contacts',{
        url: '/contacts',
        views:{
          'tab-contacts':{
            templateUrl: 'client/templates/contacts.html',
            controller:  'ContactsCtrl as contacts'
          }
        }
      });
    this.$urlRouterProvider.otherwise('tab/videos');
  }
}
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];