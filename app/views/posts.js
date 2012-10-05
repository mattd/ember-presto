var App = require('app');

App.PostsView = Ember.CollectionView.extend(
    App.AnimatedCollectionView,
    {itemViewClass: App.PostView}
);
