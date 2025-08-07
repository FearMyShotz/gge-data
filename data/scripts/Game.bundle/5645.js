Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./48.js");
var o = function () {
  function PrebuiltCastleItemVO() {
    this._id = 0;
    this._minLevel = 0;
    this._shownDiscount = 0;
    this._isMainCastleCopy = false;
  }
  PrebuiltCastleItemVO.prototype.parseXML = function (e) {
    this._id = parseInt(e.preBuiltCastleID || "");
    this._spaceIDs = u.CastleXMLUtils.createIntListFromAttribute("spaceIDs", e);
    this._minLevel = parseInt(u.CastleXMLUtils.getValueOrDefault("minLevel", e, "0"));
    this._shownDiscount = parseInt(u.CastleXMLUtils.getValueOrDefault("shownDiscount", e, "0"));
    this._costs = PrebuiltCastleItemVO.parseCosts(e);
    this._isMainCastleCopy = parseInt(u.CastleXMLUtils.getValueOrDefault("isMainCastleCopy", e, "0")) == 1;
  };
  PrebuiltCastleItemVO.parseCosts = function (e) {
    var t = new n.CollectableList();
    for (var i = 0, o = d.ClientConstCollectable.GROUP_LIST_GOODS; i < o.length; i++) {
      var a = o[i];
      if (a !== undefined) {
        var s = "cost" + h.CollectableHelper.getGoodsKeySuffix(a);
        var r = parseInt(u.CastleXMLUtils.getValueOrDefault(s, e, "0"));
        if (r) {
          t.addItem(h.CollectableHelper.createVO(a, r));
        }
      }
    }
    return t;
  };
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "spaceIds", {
    get: function () {
      return this._spaceIDs;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItemVO.prototype.isFree = function () {
    return !this._costs.length;
  };
  PrebuiltCastleItemVO.prototype.isPremium = function () {
    return this._costs.length == 1 && !!this.costC2;
  };
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "costC2", {
    get: function () {
      return this._costs.getItemByType(p.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "primaryCosts", {
    get: function () {
      if (this.isPremium()) {
        return this._costs;
      } else {
        return this._costs.getFilteredListWithoutType(p.CollectableEnum.C2);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "shownDiscount", {
    get: function () {
      return this._shownDiscount;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItemVO.prototype.setBuildings = function (e) {
    this._buildings = e;
  };
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "buildings", {
    get: function () {
      if (this._isMainCastleCopy) {
        return g.CastleModel.prebuiltCastleData.castleTransportationBuildings;
      } else {
        return this._buildings;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItemVO.prototype, "isMainCastleCopy", {
    get: function () {
      return this._isMainCastleCopy;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItemVO.prototype.textIdName = function () {
    if (PrebuiltCastleItemVO.SPACES_WITH_CASTLES.indexOf(this._spaceIDs[0]) != -1) {
      return "Castle";
    } else {
      return "Camp";
    }
  };
  PrebuiltCastleItemVO.__initialize_static_members = function () {
    PrebuiltCastleItemVO.SPACES_WITH_CASTLES = [a.WorldClassic.KINGDOM_ID, s.WorldDessert.KINGDOM_ID, r.WorldIce.KINGDOM_ID, c.WorldVolcano.KINGDOM_ID, l.WorldIsland.KINGDOM_ID];
  };
  return PrebuiltCastleItemVO;
}();
exports.PrebuiltCastleItemVO = o;
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./22.js");
var d = require("./86.js");
var p = require("./12.js");
var h = require("./45.js");
var g = require("./4.js");
o.__initialize_static_members();