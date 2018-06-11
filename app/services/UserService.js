'use strict';

app.factory('UserService', function($http, configuration) {
    return {
        getAll: function() {
            return $http.get(configuration.api.fullUrl + 'users/');
        }
    };
});