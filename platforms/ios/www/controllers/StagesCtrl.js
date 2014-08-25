angular.module('app')
    .controller('StagesCtrl', ['$scope', '$log', 'AppDataFactory', 'FavsManager',
        function StagesCtrl($scope, $log, AppDataFactory, FavsManager) {
            'use strict';

            angular.extend($scope, {
                headLiners: AppDataFactory.lineup['HEADLINERS'],
                bodyNSoul: AppDataFactory.lineup['BODY_&_SOUL'],
                comedy: AppDataFactory.lineup['COMEDY'],
                saltyDog: AppDataFactory.lineup['SALTY_DOG'],
                trailerPark: AppDataFactory.lineup['TRAILER_PARK'],
                trenchTown: AppDataFactory.lineup['TRENCHTOWN']
            });

            $scope.addFavourite = function (act) {
                if (angular.isDefined(act)) {
                    $log.debug('addFavourite', act);
                    FavsManager.addToFavs(act);
                }
            };
            // $log.debug('StagesCtrl ::', $scope);
        }
    ]);
