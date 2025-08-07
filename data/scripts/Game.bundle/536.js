Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./22.js");
var r = require("./4.js");
var l = require("./87.js");
var c = require("./65.js");
var u = function (e) {
  function AMineBuildingVO() {
    var t = this;
    t._mineTypeId = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AMineBuildingVO, e);
  AMineBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._mineTypeId = a.int(s.CastleXMLUtils.getIntAttribute("mineTypeID", t));
  };
  Object.defineProperty(AMineBuildingVO.prototype, "isCharging", {
    get: function () {
      return this.mineState == d.CastleMineData.STATE_RECHARGING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "isEmpty", {
    get: function () {
      return this.mineState == d.CastleMineData.STATE_EMPTY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "isFull", {
    get: function () {
      return this.mineState == d.CastleMineData.STATE_COLLECTABLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "canBeDisassembled", {
    get: function () {
      return this.mineState == d.CastleMineData.STATE_EMPTY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AEffectBuildingVO.prototype, "canBeDisassembled").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AMineBuildingVO.prototype.getVisualClassName = function () {
    this._mineState = r.CastleModel.mineData.getMineStateByObjectId(this.objectId);
    return e.prototype.getVisualClassName.call(this) + "_" + this.mineState;
  };
  AMineBuildingVO.prototype.getPercentRechargingCompletion = function () {
    return r.CastleModel.mineData.getPercentRechargingCompletion(this.objectId, this.mineTypeId);
  };
  AMineBuildingVO.prototype.getRestLootAmount = function () {
    return r.CastleModel.mineData.getRestAmountByMineID(this.objectId, this.mineTypeId);
  };
  AMineBuildingVO.prototype.mineStateChanged = function () {
    var e = r.CastleModel.mineData.getMineStateByObjectId(this.objectId);
    return this.mineState != e && (this._mineState = e, true);
  };
  Object.defineProperty(AMineBuildingVO.prototype, "canBeCollected", {
    get: function () {
      return this.isFull && this.buildingState == l.IsoBuildingStateEnum.BUILD_COMPLETED;
    },
    enumerable: true,
    configurable: true
  });
  AMineBuildingVO.prototype.getTimeLeftForCollect = function () {
    return a.int(r.CastleModel.mineData.getRemainingRechargeTime(this.objectId));
  };
  Object.defineProperty(AMineBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return this.canBeCollected;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AEffectBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return !this.isClickAvailable;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AEffectBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "mineTypeId", {
    get: function () {
      return this._mineTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "mineState", {
    get: function () {
      return this._mineState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMineBuildingVO.prototype, "mineVO", {
    get: function () {
      return r.CastleModel.mineData.getMineVOByObjectID(this.mineTypeId);
    },
    enumerable: true,
    configurable: true
  });
  return AMineBuildingVO;
}(c.AEffectBuildingVO);
exports.AMineBuildingVO = u;
var d = require("./1534.js");
o.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");