'use strict';

app.controller('UserCtrl', function($scope, UserService, LegacyService) {

    $scope.users = {};
    $scope.init = init;

    $scope.init();

    function init() {
        var authToken = '3asd6-bsdf52-m3p9-as7ke5';
        LegacyService.getFlag(authToken).then(
            function(result) {
                console.log(result);
            }, function(error) {

            }
        );

        // UserService.getAll().then(
        //     function(result) {
        //         console.log(result);
        //     }, function(error) {
        //
        //     }
        // );
    }

});