angular.module('app')
    .controller('StagesCtrl', ['$scope', '$log', 'AppDataFactory',
        function StagesCtrl($scope, $log, AppDataFactory) {
            'use strict';

            angular.extend($scope, {
                bodyNSoul: AppDataFactory.lineup['BODY_&_SOUL'],
                comedy: AppDataFactory.lineup['COMEDY'],
                trailerPark: AppDataFactory.lineup['TRAILER_PARK'],
                trenchTown: AppDataFactory.lineup['TRENCHTOWN']
            });

            $log.debug('StagesCtrl ::', $scope);
        }
    ]);
