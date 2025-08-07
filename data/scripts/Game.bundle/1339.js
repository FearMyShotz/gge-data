Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleJSONTextFieldRestrictorEvent(t, i, n = false, o = false) {
    var a = this;
    a.newTextLength = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).newTextLength = i;
    return a;
  }
  n.__extends(CastleJSONTextFieldRestrictorEvent, e);
  CastleJSONTextFieldRestrictorEvent.__initialize_static_members = function () {
    CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED = "textchanged";
    CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED = "textlimitreached";
    CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED = "textlimitexceeded";
  };
  return CastleJSONTextFieldRestrictorEvent;
}(createjs.Event);
exports.CastleJSONTextFieldRestrictorEvent = o;
o.__initialize_static_members();