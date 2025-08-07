Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleShoppingCartPrimeDayXMLNode() {
    this._cartOptionId = 0;
    this._typeId = 0;
    this._groupId = 0;
    this._minLevel = 0;
    this._maxLevel = 0;
    this._shownOfferBonus = 0;
    this._rewardID = 0;
    this._c2LifetimeSpentMin = 0;
    this._c2LifetimeSpentMax = 0;
    this._c290daysMin = 0;
    this._c290daysMax = 0;
  }
  CastleShoppingCartPrimeDayXMLNode.prototype.parseXML = function (e) {
    this._cartOptionId = parseInt(a.CastleXMLUtils.getValueOrDefault("cartOptionID", e, "-1", true));
    this._typeId = parseInt(a.CastleXMLUtils.getValueOrDefault("typeID", e, "-1", true));
    this._groupId = parseInt(a.CastleXMLUtils.getValueOrDefault("groupID", e, "-1", true));
    this._minLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("minLevel", e, "6", true));
    this._maxLevel = parseInt(a.CastleXMLUtils.getValueOrDefault("maxLevel", e, "870", true));
    this._shownOfferBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("shownOfferBonus", e, "-1", true));
    this._rewardID = parseInt(a.CastleXMLUtils.getValueOrDefault("rewardID", e, "-1", true));
    this._c2LifetimeSpentMin = parseInt(a.CastleXMLUtils.getValueOrDefault("c2LifetimeSpentMin", e, "-1", false));
    this._c2LifetimeSpentMax = e.c2LifetimeSpentMax !== undefined ? o.int(e.c2LifetimeSpentMax) : Number.MAX_VALUE;
    this._c290daysMin = parseInt(a.CastleXMLUtils.getValueOrDefault("C290daysMin", e, "-1", false));
    this._c290daysMax = e.C290daysMax !== undefined ? o.int(e.C290daysMax) : Number.MAX_VALUE;
    var t = s.CastleModel.rewardData.getListById(this._rewardID);
    if (!t) {
      throw new Error("Invalid reward id " + this._rewardID);
    }
    if (t.length > 1) {
      throw new Error("Reward " + this._rewardID + "doesn't contain only 1 item!");
    }
    this._item = t.getItemByIndexSave(0);
  };
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "cartOptionId", {
    get: function () {
      return this._cartOptionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "typeId", {
    get: function () {
      return this._typeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "groupId", {
    get: function () {
      return this._groupId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "shownOfferBonus", {
    get: function () {
      return this._shownOfferBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "rewardID", {
    get: function () {
      return this._rewardID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c2LifetimeSpentMin", {
    get: function () {
      return this._c2LifetimeSpentMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c2LifetimeSpentMax", {
    get: function () {
      return this._c2LifetimeSpentMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "item", {
    get: function () {
      return this._item;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c290daysMin", {
    get: function () {
      return this._c290daysMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayXMLNode.prototype, "c290daysMax", {
    get: function () {
      return this._c290daysMax;
    },
    enumerable: true,
    configurable: true
  });
  return CastleShoppingCartPrimeDayXMLNode;
}();
exports.CastleShoppingCartPrimeDayXMLNode = n;
var o = require("./6.js");
var a = require("./22.js");
var s = require("./4.js");