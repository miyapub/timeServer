var tinycolor = require('tinycolor2');
function num() {
    return Math.floor(Math.random() * 255);
}
module.exports = function (request, reply) {
    var r = num();
    var g = num();
    var b = num();
    var color = tinycolor({ r: r, g: g, b: b });
    return reply(color.toHex());
}