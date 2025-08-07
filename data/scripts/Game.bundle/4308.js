Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleShoppingCartPrimeDayData(e) {
    this._optionCount = -1;
    this.parseFromXML(e);
    this._optionCount = r.int(Math.min(3, s.ShoppingCartConst.SHOPPING_CART_SIZE));
  }
  CastleShoppingCartPrimeDayData.prototype.parseFromXML = function (e) {
    this.nodesByType = new Map();
    this.nodesByOption = new Map();
    for (var t = 0, i = e.shoppingCarts; t < i.length; t++) {
      var n = i[t];
      if (n != undefined) {
        try {
          var a = new c.CastleShoppingCartPrimeDayXMLNode();
          a.parseXML(n);
          if (!this.nodesByType.has(a.typeId)) {
            this.nodesByType.set(a.typeId, []);
          }
          this.nodesByType.get(a.typeId).push(a);
          this.nodesByOption.set(a.cartOptionId, a);
        } catch (e) {
          o.error(e.stack);
        }
      }
    }
  };
  CastleShoppingCartPrimeDayData.prototype.getNodeByTypeAndGroup = function (e, t) {
    if (this.nodesByType.has(e)) {
      var i = l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY);
      if (i) {
        return this.getNodeByTypeAndGroupWithEvent(e, t, i);
      } else {
        return null;
      }
    }
    return null;
  };
  CastleShoppingCartPrimeDayData.prototype.getNodeByTypeAndGroupWithEvent = function (e, t, i) {
    if (this.nodesByType.has(e)) {
      var n = this.nodesByType.get(e);
      for (var o = r.int(n.length - 1); o >= 0; o--) {
        var a = n[o];
        if (t == a.groupId && this.getMaxTime(a, i) >= this.getLifeTimeSpent(i) && this.getMinTime(a, i) <= this.getLifeTimeSpent(i) && a.maxLevel >= i.level && a.minLevel <= i.level) {
          return a;
        }
      }
    }
    return null;
  };
  CastleShoppingCartPrimeDayData.prototype.getLifeTimeSpent = function (e) {
    return r.int(e.useSpent90Days ? e.spent90Days : e.lifeTimeSpent);
  };
  CastleShoppingCartPrimeDayData.prototype.getMinTime = function (e, t) {
    return r.int(t.useSpent90Days ? e.c290daysMin : e.c2LifetimeSpentMin);
  };
  CastleShoppingCartPrimeDayData.prototype.getMaxTime = function (e, t) {
    return r.int(t.useSpent90Days ? e.c290daysMax : e.c2LifetimeSpentMax);
  };
  CastleShoppingCartPrimeDayData.prototype.getNodeByOption = function (e) {
    return this.nodesByOption.get(e);
  };
  Object.defineProperty(CastleShoppingCartPrimeDayData.prototype, "optionCount", {
    get: function () {
      return this._optionCount;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayData;
}();
exports.CastleShoppingCartPrimeDayData = n;
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./4309.js");