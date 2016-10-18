var tinycolor = require('tinycolor2');
module.exports = function (request, reply) {
    var color = tinycolor.random();
    return reply(color.toHex());
}