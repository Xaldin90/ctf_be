'use strict';

app.factory('LegacyService', function($http, configuration) {
    return {
        getFlag: function(authToken) {
            var config = {
                header: 'Authorization ' + authToken
            };
            return $http.get(configuration.api.fullUrl + 'flag/', config);
        }
    }
});