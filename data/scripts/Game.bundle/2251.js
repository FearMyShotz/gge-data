var n = require("./257.js");
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(e, t) {
  this.handlers.push({
    fulfilled: e,
    rejected: t
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(e) {
  this.handlers[e] &&= null;
};
InterceptorManager.prototype.forEach = function forEach(e) {
  n.forEach(this.handlers, function forEachHandler(t) {
    if (t !== null) {
      e(t);
    }
  });
};
module.exports = InterceptorManager;