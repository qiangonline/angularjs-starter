import angular from 'angular';

import ngRoute from 'angular-route';
import uiRouter from 'angular-ui-router';

import ocLazyLoad from 'oclazyload';

import Router from './app.router';

import HomeModule from './home/home.module';



export default angular
    .module('app', [
        ngRoute, uiRouter, ocLazyLoad,
        HomeModule.name
    ])
    .config(Router)
    .run( /*@ngInject*/ ($rootScope, $state, $stateParams, appConfig) => {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.appConfig = appConfig;
    });