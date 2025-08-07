Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUnlockPackageSlotVO(t) {
    var i = this;
    i.LID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).LID = t;
    return i;
  }
  n.__extends(C2SUnlockPackageSlotVO, e);
  C2SUnlockPackageSlotVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UNLOCK_PACKAGE_SLOT;
  };
  return C2SUnlockPackageSlotVO;
}(o.BasicCommandVO);
exports.C2SUnlockPackageSlotVO = s;