Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetPackageBuyCountVO(t, i) {
    var n = this;
    n.CID = 0;
    n.KID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).CID = t;
    n.KID = i;
    return n;
  }
  n.__extends(C2SGetPackageBuyCountVO, e);
  C2SGetPackageBuyCountVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_PACKAGE_BUY_COUNT;
  };
  return C2SGetPackageBuyCountVO;
}(o.BasicCommandVO);
exports.C2SGetPackageBuyCountVO = s;