Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SExtensionTreasureChestVO(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SExtensionTreasureChestVO, e);
  C2SExtensionTreasureChestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_EXTENSION_TREASURE_CHEST;
  };
  return C2SExtensionTreasureChestVO;
}(o.BasicCommandVO);
exports.C2SExtensionTreasureChestVO = s;