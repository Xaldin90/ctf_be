'use strict';

app.factory('LegacyService', function($http, configuration) {
    return {
        getFlag: function(authToken) {
            var config = {
                'Authorization': + authToken
            };

            return $http({
                method: 'GET',
                url: configuration.api.fullUrl + 'flag/',
                headers: config
            });
        }
    }
});