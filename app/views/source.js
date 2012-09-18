var App = require('app');

App.SourceView = Ember.View.extend({
    contextBinding: 'content',
    tagName: 'li',
    templateName: require('templates/source'),

    click: function (e) {
        this.get('parentView').set('transitionState', 'out');
    }
});
