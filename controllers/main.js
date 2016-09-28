angular.module('Corporate-services').controller('MainCtrl', function($scope, $state, $timeout, $sessionStorage) {
    MainCtrl = this;
    $scope.$storage = $sessionStorage;
    $timeout(function() {
        $('.datepicker').datepicker({
            format: 'd/MM/yyyy'
        });
    }, 0);

});
