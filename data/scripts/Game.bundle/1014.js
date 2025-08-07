Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function AUnitProductionBuildingVO() {
    var t = this;
    t._productionSpeed = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AUnitProductionBuildingVO, e);
  AUnitProductionBuildingVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._productionSpeed = a.int(t.shift());
  };
  AUnitProductionBuildingVO.prototype.cloneFrom = function (t) {
    e.prototype.cloneFrom.call(this, t);
    var i = t;
    if (i) {
      this._productionSpeed = i._productionSpeed;
    }
  };
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "unitCategory", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "isProductive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "isFestivalActive", {
    get: function () {
      return s.CastleModel.boostData.festivalVO.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "recruitFilter", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AUnitProductionBuildingVO.prototype, "productionSpeed", {
    get: function () {
      return this._productionSpeed;
    },
    enumerable: true,
    configurable: true
  });
  return AUnitProductionBuildingVO;
}(require("./452.js").AProductionBuildingVO);
exports.AUnitProductionBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");