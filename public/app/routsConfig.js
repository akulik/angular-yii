(function (ng) {
  "use strict";

  ng.module('app').config(Config);

  Config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
  function Config ($stateProvider, $locationProvider, $urlRouterProvider) {

    //$locationProvider.url = 'http://hfm_api.kulik.php.nixsolutions.com';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/users');

    $stateProvider.state('home', {
      abstract: true,
      template: '<ui-view />'
    })
    .state('login', {
      parent: 'home',
      url: '/users/login',
      templateUrl: '/app/routes/users/login.html',
      controller: 'UsersListCtrl',
      controllerAs: 'ctrl'
    })
    .state('users', {
      parent: 'home',
      url: '/users',
      templateUrl: '/app/routes/users/list.html',
      controller: 'UsersListCtrl',
      controllerAs: 'ctrl'
    })
    .state('user-details', {
      parent: 'home',
      url: '/user/:id',
      templateUrl: '/app/routes/users/details.html',
      controller: 'UserDetailsCtrl',
      controllerAs: 'ctrl',
      resolve: {
        user: ['API', '$stateParams', (API, $params) => {
          return API.users.get({id: $params.id})
        }],
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            'ngMessages'
          ]);
        }]
      }
    })
    .state('posts', {
      parent: 'home',
      url: '/:userId/posts/',
      templateUrl: '/app/routes/posts/posts.html',
      controller: ['posts', function (posts) {
          this.posts = posts;
      }],
      controllerAs: 'ctrl',
        resolve: {
            posts: ('API', '$stateParams', (API, $stateParams) => {
                return API.users.getPosts({id: $stateParams.userId});
            })
        }
    });

  }

}(window.angular));
