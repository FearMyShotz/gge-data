Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function MonumentEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(MonumentEvent, e);
  MonumentEvent.__initialize_static_members = function () {
    MonumentEvent.MONUMENTS_RESET_WARNING = "monuments_reset_warning";
    MonumentEvent.MONUMENT_UPDATED = "monument_updated";
  };
  return MonumentEvent;
}(require("./366.js").CastleEvent);
exports.MonumentEvent = o;
o.__initialize_static_members();