angular.module('app')
    .directive('appFooter', function fhFooter() {
        'use strict';
        return {
            scope: {},
            restrict: 'E',
            replace: true,
            link: function ($scope, $el, $attrs) {
                $scope.version = $attrs.version;
                // $log.debug('fh-footer', $scope);
            },
            templateUrl: 'views/templates/app-footer.html'
        };
    });
