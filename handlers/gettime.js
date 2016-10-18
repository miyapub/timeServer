var moment = require('moment');
module.exports = function (request, reply) {
    var now = moment();
    var timestamp = now.unix();
    var time = now;
    var json = {
        timestamp: timestamp,
        ymd: time.format('YYYY-MM-DD'),
        hms: time.format('hh:mm:ss')
    }
    return reply(json);
}