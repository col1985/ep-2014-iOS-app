angular.module('app')
    .directive('navBar', function navBar() {
        'use strict';

        return {
            scope: {},
            restrict: 'E',
            replace: true,
            link: function ($scope, $el, $attrs) {
                angular.extend($scope, {
                    btn_1: 'home',
                    btn_2: 'api',
                    btn_3: 'about',
                    btn_4: 'more',
                });
            },
            templateUrl: 'views/templates/navbar.html'
        };
    });
