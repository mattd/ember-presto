var App = require('app');

App.SourcesView = Ember.CollectionView.extend(
    App.SlidingCollectionView,
    {itemViewClass: App.SourceView}
);
