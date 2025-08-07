Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMoveUnitPackageVO(t, i, n) {
    var o = this;
    o.LID = 0;
    o.OS = 0;
    o.NS = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).LID = t;
    o.OS = i;
    o.NS = n;
    return o;
  }
  n.__extends(C2SMoveUnitPackageVO, e);
  C2SMoveUnitPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MOVE_UNIT_PACKAGE;
  };
  return C2SMoveUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SMoveUnitPackageVO = s;