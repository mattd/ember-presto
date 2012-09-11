var App = require('app');

App.PostsView = Ember.CollectionView.extend({
    classNames: ['entry-list'],
    contentBinding: 'controller',
    itemViewClass: App.PostView,
    tagName: 'ul'
});
