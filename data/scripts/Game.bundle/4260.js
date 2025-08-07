Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = require("./459.js");
var r = function (e) {
  function C2SCraftingSkipVO(t, i, n, o, a, r) {
    var l = e.call(this) || this;
    l.KID = 0;
    l.AID = 0;
    l.OID = 0;
    l.S = 0;
    l.ST = "";
    l.PC2 = 0;
    l.KID = t;
    l.AID = i;
    l.OID = n;
    l.S = o;
    l.ST = a == s.CraftingSlotVO.SLOT_TYPE_PRODUCTION ? "production" : "queue";
    l.PC2 = r;
    return l;
  }
  n.__extends(C2SCraftingSkipVO, e);
  C2SCraftingSkipVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CRAFTING_SKIP;
  };
  return C2SCraftingSkipVO;
}(o.BasicCommandVO);
exports.C2SCraftingSkipVO = r;