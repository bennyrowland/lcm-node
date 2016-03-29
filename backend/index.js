/**
 * Created by ben on 25/03/16.
 */
'use strict';

var Glue = require('glue');

Glue.compose(require('../manifest.json'), {relativeTo: __dirname + '/modules'}, function (err, server) {
    if (err) {
        console.log('glue.compose error: ', err);
    }
    
    server.start(function () {
        console.log('server is listening on ' + server.info.uri.toLowerCase());
    });
});
