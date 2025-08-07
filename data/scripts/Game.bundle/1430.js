Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2CraftingStartVO(t, i, n, o, a) {
    var s = e.call(this) || this;
    s.KID = 0;
    s.AID = 0;
    s.OID = 0;
    s.PWR = 0;
    s.CRID = 0;
    s.KID = t;
    s.AID = i;
    s.OID = n;
    s.PWR = o ? 1 : 0;
    s.CRID = a;
    return s;
  }
  n.__extends(C2CraftingStartVO, e);
  C2CraftingStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CRAFTING_START;
  };
  return C2CraftingStartVO;
}(o.BasicCommandVO);
exports.C2CraftingStartVO = s;