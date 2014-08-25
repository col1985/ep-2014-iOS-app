angular.module('app')
    .service('FavsManager', ['$log', 'Dialog',
        function ($log, Dialog) {
            'use strict';

            // constructor
            function FavsManager() {
                if (angular.isDefined(localStorage['favs'])) {
                    this.favourites = this.getCachedFav();
                    console.log(this.favourites);
                } else {
                    this.favourites = [];
                }
            }

            // add to favs array
            FavsManager.prototype.addToFavs = function (actName) {
                if (this.favourites.length > 0 && angular.isString(actName)) {

                    if (_.indexOf(this.favourites, actName) === -1) {
                        this.favourites.push(actName);
                        this.cacheFav(this.favourites);
                        $log.debug('[FavsManager] :: addToFavs ', this.favourites);
                    } else {
                        Dialog.alert('Duplicate items cannot be saved to favourites list.', function () {
                            $log.error('Duplicate Item cannot be saved to favourites.');
                        }, 'Save to Favourites', 'OK');
                    }

                } else {
                    this.favourites.push(actName);
                    this.cacheFav(this.favourites);
                    $log.debug('[FavsManager] :: addToFavs ', this.favourites);
                }
            };

            // return favs array
            FavsManager.prototype.getSavedFavs = function () {
                return this.favourites;
            };

            // save favs to localStorage
            FavsManager.prototype.cacheFav = function (favArr) {
                if (angular.isArray(favArr)) {
                    localStorage.setItem('favs', JSON.stringify(favArr));
                } else {
                    $log.error('[FavsManager] [cacheFav] :: favArr is not defined');
                }
            };

            // get favs from localStorage
            FavsManager.prototype.getCachedFav = function () {
                if (angular.isDefined(localStorage['favs'])) {
                    return JSON.parse(localStorage['favs']);
                } else {
                    $log.error('[FavsManager] [getCacheFav] :: no fav items in localStorage.');
                }
            };

            // remove from favs array
            FavsManager.prototype.removeFromFavs = function (actName) {
                if (angular.isDefined(actName)) {

                    // return index of act
                    var indexOfAct = _.indexOf(this.favourites, actName);

                    if (indexOfAct != -1) {
                        // remove from array
                        this.favourites.splice(indexOfAct, 1);
                    }

                } else {
                    Dialog.alert('Item cannot be removed from favourites.', function () {
                        $log.error('Item cannot be saved to favourites.');
                    }, 'Save to Favourites', 'OK');
                }
            };

            return new FavsManager();
        }
    ]);
