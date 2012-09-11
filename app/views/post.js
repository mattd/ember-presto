var App = require('app');

App.PostView = Ember.View.extend({
    contextBinding: 'content',
    tagName: 'li',
    templateName: require('templates/post')
});
