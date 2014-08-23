angular.module('app')
    .controller('MapCtrl', ['$scope', '$log',
        function MapCtrl($scope, $log) {
            'use strict';

            $log.debug('MapCtrl ::', $scope);
        }
    ]);
