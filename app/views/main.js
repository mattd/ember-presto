var App = require('app');

App.MainView = Em.ContainerView.extend({
    childViews: [],
    currentViewBinding: 'App.router.mainController.lastObject'
});
