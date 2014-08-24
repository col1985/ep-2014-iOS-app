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
                var favs = this.getSavedFavs();
                var hasFavSaved = null;

                if (angular.isDefined(actName)) {
                    hasFavSaved = _.indexOf(favs, actName);
                }

                if (hasFavSaved === -1) {
                    this.favourites.push(actName);
                    this.cacheFav(this.favourites);
                    $log.debug('[FavsManager] :: addToFavs ', this.favourites);
                } else {
                    Dialog.alert('Duplicate items cannot be saved to favourites list.', function () {
                        $log.error('Duplicate Item cannot be saved to favourites.');
                    }, 'Save to Favourites', 'OK');
                }
            };

            // return favs array
            FavsManager.prototype.getSavedFavs = function () {
                if (angular.isDefined(localStorage['favs'])) {
                    this.favourites = this.getCachedFav();
                    return this.favourites;
                } else if (this.favourites) {
                    return this.favourites;
                } else {
                    Dialog.alert('Problem loading Favourites. Try again.', function () {
                        $log.error('Problem loading Favourites. Try again.');
                    }, 'Save to Favourites', 'OK');
                }
            };


            FavsManager.prototype.cacheFav = function (favArr) {
                if (angular.isArray(favArr)) {
                    localStorage.setItem('favs', JSON.stringify(favArr));
                } else {
                    $log.error('[FavsManager] [cacheFav] :: favArr is not defined');
                }
            };


            FavsManager.prototype.getCachedFav = function () {
                if (angular.isDefined(localStorage['favs'])) {
                    return JSON.parse(localStorage['favs']);
                } else {
                    $log.error('[FavsManager] [getCacheFav] :: no fav items in localStorage.');
                }
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
