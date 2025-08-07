Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./904.js");
var a = require("./60.js");
var s = require("./411.js");
var r = require("./181.js");
var l = require("./123.js");
var c = require("./291.js");
var u = require("./254.js");
var d = require("./567.js");
var p = require("./479.js");
var h = require("./860.js");
var g = require("./1262.js");
var C = require("./1263.js");
var _ = require("./337.js");
var m = require("./289.js");
var f = require("./299.js");
var O = function (e) {
  function PrivateBestsellerShopPackageVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PrivateBestsellerShopPackageVO, e);
  PrivateBestsellerShopPackageVO.prototype.fillFromPBSOffer = function (e, t) {
    this._parentOfferID = t;
    this._rewards = e.getTotalRewardListFromOfferVO();
    this._costs = e.getAdditionalComponentByName(a.ClientConstOffer.OFFER_ADDITIONAL_COSTS).costList;
    this._packageType = this.createPackageType();
    this._ignoreResourceStorageCapacity = e.getRewardComponentByName(a.ClientConstOffer.OFFER_REWARD_EMPIRE_STANDARD).getOverload();
    var i = e.getQuestConditionByName(a.ClientConstOffer.QUEST_CONDITION_INTEGER_BOUGHT_OFFER_REWARD);
    if (i) {
      var n = i.conditionTextReplacements;
      this._stock = n[1];
      this.boughtCount = n[0];
    }
  };
  PrivateBestsellerShopPackageVO.prototype.createPackageType = function () {
    var e = this._rewards.getItemByIndex(0);
    if (e instanceof s.CollectableItemUnitVO) {
      if (e.unitVO instanceof r.ToolUnitVO) {
        return l.ClientConstPackages.PACKAGE_TYPE_TOOL;
      } else {
        return l.ClientConstPackages.PACKAGE_TYPE_SOLDIER;
      }
    } else if (e instanceof c.CollectableItemBuildingVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_DECO;
    } else if (e instanceof u.ACollectableItemResourceVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_RESOURCES;
    } else if (e instanceof d.ACollectableItemGemVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_GEM;
    } else if (e instanceof p.ACollectableItemEquipmentVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_ITEM;
    } else if (e instanceof p.ACollectableItemEquipmentVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_HERO;
    } else if (e instanceof f.ACollectableItemPercentageBoosterVE) {
      return l.ClientConstPackages.PACKAGE_TYPE_BOOSTER;
    } else if (e instanceof h.CollectableItemPlagueDoctorVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_PLAGUEMONK;
    } else if (e instanceof g.CollectableItemVipPointVO || e instanceof C.CollectableItemVipTimeVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_VIP;
    } else if (e instanceof _.CollectableItemConstructionItemVO) {
      return l.ClientConstPackages.PACKAGE_TYPE_CONSTRUCTION_ITEM;
    } else if (e instanceof m.CollectableItemRelicVO) {
      if (e.type == m.CollectableItemRelicVO.TYPE_GEM) {
        return l.ClientConstPackages.PACKAGE_TYPE_RELIC_GEM;
      } else {
        return l.ClientConstPackages.PACKAGE_TYPE_RELIC_ITEM;
      }
    } else {
      return "";
    }
  };
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "usePackageNameAndDescription", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "nameTextID", {
    get: function () {
      return this.firstReward.getNameTextId();
    },
    enumerable: true,
    configurable: true
  });
  PrivateBestsellerShopPackageVO.prototype.getCostList = function () {
    return this._costs.clone();
  };
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "c2Discount", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateBestsellerShopPackageVO.prototype, "parentOfferID", {
    get: function () {
      return this._parentOfferID;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateBestsellerShopPackageVO;
}(o.EventPackageVO);
exports.PrivateBestsellerShopPackageVO = O;