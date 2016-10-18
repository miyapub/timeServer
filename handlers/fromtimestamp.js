var moment = require('moment');
module.exports = function (request, reply) {
    var timestamp = request.params.timestamp;
    var time = moment.unix(timestamp);
    var json = {
        timestamp: timestamp,
        time: time,
        fromNow: time.fromNow(),
        ymd: time.format('YYYY-MM-DD'),
        hms: time.format('hh:mm:ss')
    }
    return reply(json);
}