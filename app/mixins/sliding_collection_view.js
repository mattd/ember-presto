var App = require('app');

App.SlidingCollectionView = Ember.Mixin.create({
    classNameBindings: ['transitionState'],
    classNames: ['entry-list', 'slide'],
    contentBinding: 'controller',
    tagName: 'ul'
});
