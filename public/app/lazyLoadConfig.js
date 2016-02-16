(function (ng) {
  "use strict";

  ng.module('app').config(Config);
  Config.$inject = ['$ocLazyLoadProvider'];
  function Config($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      events: true,
      //debug: true,
      modules: [
        {
          name: 'datepicker',
          files: [
            'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css',
            'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
          ]
        },
        {
          name: 'ngMessages',
          files: [
            'bower_components/angular-messages/angular-messages.min.js'
          ]
        }
      ]
    });
  }
}(window.angular));