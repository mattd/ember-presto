var App = require('app');

App.PostsView = Ember.CollectionView.extend(
    App.SlidingCollectionView,
    {itemViewClass: App.PostView}
);
