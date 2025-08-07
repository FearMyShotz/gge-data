Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./105.js");
var l = require("./209.js");
var c = function (e) {
  function SlumSurroundingsVO(t, i) {
    var n = this;
    n._slumParts = [];
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._name = "Slum";
    n._slumParts = i;
    if (i != null) {
      for (var o = 0, a = i; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          s.parentVO = n;
        }
      }
    }
    n._posOrigin = r.IsoGridOriginEnum.TOP_CORNER;
    n._posOffset = t;
    return n;
  }
  n.__extends(SlumSurroundingsVO, e);
  SlumSurroundingsVO.prototype.init = function (t = null) {
    e.prototype.init.call(this, t);
    if (this.slumParts != null) {
      for (var i = 0, n = this.slumParts; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.init(t);
        }
      }
    }
  };
  SlumSurroundingsVO.prototype.updateData = function () {
    if (this.slumParts != null) {
      for (var t = 0, i = this.slumParts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.updateData();
        }
      }
    }
    e.prototype.updateData.call(this);
  };
  SlumSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text("dialog_village_iso");
  };
  SlumSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    if (this.isClickAvailable) {
      return a.Localize.text(this.slumLevel > 0 && this.slumLevel < 4 ? "clickToUpgrade" : "clickToOpen");
    } else {
      return a.Localize.text("building_level", [s.CastleModel.areaData.activeArea.slum.slumLevel]);
    }
  };
  SlumSurroundingsVO.prototype.getInfoTooltipLine3 = function () {
    if (this.isClickAvailable) {
      return a.Localize.text("building_level", [s.CastleModel.areaData.activeArea.slum.slumLevel]);
    } else {
      return "";
    }
  };
  Object.defineProperty(SlumSurroundingsVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "slumLevel", {
    get: function () {
      return this.slumData.slumLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "kingdomId", {
    get: function () {
      return this.isoData.areaData.areaInfo.kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "slumParts", {
    get: function () {
      return this._slumParts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVO.prototype, "slumData", {
    get: function () {
      return this.isoData.areaData.slum;
    },
    enumerable: true,
    configurable: true
  });
  return SlumSurroundingsVO;
}(l.ASurroundingBuildingVO);
exports.SlumSurroundingsVO = c;
o.classImplementsInterfaces(c, "IRelativeGridBuildingVO");