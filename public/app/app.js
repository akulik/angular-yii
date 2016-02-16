(function (ng) {
  "use strict";

  ng.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ngResource'
  ]).run(['$rootScope', ($rootScope) => {
    $rootScope.$on('$stateChangeError', ($ev, toState, toStateParams, fromState, fromStateParams, $error) => {
        console.log('err: ', $error);
    });

    $rootScope.$on('$stateChangeStart', ($ev, toState, toStateParams, fromState, fromStateParams) => {
        console.log('toState: ', toState);
    });

    $rootScope.$on('$stateChangeSuccess', ($ev, toState, toStateParams, fromState, fromStateParams) => {
    });
  }]);

}(window.angular));
