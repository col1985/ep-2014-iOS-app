angular.module('app')
    .controller('MainCtrl', ['$scope', '$log', 'SampleFactory', 'AppDataFactory',
        function MainCtrl($scope, $log, SampleFactory, AppDataFactory) {
            'use strict';

            $log.debug('MainCtrl ::', $scope);

            $scope.message = SampleFactory.msg;
            $scope.version = AppDataFactory.version;
        }
    ]);
