angular.module('app')
    .directive('appHeader', function fhHeader() {
        'use strict';
        return {
            // scope: {},
            restrict: 'E',
            replace: true,
            link: function ($scope, $el, $attrs) {
                angular.extend($scope, {
                    title: {
                        main: $attrs.title,
                        subtext: $attrs.subtext
                    }
                });

                // $log.debug('fh-header', $scope);
            },
            templateUrl: 'views/templates/app-header.html',
        };
    });
