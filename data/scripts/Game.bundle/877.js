Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleShoppingCartPrimeDayEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleShoppingCartPrimeDayEvent, e);
  CastleShoppingCartPrimeDayEvent.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG = "UPDATE_DIALOG";
    CastleShoppingCartPrimeDayEvent.SOLD_OUT = "SOLD_OUT";
  };
  return CastleShoppingCartPrimeDayEvent;
}(createjs.Event);
exports.CastleShoppingCartPrimeDayEvent = o;
o.__initialize_static_members();