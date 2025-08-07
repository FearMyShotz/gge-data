Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./16.js");
var p = require("./4.js");
var h = require("./2628.js");
var g = require("./176.js");
var C = require("./65.js");
var _ = function (e) {
  function ADecoBuildingVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._fusionInfoVO = new h.FusionForgeItemInfoVO();
    return t;
  }
  n.__extends(ADecoBuildingVO, e);
  ADecoBuildingVO.prototype.parseServerInfoShort = function (e) {
    this._wodId = e.WID;
    this._objectId = e.OID;
    this._fusionInfoVO.serverXP = u.int(e.FXP);
    this._fusionInfoVO.uniqueId = u.int(e.UID ? e.UID : -1);
  };
  ADecoBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._fusionInfoVO.parseXmlNode(t);
  };
  ADecoBuildingVO.prototype.cloneFrom = function (t) {
    e.prototype.cloneFrom.call(this, t);
    var i = t;
    if (i) {
      this._fusionInfoVO.serverXP = u.int(i._fusionInfoVO.serverXP);
      this._fusionInfoVO.uniqueId = u.int(i._fusionInfoVO.uniqueId);
    }
  };
  Object.defineProperty(ADecoBuildingVO.prototype, "decoPoints", {
    get: function () {
      if (this._fusionInfoVO.isForged()) {
        return c.FusionConst.getDecorationPointsFromFusionLevel(this._fusionInfoVO.getCurrentLevel());
      } else if (this._fusionInfoVO.initialFusionLevel > 0 && this._decoPoints <= 0) {
        return c.FusionConst.getDecorationPointsFromFusionLevel(this._fusionInfoVO.initialFusionLevel);
      } else {
        return Object.getOwnPropertyDescriptor(C.AEffectBuildingVO.prototype, "decoPoints").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AEffectBuildingVO.prototype, "decoPoints").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ADecoBuildingVO.prototype.getUpgradeInfoString = function () {
    return "";
  };
  ADecoBuildingVO.prototype.isFusionRelevant = function () {
    return true;
  };
  Object.defineProperty(ADecoBuildingVO.prototype, "uniqueBuildingId", {
    get: function () {
      return this._fusionInfoVO.uniqueId;
    },
    enumerable: true,
    configurable: true
  });
  ADecoBuildingVO.prototype.isUnique = function () {
    return this.fusionInfoVO.isForged();
  };
  ADecoBuildingVO.prototype.createStorageDialogItems = function (e) {
    var t = this.allBuildingEffects && this.allBuildingEffects.length > 0;
    if (t) {
      this.createAdditionalEffectItems(e);
    }
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GridSize, "gridSize", new r.LocalizedTextVO("filter_gridSize_custom", [this.width, this.height]));
    if (this.mightValue > 0 && !t) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might_starOnly_noShadow, "playerMight", new l.LocalizedNumberVO(this.mightValue));
    }
    if (this.morality > 0 && !t) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_Morality, "morality", new l.LocalizedNumberVO(this.morality));
    } else if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new l.LocalizedNumberVO(this.decoPoints));
    }
    if ((!!this.fusionInfoVO.isFusionSource || !!this.fusionInfoVO.isFusionTarget) && !t) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Fusion_Level, "fusionLevel", new l.LocalizedNumberVO(this.fusionInfoVO.getCurrentLevel()));
    }
  };
  ADecoBuildingVO.prototype.createAdditionalEffectItems = function (e) {
    this.allBuildingEffects.forEach(function (t) {
      var i = t.effect.effectType.type.simpleEffectIconClass;
      var n = s.Localize.text("effect_name_" + t.effect.getEnhancedName(t.effectValue)) + (g.CastleDataHolder.instance.showEffectTypeIDs ? "  || TypeID: " + t.effect.effectTypeID + " ||" : "");
      var a = p.CastleModel.effectsData.getEffectCap(t.effect.capId);
      var l = a ? a.maxTotalBonus : Number.MAX_VALUE;
      var c = s.Localize.text(t.effect.effectType.type.simpleValueTextID == o.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [l]);
      var u = l < Number.MAX_VALUE ? s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [n, c]) : n;
      e.addInfoItem(i, u, new r.LocalizedTextVO(t.effect.effectType.type.simpleValueTextID, t.effectValue.textReplacements), d.ClientConstColor.FONT_DEFAULT_COLOR, false, false, true);
    });
  };
  Object.defineProperty(ADecoBuildingVO.prototype, "fusionInfoVO", {
    get: function () {
      return this._fusionInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return ADecoBuildingVO;
}(C.AEffectBuildingVO);
exports.ADecoBuildingVO = _;
a.classImplementsInterfaces(_, "IShopVO", "ICostVO", "IInventoryVO", "IUniqueBuildingVO");