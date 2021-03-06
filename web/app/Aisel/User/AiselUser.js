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
 * @description     User router
 */

define(['app',
    './controllers/user',
    './services/user/category', './services/user/page', './services/user/user',
], function (app) {
    console.log('User module loaded ...');
    app.config(function ($provide, $routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
            .when('/:locale/user/login/', {
                templateUrl: '/app/Aisel/User/views/login.html',
                controller: 'UserCtrl',
                resolve: {
                    factory: function (authService) {
                        authService.roleGuest()
                    }
                }
            })
            .when('/:locale/user/register/', {
                templateUrl: '/app/Aisel/User/views/register.html',
                controller: 'UserCtrl',
                resolve: {
                    factory: function (authService) {
                        authService.roleGuest()
                    }
                }
            })
            .when('/:locale/user/password/forgot/', {
                templateUrl: '/app/Aisel/User/views/password-forgot.html',
                controller: 'UserCtrl',
                resolve: {
                    factory: function (authService) {
                        authService.roleGuest()
                    }
                }
            })
            // Authenticated users actions
            .when('/:locale/user/information/', {
                templateUrl: '/app/Aisel/User/views/information/dashboard.html',
                controller: 'UserCtrl',
                resolve: {
                    factory: function (authService) {
                        authService.roleUser()
                    }
                }
            })
            .when('/:locale/user/information/edit/', {
                templateUrl: '/app/Aisel/User/views/information/edit.html',
                controller: 'UserCtrl',
                resolve: {
                    factory: function (authService) {
                        authService.roleUser()
                    }
                }
            })
    });
});