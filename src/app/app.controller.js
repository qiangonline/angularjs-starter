import angular from 'angular';
import AppModule from './app.module';
class AppController {
    /*@ngInject*/
    constructor($state, appConfig) {
        this.$state = $state;
        this.appConfig = appConfig;
    }

}
export default angular.module(AppModule.name).controller('AppController', AppController);