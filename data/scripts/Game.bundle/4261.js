Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = require("./459.js");
var r = function (e) {
  function C2SCraftingUnlockVO(t, i, n, o, a) {
    var r = e.call(this) || this;
    r.KID = 0;
    r.AID = 0;
    r.OID = 0;
    r.S = [];
    r.ST = "";
    r.KID = t;
    r.AID = i;
    r.OID = n;
    r.S = o;
    r.ST = a == s.CraftingSlotVO.SLOT_TYPE_PRODUCTION ? "production" : "queue";
    return r;
  }
  n.__extends(C2SCraftingUnlockVO, e);
  C2SCraftingUnlockVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CRAFTING_UNLOCK;
  };
  return C2SCraftingUnlockVO;
}(o.BasicCommandVO);
exports.C2SCraftingUnlockVO = r;