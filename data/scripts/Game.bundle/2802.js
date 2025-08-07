Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyPrivateResourceVillageVO(t) {
    var i = this;
    i.XID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).XID = t;
    return i;
  }
  n.__extends(C2SBuyPrivateResourceVillageVO, e);
  C2SBuyPrivateResourceVillageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_PRIVATE_RESOURCE_VILLAGE;
  };
  return C2SBuyPrivateResourceVillageVO;
}(o.BasicCommandVO);
exports.C2SBuyPrivateResourceVillageVO = s;