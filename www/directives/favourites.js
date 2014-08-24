angular.module('app')
    .directive('favourites', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'views/templates/favourites.html'
        };
    });
