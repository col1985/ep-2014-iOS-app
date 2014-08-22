angular.module('app')
    .controller('AboutCtrl', ['$scope', '$log',
        function AboutCtrl($scope, $log) {
            'use strict';

            $log.debug('AboutCtrl ::', $scope);
        }
    ]);
