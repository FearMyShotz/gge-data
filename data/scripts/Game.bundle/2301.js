Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMovementFilterOptionEvent(t, i) {
    var n = this;
    n.FID = 0;
    n.ACT = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).FID = t;
    n.ACT = i ? 1 : 0;
    return n;
  }
  n.__extends(C2SMovementFilterOptionEvent, e);
  C2SMovementFilterOptionEvent.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MOVEMENT_FILTER_OPTION_EVENT;
  };
  return C2SMovementFilterOptionEvent;
}(o.BasicCommandVO);
exports.C2SMovementFilterOptionEvent = s;