Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./32.js");
var s = createjs.Event;
var r = function (e) {
  function RemovedFromStageSignal() {
    var t = e.call(this) || this;
    t.mappedEventType = s.REMOVED_FROM_STAGE;
    return t;
  }
  i.__extends(RemovedFromStageSignal, e);
  RemovedFromStageSignal.prototype.dispatchTyped = function (t) {
    e.prototype.dispatch.call(this, t);
  };
  return RemovedFromStageSignal;
}(a.GGSTextFieldSignal);
exports.RemovedFromStageSignal = r;