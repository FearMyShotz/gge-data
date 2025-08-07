Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMarkExpiredConstructionItemVO(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AID = t;
    return i;
  }
  n.__extends(C2SMarkExpiredConstructionItemVO, e);
  C2SMarkExpiredConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MARK_EXPIRED_CONSTRUCTION_ITEM_EVENT;
  };
  return C2SMarkExpiredConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SMarkExpiredConstructionItemVO = s;