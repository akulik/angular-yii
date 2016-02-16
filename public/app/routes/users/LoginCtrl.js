;(function (ng) {
  "use strict";

  ng.module('app').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$injector', '$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService'];
  function LoginCtrl($injector, $scope, $rootScope, AUTH_EVENTS, AuthService) {
    this._injectDependencies($injector);

  }

 LoginCtrl.prototype.message=function() {
            return 'This is LoginController screen';
        }

    LoginCtrl.prototype.credentials = {
            username: '',
            password: ''
    };

    LoginCtrl.prototype.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

  LoginCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
      this.Noty = $injector.get('Noty');
  };

  LoginCtrl.prototype._init = function (user) {
    this.message=function() {
            return 'This is LoginController screen';
        }

    this.credentials = {
            email   : '',
            password: ''
    };
  };

}(window.angular));
