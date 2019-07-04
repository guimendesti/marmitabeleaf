'use strict';

/**
 * @ngdoc overview
 * @name cardapioApp
 * @description
 * # cardapioApp
 *
 * Main module of the application.
 */
angular
  .module('cardapioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detalhes', {
        templateUrl: 'views/marmita.html',
        controller: 'MarmitaCtrl',
        controllerAs: 'marmita'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/admin/marmita/criar', {
        templateUrl: 'views/admin/marmita/form.html',
        controller: 'AdminMarmitaCriarCtrl',
        controllerAs: 'adminMarmitaCriar'
      })
      .when('/admin/marmita/editar', {
        templateUrl: 'views/admin/marmita/form.html',
        controller: 'AdminMarmitaEditarCtrl',
        controllerAs: 'adminMarmitaEditar'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
