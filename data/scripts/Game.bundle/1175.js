Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableParser() {
    this._s2cParamList = new r.CollectableParserS2CParamList();
    this._s2cParamObject = new l.CollectableParserS2CParamObject();
    this._s2cOldGoods = new s.CollectableParserS2COldGoods();
    this._c2SCosts = new g.CollectableParserC2SCosts();
    this._x2cRewards = new d.CollectableParserX2CRewards();
    this._x2cEventPackages = new c.CollectableParserX2CEventPackages();
    this._x2cList = new u.CollectableParserX2CList();
  }
  CollectableParser.prototype.createListFromRewardIdsString = function (e, t = false, i = CollectableParser.DEFAULT_REWARD_DELIMITER, n = false) {
    return a.CollectableManager.mergeLists(this.createListsFromRewardIdsString(e, t, i), n);
  };
  CollectableParser.prototype.createListsFromRewardIdsString = function (e, t = false, i = CollectableParser.DEFAULT_REWARD_DELIMITER, n = null) {
    var o;
    for (var a = e.split(i), s = [], r = 0, l = 0; l < a.length; ++l) {
      if (n && a[l].indexOf(n) > -1) {
        if (o = this.createListFromRewardIdsString(a[l], t, n)) {
          s.push(o);
        }
      } else if ((r = parseInt(a[l])) > 0 && (o = t ? p.CastleModel.rewardData.getCopiedListById(r) : p.CastleModel.rewardData.getListById(r))) {
        s.push(o);
      }
    }
    return s;
  };
  CollectableParser.prototype.createGoodsList = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return this._createGoodsList(false, e);
  };
  CollectableParser.prototype.createGoodsListSave = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return this._createGoodsList(true, e);
  };
  CollectableParser.prototype.createGoodsListSavefromList = function (e) {
    return this._createGoodsList(true, e);
  };
  CollectableParser.prototype._createGoodsList = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    var n;
    var a = new o.CollectableList();
    for (var s = t[0], r = 0; r < s.length; ++r) {
      if (h.instanceOfClass(s[r], "ACollectableItemVO")) {
        n = s[r];
        if (e && n.amount == 0) {
          continue;
        }
        a.addItem(n);
      }
    }
    return a;
  };
  Object.defineProperty(CollectableParser.prototype, "s2cParamList", {
    get: function () {
      return this._s2cParamList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "s2cParamObject", {
    get: function () {
      return this._s2cParamObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "x2cRewards", {
    get: function () {
      return this._x2cRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "c2SCosts", {
    get: function () {
      return this._c2SCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "s2cOldGoods", {
    get: function () {
      return this._s2cOldGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "x2cEventPackages", {
    get: function () {
      return this._x2cEventPackages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableParser.prototype, "x2cList", {
    get: function () {
      return this._x2cList;
    },
    enumerable: true,
    configurable: true
  });
  CollectableParser.DEFAULT_REWARD_DELIMITER = ",";
  CollectableParser.DEFAULT_REWARD_SUBDELIMITER = "#";
  return CollectableParser;
}();
exports.CollectableParser = n;
var o = require("./48.js");
var a = require("./50.js");
var s = require("./2032.js");
var r = require("./1176.js");
var l = require("./2033.js");
var c = require("./2034.js");
var u = require("./2035.js");
var d = require("./2036.js");
var p = require("./4.js");
var h = require("./1.js");
var g = require("./2037.js");