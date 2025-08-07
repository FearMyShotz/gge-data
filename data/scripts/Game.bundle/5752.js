Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = function () {
  function ABGAllianceTowerEffectXmlVO() {
    this.allianceTowerEffectID = 0;
    this.effectID = 0;
    this.effectBasePrice = 0;
    this.effectMaxLevel = 0;
    this.effectStartValue = NaN;
    this.effectIncrease = NaN;
  }
  ABGAllianceTowerEffectXmlVO.prototype.parseXML = function (e) {
    this.allianceTowerEffectID = n.int(o.CastleXMLUtils.getIntAttribute("allianceTowerEffectID", e));
    this.effectID = n.int(o.CastleXMLUtils.getIntAttribute("effectID", e));
    this._effectVO = a.CastleModel.effectsData.getEffectByID(this.effectID);
    this.effectBasePrice = n.int(o.CastleXMLUtils.getIntAttribute("effectBasePrice", e));
    this.effectMaxLevel = n.int(o.CastleXMLUtils.getIntAttribute("effectMaxLevel", e));
    this.effectStartValue = o.CastleXMLUtils.getNumberAttribute("effectStartValue", e);
    this.effectIncrease = o.CastleXMLUtils.getNumberAttribute("effectIncrease", e);
  };
  Object.defineProperty(ABGAllianceTowerEffectXmlVO.prototype, "effectVO", {
    get: function () {
      return this._effectVO;
    },
    enumerable: true,
    configurable: true
  });
  return ABGAllianceTowerEffectXmlVO;
}();
exports.ABGAllianceTowerEffectXmlVO = s;