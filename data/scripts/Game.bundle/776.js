Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMercenaryPackageVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SMercenaryPackageVO, e);
  C2SMercenaryPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MERCENARY_PACKAGE;
  };
  return C2SMercenaryPackageVO;
}(o.BasicCommandVO);
exports.C2SMercenaryPackageVO = s;