Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSpyDataEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleSpyDataEvent, e);
  CastleSpyDataEvent.__initialize_static_members = function () {
    CastleSpyDataEvent.PRE_SPYINFO_UPDATED = "prespyinfoupdated";
    CastleSpyDataEvent.PRE_SPYINFO_FAILED = "prespyinfofailed";
    CastleSpyDataEvent.NEW_SPY_LOG = "newspylog";
    CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE = "plaguemonkcountupdate";
  };
  return CastleSpyDataEvent;
}(createjs.Event);
exports.CastleSpyDataEvent = o;
o.__initialize_static_members();