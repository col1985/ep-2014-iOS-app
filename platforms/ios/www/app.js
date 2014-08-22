angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'snap'
]).config(function (snapRemoteProvider, $routeProvider) {
    'use strict';

    snapRemoteProvider.globalOptions = {
        disable: 'left',
        touchToDrag: false,
        maxPosition: 266,
        minPosition: -266,
    };

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            depth: 1,
            controller: 'MainCtrl'
        })
        .when('/api', {
            templateUrl: 'views/cordova-api.html',
            depth: 2,
            controller: 'ApiCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            depth: 3,
            controller: 'AboutCtrl'
        })
        .when('/more', {
            templateUrl: 'views/more.html',
            depth: 4,
            controller: 'MoreCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });

}).run(function ($window, $rootScope, $log, $location) {
    'use strict';

    $log.info('Hello from app.js');

    // control backBtn state
    $rootScope.showBackBtn = false;

    // publish current transition direction on rootScope
    $rootScope.direction = 'ltr';

    // listen change start events
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // $log.debug(event, next, current);
        $rootScope.direction = 'rtl';

        // console.log(arguments);
        if (current && next && (current.depth > next.depth)) {
            $rootScope.direction = 'ltr';
        }

        // hide / show back btn
        if ($location.path() !== '/home') {
            $rootScope.showBackBtn = true;
        } else {
            $rootScope.showBackBtn = false;
        }

        // back
        $rootScope.back = function () {
            $window.history.back();
        };

        // $rootScope.toggleDrawer = function() {

        // };
    });
});
