Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleQuestConditionEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).questCondition = i;
    return a;
  }
  n.__extends(CastleQuestConditionEvent, e);
  CastleQuestConditionEvent.__initialize_static_members = function () {
    CastleQuestConditionEvent.HIGHLIGHT_ON_MAP = "HIGHLIGHT_ON_MAP";
  };
  return CastleQuestConditionEvent;
}(createjs.Event);
exports.CastleQuestConditionEvent = o;
o.__initialize_static_members();