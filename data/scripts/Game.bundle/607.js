Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceChangeDiplomacyVO(t, i, n = 0) {
    var o = this;
    o.AID = 0;
    o.NDR = 0;
    o.T = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).AID = t;
    o.NDR = i;
    o.T = n;
    return o;
  }
  n.__extends(C2SAllianceChangeDiplomacyVO, e);
  C2SAllianceChangeDiplomacyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_CHANGE_DIPLOMACY;
  };
  return C2SAllianceChangeDiplomacyVO;
}(o.BasicCommandVO);
exports.C2SAllianceChangeDiplomacyVO = s;