'use strict';

app.controller('UserCtrl', function($scope, UserService, notify) {

    $scope.users = {};
    $scope.init = init;

    $scope.init();

    function init() {
        UserService.getAll().then(
            function success(result) {
                $scope.users = result.data;
            }, function error(error) {
                notify({
                    message: error.status + ' - ' + error.statusText,
                    classes: 'alert-danger'
                });
            }
        );
    }

});