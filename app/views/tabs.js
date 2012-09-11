var App = require('app');

App.TabsView = Ember.CollectionView.extend({
    classNames: ['tabs'],
    contentBinding: 'controller',
    itemViewClass: App.TabView,
    tagName: 'ul',
    selectedBinding: 'controller.selected'
});
