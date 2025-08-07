Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCollectorEventDataEvent(t, i, n, o = null, a = true, s = false) {
    var r = e.call(this, t, a, s) || this;
    r.playerID = 0;
    r.collectCurrency = 0;
    r.playerID = i;
    r.collectCurrency = n;
    return r;
  }
  n.__extends(CastleCollectorEventDataEvent, e);
  CastleCollectorEventDataEvent.COLLECT_CURRENCY_INFO = "COLLECT_CURRENCY_INFO";
  return CastleCollectorEventDataEvent;
}(createjs.Event);
exports.CastleCollectorEventDataEvent = o;