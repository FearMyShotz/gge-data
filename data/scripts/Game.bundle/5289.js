Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOfferQuestAcceptVO(t, i) {
    var n = this;
    n.OID = 0;
    n.C = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).OID = t;
    n.C = i;
    return n;
  }
  n.__extends(C2SOfferQuestAcceptVO, e);
  C2SOfferQuestAcceptVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OFFER_QUEST_ACCEPT;
  };
  return C2SOfferQuestAcceptVO;
}(o.BasicCommandVO);
exports.C2SOfferQuestAcceptVO = s;