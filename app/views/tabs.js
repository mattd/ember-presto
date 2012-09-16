var App = require('app');

App.TabsView = Ember.CollectionView.extend({
    classNames: ['tabs'],
    contentBinding: 'controller',
    itemViewClass: App.TabView,
    selectedBinding: 'controller.selected',
    tagName: 'ul'
});
