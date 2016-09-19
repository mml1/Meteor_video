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
      .state('tab.send',{
        url: '/send',
        views:{
          'tab-send':{
            templateUrl: 'client/templates/send.html'
            // controller:  'ChatsCtrl as chats'
          }
        }
      });
    this.$urlRouterProvider.otherwise('tab/videos');
  }
}
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];