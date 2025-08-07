Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STempServerGetChargeCampEffectsEventVO(t, i) {
    var n = this;
    n.XPOS = 0;
    n.YPOS = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).XPOS = t;
    n.YPOS = i;
    return n;
  }
  n.__extends(C2STempServerGetChargeCampEffectsEventVO, e);
  C2STempServerGetChargeCampEffectsEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_TEMP_SERVER_CHARGE_CHAMP_EFFECTS;
  };
  return C2STempServerGetChargeCampEffectsEventVO;
}(o.BasicCommandVO);
exports.C2STempServerGetChargeCampEffectsEventVO = s;