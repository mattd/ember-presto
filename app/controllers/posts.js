var App = require('app');

App.PostsController = Ember.ArrayController.extend({
    selectedBinding: 'App.router.tabsController.selected',

    updatePosts: function () {
        this.set(
            'content',
            App.store.findQuery(App.Post, {source: this.selected})
        );
    }.observes('selected'),

    contentArrayDidChange: function () {
        console.log('changed');
        return this;
    }
});
