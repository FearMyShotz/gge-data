Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleJudgementDataEvent(t, i = true, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleJudgementDataEvent, e);
  CastleJudgementDataEvent.__initialize_static_members = function () {
    CastleJudgementDataEvent.NEW_JUDGEMENT_STARTED = "NEW_JUDGEMENT_STARTED";
    CastleJudgementDataEvent.JUDGEMENT_ENDED = "JUDGEMENT_ENDED";
  };
  return CastleJudgementDataEvent;
}(createjs.Event);
exports.CastleJudgementDataEvent = o;
o.__initialize_static_members();