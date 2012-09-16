var App = require('app');

App.PostsView = Em.CollectionView.extend({
    classNames: ['entry-list'],
    contentBinding: 'controller',
    itemViewClass: App.PostView,
    tagName: 'ul'
});
