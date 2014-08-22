angular.module('app')
    .directive('pageTitle', function pageTitle() {
        'use strict';

        return {
            scope: {},
            restrict: 'E',
            replace: true,
            link: function ($scope, $el, $attrs) {
                angular.extend($scope, {
                    title: $attrs.title,
                    subText: $attrs.subText
                });
            },
            templateUrl: 'views/templates/page-title.html'
        };
    });
