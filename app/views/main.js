var App = require('app');

App.MainView = Em.ContainerView.extend({
    childViews: [],
    currentViewBinding: 'App.router.mainController.lastObject',
    previousView: null,

    _currentViewWillChange: Ember.beforeObserver(function() {
        var currentView = this.get('currentView'),
            previousView = this.get('previousView');

        if (previousView) {
            previousView.destroy();
        }
        this.set('previousView', currentView);
    }, 'currentView')
});
