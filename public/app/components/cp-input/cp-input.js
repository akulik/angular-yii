;(function (ng) {
  "use strict";
  
  ng.module('app').directive('cpInput', function () {
    return {
      restrict: 'E',
      transclude: true,
      require: '^form',
      scope: {
        name: '@',
        label: '@label'
      },
      compile: ($el, $attr) => {
          console.log('compile');
          return {
              pre: ($scope, $el, $attr, form) => {
                  console.log('pre');
              },
              post: ($scope, $el, $attr, form) => {
                console.log('post');
                  console.log(form);
                  $scope.el = form[$scope.name];
              }
          }
      },
      //link: ($scope, $el, $attr, form) => {
      //    console.log('link');
      //  $scope.el = form[$scope.name];
      //},
      templateUrl: 'app/components/cp-input/cp-input.html',
      controller: ['$scope', ($scope) => {
          console.log('ctrl');
        $scope.errorMessages = {
          required: 'This field is required.',
          email: 'Please, enter a valid email.'
        }
      }]
    };
  });

}(window.angular));