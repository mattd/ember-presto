var App = require('app');

App.MainController = Em.ArrayController.extend({
    content: [],
    history: [],
    pushState: function (view) {
        var currentPath = App.router.get('currentPath'),
            history = this.get('history'),
            previousPath = history.objectAt(history.length - 2);

        if (previousPath === currentPath) {
            history.popObject();
        } else {
            history.pushObject(currentPath);
        }
        this.pushObject(view);
    }
});
