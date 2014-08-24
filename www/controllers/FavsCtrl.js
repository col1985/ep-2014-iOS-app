angular.module('app')
    .controller('FavsCtrl', ['$scope', '$log', 'FavsManager',
        function FavsCtrl($scope, $log, FavsManager) {
            'use strict';

            $scope.favs = FavsManager.getSavedFavs();

            $scope.removeItem = function (favItem) {
                FavsManager.removeFromFavs(favItem);
            };

            $scope.$watchCollection('favs', function (newVal) {
                // $log.debug('favs', newVal);
                $scope.favs = newVal;
            }, true);
        }
    ]);
