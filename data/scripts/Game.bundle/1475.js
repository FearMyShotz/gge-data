Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = require("./4.js");
var l = function (e) {
  function C2SMinuteSkipCraftingVO(t, i = 0) {
    var n = this;
    n.KID = 0;
    n.AID = 0;
    n.PWR = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).MST = t;
    n.PWR = i;
    n.KID = a.int(r.CastleModel.kingdomData.activeKingdomID);
    n.AID = a.int(r.CastleModel.areaData.activeAreaInfo.objectId);
    return n;
  }
  n.__extends(C2SMinuteSkipCraftingVO, e);
  C2SMinuteSkipCraftingVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_MINUTE_SKIP_CRAFTING;
  };
  return C2SMinuteSkipCraftingVO;
}(o.BasicCommandVO);
exports.C2SMinuteSkipCraftingVO = l;