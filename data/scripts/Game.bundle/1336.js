Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAutoAllianceSearchVO(t, i = "", n = "") {
    var o = e.call(this) || this;
    o.N = t;
    o.D = i;
    o.ALL = n;
    return o;
  }
  n.__extends(C2SAutoAllianceSearchVO, e);
  C2SAutoAllianceSearchVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_AUTO_ALLIANCE_SEARCH;
  };
  return C2SAutoAllianceSearchVO;
}(o.BasicCommandVO);
exports.C2SAutoAllianceSearchVO = s;