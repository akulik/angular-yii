(function (ng) {
    "use strict";

    ng.module('app').config(HttpConfig);

    HttpConfig.$inject = ['$httpProvider'];
    function HttpConfig ($httpProvider) {
    }

}(window.angular))
