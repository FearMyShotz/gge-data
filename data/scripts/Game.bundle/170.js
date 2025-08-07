Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./54.js");
var s = require("./4.js");
var r = require("./2112.js");
var l = function (e) {
  function CastlePremiumMarketCollectionData() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastlePremiumMarketCollectionData, e);
  CastlePremiumMarketCollectionData.prototype.reset = function () {
    e.prototype.reset.call(this);
    if (this.premiumShopVOs != null) {
      for (var t = 0, i = this.premiumShopVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.reset();
        }
      }
    }
    this.initShopVOList();
  };
  CastlePremiumMarketCollectionData.prototype.init = function (e) {
    this.parseXML(e);
    this.initShopVOList();
  };
  CastlePremiumMarketCollectionData.prototype.initShopVOList = function () {
    this.premiumShopVOs = [];
    this.premiumShopVOs.push(s.CastleModel.boostData.taxBribeVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.marauderVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.overseerFoodVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.overseerWoodVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.overseerStoneVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.overseerMeadVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.overseerBeefVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.overseerHoneyVO);
    this.premiumShopVOs.push(new h.CastlePeaceProtectionPremiumShopVO());
    this.premiumShopVOs.push(new c.CastleFactionProtectionPremiumShopVO());
    this.premiumShopVOs.push(new _.CastleUnitSlotPremiumShopVO());
    this.premiumShopVOs.push(new C.CastleToolSlotPremiumShopVO());
    this.premiumShopVOs.push(s.CastleModel.boostData.instructorVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.caravanOverloaderVO);
    this.premiumShopVOs.push(s.CastleModel.boostData.returnSpeedBoosterVO);
    this.premiumShopVOs.push(new d.CastleFlagPremiumShopVO());
    this.premiumShopVOs.push(new p.CastleOpenGatePremiumShopVO());
    this.premiumShopVOs.push(new u.CastleFestivalPremiumShopVO());
    this.premiumShopVOs.push(new g.CastleRelocateShopVO());
  };
  CastlePremiumMarketCollectionData.prototype.getShopVOsByType = function (e) {
    var t = [];
    if (this.premiumShopVOs != null) {
      for (var i = 0, n = this.premiumShopVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isType(e) && o.isVisible) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortByPriorty));
    return t;
  };
  CastlePremiumMarketCollectionData.prototype.sortByPriorty = function (e, t) {
    return e.listSortPriority - t.listSortPriority;
  };
  CastlePremiumMarketCollectionData.prototype.parseXML = function (e) {
    var t;
    var i = e.feasts;
    var n = i.length;
    var o = 0;
    var a = 0;
    var s = 0;
    var l = 0;
    var c = 0;
    var u = 0;
    var d = 0;
    var p = 0;
    this._festivalItemVOs = [];
    for (var h = 0; h < n; h++) {
      o = parseInt(i[h].feastID);
      a = parseInt(i[h].minLevel);
      s = parseInt(i[h].maxLevel);
      c = parseInt(i[h].duration);
      u = parseInt(i[h].costFood);
      d = parseInt(i[h].costC2);
      l = parseInt(i[h].productionBoost);
      p = parseInt(i[h].sortOrder) - 1;
      t = i[h].type;
      this._festivalItemVOs.push(new r.PremiumFestivalItemVO(o, a, s, c, l, u, d, t, p));
    }
    this._festivalItemVOs.sort(this.bindFunction(this.sortBySortOrder));
  };
  CastlePremiumMarketCollectionData.prototype.sortBySortOrder = function (e, t) {
    if (e.sortOrder < t.sortOrder) {
      return -1;
    } else if (e.sortOrder > t.sortOrder) {
      return 1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastlePremiumMarketCollectionData.prototype, "numFestivalItems", {
    get: function () {
      return this._festivalItemVOs.length;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketCollectionData.prototype.getFestivalItemBySortorder = function (e) {
    if (this._festivalItemVOs != null) {
      for (var t = 0, i = this._festivalItemVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.sortOrder == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastlePremiumMarketCollectionData.prototype.getFestivalItemByID = function (e) {
    if (this._festivalItemVOs != null) {
      for (var t = 0, i = this._festivalItemVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastlePremiumMarketCollectionData.prototype.getFestivalItemsByLevel = function (e) {
    var t = [];
    if (this._festivalItemVOs != null) {
      for (var i = 0, n = this._festivalItemVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e >= o.minLevel && e <= o.maxLevel) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortBySortOrder));
    return t;
  };
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO = "hero";
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_TOOL = "tool";
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST = "rest";
  CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT = "event";
  return CastlePremiumMarketCollectionData;
}(a.CastleBasicData);
exports.CastlePremiumMarketCollectionData = l;
var c = require("./2113.js");
var u = require("./1212.js");
var d = require("./2589.js");
var p = require("./2592.js");
var h = require("./2593.js");
var g = require("./2594.js");
var C = require("./2595.js");
var _ = require("./2596.js");
o.classImplementsInterfaces(l, "IUpdatable", "ICastleBasicData");