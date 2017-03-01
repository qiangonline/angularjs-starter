export default /*@ngInject*/ ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');


    $stateProvider.state('app', {
        abstract: true,
        /*@ngInject*/
        templateProvider: ($q) => {
            let promise = $q((resolve) => {
                require.ensure([], () => {
                    resolve(require('./index.html'));
                });
            });
            return promise;
        },
        controller: 'AppController',
        controllerAs: 'ctrl',
        resolve: {
            /*@ngInject*/
            load: ($q, $ocLazyLoad) => {

                let appControllerPromise = $q((resolve) => {
                    require.ensure([], () => {
                        let module = require('./app.controller');
                        $ocLazyLoad.load({
                            name: module.name
                        });
                        resolve(module);
                    });
                });

                return $q.all([appControllerPromise]);
            }
        }
    });

};