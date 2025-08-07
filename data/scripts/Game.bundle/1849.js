Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAccountDeletionEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleAccountDeletionEvent, e);
  CastleAccountDeletionEvent.__initialize_static_members = function () {
    CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED = "ACCOUNT_DELETION_TIMER_UPDATED";
  };
  return CastleAccountDeletionEvent;
}(createjs.Event);
exports.CastleAccountDeletionEvent = o;
o.__initialize_static_members();