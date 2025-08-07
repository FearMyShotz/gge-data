Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRemoveConstructionItemVO(t, i, n, o, a) {
    var s = this;
    s.OID = 0;
    s.CID = 0;
    s.SID = 0;
    s.KID = 0;
    s.AID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).OID = t;
    s.CID = i;
    s.SID = n;
    s.KID = o;
    s.AID = a;
    return s;
  }
  n.__extends(C2SRemoveConstructionItemVO, e);
  C2SRemoveConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CONSTRUCTION_ITEM_REMOVE;
  };
  return C2SRemoveConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SRemoveConstructionItemVO = s;