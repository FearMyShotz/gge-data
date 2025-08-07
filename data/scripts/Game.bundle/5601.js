Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./482.js");
var a = require("./4.js");
var s = require("./33.js");
var r = require("./1104.js");
var l = function () {
  function CastleTradeVO() {
    this.kingdomId = 0;
    this.startCastleID = 0;
    this.totalCarriages = 0;
    this.availableCarriages = 0;
    this.wood = 0;
    this.food = 0;
    this.stone = 0;
    this.coal = 0;
    this.oil = 0;
    this.glass = 0;
    this.iron = 0;
    this.mead = 0;
    this.beef = 0;
    this.honey = 0;
    this.targetCastlePosX = 0;
    this.targetCastlePosY = 0;
    this.costs = 0;
    this.travelTime = 0;
    this.travelDistance = NaN;
    this.unitCount = 0;
    this.targetAreaType = 0;
    this.isTravelTimeSubscriptionBoosted = false;
    this._areaEffects = new r.SimpleEffectSource();
  }
  CastleTradeVO.prototype.fillFromParamObject = function (e) {
    this.kingdomId = n.int(e.KID);
    this.startCastleID = n.int(e.CID);
    this.totalCarriages = n.int(e.TC);
    this.availableCarriages = n.int(e.AC);
    this.wood = n.int(e.W);
    this.food = n.int(e.F);
    this.stone = n.int(e.S);
    this.coal = n.int(e.C);
    this.oil = n.int(e.O);
    this.glass = n.int(e.G);
    this.iron = n.int(e.I);
    this.mead = n.int(e.MEAD);
    this.beef = n.int(e.BEEF);
    this.honey = n.int(e.HONEY);
    if (e.AE) {
      this._areaEffects.parseEffects(e.AE);
    }
  };
  CastleTradeVO.prototype.getMaxCapacityForCurrentLevel = function (e) {
    return n.int(a.CastleModel.boostData.getResourcesTransportablePerCarriage(a.CastleModel.boostData.caravanOverloaderVO.level, this.getCapacityBoost(e), this.getCapacityBonus(e))) * this.availableCarriages;
  };
  CastleTradeVO.prototype.getCapacityBoost = function (e) {
    var t = n.int(a.CastleModel.researchData.getResearchEffectValue(s.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST).strength + 100);
    t += n.int(a.CastleModel.subscriptionData.getEffectValue(s.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST));
    return t += this.areaEffects.getEffectValue(s.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST, e).strength;
  };
  CastleTradeVO.prototype.getCapacityBonus = function (e) {
    var t = 0;
    var i = a.CastleModel.lordData.getBaronByCastleId(this.startCastleID);
    if (i) {
      t += n.int(i.getEffectValue(s.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BONUS));
    }
    return t += this.areaEffects.getEffectValue(s.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BONUS, e).strength;
  };
  CastleTradeVO.prototype.getAreaSpeedBoostModifier = function (e) {
    return this.areaEffects.getEffectValue(s.EffectTypeEnum.EFFECT_TYPE_MARKET_SPEED_BONUS, e).strength;
  };
  Object.defineProperty(CastleTradeVO.prototype, "isSubscriptionBuffActive", {
    get: function () {
      return a.CastleModel.subscriptionData.isEffectTypeActive(s.EffectTypeEnum.EFFECT_TYPE_MARKET_CARRIAGE_CAPACITY_BOOST);
    },
    enumerable: true,
    configurable: true
  });
  CastleTradeVO.prototype.getResourcesAsCollectableList = function () {
    var e = new c.CollectableList();
    e.addItem(new _.CollectableItemWoodVO(this.wood));
    e.addItem(new C.CollectableItemStoneVO(this.stone));
    e.addItem(new d.CollectableItemFoodVO(this.food));
    e.addItem(new u.CollectableItemCoalVO(this.coal));
    e.addItem(new g.CollectableItemOilVO(this.oil));
    e.addItem(new p.CollectableItemGlassVO(this.glass));
    e.addItem(new h.CollectableItemIronVO(this.iron));
    e.addItem(new m.CollectableItemMeadVO(this.mead));
    e.addItem(new o.CollectableItemBeefVO(this.beef));
    e.addItem(new f.CollectableItemHoneyVO(this.honey));
    return e;
  };
  Object.defineProperty(CastleTradeVO.prototype, "areaEffects", {
    get: function () {
      return this._areaEffects;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTradeVO;
}();
exports.CastleTradeVO = l;
var c = require("./48.js");
var u = require("./505.js");
var d = require("./453.js");
var p = require("./506.js");
var h = require("./507.js");
var g = require("./508.js");
var C = require("./267.js");
var _ = require("./268.js");
var m = require("./533.js");
var f = require("./637.js");