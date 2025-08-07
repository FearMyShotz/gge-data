Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function GGSTextFieldSignal() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GGSTextFieldSignal, e);
  GGSTextFieldSignal.prototype.remove = function (t) {
    this.removed.apply(null, [this.mappedEventType]);
    return e.prototype.remove.call(this, t);
  };
  GGSTextFieldSignal.prototype.add = function (t) {
    this.added.apply(null, [this.mappedEventType]);
    return e.prototype.add.call(this, t);
  };
  return GGSTextFieldSignal;
}(require("./20.js").Signal);
exports.GGSTextFieldSignal = a;