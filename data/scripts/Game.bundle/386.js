Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./4.js");
var s = function () {
  function TempServerConfigurationVO() {
    this.settingID = 0;
    this._presetVOs = [];
    this.peaceMode = false;
    this.startCurrencyAmount = 0;
    this.currencyLootFactorMin = 0;
    this.currencyID = 0;
    this.rewardSetID = 0;
    this.boosterCurrencyID = 0;
    this.currencyLootFactorMax = 0;
    this.boosterCurrencyValue = 0;
    this.boosterCurrencyPackageID = 0;
    this.boosterCurrencyLimit = 0;
    this.skinID = 0;
    this.neededChargePointsForAttack = 0;
  }
  TempServerConfigurationVO.prototype.parseXML = function (e) {
    this.settingID = parseInt(o.CastleXMLUtils.getValueOrDefault("settingID", e, "0", true));
    this.presetIDs = o.CastleXMLUtils.getValueOrDefault("presetIDs", e, "0", true).split(",");
    for (var t = 0; t < this.presetIDs.length; t++) {
      this.presetIDs[t] = parseInt(this.presetIDs[t]);
    }
    this.peaceMode = parseInt(o.CastleXMLUtils.getValueOrDefault("peaceMode", e, "0")) == 1;
    this.scoringSystem = o.CastleXMLUtils.getValueOrDefault("scoringSystem", e, "0");
    this.startCurrencyAmount = parseInt(o.CastleXMLUtils.getValueOrDefault("startCurrencyAmount", e, "-1"));
    this.currencyLootFactorMin = parseInt(o.CastleXMLUtils.getValueOrDefault("currencyLootFactorMin", e, "0"));
    this.currencyID = parseInt(o.CastleXMLUtils.getValueOrDefault("currencyID", e, "0"));
    this.rewardSetID = parseInt(o.CastleXMLUtils.getValueOrDefault("rewardSetID", e, "0"));
    this.boosterCurrencyID = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyID", e, "0"));
    this.boosterCurrencyLimit = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyLimit", e, "0"));
    this.boosterCurrencyPackageID = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyPackageID", e, "0"));
    this.currencyLootFactorMax = Number(o.CastleXMLUtils.getValueOrDefault("currencyLootFactorMax", e, "0"));
    this.boosterCurrencyValue = n.int(Number(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyValue", e, "0")));
    this.skinID = parseInt(o.CastleXMLUtils.getValueOrDefault("skinID", e, "0"));
    this.neededChargePointsForAttack = parseInt(o.CastleXMLUtils.getValueOrDefault("costTonic", e, "0"));
  };
  Object.defineProperty(TempServerConfigurationVO.prototype, "skin", {
    get: function () {
      return a.CastleModel.specialServerData.getSkinNameByID(this.skinID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerConfigurationVO.prototype, "presetVOs", {
    get: function () {
      if (this._presetVOs.length <= 0 && this.presetIDs != null) {
        for (var e = 0, t = this.presetIDs; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined) {
            this._presetVOs.push(a.CastleModel.tempServerData.getPreBuildCastleVOByID(i));
          }
        }
      }
      return this._presetVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerConfigurationVO.prototype, "isCastleTransportationOnly", {
    get: function () {
      return this.presetVOs.length == 1 && this.presetVOs[0].preBuildCastleVO.isMainCastleCopy;
    },
    enumerable: true,
    configurable: true
  });
  TempServerConfigurationVO.SCORING_SYSTEM_MIGHT = "might";
  TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR = "collector";
  TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP = "rankSwap";
  return TempServerConfigurationVO;
}();
exports.TempServerConfigurationVO = s;