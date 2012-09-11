var App = require('app');

App.TabsController = Ember.ArrayController.extend({
    content: [
        App.Tab.create({name: 'NY Times', slug: 'nytimes'}),
        App.Tab.create({name: 'Reddit', slug: 'reddit'}),
        App.Tab.create({name: 'Slate', slug: 'slate'})
    ],
    selected: 'nytimes'
});
