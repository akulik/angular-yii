;(function (ng) {
  "use strict";
  ng.module('app').directive('errorMessages', function () {
    return {
      restrict: 'E',
      scope: {
        errors: '='
      },
        compile: ($el, $attr) => {
            console.log('e-compile');
            return {
                pre: ($scope, $el, $attr, form) => {
                    console.log('e-pre');
                },
                post: ($scope, $el, $attr, form) => {
                    console.log('e-post');
                }
            }
        },
      templateUrl: 'app/components/error-messages/error-messages.html',
      controller: ['$scope', ($scope) => {
                    console.log('e-ctrl');
        $scope.errorMessages = {
          required: 'This field is required.',
          email: 'Please, enter a valid email.'
        }
      }]
    };
  });

}(window.angular));