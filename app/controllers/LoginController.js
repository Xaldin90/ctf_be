'use strict';

app.controller('LoginCtrl', function($scope, LoginService) {

    $scope.user = {};
    $scope.submitLogin = login;

    function login() {
        // LoginService.login($scope.user.login, $scope.user.password);
    }

});