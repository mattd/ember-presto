var App = require('app');

App.SourcesView = Ember.CollectionView.extend(
    App.SlidingCollectionView,
    {
        contentBinding: 'App.router.sourcesController',
        itemViewClass: App.SourceView
    }
);
