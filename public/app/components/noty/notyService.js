(function (ng) {
    "use strict";

    ng.module('app').service('Noty', NotyService);


    NotyService.$inject = ['$rootScope'];
    function NotyService ($rootScope) {
        this.$scope = $rootScope.$new();
    }

    NotyService.prototype.show = function (noty) {
        this.$scope.$emit('noty:show', noty);
    };

    NotyService.prototype.getScope = function () {
        return this.$scope;
    }
}(window.angular));
