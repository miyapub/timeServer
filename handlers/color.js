var tinycolor = require('tinycolor2');
module.exports = function (request, reply) {
    var color = request.params.color;
    color = tinycolor(color);
    switch (color.getFormat()) {
        case 'hex':
            color = color.toRgbString();
            break;
        case 'rgb':
            color = color.toHex();
            break;
    }
    return reply(color);
}