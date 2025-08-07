Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./44.js");
var u = require("./4.js");
var d = require("./97.js");
var p = require("./35.js");
var h = require("./87.js");
var g = require("./286.js");
var C = function (e) {
  function KeepBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KeepBuildingVO, e);
  Object.defineProperty(KeepBuildingVO.prototype, "canCollectTax", {
    get: function () {
      return this.buildingState == h.IsoBuildingStateEnum.BUILD_COMPLETED && this.taxInfoVO.isTaxReadyForCollection && _.Iso.data.areaData.isMyArea && !_.Iso.data.areaData.isUnderConquerProcess;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "taxCollectProgressAsFactor", {
    get: function () {
      return Number(this.taxInfoVO.currentIncome) / this.taxInfoVO.expectedIncome;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "usesColorFourCrest", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AResourceProductionBuildingVO.prototype, "usesColorFourCrest").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return !this.taxInfoVO.isTaxReadyForCollection;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AResourceProductionBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return this.taxInfoVO.isTaxReadyForCollection;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AResourceProductionBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KeepBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BuildNoShadow, "buildingSpeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [_.Iso.data.areaData.commonInfo.buildSpeedBoost]), this.getInfoItemTextColor(d.CastleEffectEnum.BUILDSPEEDBOOST));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "protection_tt", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(d.CastleEffectEnum.DECOPOINTS));
    if (!c.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
    if (!c.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new s.LocalizedNumberVO(this.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength));
    }
  };
  KeepBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BuildNoShadow, "buildingSpeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this._buildSpeedBoost + 100]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SaveStorage, "saveStorage", new s.LocalizedNumberVO(this.maxStorageValue), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (!c.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_UnitAmount_Keep, "unitsInCourtyard_limit_player_tooltip", new s.LocalizedNumberVO(this.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (!c.SpecialServerHelper.isOnSpecialServer) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_AllianceDefenseUnitAmountYardBonus, "allianceDefenseUnitAmount", new s.LocalizedNumberVO(this.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_ALLIANCE_DEFENSE_UNIT_AMOUNT_YARD_BONUS).strength), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
  };
  Object.defineProperty(KeepBuildingVO.prototype, "taxInfoVO", {
    get: function () {
      return u.CastleModel.taxData.taxInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KeepBuildingVO.prototype, "hasFlag", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  KeepBuildingVO.prototype.getUpgradeInfoString = function () {
    if (this._level >= 5) {
      return "keep_upgrade_LegendTemple_info";
    } else {
      return e.prototype.getUpgradeInfoString.call(this);
    }
  };
  return KeepBuildingVO;
}(g.AResourceProductionBuildingVO);
exports.KeepBuildingVO = C;
var _ = require("./33.js");
a.classImplementsInterfaces(C, "IShopVO", "ICostVO", "IInventoryVO");