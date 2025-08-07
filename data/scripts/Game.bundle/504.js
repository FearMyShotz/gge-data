Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBookmarkDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleBookmarkDataEvent, e);
  CastleBookmarkDataEvent.__initialize_static_members = function () {
    CastleBookmarkDataEvent.ON_LIST_CHANGED = "onListChanged";
  };
  return CastleBookmarkDataEvent;
}(createjs.Event);
exports.CastleBookmarkDataEvent = o;
o.__initialize_static_members();