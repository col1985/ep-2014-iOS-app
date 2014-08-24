angular.module('app')
    .controller('MoreCtrl', ['$window', '$scope', '$log',
        function MoreCtrl($window, $scope, $log) {
            'use strict';

            $log.debug('MoreCtrl ::', $scope);

            $scope.webview = function () {
                $window.open('http://electricpicnic.ie/', '_blank');
            }
            // $rootScope.showBackBtn = true;
        }
    ]);
