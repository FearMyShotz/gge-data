Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SIsoRepairAllVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SIsoRepairAllVO, e);
  C2SIsoRepairAllVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REPAIR_ALL;
  };
  return C2SIsoRepairAllVO;
}(o.BasicCommandVO);
exports.C2SIsoRepairAllVO = s;