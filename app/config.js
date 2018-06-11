'use strict';

app.constant('configuration', {
    api: {
        baseUrl: 'http://localhost',
        port: '9001',
        root: '/api/',
        fullUrl: this.baseUrl + ':' + this.port + this.root
    }
});

app.config(function($routeProvider, configuration) {
    $routeProvider.when('/', {
        templateUrl: 'index.html'
    })
    //     .when('/login', {
    //     templateUrl: 'views/login.html'
    // }).when('/users', {
    //     templateUrl: 'views/users.html'
    // })
    ;
});