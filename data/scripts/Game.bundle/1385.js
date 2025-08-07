Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GlobalServerPreviousRunInfoEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).globalServerInfo = i;
    return a;
  }
  n.__extends(GlobalServerPreviousRunInfoEvent, e);
  GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED = "globalServerPreviousRunInfoReceived";
  return GlobalServerPreviousRunInfoEvent;
}(createjs.Event);
exports.GlobalServerPreviousRunInfoEvent = o;