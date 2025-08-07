Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./390.js");
var a = function (e) {
  function CastleTradeData() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleTradeData, e);
  CastleTradeData.prototype.parse_CMI = function (e) {
    var t = new s.CastleTradeInfoVO();
    t.fillCastleList(e.C);
    this.dispatchEvent(new o.CastleTradeDataEvent(o.CastleTradeDataEvent.GET_MARKET_INFOS, t));
  };
  CastleTradeData.prototype.dispatchFailedMarketInfo = function () {
    this.dispatchEvent(new o.CastleTradeDataEvent(o.CastleTradeDataEvent.GET_MARKET_INFOS, null, false));
  };
  return CastleTradeData;
}(require("./72.js").CastleEventDispatcher);
exports.CastleTradeData = a;
var s = require("./5600.js");