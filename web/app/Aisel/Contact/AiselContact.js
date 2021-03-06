'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @ngdoc           overview
 * @name            Aisel
 * @description     Contact Router
 */

define(['app', './controllers/contact', './services/contact'], function (app) {
    console.log('Contact module loaded ...');
    app.config(function ($provide, $routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            // Contact
            .when('/:locale/contact/', {
                templateUrl: '/app/Aisel/Contact/views/contact.html',
                controller: 'ContactCtrl'
            })
    });
});