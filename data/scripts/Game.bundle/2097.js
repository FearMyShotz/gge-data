Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function PackagePriceVO(t) {
    var i = this;
    i.PKID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PKID = t;
    return i;
  }
  n.__extends(PackagePriceVO, e);
  PackagePriceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_PACKAGE_PRICE;
  };
  return PackagePriceVO;
}(o.BasicCommandVO);
exports.PackagePriceVO = s;