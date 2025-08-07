Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LetterLimiterEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(LetterLimiterEvent, e);
  LetterLimiterEvent.__initialize_static_members = function () {
    LetterLimiterEvent.TEXT_LIMIT_EXCEEDED = "TEXT_LIMIT_EXCEEDED";
    LetterLimiterEvent.TEXT_LIMIT_REACHED = "TEXT_LIMIT_REACHED";
    LetterLimiterEvent.TEXT_CHANGED = "TEXT_CHANGED";
    LetterLimiterEvent.UPDATE_REMAINING_LETTERS = "UPDATE_REMAINING_LETTERS";
  };
  return LetterLimiterEvent;
}(require("./366.js").CastleEvent);
exports.LetterLimiterEvent = o;
o.__initialize_static_members();