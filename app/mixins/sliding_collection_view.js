var App = require('app');

App.SlidingCollectionView = Ember.Mixin.create({
    classNameBindings: ['transitionState'],
    classNames: ['entry-list', 'slide'],
    contentBinding: 'controller',
    tagName: 'ul',

    didInsertElement: function () {
        var history = App.router.get('mainController').get('history');

        if (history.length > 1) {
            this.set('transitionState', 'in');
        }
    }
});
