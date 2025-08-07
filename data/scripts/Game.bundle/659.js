Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SamuraiDaimyoEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(SamuraiDaimyoEvent, e);
  SamuraiDaimyoEvent.ON_OWN_RANKS_UPDATED = "onOwnRanksUpdated";
  SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED = "onContractsUpdated";
  SamuraiDaimyoEvent.ON_AREAS_UPDATED = "onAreasUpdated";
  SamuraiDaimyoEvent.ON_NEW_EVENT_END_DIALOG_INFO_ARRIVED = "onNewEventEndDialogInfoArrived";
  return SamuraiDaimyoEvent;
}(createjs.Event);
exports.SamuraiDaimyoEvent = o;