angular.module('app')
    .directive('navBar', function navBar($window) {
        'use strict';

        return {
            scope: {},
            restrict: 'E',
            replace: true,
            link: function ($scope) {
                angular.extend($scope, {
                    btn_1: 'home',
                    btn_2: 'stages',
                    btn_3: 'map',
                    btn_4: 'more',
                });

                $scope.webview = function () {
                    $window.open('http://electricpicnic.ie/', '_system');
                };

                $scope.loadMap = function () {
                    $window.open('css/imgs/ep_map.png', '_blank', 'enableViewportScale=yes');
                };
            },
            templateUrl: 'views/templates/navbar.html'
        };
    });
