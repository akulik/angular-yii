;(function (ng) {
  "use strict";

  ng.module('app').controller('UsersListCtrl', UsersListCtrl);

  UsersListCtrl.$inject = ['$injector', '$scope'];
  function UsersListCtrl($injector, $scope) {
    this._injectDependencies($injector);
    this._init();
  }

  UsersListCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
    this.$state = $injector.get('$state');
  };

  UsersListCtrl.prototype._init = function () {
    this.users = this._getUsers();
  };

  UsersListCtrl.prototype._getUsers = function () {
    return this.API.users.query();
  };

  UsersListCtrl.prototype.showPosts = function (user) {
      console.log(user);
    this.$state.go('posts', {userId: user.id});
  }

}(window.angular));
