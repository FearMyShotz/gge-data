Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./55.js");
var r = require("./336.js");
var l = require("./209.js");
var c = function (e) {
  function AResourceFieldVO() {
    var t = this;
    t._resourceType = u.CollectableEnum.UNKNOWN;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._group = "ResourceField";
    t._rotationType = r.IsoObjectRotationEnum.NONE;
    return t;
  }
  n.__extends(AResourceFieldVO, e);
  AResourceFieldVO.prototype.getTooltipName = function () {
    return a.Localize.text("resourcesName_" + s.ClientConstUtils.capitalizeFirstLetter(d.CollectableHelper.createVO(this.resourceType).getTooltipTextId(), false));
  };
  AResourceFieldVO.prototype.getGfxLevel = function () {
    var e = this.fieldEfficiency;
    if (e >= 4) {
      return 3;
    } else if (e > 0 && e < 4) {
      return 2;
    } else {
      return 1;
    }
  };
  AResourceFieldVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text(this.getTooltipName());
  };
  AResourceFieldVO.prototype.getInfoTooltipLine2 = function () {
    return a.Localize.text("resourcesAmount_" + this.fieldEfficiency);
  };
  AResourceFieldVO.prototype.getInfoTooltipLine3 = function () {
    if (this.fieldEfficiency > 0) {
      return a.Localize.text("resources_description", [this.fieldEfficiency]);
    } else {
      return a.Localize.text("resources_description_none");
    }
  };
  Object.defineProperty(AResourceFieldVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return !this.isoData.areaData.isSeasonCamp;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "assignedStorage", {
    get: function () {
      return this.isoData.areaData.storage.getItem(this.resourceType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourceFieldVO.prototype, "fieldEfficiency", {
    get: function () {
      return this.assignedStorage.fieldEfficiency;
    },
    enumerable: true,
    configurable: true
  });
  return AResourceFieldVO;
}(l.ASurroundingBuildingVO);
exports.AResourceFieldVO = c;
var u = require("./12.js");
var d = require("./45.js");
o.classImplementsInterfaces(c, "IRelativeGridBuildingVO");