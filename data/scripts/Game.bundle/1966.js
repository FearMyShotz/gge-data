Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTempServerEventEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(CastleTempServerEventEvent, e);
  CastleTempServerEventEvent.TEMPSERVER_CHARGE_EFFECT_ARRIVED = "TEMPSERVER_CHARGE_EFFECT_ARRIVED";
  CastleTempServerEventEvent.UPV_SENT = "UPV_SENT";
  return CastleTempServerEventEvent;
}(createjs.Event);
exports.CastleTempServerEventEvent = o;