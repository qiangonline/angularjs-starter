export default /*@ngInject*/ ($urlRouterProvider, $locationProvider, $stateProvider) => {

    $stateProvider.state('app.home', {
        url: '/',
        /*@ngInject*/
        templateProvider: ($q) => {
            let promise = $q((resolve) => {
                require.ensure([], () => {
                    resolve(require('./index.html'));
                });
            });
            return promise;
        },
        data: {
            title: 'home'
        }
    });

};