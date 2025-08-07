Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReplaceConstructionItemVO(t, i, n, o, a, s) {
    var r = this;
    r.OID = 0;
    r.CID = 0;
    r.SID = 0;
    r.M = 0;
    r.KID = 0;
    r.AID = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).OID = t;
    r.CID = i;
    r.SID = n;
    r.M = o.value;
    r.KID = a;
    r.AID = s;
    return r;
  }
  n.__extends(C2SReplaceConstructionItemVO, e);
  C2SReplaceConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CONSTRUCTION_ITEM_REPLACE;
  };
  return C2SReplaceConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SReplaceConstructionItemVO = s;