Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SQuestDonateCurrencyVO(t, i, n) {
    var o = this;
    o.QID = 0;
    o.CID = 0;
    o.A = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).QID = t;
    o.CID = i;
    o.A = n;
    return o;
  }
  n.__extends(C2SQuestDonateCurrencyVO, e);
  C2SQuestDonateCurrencyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_QUEST_DONATE_CURRENCY;
  };
  return C2SQuestDonateCurrencyVO;
}(o.BasicCommandVO);
exports.C2SQuestDonateCurrencyVO = s;