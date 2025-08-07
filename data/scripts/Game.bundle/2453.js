Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceNewsletterVO(t, i) {
    var n = e.call(this) || this;
    n.SJ = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    n.TXT = a.TextValide.getValideSmartFoxJSONTextMessage(i);
    return n;
  }
  n.__extends(C2SAllianceNewsletterVO, e);
  C2SAllianceNewsletterVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_NEWSLETTER;
  };
  return C2SAllianceNewsletterVO;
}(o.BasicCommandVO);
exports.C2SAllianceNewsletterVO = r;