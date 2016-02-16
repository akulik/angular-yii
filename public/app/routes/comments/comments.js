;(function (ng) {
  ng.module('app').controller('CommentsCtrl', CommentsCtrl);

  CommentsCtrl.$inject = ['$injector'];
  function CommentsCtrl($injector) {
    this._injectDependencies($injector);
    this._init();
  }

  CommentsCtrl.prototype._injectDependencies = function ($injector) {
  };

  CommentsCtrl.prototype._init = function () {

  };
}(window.angular));
