Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTradeDataEvent(t, i = null, n = true, o = false, a = false) {
    var s = this;
    s.openDialog = false;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).tradeInfoVO = i;
    s.openDialog = n;
    return s;
  }
  n.__extends(CastleTradeDataEvent, e);
  CastleTradeDataEvent.__initialize_static_members = function () {
    CastleTradeDataEvent.GET_MARKET_INFOS = "getMarketInfos";
  };
  return CastleTradeDataEvent;
}(createjs.Event);
exports.CastleTradeDataEvent = o;
o.__initialize_static_members();