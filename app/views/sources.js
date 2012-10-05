var App = require('app');

App.SourcesView = Ember.CollectionView.extend(
    App.AnimatedCollectionView,
    {
        contentBinding: 'App.router.sourcesController',
        itemViewClass: App.SourceView
    }
);
