Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSkipUnitPackageVO(t, i) {
    var n = this;
    n.LID = 0;
    n.S = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).LID = t;
    n.S = i;
    return n;
  }
  n.__extends(C2SSkipUnitPackageVO, e);
  C2SSkipUnitPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SKIP_UNIT_PRODUCTION;
  };
  return C2SSkipUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SSkipUnitPackageVO = s;