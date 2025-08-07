Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleResourcePoolData() {
    this._hasExtraGoods = false;
  }
  CastleResourcePoolData.prototype.parseIRC = function (e) {
    this.registerNewMovementAsOwner(null);
    var t = o.CollectableManager.parser.s2cParamList.createList(e.G);
    this._resourceItem = t.getItemByIndexSave(0);
    this._hasExtraGoods = !!e.EG;
    if (this.resourceItem && this.hasExtraGoods) {
      this.resourceItem.amount = 1000;
    }
  };
  CastleResourcePoolData.prototype.registerNewMovementAsOwner = function (e) {
    this._ownerMovementVO = e;
    if (!this.ownerMovementVO) {
      this._resourceItem = null;
    }
  };
  CastleResourcePoolData.prototype.reset = function () {
    this._resourceItem = null;
    this._ownerMovementVO = null;
  };
  CastleResourcePoolData.prototype.getRelevantMovementTypeByResourceType = function (e) {
    switch (e) {
      case a.CollectableEnum.WOOD:
        return s.IsoObjectEnum.MOVEMENT_WOOD_CUTTER;
      case a.CollectableEnum.STONE:
        return s.IsoObjectEnum.MOVEMENT_STONE_CUTTER;
      case a.CollectableEnum.FOOD:
        return s.IsoObjectEnum.MOVEMENT_FARMER;
      case a.CollectableEnum.C1:
      default:
        return s.IsoObjectEnum.MOVEMENT_CITIZEN;
    }
  };
  CastleResourcePoolData.prototype.canMovementTypeCarryResourceType = function (e, t) {
    return (t != a.CollectableEnum.WOOD || e == s.IsoObjectEnum.MOVEMENT_WOOD_CUTTER) && (t != a.CollectableEnum.STONE || e == s.IsoObjectEnum.MOVEMENT_STONE_CUTTER) && (t != a.CollectableEnum.FOOD || e == s.IsoObjectEnum.MOVEMENT_FARMER) && (t != a.CollectableEnum.C1 || e == s.IsoObjectEnum.MOVEMENT_CITIZEN);
  };
  Object.defineProperty(CastleResourcePoolData.prototype, "resourceItem", {
    get: function () {
      return this._resourceItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcePoolData.prototype, "ownerMovementVO", {
    get: function () {
      return this._ownerMovementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResourcePoolData.prototype, "hasExtraGoods", {
    get: function () {
      return this._hasExtraGoods;
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourcePoolData;
}();
exports.CastleResourcePoolData = n;
var o = require("./50.js");
var a = require("./12.js");
var s = require("./80.js");