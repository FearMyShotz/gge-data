Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOpenLootBoxVO(t, i, n) {
    var o = this;
    o.LID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).CID = i;
    o.LID = t;
    o.ALL = n ? 1 : 0;
    return o;
  }
  n.__extends(C2SOpenLootBoxVO, e);
  C2SOpenLootBoxVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OPEN_LOOT_BOX;
  };
  return C2SOpenLootBoxVO;
}(o.BasicCommandVO);
exports.C2SOpenLootBoxVO = s;