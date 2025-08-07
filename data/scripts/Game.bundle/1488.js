Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./35.js");
var l = require("./367.js");
var c = require("./1489.js");
var u = require("./566.js");
var d = function (e) {
  function CastleExpansionVO() {
    var t = e.call(this) || this;
    t._direction = 0;
    t._expansionType = c.IsoExpansionEnum.NORMAL;
    t._name = "Castle";
    t._group = "Expansion";
    t._type = "";
    return t;
  }
  n.__extends(CastleExpansionVO, e);
  Object.defineProperty(CastleExpansionVO.prototype, "userHasResourcesForBuy", {
    get: function () {
      var e = new l.CollectablesCosts(s.CastleModel.expansionCostsData.getExpandCostNormal());
      return h.CostHelper.canAfford(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "userHasC2ForBuy", {
    get: function () {
      return s.CastleModel.currencyData.c2Amount >= s.CastleModel.costsData.getFinalCostsC2(s.CastleModel.expansionCostsData.getExpandCostC2());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "userHasLevelForBuyPremium", {
    get: function () {
      var e = a.int(o.ConstructionConst.getExpandLimitForC2(s.CastleModel.userData.userLevel, this.areaData.areaInfo.objectId, this.areaData.areaInfo.kingdomID));
      return this.areaData.isSeasonCamp || this.isoData.objects.groundObjects.expansionAmount < e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "userHasLevelForBuyNormal", {
    get: function () {
      if (!this.isoData) {
        return false;
      }
      var e = a.int(o.ConstructionConst.getExpandLimitForResources(s.CastleModel.userData.userLevel, this.areaData.areaInfo.objectId, this.areaData.areaInfo.kingdomID));
      return this.areaData.isSeasonCamp || this.isoData.objects.groundObjects.expansionAmount < e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isSceatLocked", {
    get: function () {
      var e = s.CastleModel.expansionCostsData.getCurrentExpansionCostsVO();
      return e.sceatSkillLocked > 0 && s.CastleModel.legendSkillData.getSceatSkillEffectValue(r.EffectTypeEnum.EFFECT_TYPE_ENABLE_EXPANSION).rawValues.indexOf(e.expansionID) == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "isClickAvailable", {
    get: function () {
      var e = p.Iso.renderer.objects.provider.getObjectByVO(this);
      return !!e && e.isHoveringOverClickElement;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "areaData", {
    get: function () {
      return this.isoData.areaData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "storageData", {
    get: function () {
      return this.areaData.storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "direction", {
    get: function () {
      return this._direction;
    },
    set: function (e) {
      this._direction = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExpansionVO.prototype, "expansionType", {
    get: function () {
      return this._expansionType;
    },
    set: function (e) {
      this._expansionType = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleExpansionVO;
}(u.AInteractiveIsoObjectVO);
exports.CastleExpansionVO = d;
var p = require("./33.js");
var h = require("./66.js");