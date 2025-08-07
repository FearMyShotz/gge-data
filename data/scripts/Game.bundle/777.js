Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMercenaryDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleMercenaryDataEvent, e);
  CastleMercenaryDataEvent.__initialize_static_members = function () {
    CastleMercenaryDataEvent.DATA_CHANGED = "datachanged";
    CastleMercenaryDataEvent.NEW_MISSIONS_ARRIVED = "newMissionsArrived";
  };
  return CastleMercenaryDataEvent;
}(createjs.Event);
exports.CastleMercenaryDataEvent = o;
o.__initialize_static_members();