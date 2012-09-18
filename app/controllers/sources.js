var App = require('app');

App.SourcesController = Ember.ArrayController.extend({
    content: [
        App.Source.create({name: 'NY Times', id: 'nytimes'}),
        App.Source.create({name: 'Reddit', id: 'reddit'}),
        App.Source.create({name: 'Slate', id: 'slate'})
    ]
});
