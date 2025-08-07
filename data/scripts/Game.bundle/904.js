Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./123.js");
var u = require("./22.js");
var d = require("./4.js");
var p = function () {
  function EventPackageVO() {
    this._packageID = 0;
    this._rewards = new C.CollectableList();
    this._isBannerPackage = false;
    this._fillUpResourceStorage = false;
    this._ignoreResourceStorageCapacity = false;
    this._fillAllStorages = false;
    this._minLevel = 0;
    this._maxLevel = 0;
    this._minLegendLevel = 0;
    this._maxLegendLevel = 0;
    this._lifetimeSpentMin = 0;
    this._lifetimeSpentMax = 0;
    this._notRebuyable = false;
    this._stock = 0;
    this._boughtCount = 0;
    this._buyAgainReducedCostC2 = 0;
    this._sortOrder = 0;
    this._isGiftPackage = false;
    this._highlightOrderLeft = 0;
    this._highlightOrderRight = 0;
    this._topPackage = false;
    this._bundlePackageIds = [];
    this._hideInShop = false;
    this._filterRelationIDs = [];
    this._filterRelationVOs = [];
    this._disabledOnGlobalServer = false;
    this._maxBuyPerClick = n.PackageConst.MAX_BUY_PER_CLICK;
  }
  EventPackageVO.prototype.fillFromParamXML = function (e) {
    var t = this;
    this._packageID = parseInt(u.CastleXMLUtils.getValueOrDefault("packageID", e, "-1", true));
    this._packageType = u.CastleXMLUtils.getValueOrDefault("packageType", e, "0");
    this._costs = h.CollectableManager.parser.x2cEventPackages.createCostList(e);
    this._rewards = h.CollectableManager.parser.x2cEventPackages.createRewardList(e);
    this._minLevel = parseInt(u.CastleXMLUtils.getValueOrDefault("minLevel", e, "0"));
    this._maxLevel = parseInt(u.CastleXMLUtils.getValueOrDefault("maxLevel", e, "99"));
    this._minLegendLevel = parseInt(u.CastleXMLUtils.getValueOrDefault("minLegendLevel", e, "0"));
    this._maxLegendLevel = parseInt(u.CastleXMLUtils.getValueOrDefault("maxLegendLevel", e, o.PlayerConst.LEGEND_LEVEL_CAP.toString()));
    this._sortOrder = parseFloat(u.CastleXMLUtils.getValueOrDefault("sortOrder", e, "0"));
    this._stock = parseInt(u.CastleXMLUtils.getValueOrDefault("stock", e, "-1"));
    this._isBannerPackage = parseInt(u.CastleXMLUtils.getValueOrDefault("isBannerPackage", e, "0")) == 1;
    this._fillUpResourceStorage = parseInt(u.CastleXMLUtils.getValueOrDefault("fillUpResourceStorage", e, "0")) == 1;
    this._ignoreResourceStorageCapacity = parseInt(u.CastleXMLUtils.getValueOrDefault("ignoreResourceStorageCapacity", e, "0")) == 1;
    this._buyAgainReducedCostC2 = parseInt(u.CastleXMLUtils.getValueOrDefault("buyAgainReducedCostC2", e, "0"));
    this._notRebuyable = parseInt(u.CastleXMLUtils.getValueOrDefault("notRebuyable", e, "0")) == 1;
    this._fillAllStorages = parseInt(u.CastleXMLUtils.getValueOrDefault("fillAllStorages", e, "0")) == 1;
    this._highlightOrderLeft = parseInt(u.CastleXMLUtils.getValueOrDefault("highlightOrderLeft", e, "0"));
    this._highlightOrderRight = parseInt(u.CastleXMLUtils.getValueOrDefault("highlightOrderRight", e, "0"));
    this._lifetimeSpentMax = parseInt(u.CastleXMLUtils.getValueOrDefault("c2LifetimeSpentMax", e, "0"));
    this._lifetimeSpentMin = parseInt(u.CastleXMLUtils.getValueOrDefault("c2LifetimeSpentMin", e, "0"));
    this._isGiftPackage = parseInt(u.CastleXMLUtils.getValueOrDefault("isGiftPackage", e, "0")) == 1;
    this._hideInShop = parseInt(u.CastleXMLUtils.getValueOrDefault("hideInShop", e, "0")) == 1;
    this._boughtCount = 0;
    this._filterRelationVOs = [];
    this._filterRelationIDs = u.CastleXMLUtils.getIntArrayFromString(u.CastleXMLUtils.getValueOrDefault("relationIDs", e, ""), ",");
    this._filterRelationIDs.forEach(function (e) {
      return t._filterRelationVOs.push(d.CastleModel.eventPackageData.getFilterRelationByID(e));
    });
    this._maxBuyPerClick = parseInt(u.CastleXMLUtils.getValueOrDefault("maxBuyPerClick", e, n.PackageConst.MAX_BUY_PER_CLICK.toString()));
    var i = u.CastleXMLUtils.getValueOrDefault("excludedAreaTypes", e, "").split(",");
    this._excludedAreaTypes = [];
    if (i != null) {
      for (var a = 0, s = i; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && r != "" && parseInt(r) != -1) {
          this._excludedAreaTypes.push(parseInt(r));
        }
      }
      this._disabledOnGlobalServer = parseInt(u.CastleXMLUtils.getValueOrDefault("disabledOnGlobalServer", e, "0")) == 1;
    }
    this._bundlePackageIds = [];
    for (var l = u.CastleXMLUtils.getValueOrDefault("packageIDs", e, "").split(","), c = 0; c < l.length; ++c) {
      this._bundlePackageIds.push(parseInt(l[c]));
    }
  };
  EventPackageVO.prototype.parseRewards = function (e) {
    this._rewards = h.CollectableManager.parser.x2cEventPackages.createRewardList(e);
  };
  Object.defineProperty(EventPackageVO.prototype, "boughtCount", {
    set: function (e) {
      this._boughtCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isStockLimited", {
    get: function () {
      return this._notRebuyable || this._stock > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "remainingStock", {
    get: function () {
      if (this._stock > 0) {
        return Math.max(this._stock - this._boughtCount, 0);
      } else if (this._notRebuyable) {
        return Math.max(1 - this._boughtCount, 0);
      } else {
        return this._maxBuyPerClick;
      }
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.isAvailable = function () {
    return this.remainingStock > 0;
  };
  Object.defineProperty(EventPackageVO.prototype, "isNotRebuyable", {
    get: function () {
      return this._notRebuyable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "packageID", {
    get: function () {
      return this._packageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "basicPriceC2", {
    get: function () {
      for (var e = 0, t = this._costs.list; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.itemType == g.CollectableEnum.C2) {
          if (this.fillUpResourceStorage) {
            return this.calculateFillUpResourceStoragePrice();
          } else if (this.fillAllStorages) {
            return d.CastleModel.eventPackageData.packagePrice;
          } else {
            return i.amount;
          }
        }
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.calculateFillUpResourceStoragePrice = function () {
    var e = [g.CollectableEnum.WOOD, g.CollectableEnum.STONE, g.CollectableEnum.FOOD, g.CollectableEnum.COAL, g.CollectableEnum.OIL, g.CollectableEnum.GLASS, g.CollectableEnum.IRON];
    var t = [];
    var i = 0;
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          t[i++] = this.getAmount(s) ? d.CastleModel.areaData.getActiveStorageItem(s).freeSpace : 0;
        }
      }
    }
    return l.int(a.ResourceConst.getC2PriceForResources(t));
  };
  Object.defineProperty(EventPackageVO.prototype, "basicPriceC1", {
    get: function () {
      return this._costs.getAmountOrDefaultByType(g.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "priceC1", {
    get: function () {
      return d.CastleModel.costsData.getFinalCostsC1(this.basicPriceC1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "priceC2", {
    get: function () {
      var e = O.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageID) / 100;
      return d.CastleModel.costsData.getFinalCostsC2(this.basicPriceC2, null, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "c2Discount", {
    get: function () {
      return O.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageID);
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.getAmount = function (e) {
    for (var t = 0, i = this._rewards.list; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.itemType == e) {
        return l.int(n.amount);
      }
    }
    return 0;
  };
  EventPackageVO.prototype.getAmounts = function () {
    var e = [];
    for (var t = 0, i = this._rewards.list; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        e.push(n.amount);
      }
    }
    return e;
  };
  Object.defineProperty(EventPackageVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "minLegendLevel", {
    get: function () {
      return this._minLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxLegendLevel", {
    get: function () {
      return this._maxLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.isPackageAvailableByArea = function (e) {
    return this._excludedAreaTypes.indexOf(e) < 0;
  };
  EventPackageVO.prototype.isPackageAvailableByLevel = function (e, t = 0) {
    return e >= this._minLevel && e <= this._maxLevel && t >= this._minLegendLevel && t <= this._maxLegendLevel;
  };
  EventPackageVO.prototype.isAvailableByUnlockedKingdoms = function () {
    if (this.fillAllStorages && !this.hasUnlockedEnoughKingdomsForFillAllStorages()) {
      return false;
    }
    var e = d.CastleModel.specialEventData.getActiveEventBySoldPackage(this.packageID);
    return !e || d.CastleModel.kingdomData.isAnyKingdomUnlocked(e.kingdomIDs);
  };
  EventPackageVO.prototype.hasUnlockedEnoughKingdomsForFillAllStorages = function () {
    var e = l.int(d.CastleModel.kingdomData.numUnlockedKingdoms);
    if (d.CastleModel.kingdomData.isKingdomUnlocked(s.WorldIsland.KINGDOM_ID)) {
      e--;
    }
    return e > 1;
  };
  EventPackageVO.prototype.isVisible = function (e, t, i = 0) {
    return (!i || !!this.isPackageAvailableByArea(i)) && !!this.isPackageAvailableByLevel(e, t) && !!this.isAvailableByUnlockedKingdoms() && !this.hideInShop && this.isAvailableByLifeTimeSpend();
  };
  Object.defineProperty(EventPackageVO.prototype, "descriptionTextID", {
    get: function () {
      if (this.usePackageNameAndDescription) {
        var e = "equipmentPackageDesc_" + this.packageID;
        if (r.Localize.text(e) != e) {
          return e;
        }
      }
      if (this.packageType == c.ClientConstPackages.PACKAGE_TYPE_RESOURCES) {
        if (this.firstReward.itemType == g.CollectableEnum.C1) {
          return "dialog_merchantEventBuy_desc_coins";
        } else if (this.ignoreResourceStorageCapacity) {
          return "dialog_merchantEventBuy_ignoreStorageLimit_desc";
        } else {
          return "dialog_merchantEventBuy_desc";
        }
      } else {
        return this.firstReward.getDescriptionTextId();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "descriptionParams", {
    get: function () {
      if (this.isBannerPackage) {
        return this.getAmounts();
      } else {
        return this.firstReward.getDescriptionTextParams();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "nameTextID", {
    get: function () {
      if (this.usePackageNameAndDescription || this.ignoreResourceStorageCapacity) {
        var e = "equipmentPackageName_" + this.packageID;
        if (r.Localize.text(e) != e) {
          return "equipmentPackageName_" + this.packageID;
        }
      }
      return this.firstReward.getNameTextId();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "nameParams", {
    get: function () {
      return this.firstReward.getNameTextParams();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "usePackageNameAndDescription", {
    get: function () {
      return !!this.isGiftResourcePackage || this.rewards.length == 1 && this.firstReward.itemType == g.CollectableEnum.RELIC_EQUIPMENT || this.usePackageIcon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "usePackageIcon", {
    get: function () {
      return !!this.isRandomReward || this._rewards.length > 1 || this.firstReward.amount > 1 && (this.firstReward.itemType == g.CollectableEnum.EQUIPMENT_RARENESS || this.firstReward.itemType == g.CollectableEnum.HERO_RANDOM || this.firstReward.itemType == g.CollectableEnum.GEM_RANDOM);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isGiftResourcePackage", {
    get: function () {
      return this.isGiftPackage && this.packageType == c.ClientConstPackages.PACKAGE_TYPE_RESOURCES;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.getCostList = function () {
    var e = new C.CollectableList();
    for (var t = 0, i = this._costs.list; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        switch (n.itemType) {
          case g.CollectableEnum.C1:
            e.addItem(new _.CollectableItemC1VO(this.priceC1));
            break;
          case g.CollectableEnum.C2:
            e.addItem(new m.CollectableItemC2VO(this.priceC2));
            break;
          default:
            e.addItem(n.clone());
        }
      }
    }
    return e;
  };
  Object.defineProperty(EventPackageVO.prototype, "price", {
    get: function () {
      var e = this.getCostList();
      if (e.length > 0) {
        return e.getItemByIndex(0);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isBannerPackage", {
    get: function () {
      return this._isBannerPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "fillUpResourceStorage", {
    get: function () {
      return this._fillUpResourceStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "ignoreResourceStorageCapacity", {
    get: function () {
      return this._ignoreResourceStorageCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "packageType", {
    get: function () {
      return this._packageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "notRebuyable", {
    get: function () {
      return this._notRebuyable;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.isAvailableByLifeTimeSpend = function () {
    var e = l.int(d.CastleModel.userData.lifeTimeSpent);
    return e >= this._lifetimeSpentMin && (this._lifetimeSpentMax == 0 || e <= this._lifetimeSpentMax);
  };
  Object.defineProperty(EventPackageVO.prototype, "isReducedPriceC2WhenBoughtAgain", {
    get: function () {
      return this._buyAgainReducedCostC2 > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "rebuyPriceC2Reduction", {
    get: function () {
      if (this.isReducedPriceC2WhenBoughtAgain) {
        return 1 - this._buyAgainReducedCostC2 / this.basicPriceC2;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "priceC2WithRebuyReduction", {
    get: function () {
      return d.CastleModel.costsData.getFinalCostsC2(this.basicPriceC2, null, this.maxPriceReductionC2WithRebuyReduction);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxPriceReductionC2WithRebuyReduction", {
    get: function () {
      var e = O.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.packageID) / 100;
      return d.CastleModel.costsData.getMaxPriceC2Reduction(false, Math.max(e, this.rebuyPriceC2Reduction));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "initialStock", {
    get: function () {
      return this._stock;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "mayBeBoughtInBulk", {
    get: function () {
      switch (this.reward.itemType) {
        case g.CollectableEnum.HERO_RANDOM:
        case g.CollectableEnum.EQUIPMENT_RARENESS:
        case g.CollectableEnum.BUILDING:
        case g.CollectableEnum.GEM_RANDOM:
          return false;
      }
      return !this.hasCustomPrice && !this.isBannerPackage && !this.isNotRebuyable && !this.isRandomReward && this.initialStock != 1 && this.remainingStock > 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isRandomReward", {
    get: function () {
      return this.firstReward.itemType == g.CollectableEnum.RANDOM_REWARD;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "hasCustomPrice", {
    get: function () {
      return this._fillAllStorages || this._fillUpResourceStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "fillAllStorages", {
    get: function () {
      return this._fillAllStorages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "highlightOrderLeft", {
    get: function () {
      return this._highlightOrderLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "highlightOrderRight", {
    get: function () {
      return this._highlightOrderRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isTopPackage", {
    get: function () {
      return this._topPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "topPackage", {
    set: function (e) {
      this._topPackage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "isGiftPackage", {
    get: function () {
      return this._isGiftPackage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "firstReward", {
    get: function () {
      return this._rewards.getItemByIndexSave(0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "reward", {
    get: function () {
      if (this.usePackageIcon) {
        this._packageItem ||= new f.CollectableItemEventPackageVO(this._packageID);
        return this._packageItem;
      } else {
        return this.firstReward;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "bundlePackageIds", {
    get: function () {
      return this._bundlePackageIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "hideInShop", {
    get: function () {
      return this._hideInShop;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageVO.prototype.getXmlCosts = function () {
    return this._costs;
  };
  EventPackageVO.prototype.getSearchString = function () {
    var e = "";
    e += this.packageID;
    e += r.Localize.text(this.nameTextID, this.nameParams);
    if (this.rewards && this.rewards.list.length > 0) {
      this.rewards.list.forEach(function (t) {
        return e += t.getSearchString();
      });
    }
    if (this.bundlePackageIds.length > 0) {
      this.bundlePackageIds.forEach(function (t) {
        var i = d.CastleModel.eventPackageData.getEventPackageByID(t);
        if (i) {
          e += i.getSearchString();
        }
      });
    }
    return e.toLowerCase();
  };
  Object.defineProperty(EventPackageVO.prototype, "filterRelationIDs", {
    get: function () {
      return this._filterRelationIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "filterRelationVOs", {
    get: function () {
      return this._filterRelationVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "maxBuyPerClick", {
    get: function () {
      return this._maxBuyPerClick;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageVO.prototype, "disabledOnGlobalServer", {
    get: function () {
      return this._disabledOnGlobalServer;
    },
    enumerable: true,
    configurable: true
  });
  return EventPackageVO;
}();
exports.EventPackageVO = p;
var h = require("./50.js");
var g = require("./12.js");
var C = require("./48.js");
var _ = require("./234.js");
var m = require("./128.js");
var f = require("./1261.js");
var O = require("./190.js");