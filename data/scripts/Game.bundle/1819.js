Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleStatusBarEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleStatusBarEvent, e);
  CastleStatusBarEvent.__initialize_static_members = function () {
    CastleStatusBarEvent.ICONS_REPOSITIONED = "iconsRepositioned";
  };
  return CastleStatusBarEvent;
}(createjs.Event);
exports.CastleStatusBarEvent = o;
o.__initialize_static_members();