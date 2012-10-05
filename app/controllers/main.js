var App = require('app');

App.MainController = Em.ArrayController.extend({
    content: [],
    pushView: function (view, options) {
        var options = options || {},
            url = App.router.location.getURL();

        view.setProperties({
            transition: options.transition || 'slide',
            direction: options.direction || 'in',
            reverse: options.reverse || false
        });
        this.pushObject({view: view, url: url});
    }
});
