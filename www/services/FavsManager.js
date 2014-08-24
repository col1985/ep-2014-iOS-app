angular.module('app')
    .service('FavsManager', ['$log', 'Dialog',
        function ($log, Dialog) {
            'use strict';

            // constructor
            function FavsManager() {
                this.favourites = [];
            }

            // add to favs array
            FavsManager.prototype.addToFavs = function (actName) {
                if (angular.isDefined(actName)) {
                    this.favourites.push(actName);
                    $log.debug('[FavsManager] :: addToFavs ', this.favourites);
                } else {
                    Dialog.alert('Item cannot be saved to favourites.', function () {
                        $log.error('Item cannot be saved to favourites.');
                    }, 'Save to Favourites', 'OK');
                }
            };

            // return favs array
            FavsManager.prototype.getSavedFavs = function () {
                // if (this.favourites.length > 0) {
                return this.favourites;
                // } else if (this.favourites.length === 0) {
                // return ['No favourites saved at this time.'];
                // } else {
                //     Dialog.alert('Problem loading Favourites. Try again.', function () {
                //         $log.error('Problem loading Favourites. Try again.');
                //     }, 'Save to Favourites', 'OK');
                // // }

            };

            // remove from favs array
            FavsManager.prototype.removeFromFavs = function (actName) {
                if (angular.isUndefined(actName)) {
                    Dialog.alert('Item cannot be removed from favourites.', function () {
                        $log.error('Item cannot be saved to favourites.');
                    }, 'Save to Favourites', 'OK');
                } else {
                    var indexOfAct = _.indexOf(this.favourites, actName);

                    if (angular.isNumber(indexOfAct)) {
                        this.favourites.slice(indexOfAct);
                    } else {
                        $log.error('indexOfAct is cannot be found, item cannot be removed from favourites.');
                    }
                }
            };

            return new FavsManager();
        }
    ]);
