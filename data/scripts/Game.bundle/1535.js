Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function MineStateUpdateEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(MineStateUpdateEvent, e);
  MineStateUpdateEvent.__initialize_static_members = function () {
    MineStateUpdateEvent.STATE_UPDATE = "state_update";
  };
  return MineStateUpdateEvent;
}(createjs.Event);
exports.MineStateUpdateEvent = o;
o.__initialize_static_members();