Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./51.js");
var s = createjs.Point;
var r = function (e) {
  function PointSignal() {
    return e.call(this, s) || this;
  }
  i.__extends(PointSignal, e);
  PointSignal.prototype.signal = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return PointSignal;
}(a.GoodgameSignal);
exports.PointSignal = r;