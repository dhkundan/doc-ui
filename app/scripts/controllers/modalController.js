'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('modalCtrl', function($scope,$position,$rootScope) {
        console.log("modalCtrl Contorller");
        
        $rootScope.$on('showCommonPopup', function(event,data){
            $scope.popupData = data;
            console.log($scope.popupData);
            $('#popupCommon').modal('show');
        });
  });