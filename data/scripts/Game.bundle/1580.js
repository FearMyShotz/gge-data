Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleHospitalEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this)._hospitalFlags = i;
    return a;
  }
  n.__extends(CastleHospitalEvent, e);
  Object.defineProperty(CastleHospitalEvent.prototype, "hospitalFlags", {
    get: function () {
      return this._hospitalFlags;
    },
    enumerable: true,
    configurable: true
  });
  CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED = "hospitalFlagsReceived";
  return CastleHospitalEvent;
}(createjs.Event);
exports.CastleHospitalEvent = o;