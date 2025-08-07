Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceRefuseDiplomacyVO(t) {
    var i = this;
    i.AID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AID = t;
    return i;
  }
  n.__extends(C2SAllianceRefuseDiplomacyVO, e);
  C2SAllianceRefuseDiplomacyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_REFUSE_DIPLOMACY;
  };
  return C2SAllianceRefuseDiplomacyVO;
}(o.BasicCommandVO);
exports.C2SAllianceRefuseDiplomacyVO = s;