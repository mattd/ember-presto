var App = require('app');

App.Post = DS.Model.extend({
    description: DS.attr('string'),
    link: DS.attr('string'),
    source: DS.attr('string'),
    title: DS.attr('string')
});
