var App = require('app');

App.Source = Ember.Object.extend({
    id: null,
    name: null
});

App.Source.reopenClass({
    find: function (source_id) {
        var sources = App.router.get('sourcesController').get('content');
        return sources.findProperty('id', source_id);
    }
});
