angular.module('app')
    .controller('MapCtrl', ['$window', '$scope', '$log',
        function MapCtrl($window, $scope, $log) {
            'use strict';

            $scope.loadMap = function () {
                $window.open('./../css/imgs/ep_map.png', '_blank');
            };

            $log.debug('MapCtrl ::', $scope);
        }
    ]);
