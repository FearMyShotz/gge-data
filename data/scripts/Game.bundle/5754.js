Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = require("./22.js");
var a = function () {
  function AllianceBattleGroundConfigurationVO() {
    this.settingID = 0;
    this._presetVOs = [];
    this.scoringSystemID = 0;
    this.allianceRewardSetID = 0;
    this.playerRewardSetID = 0;
    this.skinID = 0;
    this._maxAllianceSize = 0;
    this._customAllianceSize = 0;
    this.mapID = 0;
    this.currencyID = 0;
    this.allianceCurrencyID = 0;
    this.malusCurrencyID = 0;
    this.currencyLootFactorMin = 0;
    this.allianceCurrencyLootFactorMin = 0;
    this.boosterCurrencyID = 0;
    this.boosterCurrencyValue = 0;
    this.boosterCurrencyLimit = 0;
    this.currencyLootFactorMax = 0;
    this.boosterCurrencyPackageID = 0;
    this.metropolisLandmarkID = 0;
    this.capitalLandmarkID = 0;
  }
  AllianceBattleGroundConfigurationVO.prototype.parseXML = function (e) {
    this.settingID = parseInt(o.CastleXMLUtils.getValueOrDefault("settingID", e, "0", true));
    this._maxAllianceSize = parseInt(o.CastleXMLUtils.getValueOrDefault("maxAllianceSize", e, "0", true));
    this.presetIDs = o.CastleXMLUtils.getValueOrDefault("presetIDs", e, "0", true).split(",");
    for (var t = 0; t < this.presetIDs.length; t++) {
      var i = parseInt(this.presetIDs[t]);
      this.presetIDs[t] = i;
    }
    this.scoringSystemID = parseInt(o.CastleXMLUtils.getValueOrDefault("scoringID", e, "0"));
    this.mapID = parseInt(o.CastleXMLUtils.getValueOrDefault("mapID", e, "0"));
    this.skinID = parseInt(o.CastleXMLUtils.getValueOrDefault("skinID", e, "0"));
    this.allianceRewardSetID = parseInt(o.CastleXMLUtils.getValueOrDefault("allianceRewardSetID", e, "0"));
    this.playerRewardSetID = parseInt(o.CastleXMLUtils.getValueOrDefault("playerRewardSetID", e, "0"));
    this.currencyID = parseInt(o.CastleXMLUtils.getValueOrDefault("currencyID", e, "0"));
    this.allianceCurrencyID = parseInt(o.CastleXMLUtils.getValueOrDefault("allianceCurrencyID", e, "0"));
    this.malusCurrencyID = parseInt(o.CastleXMLUtils.getValueOrDefault("malusCurrencyID", e, "0"));
    this.currencyLootFactorMin = parseInt(o.CastleXMLUtils.getValueOrDefault("currencyLootFactorMin", e, "0"));
    this.allianceCurrencyLootFactorMin = parseInt(o.CastleXMLUtils.getValueOrDefault("allianceCurrencyLootFactorMin", e, "0"));
    this.boosterCurrencyID = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyID", e, "0"));
    this.boosterCurrencyValue = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyValue", e, "0"));
    this.boosterCurrencyLimit = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyLimit", e, "0"));
    this.currencyLootFactorMax = parseInt(o.CastleXMLUtils.getValueOrDefault("currencyLootFactorMax", e, "0"));
    this.boosterCurrencyPackageID = parseInt(o.CastleXMLUtils.getValueOrDefault("boosterCurrencyPackageID", e, "0"));
    this.metropolisLandmarkID = parseInt(o.CastleXMLUtils.getValueOrDefault("metropolisLandmarkID", e, "0"));
    this.capitalLandmarkID = parseInt(o.CastleXMLUtils.getValueOrDefault("capitalLandmarkID", e, "0"));
    this.availableAllianceTowerEffectIDs = o.CastleXMLUtils.createIntListFromAttribute("allianceTowerEffectIDs", e);
  };
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "presetVOs", {
    get: function () {
      if (this._presetVOs.length <= 0 && this.presetIDs != null) {
        for (var e = 0, t = this.presetIDs; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined) {
            this._presetVOs.push(n.CastleModel.allianceBattlegroundData.getPreBuildCastleVOByID(i));
          }
        }
      }
      return this._presetVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "scoringSystemVO", {
    get: function () {
      return n.CastleModel.allianceBattlegroundData.getScoringSystemByID(this.scoringSystemID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "skin", {
    get: function () {
      return n.CastleModel.specialServerData.getSkinNameByID(this.skinID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundConfigurationVO.prototype, "maxAllianceSize", {
    get: function () {
      if (this._customAllianceSize > 0) {
        return this._customAllianceSize;
      } else {
        return this._maxAllianceSize;
      }
    },
    set: function (e) {
      this._customAllianceSize = e;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceBattleGroundConfigurationVO;
}();
exports.AllianceBattleGroundConfigurationVO = a;