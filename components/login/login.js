'use strict';

var login = angular.module('myApp.login', []);

/*
login.config(function($stateProvider) {
    $stateProvider.state('mails', {
        url: '/mails',
        template: `<mails />`
    });
    // $urlRouterProvider.otherwise("/");
});*/

login.component('mailboxView', {
    templateUrl: 'components/login/login.html'
});