angular.module('app')
    .controller('MoreCtrl', ['$scope', '$log',
        function MoreCtrl($scope, $log) {
            'use strict';

            $log.debug('MoreCtrl ::', $scope);
            // $rootScope.showBackBtn = true;
        }
    ]);
