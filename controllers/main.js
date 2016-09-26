angular.module('Corporate-services').controller('MainCtrl', function($scope, $state, $timeout, $sessionStorage) {
    MainCtrl = this;
    $scope.$storage = $sessionStorage;
    $timeout(function () {
      $("#contractType").kendoDropDownList();
      $("#sourceOfFounding").kendoDropDownList();
      $("#typeOfAmendment").kendoDropDownList();
      $("#calendar").kendoCalendar();
      $("#calendar2").kendoCalendar();
      $("#calendar3").kendoCalendar();
    }, 0);

});
