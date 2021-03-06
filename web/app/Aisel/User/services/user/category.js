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
 * @description     ...
 */

define(['app'], function (app) {
    app.service('userCategoryService', ['$http', '$routeParams', 'API_URL', function ($http, $routeParams, API_URL) {
        return {
            appCategories: function () {
                var url = API_URL + '/user/category/tree.json';
                console.log(url);
                return $http.get(url);
            }
        };
    }]);
});