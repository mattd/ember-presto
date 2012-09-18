var App = require('app');

App.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'posts.index'
        }),
        posts: Em.Route.extend({
            route: '/posts',
            index: Em.Route.extend({
                route: '/',
                connectOutlets: function (router) {
                    router.get('applicationController').connectOutlet(
                        'sources', 'sources'
                    );
                }
            }),
            source: Em.Route.extend({
                route: '/:source_id',
                connectOutlets: function (router, source) {
                    router.get('applicationController').connectOutlet(
                        'posts', 'posts', App.store.findQuery(
                            App.Post, {source: source.get('id')}
                        )
                    );
                }
            }),
            showSource: Em.Route.transitionTo('source')
        })
    })
});
