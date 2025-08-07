Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STempServerChargeCampRerollEventVO(t, i) {
    var n = this;
    n.XPOS = 0;
    n.YPOS = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).XPOS = t;
    n.YPOS = i;
    return n;
  }
  n.__extends(C2STempServerChargeCampRerollEventVO, e);
  C2STempServerChargeCampRerollEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TEMP_SERVER_CHARGE_CHAMP_EFFECTS_REROLL;
  };
  return C2STempServerChargeCampRerollEventVO;
}(o.BasicCommandVO);
exports.C2STempServerChargeCampRerollEventVO = s;