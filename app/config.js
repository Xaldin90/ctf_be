'use strict';

app.constant('configuration', {
    api: {
        baseUrl: 'http://localhost',
        port: '9001',
        root: '/api/',
        fullUrl: 'http://172.17.0.2/ctf_be/'
    }
});

app.config(function($routeProvider) {
    var urlPrefix = '/ctf_mock_be';

    $routeProvider.when(urlPrefix + '/', {
        templateUrl: '../index.html'
    }).when('/login', {
        templateUrl: 'app/views/login.html'
    }).when('/users', {
        templateUrl: 'app/views/users.html'
    })
    ;
});

