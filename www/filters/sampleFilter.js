angular.module('app')
    .filter('sampleFilter', ['$filter', '$log',
        function sampleFilter($filter, $log) {
            'use strict';

            $log.debug('sampleFilter');
        }
    ]);
