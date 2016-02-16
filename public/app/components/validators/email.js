;(function (ng) {
  "use strict";
  ng.module('app').directive('validateEmail', function () {
    return {
      restrict: 'A',
      require: '^ngModel',
      link: ($scope, $el, $attr, ngModel) => {
          ngModel.$validators.email = value => {
              if (!value) {
                  return true;
              }

              return value.indexOf('@') !== -1;
          }
      }
    };
  });

}(window.angular));