Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SShowPackageListVO(t) {
    var i = this;
    i.LID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).LID = t;
    return i;
  }
  n.__extends(C2SShowPackageListVO, e);
  C2SShowPackageListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SHOW_PACKAGE_LIST;
  };
  return C2SShowPackageListVO;
}(o.BasicCommandVO);
exports.C2SShowPackageListVO = s;