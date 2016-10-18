var moment = require('moment');
module.exports = function (request, reply) {
    var now = moment();
    var timestamp = now.unix();
    return reply(timestamp);
}