Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetPlayerTempServerCollectorCurrencyVO(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SGetPlayerTempServerCollectorCurrencyVO, e);
  C2SGetPlayerTempServerCollectorCurrencyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_PLAYER_TEMP_SERVER_COLLECTOR_CURRENCY;
  };
  return C2SGetPlayerTempServerCollectorCurrencyVO;
}(o.BasicCommandVO);
exports.C2SGetPlayerTempServerCollectorCurrencyVO = s;