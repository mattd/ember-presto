var App = require('app');

App.store = DS.Store.create({
    adapter: DS.RESTAdapter.create({
        bulkCommit: false,
        namespace: 'api'
    }),
    revision: 4
});
