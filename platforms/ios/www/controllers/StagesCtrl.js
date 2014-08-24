angular.module('app')
    .controller('StagesCtrl', ['$scope', '$log', 'AppDataFactory', 'FavsManager', 'Dialog',
        function StagesCtrl($scope, $log, AppDataFactory, FavsManager, Dialog) {
            'use strict';

            angular.extend($scope, {
                bodyNSoul: AppDataFactory.lineup['BODY_&_SOUL'],
                comedy: AppDataFactory.lineup['COMEDY'],
                saltyDog: AppDataFactory.lineup['SALTY_DOG'],
                trailerPark: AppDataFactory.lineup['TRAILER_PARK'],
                trenchTown: AppDataFactory.lineup['TRENCHTOWN']
            });

            $scope.addFavourite = function (act) {
                Dialog.alert('Remove ' + act + ' from favourites.', function () {
                    // $log.error('Item cannot be saved to favourites.');
                    if (angular.isDefined(act)) {
                        $log.debug('addFavourite', act);
                        FavsManager.addToFavs(act);
                    }
                }, 'Remove from Favourites', 'OK');

            };
            // $log.debug('StagesCtrl ::', $scope);
        }
    ]);
