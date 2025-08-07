Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRemoveFromDistrictVO(t, i, n, o) {
    var a = this;
    a.OID = 0;
    a.X = 0;
    a.Y = 0;
    a.R = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).OID = t;
    a.X = i;
    a.Y = n;
    a.R = o;
    return a;
  }
  n.__extends(C2SRemoveFromDistrictVO, e);
  C2SRemoveFromDistrictVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REMOVE_FROM_DISTRICT;
  };
  return C2SRemoveFromDistrictVO;
}(o.BasicCommandVO);
exports.C2SRemoveFromDistrictVO = s;