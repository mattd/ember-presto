var App = require('app');

App.PostView = Ember.View.extend({
    contextBinding: 'content',
    tagName: 'li',
    templateName: require('templates/post')
});

App.PostsView = Ember.CollectionView.extend({
    contentBinding: 'controller',
    itemViewClass: App.PostView,
    tagName: 'ul'
});
