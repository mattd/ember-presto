var App = require('app');

App.TabView = Ember.View.extend({
    contextBinding: 'content',
    tagName: 'li',
    templateName: require('templates/tab'),

    isActive: function () {
        return this.content.get('slug') === this.get('parentView.selected');
    }.property('parentView.selected'),

    click: function (e) {
        e.preventDefault();
        this.get('parentView').set('selected', this.content.get('slug'));
    }
});
