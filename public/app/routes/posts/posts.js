;(function (ng) {
  "use strict";

  ng.module('app').controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$injector', 'posts'];
  function PostsCtrl($injector, posts) {
    this._injectDependencies($injector);
    this._init(posts);
  }

  PostsCtrl.prototype._injectDependencies = function ($injector) {
    this.API = $injector.get('API');
  };

  PostsCtrl.prototype._init = function (posts) {
    this.posts = posts;
  };

}(window.angular));
