var App = require('app');

App.MainController = Em.ArrayController.extend({
    content: []/*,
    history: [],
    pushState: function (view) {
        var currentPath = App.router.get('currentPath'),
            history = this.get('history'),
            previousPath = history.objectAt(history.length - 2);

        console.log(previousPath);

        if (previousPath === currentPath) {
            this.get('history').popObject();
            this.popObject();
        } else {
            this.get('history').pushObject(currentPath);
            this.pushObject(view);
        }
    }*/
});
