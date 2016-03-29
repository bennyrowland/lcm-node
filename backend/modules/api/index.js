/**
 * Created by ben on 25/03/16.
 */
//var LCM = require('./lcm.js');

var process = {
    tags: ['api'],
    handler: function (request, reply) {
        console.log(request.payload);
        return reply("success");
    }
};

exports.register = function (server, options, next) {
    server.route({
        path: '/process',
        method: 'POST',
        config: process
    });

    next();
};

exports.register.attributes = {
    name: 'api',
    version: require(__dirname + '/../../../package.json').version
};