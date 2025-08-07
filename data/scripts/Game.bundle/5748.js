Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function ABGAllianceTowerEffectActivationVO() {
    this.allianceTowerEffectsActivationID = 0;
    this.remainingTime = 0;
    this.costC2 = 0;
  }
  ABGAllianceTowerEffectActivationVO.prototype.parseXML = function (e) {
    this.allianceTowerEffectsActivationID = n.int(o.CastleXMLUtils.getIntAttribute("allianceTowerEffectsActivationID", e));
    this.remainingTime = n.int(o.CastleXMLUtils.getIntAttribute("remainingTime", e));
    this.costC2 = n.int(o.CastleXMLUtils.getIntAttribute("cost", e));
  };
  return ABGAllianceTowerEffectActivationVO;
}();
exports.ABGAllianceTowerEffectActivationVO = a;