angular.module('app')
    .controller('StagesCtrl', ['$scope', '$log',
        function StagesCtrl($scope, $log) {
            'use strict';

            $log.debug('StagesCtrl ::', $scope);
        }
    ]);
