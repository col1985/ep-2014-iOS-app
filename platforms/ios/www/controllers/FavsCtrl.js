angular.module('app')
    .controller('FavsCtrl', ['$scope', '$log', 'FavsManager', 'Dialog',
        function FavsCtrl($scope, $log, FavsManager, Dialog) {
            'use strict';

            $scope.favs = FavsManager.getSavedFavs();

            $scope.removeItem = function (favItem) {
                Dialog.alert('Remove ' + favItem + ' from favourites.', function () {
                    FavsManager.removeFromFavs(favItem);
                }, 'Remove from Favourites', 'OK');
            };

            $scope.$watchCollection('favs', function (newVal) {
                // $log.debug('favs', newVal);
                $scope.favs = newVal;
            }, true);
        }
    ]);
