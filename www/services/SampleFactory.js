angular.module('app')
    .factory('SampleFactory', ['$log',
        function SampleFactory() {
            'use strict';
            return {
                msg: 'This is a sample AngularJs template powered by FeedHenry 3 platform.'
            };
        }
    ]);
