;(function (ng) {
  "use strict";
  ng.module('app').directive('noty', ['Noty', '$timeout', function (Noty, $timeout) {
    return {
      restrict: 'E',
        scope: {},
        link: ($scope, $el, $attr) => {
          $scope.noties = [];
          const notyScope = Noty.getScope();
            notyScope.$on('noty:show', ( $ev, noty) => {
            $scope.noties.push(noty);
            noty.visible = true;
            $ev.preventDefault();
                $timeout(() => {
                    noty.visible = false;
                }, 1000)
          });
      },
      templateUrl: 'app/components/noty/noty.html'
    };
  }]);

}(window.angular));