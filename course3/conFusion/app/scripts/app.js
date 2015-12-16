'use strict';

var app = angular.module('confusionApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        // route for the contactus page
        .when('/contactus', {
            templateUrl: 'contactus.html',
            controller: 'ContactController'
        })
        // route for the menu page
        .when('/menu', {
            templateUrl: 'menu.html',
            controller: 'MenuController'
        })
        .when('/menu/:id', {
            templateUrl: 'dishdetail.html',
            controller: 'DishDetailController'
        })
        .otherwise('/contactus');
});
