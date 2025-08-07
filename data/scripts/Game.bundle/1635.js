Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMapFacebookVO(t, i = null, n = null, o = null) {
    var a = this;
    a.SFC = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).SFC = t;
    a.FID = i;
    a.FTK = n;
    a.FAID = o;
    return a;
  }
  n.__extends(C2SMapFacebookVO, e);
  C2SMapFacebookVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MAP_FACEBOOK;
  };
  return C2SMapFacebookVO;
}(o.BasicCommandVO);
exports.C2SMapFacebookVO = s;