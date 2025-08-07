Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTutorialEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(CastleTutorialEvent, e);
  CastleTutorialEvent.QUEST_INFO_SHOWN = "QUEST_INFO_SHOWN";
  CastleTutorialEvent.STEP_FINISHED = "STEP_FINISHED";
  return CastleTutorialEvent;
}(createjs.Event);
exports.CastleTutorialEvent = o;