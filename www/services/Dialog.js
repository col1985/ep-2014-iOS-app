angular.module('app')
    .factory('Dialog', function Dialog($window, $log) {
        'use strict';

        if (!$window && !$window.navigator && !$window.navigator.notification) {
            $log.error('window & navigator cannot be found');
            return;
        }

        var alert = function (msg, cb, title, done) {
            $window.navigator.notification.alert(msg, cb, title, done);
        };

        var prompt = function (msg, cb, title, labels) {
            if (typeof labels != Array) {
                $log.error('[Dialog][prompt][labels] There must be more than 2 labels assigned for this API');
                return;
            } else {
                $window.navigator.notification.prompt(msg, cb, title, labels);
            }

        };

        var confirm = function (msg, cb, title, labels) {
            $log.debug(msg, cb, title, labels);
            if (labels.length < 2) {
                $log.error('[Dialog][confirm][labels] There must be more than 2 labels assigned for this API');
                return;
            } else {
                $window.navigator.notification.confirm(msg, cb, title, labels);
            }
        };

        return {
            alert: alert,
            prompt: prompt,
            confirm: confirm
        };
    });
