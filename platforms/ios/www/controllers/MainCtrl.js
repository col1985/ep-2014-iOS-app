angular.module('app')
    .controller('MainCtrl', ['$scope', '$log', 'Dialog',
        function MainCtrl($scope, $log, Dialog) {
            'use strict';

            $log.debug('MainCtrl ::', Dialog);

            $scope.hey = function () {
                //     // // alert('hello')
                //     Dialog.alert('Hello', function () {
                //         $log.error('Not working');
                //     }, 'This is a Msg', 'Done');

                //     Dialog.prompt('How', function () {
                //         $log.error('Not working');
                //     }, 'This is a Msg', ['Restart', 'Done']);

                // var labels = ['Restart', 'Done'];

                Dialog.confirm('are you', function (buttonIndex) {
                    alert('You selected button ' + buttonIndex);
                    $log.error('Not working');
                }, 'This is a Msg', []);
            };

        }
    ]);
