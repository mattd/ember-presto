var App = require('app');

App.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        index: Em.Route.extend({
            route: '/',
            enter: function (router) {
                router.set('mainController', App.MainController.create())
            }
        })/*,
        main: Em.Route.extend({
            route: '/main',
            index: Em.Route.extend({
                route: '/',
                connectOutlets: function (router) {
                    router.get('applicationController').connectOutlet(
                        'main'
                    );
                }
            }),
            source: Em.Route.extend({
                route: '/:source_id',
                connectOutlets: function (router, source) {
                    router.get('applicationController').connectOutlet(
                        'posts', App.store.findQuery(
                            App.Post, {source: source.get('id')}
                        )
                    );
                }
            }),
            showSource: Em.Route.transitionTo('source')
        })*/
    })
});
