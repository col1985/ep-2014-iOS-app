angular.module('app')
    .controller('FavsCtrl', ['$scope', '$log', 'FavsManager',
        function FavsCtrl($scope, $log, FavsManager) {
            'use strict';

            var getFavs = FavsManager.getSavedFavs();

            angular.extend($scope, {
                favs: getFavs
            });

            $scope.$watchCollection('favs', function (newVal) {
                $log.debug('favs', newVal);
                $scope.favs = newVal;
            }, true);
        }
    ]);
