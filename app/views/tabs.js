var App = require('app');

App.TabsView = Em.CollectionView.extend({
    classNames: ['tabs'],
    contentBinding: 'controller',
    itemViewClass: App.TabView,
    selectedBinding: 'controller.selected',
    tagName: 'ul'
});
