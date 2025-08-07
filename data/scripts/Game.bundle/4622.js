Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetAutoSellGemConditionsEventVO(t) {
    var i = e.call(this) || this;
    i.GCS = [];
    for (var n = 0, o = Array.from(t.actives.keys()); n < o.length; n++) {
      var a = o[n];
      i.GCS.push([t.actives.get(a), a]);
    }
    return i;
  }
  n.__extends(C2SSetAutoSellGemConditionsEventVO, e);
  C2SSetAutoSellGemConditionsEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SET_AUTO_SELL_GEM_CONDITIONS;
  };
  return C2SSetAutoSellGemConditionsEventVO;
}(o.BasicCommandVO);
exports.C2SSetAutoSellGemConditionsEventVO = s;