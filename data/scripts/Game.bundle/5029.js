Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./33.js");
var h = require("./1028.js");
var g = function (e) {
  function AutoRecruitmentPurchaseDialogProperties(t) {
    var i = this;
    i._listId = 0;
    i._currentLoopCount = 0;
    i._currentRecruitTime = 0;
    i._currentFoodConsumption = 0;
    i._currentKingdomId = u.int(c.WorldClassic.KINGDOM_ID);
    i._foodProductionAfterLoops = 0;
    i._costs = new m.AutoRecruitmentCosts();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._listId = u.int(t.LID);
    i._recruitmentSnapshot = h.AutoRecruitmentHelper.createAutoRecruitSnapshot(i.listId);
    i._currentLoopCount = u.int(h.AutoRecruitmentHelper.getCurrentListLoopCount(i.listId));
    i._currentRecruitTime = u.int(t.CRT);
    i._currentFoodConsumption = u.int(t.CFC);
    i._currentKingdomId = u.int(d.CastleModel.kingdomData.activeKingdomID);
    i._foodProductionAfterLoops = u.int(t.FCAL);
    i.costs.fillByServerData(t);
    return i;
  }
  n.__extends(AutoRecruitmentPurchaseDialogProperties, e);
  AutoRecruitmentPurchaseDialogProperties.prototype.getTotalRecruitTime = function (e, t) {
    var i = 0;
    if (this.recruitmentSnapshot != null) {
      for (var n = 0, o = this.recruitmentSnapshot; n < o.length; n++) {
        var c = o[n];
        if (c !== undefined) {
          var h = u.int(c.ID);
          var g = a.castAs(d.CastleModel.wodData.createVObyWOD(h, C.CastleWodData.TYPE_UNIT), "BasicUnitVO");
          var m = u.int(g.isAuxiliary ? r.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT_IN_FACTION_KINGDOM : r.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT);
          var f = u.int(_.CastleTitleSystemHelper.returnTitleEffectValue(p.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, h).getValueforWodId(h) + _.CastleTitleSystemHelper.returnTitleEffectValue(p.EffectTypeEnum.EFFECT_TYPE_TOOL_PRODUCTION_SPEED_BOOST, h).getValueforWodId(h));
          var O = u.int(d.CastleModel.militaryData.getBuildingProductionSpeed(g.unitBuildingType) + f);
          if (s.instanceOfClass(g, "SoldierUnitVO")) {
            O -= t;
          }
          var E = u.int(c.IA);
          var y = u.int(g.getBaseRecruitmentTime() * (e && !g.isAvailableInPeaceMode ? l.UnitProductionConst.PEACE_MODE_SLOWDOWN : 1) * E);
          if ((y = Math.ceil(y / (O / 100))) > m * E || g.isLowlevelBoosted) {
            i += y;
          } else {
            i += m * E;
          }
        }
      }
    }
    return i;
  };
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "foodProductionAfterLoops", {
    get: function () {
      return this._foodProductionAfterLoops;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentFoodConsumption", {
    get: function () {
      return this._currentFoodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "recruitmentSnapshot", {
    get: function () {
      return this._recruitmentSnapshot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentRecruitTime", {
    get: function () {
      return this._currentRecruitTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentLoopCount", {
    get: function () {
      return this._currentLoopCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentPurchaseDialogProperties.prototype, "currentKingdomId", {
    get: function () {
      return this._currentKingdomId;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentPurchaseDialogProperties;
}(o.BasicProperties);
exports.AutoRecruitmentPurchaseDialogProperties = g;
var C = require("./56.js");
var _ = require("./117.js");
var m = require("./646.js");