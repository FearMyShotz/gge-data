Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCollectTaxVO() {
    var t = this;
    t.TR = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).TR = 29;
    return t;
  }
  n.__extends(C2SCollectTaxVO, e);
  C2SCollectTaxVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLLECT_TAX;
  };
  return C2SCollectTaxVO;
}(o.BasicCommandVO);
exports.C2SCollectTaxVO = s;