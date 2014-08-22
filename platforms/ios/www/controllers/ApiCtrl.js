angular.module('app')
    .controller('ApiCtrl', ['$scope', '$log',
        function ApiCtrl($scope, $log) {
            'use strict';

            $log.debug('ApiCtrl ::', $scope);
        }
    ]);
