Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralAddXpVO(t, i, n) {
    var o = e.call(this) || this;
    o.GID = 0;
    o.CID = 0;
    o.AMT = 0;
    o.GID = t;
    o.CID = i;
    o.AMT = n;
    return o;
  }
  n.__extends(C2SGeneralAddXpVO, e);
  C2SGeneralAddXpVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_ADD_XP;
  };
  return C2SGeneralAddXpVO;
}(o.BasicCommandVO);
exports.C2SGeneralAddXpVO = s;