Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LaboratoryLevelInfoVO() {
    this._level = 0;
    this._ironAllianceBoost = 0;
    this._charcoalAllianceBoost = 0;
    this._oliveOilAllianceBoost = 0;
    this._glassAllianceBoost = 0;
    this._requiredPoints = 0;
    this._kingdomID = 0;
  }
  LaboratoryLevelInfoVO.prototype.parseXML = function (e) {
    this._level = parseInt(e.level || "");
    this._ironAllianceBoost = parseInt(a.CastleXMLUtils.getValueOrDefault("ironAllianceBoost", e, "0"));
    this._charcoalAllianceBoost = parseInt(a.CastleXMLUtils.getValueOrDefault("charcoalAllianceBoost", e, "0"));
    this._oliveOilAllianceBoost = parseInt(a.CastleXMLUtils.getValueOrDefault("oliveOilAllianceBoost", e, "0"));
    this._glassAllianceBoost = parseInt(a.CastleXMLUtils.getValueOrDefault("glassAllianceBoost", e, "0"));
    this._requiredPoints = parseInt(a.CastleXMLUtils.getValueOrDefault("requiredPoints", e, "0"));
    this._kingdomID = parseInt(a.CastleXMLUtils.getValueOrDefault("kID", e, "0"));
  };
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "landmarkBonus", {
    get: function () {
      return Math.max(this._ironAllianceBoost, this._charcoalAllianceBoost, this._oliveOilAllianceBoost, this._glassAllianceBoost);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "requiredPoints", {
    get: function () {
      return this._requiredPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryLevelInfoVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  return LaboratoryLevelInfoVO;
}();
exports.LaboratoryLevelInfoVO = n;
var o = require("./1.js");
var a = require("./22.js");
o.classImplementsInterfaces(n, "IUpgradableLandmarkLevelInfoVO");