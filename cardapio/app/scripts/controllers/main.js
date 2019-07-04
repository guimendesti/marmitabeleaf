'use strict';

/**
 * @ngdoc function
 * @name cardapioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardapioApp
 */
angular.module('cardapioApp')
  .controller('MainCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $rootScope.adminLogado = true;


    /**
     *  GET Marmitas
     */
    $scope.marmitas;
    var baseUrl = 'http://localhost:3000/marmitas';

    $http.get(baseUrl).then(function(response) {
      $scope.marmitas = response.data;
    }, function(err) {
      console.log(err);
    });

  });
