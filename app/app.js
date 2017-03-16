var app = angular.module('flapperNews', ['ui.bootstrap']);

angular.module('flapperNews').controller('MainCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});