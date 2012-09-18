var App = require('app');

App.SlidingCollectionView = Ember.Mixin.create({
    classNameBindings: ['transitionState'],
    classNames: ['entry-list', 'slide'],
    contentBinding: 'controller',
    tagName: 'ul',

    didInsertElement: function () {
        var transitionState = 'in',
            path = App.router.get('currentState.path');
            stack = App.router.get('applicationController').get(
                'navigationStack'
            );

        if (stack.length && stack.get('lastObject').path !== path) {
            this.set('transitionState', transitionState);
        }

        stack.addObject({
            'path': path,
            'transitionState': transitionState
        });
    }
});
