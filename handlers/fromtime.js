var moment = require('moment');
module.exports = function (request, reply) {
    var time = request.params.time;
    time = moment(time);
    var timestamp = time.unix(timestamp);
    var json = {
        timestamp: timestamp,
        time: time,
        fromNow: time.fromNow(),
        ymd: time.format('YYYY-MM-DD'),
        hms: time.format('hh:mm:ss')
    }
    return reply(json);
}