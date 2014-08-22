angular.module('app')
    .factory('AppDataFactory', ['$log',
        function AppDataFactory() {
            'use strict';

            var data = {};

            return {
                version: '0.1.0',
                data: data
            };
        }
    ]);
