var App = require('app');

App.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        enter: function (router) {
            router.set('mainController', App.MainController.create());
        },
        index: Em.Route.extend({
            route: '/',
            redirectsTo: 'posts.index'
        }),
        posts: Em.Route.extend({
            route: '/posts',
            index: Em.Route.extend({
                route: '/',
                connectOutlets: function (router) {
                    router.get('mainController').pushView(
                        App.SourcesView.create()
                    );
                }
            }),
            source: Em.Route.extend({
                route: '/:source_id',
                connectOutlets: function (router, source) {
                    router.set(
                        'postsController',
                        App.PostsController.create({
                            content: App.store.findQuery(
                                App.Post, {source: source.get('id')}
                            )
                        })
                    );
                    router.get('mainController').pushView(
                        App.PostsView.create({
                            controller: router.get('postsController')
                        })
                    );
                }
            }),
            showSource: Em.Route.transitionTo('source')
        })
    })
});
