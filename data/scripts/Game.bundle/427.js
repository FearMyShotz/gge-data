Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleInventoryComponentEvent(t, i, n = null, o = true, a = false) {
    var s = this;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).unitVO = i;
    s.crestVO = n;
    return s;
  }
  n.__extends(CastleInventoryComponentEvent, e);
  CastleInventoryComponentEvent.__initialize_static_members = function () {
    CastleInventoryComponentEvent.CLICK_ITEM = "CLICK_ITEM";
    CastleInventoryComponentEvent.SCROLL_INVENTORY = "SCROLL_INVENTORY";
  };
  return CastleInventoryComponentEvent;
}(createjs.Event);
exports.CastleInventoryComponentEvent = o;
o.__initialize_static_members();