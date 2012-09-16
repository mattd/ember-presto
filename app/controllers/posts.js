var App = require('app');

App.PostsController = Em.ArrayController.extend({
    selectedBinding: 'App.router.tabsController.selected',

    updatePosts: function () {
        this.set(
            'content',
            App.store.findQuery(App.Post, {source: this.selected})
        );
    }.observes('selected'),
});
