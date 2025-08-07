Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCancelUnitPackageVO(t, i, n) {
    var o = this;
    o.LID = 0;
    o.S = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).LID = t;
    o.S = i;
    o.ST = n;
    return o;
  }
  n.__extends(C2SCancelUnitPackageVO, e);
  C2SCancelUnitPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CANCEL_UNIT_PACKAGE;
  };
  return C2SCancelUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SCancelUnitPackageVO = s;