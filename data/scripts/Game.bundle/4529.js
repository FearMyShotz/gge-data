Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./15.js");
var d = require("./876.js");
var p = require("./4.js");
var h = function (e) {
  function ShoppingCartPrimeSaleEventVO() {
    var t = this;
    t._typeIds = [];
    t._lifeTimeSpent = -1;
    t._useSpent90Days = false;
    t._spent90Days = 0;
    t._level = -1;
    t._limit = -1;
    t._timesBuyable = -1;
    t._c2Payed = 0;
    t._cartsPaid = 0;
    t._c2Needed = 1337;
    t._shoppingCartOptionIds = [];
    t._shoppingCartOptionsIdsByCategory = [];
    t._averageBonus = 0;
    t._valid = true;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ShoppingCartPrimeSaleEventVO, e);
  ShoppingCartPrimeSaleEventVO.prototype.parseParamObject = function (e) {
    var t = e[r.CommKeys.TYPE_IDS];
    if (!t) {
      this._valid = false;
      o.error("ShoppingCart event needs type ids!");
      return;
    }
    var i = t.length;
    if (i != ShoppingCartPrimeSaleEventVO.TYPE_COUNT) {
      this._valid = false;
      o.error("ShoppingCart event needs " + ShoppingCartPrimeSaleEventVO.TYPE_COUNT + " type ids!");
      return;
    }
    this._level = c.int(e[r.CommKeys.LEVEL]);
    if (e.hasOwnProperty(r.CommKeys.SHOPPING_CART) && s.instanceOfClass(e[r.CommKeys.SHOPPING_CART], "Array")) {
      this._shoppingCartOptionIds = e[r.CommKeys.SHOPPING_CART];
    } else {
      this._shoppingCartOptionIds = [];
    }
    this._c2Needed = c.int(e[r.CommKeys.CURRENCY_2]);
    this._limit = c.int(e[r.CommKeys.LIMIT]);
    this.c2Payed = e[r.CommKeys.PAYED_C2];
    this._lifeTimeSpent = c.int(e[r.CommKeys.LIFETIME_SPENT_C2]);
    this._useSpent90Days = e[r.CommKeys.USE_90_DAYS_SPENT] != 0;
    this._spent90Days = c.int(e[r.CommKeys.C2_SPENT_90_DAYS]);
    this._typeIds = [];
    var n = 0;
    var a = 0;
    for (var u = 0; u < i; u++) {
      if (u % l.ShoppingCartConst.OPTIONS_PER_GROUP == 0) {
        n++;
      }
      var d = c.int(t[u]);
      var h = p.CastleModel.shoppingCartPrimeDayData.getNodeByTypeAndGroupWithEvent(d, n, this);
      if (!h) {
        this._valid = false;
        o.error("No node found for type " + d + " and group " + n);
        break;
      }
      a += h.shownOfferBonus;
      this._typeIds.push(d);
    }
    this._averageBonus = c.int(a / i);
    this._valid = this._timesBuyable > 0;
  };
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "shoppingCartOptionIds", {
    get: function () {
      return this._shoppingCartOptionIds;
    },
    set: function (e) {
      this._shoppingCartOptionIds = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "shoppingCartOptionsIdsByCategory", {
    get: function () {
      return this._shoppingCartOptionsIdsByCategory;
    },
    set: function (e) {
      this._shoppingCartOptionsIdsByCategory = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "typeIds", {
    get: function () {
      return this._typeIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "averageBonus", {
    get: function () {
      return this._averageBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "lifeTimeSpent", {
    get: function () {
      return this._lifeTimeSpent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "c2Payed", {
    get: function () {
      return this._c2Payed % this._c2Needed;
    },
    set: function (e) {
      this._c2Payed = e;
      this._timesBuyable = c.int(this._limit - c.int(this._c2Payed / this._c2Needed));
      if (this._timesBuyable > 0) {
        u.CastleBasicController.getInstance().dispatchEvent(new d.CastleShoppingCartPrimeDayEvent(d.CastleShoppingCartPrimeDayEvent.UPDATE_DIALOG));
      } else {
        u.CastleBasicController.getInstance().dispatchEvent(new d.CastleShoppingCartPrimeDayEvent(d.CastleShoppingCartPrimeDayEvent.SOLD_OUT));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "c2Needed", {
    get: function () {
      return this._c2Needed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "rewardCount", {
    get: function () {
      return c.int(this._c2Payed / this._c2Needed);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "cartsPaid", {
    get: function () {
      return this._cartsPaid;
    },
    set: function (e) {
      this._cartsPaid = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "timesBuyable", {
    get: function () {
      return this._timesBuyable;
    },
    enumerable: true,
    configurable: true
  });
  ShoppingCartPrimeSaleEventVO.prototype.canBeAddedToActiveEvents = function () {
    return this._valid;
  };
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "spent90Days", {
    get: function () {
      return this._spent90Days;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShoppingCartPrimeSaleEventVO.prototype, "useSpent90Days", {
    get: function () {
      return this._useSpent90Days;
    },
    enumerable: true,
    configurable: true
  });
  ShoppingCartPrimeSaleEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, g.CastleShoppingCartPrimeDayDialog, null);
  };
  ShoppingCartPrimeSaleEventVO.TYPE_COUNT = 18;
  return ShoppingCartPrimeSaleEventVO;
}(require("./79.js").ASpecialEventVO);
exports.ShoppingCartPrimeSaleEventVO = h;
var g = require("./493.js");
a.classImplementsInterfaces(h, "IEventOverviewable");