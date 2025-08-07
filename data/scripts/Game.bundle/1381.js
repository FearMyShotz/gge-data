Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./7.js");
var l = function (e) {
  function C2SAllianceChangeDescriptionVO(t, i) {
    var n = this;
    n.T = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).TXT = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    n.T = i;
    n.validaTextSize();
    return n;
  }
  n.__extends(C2SAllianceChangeDescriptionVO, e);
  C2SAllianceChangeDescriptionVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_ALLIANCE_CHANGE_DESCRIPTION;
  };
  C2SAllianceChangeDescriptionVO.prototype.validaTextSize = function () {
    if (this.TXT.length > s.AllianceConst.DESCRIPTION_MAX_LENGTH) {
      this.TXT = this.TXT.substr(0, s.AllianceConst.DESCRIPTION_MAX_LENGTH);
    }
  };
  return C2SAllianceChangeDescriptionVO;
}(o.BasicCommandVO);
exports.C2SAllianceChangeDescriptionVO = l;