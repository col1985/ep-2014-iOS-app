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
        .when('/stages', {
            templateUrl: 'views/stages.html',
            depth: 2,
            controller: 'StagesCtrl'
        })
        .when('/body', {
            templateUrl: 'views/lineup/bodynSoul/body-home.html',
            depth: 3,
            controller: 'StagesCtrl'
        })
        .when('/bs-stage', {
            templateUrl: 'views/lineup/bodynSoul/bs-stage.html',
            depth: 4,
            controller: 'StagesCtrl'
        })
        .when('/upstage', {
            templateUrl: 'views/lineup/bodynSoul/upstage.html',
            depth: 5,
            controller: 'StagesCtrl'
        })
        .when('/earthship', {
            templateUrl: 'views/lineup/bodynSoul/earthship.html',
            depth: 6,
            controller: 'StagesCtrl'
        })
        .when('/comedy', {
            templateUrl: 'views/lineup/comedy.html',
            depth: 7,
            controller: 'StagesCtrl'
        })
        .when('/salty', {
            templateUrl: 'views/lineup/saltydog.html',
            depth: 8,
            controller: 'StagesCtrl'
        })
        .when('/trailer', {
            templateUrl: 'views/lineup/trailerpark/trailer-home.html',
            depth: 9,
            controller: 'StagesCtrl'
        })
        .when('/mobile', {
            templateUrl: 'views/lineup/trailerpark/mobile.html',
            depth: 10,
            controller: 'StagesCtrl'
        })
        .when('/jimmie', {
            templateUrl: 'views/lineup/trailerpark/jimmie.html',
            depth: 11,
            controller: 'StagesCtrl'
        })
        .when('/trenchtown', {
            templateUrl: 'views/lineup/trenchtown/trench-home.html',
            depth: 12,
            controller: 'StagesCtrl'
        })
        .when('/main-stage', {
            templateUrl: 'views/lineup/trenchtown/main-stage.html',
            depth: 13,
            controller: 'StagesCtrl'
        })
        .when('/roots', {
            templateUrl: 'views/lineup/trenchtown/roots.html',
            depth: 14,
            controller: 'StagesCtrl'
        })
        .when('/beach-stage', {
            templateUrl: 'views/lineup/trenchtown/beach.html',
            depth: 15,
            controller: 'StagesCtrl'
        })
        .when('/redbull', {
            templateUrl: 'views/lineup/trenchtown/red-bull.html',
            depth: 16,
            controller: 'StagesCtrl'
        })
        .when('/bacardi', {
            templateUrl: 'views/lineup/trenchtown/bacardi.html',
            depth: 17,
            controller: 'StagesCtrl'
        })
        .when('/jerryfish', {
            templateUrl: 'views/lineup/trenchtown/jerryfish.html',
            depth: 18,
            controller: 'StagesCtrl'
        })
    // .when('/map', {
    //     templateUrl: 'views/map.html',
    //     depth: 19,
    //     controller: 'MapCtrl'
    // })
    // .when('/more', {
    //     templateUrl: 'views/more.html',
    //     depth: 20,
    //     controller: 'MoreCtrl'
    // })
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
