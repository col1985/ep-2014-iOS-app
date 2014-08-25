angular.module('app')
    .controller('MapCtrl', ['$window', '$scope',
        function MapCtrl($window, $scope) {
            'use strict';

            $scope.loadMap = function () {
                $window.open('css/imgs/ep_map.png', '_blank', 'enableViewportScale=yes');
            };
        }
    ]);
