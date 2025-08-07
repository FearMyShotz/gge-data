Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function XmlFusionSystemVO() {
    this._id = -1;
    this._energyRechargeIntervalInSeconds = 0;
    this._assembleCatalystEnergyCost = 0;
    this._disassembleCatalystEnergyCost = 0;
    this._baseBonusFusionXPChance = 0;
    this._premiumBonusFusionXPChance = 0;
    this._skipRechargeHardCurrencyCost = 0;
    this._skipRechargeHardCurrencyCostFactor = 0;
  }
  XmlFusionSystemVO.prototype.parseXml = function (e) {
    this._id = o.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._energyRechargeIntervalInSeconds = o.int(a.CastleXMLUtils.getIntAttribute("energyRechargeIntervalInSeconds", e, 0));
    this._assembleCatalystEnergyCost = o.int(a.CastleXMLUtils.getIntAttribute("assembleCatalystEnergyCost", e, 0));
    this._disassembleCatalystEnergyCost = o.int(a.CastleXMLUtils.getIntAttribute("disassembleCatalystEnergyCost", e, 0));
    this._baseBonusFusionXPChance = o.int(a.CastleXMLUtils.getIntAttribute("baseBonusFusionXPChance", e, 0));
    this._premiumBonusFusionXPChance = o.int(a.CastleXMLUtils.getIntAttribute("premiumBonusFusionXPChance", e, 0));
    this._skipRechargeHardCurrencyCost = o.int(a.CastleXMLUtils.getIntAttribute("skipRechargeHardCurrencyCost", e, 0));
    this._skipRechargeHardCurrencyCostFactor = a.CastleXMLUtils.getNumberAttribute("skipRechargeHardCurrencyCostFactor", e);
  };
  Object.defineProperty(XmlFusionSystemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "energyRechargeIntervalInSeconds", {
    get: function () {
      return this._energyRechargeIntervalInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "assembleCatalystEnergyCost", {
    get: function () {
      return this._assembleCatalystEnergyCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "disassembleCatalystEnergyCost", {
    get: function () {
      return this._disassembleCatalystEnergyCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "baseBonusFusionXPChance", {
    get: function () {
      return this._baseBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "premiumBonusFusionXPChance", {
    get: function () {
      return this._premiumBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "skipRechargeHardCurrencyCost", {
    get: function () {
      return this._skipRechargeHardCurrencyCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlFusionSystemVO.prototype, "skipRechargeHardCurrencyCostFactor", {
    get: function () {
      return this._skipRechargeHardCurrencyCostFactor;
    },
    enumerable: true,
    configurable: true
  });
  return XmlFusionSystemVO;
}();
exports.XmlFusionSystemVO = n;
var o = require("./6.js");
var a = require("./22.js");