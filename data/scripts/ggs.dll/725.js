module.exports = PassThrough;
var i = require("./282.js");
function PassThrough(e) {
  if (!(this instanceof PassThrough)) {
    return new PassThrough(e);
  }
  i.call(this, e);
}
require("./94.js")(PassThrough, i);
PassThrough.prototype._transform = function (e, t, n) {
  n(null, e);
};