Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDecoShopPanelEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).newCategory = i;
    return a;
  }
  n.__extends(CastleDecoShopPanelEvent, e);
  CastleDecoShopPanelEvent.__initialize_static_members = function () {
    CastleDecoShopPanelEvent.CHANGE_CATEGORY = "CHANGE_CATEGORY";
  };
  return CastleDecoShopPanelEvent;
}(createjs.Event);
exports.CastleDecoShopPanelEvent = o;
o.__initialize_static_members();