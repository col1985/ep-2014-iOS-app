angular.module('app')
    .service('FavsManager', ['$log',
        function FavsManager() {
            'use strict';

            function FavsManager() {
                this.favourites = [];
            }


            return {};
        }
    ]);
