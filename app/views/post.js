var App = require('app');

App.PostView = Em.View.extend({
    contextBinding: 'content',
    tagName: 'li',
    templateName: require('templates/post')
});
