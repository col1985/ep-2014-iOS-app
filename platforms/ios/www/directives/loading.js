angular.module('app')
    .directive('loading', ['$rootScope',
        function ($rootScope) {
            'use strict';
            return {
                link: function ($scope, element) {
                    element.addClass('hide');

                    // detects event braodcast and applies
                    // class to element
                    $rootScope.$on('displayLoading', function () {
                        element.removeClass('hide');
                    });

                    // detects event braodcast and applies
                    // class to element
                    $rootScope.$on('hideLoading', function () {
                        element.addClass('hide');
                    });
                }
            };
        }
    ]);
