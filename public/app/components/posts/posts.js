;(function (ng) {
  "use strict";
  ng.module('app').directive('posts', function () {
    return {
      restrict: 'E',
      scope: {
        posts: '=list'
      },
      templateUrl: 'app/components/posts/posts.html'
    };
  });

}(window.angular));