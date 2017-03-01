import 'assets/sass/style.scss';

import 'babel-polyfill';

import angular from 'angular';
import AppModule from 'app/app.module';

let $http = angular.injector(['ng']).get('$http');

$http.get('config.json').then((response) => {
    let {
        data
    } = response.data;
    AppModule.constant('appConfig', data);
    angular.bootstrap(document, [AppModule.name], {
        strictDi: true
    });
});