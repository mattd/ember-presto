var App = require('app');

App.AnimatedCollectionView = Ember.Mixin.create({
    classNameBindings: [
        'transition',
        'direction',
        'reverse:reverse'
    ],
    classNames: ['entry-list'],
    contentBinding: 'controller',
    tagName: 'ul',

    didInsertElement: function () {
        var history = App.router.get('mainController').get('content'),
            twoAgo = history.objectAt(history.length - 3),
            previous = history.objectAt(history.length - 2),
            url = App.router.location.getURL();

        if (history.length === 1) {
            this.set('direction', null);
        }
        if (history.length > 2) {
            if (url === twoAgo.url) {
                previous.view.setProperties({direction: 'out', reverse: true});
                this.set('reverse', true);
            } else {
                previous.view.set('reverse', false);
            }
        }
    }
});
