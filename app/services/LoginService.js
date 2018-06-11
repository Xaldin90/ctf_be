'use strict';

app.factory('LoginService', function($http, configuration) {
    return {
        login: function(user, password) {
            return $http.post(configuration.api.fullUrl + 'login', { user: user, password: password });
        }
    };
});