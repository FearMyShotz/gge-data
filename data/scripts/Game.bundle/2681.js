Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBoostUnitPackageVO(t, i, n, o, a) {
    var s = this;
    s.LID = 0;
    s.S = 0;
    s.AID = 0;
    s.SID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).LID = t;
    s.S = i;
    s.AID = n;
    s.SID = o;
    s.ST = a;
    return s;
  }
  n.__extends(C2SBoostUnitPackageVO, e);
  C2SBoostUnitPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BOOST_UNIT_PACKAGE;
  };
  return C2SBoostUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SBoostUnitPackageVO = s;