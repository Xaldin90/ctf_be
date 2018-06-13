'use strict';

app.controller('LoginCtrl', function($location, $scope, LoginService, notify) {

    $scope.user = {};
    $scope.submitLogin = login;

    function login() {
        LoginService.login($scope.user.login, $scope.user.password)
            .then(function (response) {
                notify({
                    message: 'Login erfolgreich',
                    classes: 'alert-success'
                });
                $location.path('users');
            }, function (error) {
                notify({
                    message: error.status + ' - ' + error.statusText,
                    classes: 'alert-danger'
                });
            }
        );
    }

});