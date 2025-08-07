Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCraftConstructionItemVO(t, i, n) {
    var o = this;
    o.RID = 0;
    o.KID = 0;
    o.AID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).RID = t;
    o.KID = i;
    o.AID = n;
    return o;
  }
  n.__extends(C2SCraftConstructionItemVO, e);
  C2SCraftConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CRAFT_CONSTRUCTION_ITEM;
  };
  return C2SCraftConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SCraftConstructionItemVO = s;