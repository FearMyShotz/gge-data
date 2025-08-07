Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./22.js");
var l = require("./336.js");
var c = require("./480.js");
var u = createjs.Point;
var d = function (e) {
  function AIsoObjectVO() {
    var t = this;
    t._objectType = h.IsoObjectEnum.UNKNOWN;
    t._rotationType = l.IsoObjectRotationEnum.NONE;
    t._rotation = 0;
    t._x2 = 0;
    t._y2 = 0;
    t._width = 1;
    t._height = 1;
    t._walkmap = [];
    t._walkmapOffset = new u(0, 0);
    t._spawnPoints = [];
    t._isMovable = false;
    t._inDistrictID = 0;
    t._districtSlotID = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoObjectVO, e);
  AIsoObjectVO.prototype.init = function (e = null) {
    this._isoData = e;
    if (this._objectType == h.IsoObjectEnum.UNKNOWN) {
      this._objectType = h.IsoObjectEnum.getTypeByDataClass(s.ClientConstUtils.getClassFromObject(this));
    }
  };
  AIsoObjectVO.prototype.update = function (e) {};
  AIsoObjectVO.prototype.updateData = function () {
    this.updateBounds();
    this.updateWalkmap();
    this.updateSpawnPoints();
  };
  AIsoObjectVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
  };
  AIsoObjectVO.prototype.updateWalkmap = function () {
    this._walkmap = g.IsoHelper.walkmap.createWalkmapFullBlocked(this.dimension);
  };
  AIsoObjectVO.prototype.updateBounds = function () {
    if (this._rotation % 2 == 0) {
      this._x2 = a.int(this._x + this._width - 1);
      this._y2 = a.int(this._y + this._height - 1);
    } else {
      this._x2 = a.int(this._x + this._height - 1);
      this._y2 = a.int(this._y + this._width - 1);
    }
  };
  AIsoObjectVO.prototype.rotate = function () {
    var e = 0;
    switch (this.rotationType) {
      case l.IsoObjectRotationEnum._1FrameFor2Dir:
        e = this.rotation == 0 ? 1 : 0;
        break;
      case l.IsoObjectRotationEnum._2FramesFor4Dir:
      case l.IsoObjectRotationEnum._4FramesFor4Dir:
      case l.IsoObjectRotationEnum._4GfxFor4Dir:
        if ((e = this.rotation - 1) < 0) {
          e = 3;
        }
    }
    this.rotation = e;
  };
  AIsoObjectVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._rotationType = l.IsoObjectRotationEnum.getTypeById(r.CastleXMLUtils.getIntAttribute("rotateType", t, 2));
    this._width = a.int(r.CastleXMLUtils.getIntAttribute("width", t));
    this._height = a.int(r.CastleXMLUtils.getIntAttribute("height", t));
    this._isMovable = r.CastleXMLUtils.getBooleanAttribute("isMovable", t, true);
  };
  AIsoObjectVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._inDistrictID = a.int(t[10]);
    this._districtSlotID = a.int(t[11]);
    var i = a.int(t.shift());
    this.rotation = a.int(this.isInBuildingDistrict ? 1 : i);
  };
  AIsoObjectVO.prototype.cloneFrom = function (e) {
    this._rotation = e._rotation;
    this.updateData();
  };
  AIsoObjectVO.prototype.getAreaKingdomName = function () {
    var e = 0;
    var t = o.WorldConst.AREA_TYPE_CASTLE;
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.areaInfo) {
      e = this.isoData.areaData.areaInfo.kingdomID;
      t = this.isoData.areaData.areaInfo.areaType;
    }
    return g.IsoHelper.data.getAreaKingdomName(e, t);
  };
  Object.defineProperty(AIsoObjectVO.prototype, "canBeRotated", {
    get: function () {
      return this._rotationType != l.IsoObjectRotationEnum.NONE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "usesColorFourCrest", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "wodDataType", {
    get: function () {
      return p.CastleWodData.TYPE_BUILDING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AVisualVO.prototype, "wodDataType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVO.prototype.getViewClass = function () {
    if (this.objectType) {
      return this.objectType.viewClass;
    } else {
      return null;
    }
  };
  AIsoObjectVO.prototype.getInfoTooltipLine1 = function () {
    return "";
  };
  AIsoObjectVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  AIsoObjectVO.prototype.getInfoTooltipLine3 = function () {
    return "";
  };
  Object.defineProperty(AIsoObjectVO.prototype, "rotatedWidth", {
    get: function () {
      if (this._rotation % 2 == 0) {
        return this._width;
      } else {
        return this._height;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "rotatedHeight", {
    get: function () {
      if (this._rotation % 2 == 0) {
        return this._height;
      } else {
        return this._width;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "rotation", {
    get: function () {
      return this._rotation;
    },
    set: function (e) {
      if (e != this._rotation) {
        this._rotation = e;
        this.updateData();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "x2", {
    get: function () {
      return this._x2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "y2", {
    get: function () {
      return this._y2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (e) {
      this._width = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    set: function (e) {
      this._height = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isMovable", {
    get: function () {
      return this._isMovable;
    },
    set: function (e) {
      this._isMovable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "walkmap", {
    get: function () {
      return this._walkmap;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "rotationType", {
    get: function () {
      return this._rotationType;
    },
    set: function (e) {
      this._rotationType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isoData", {
    get: function () {
      return C.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "spawnPoints", {
    get: function () {
      return this._spawnPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "dimension", {
    get: function () {
      return new u(this.rotatedWidth, this.rotatedHeight);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isOwnArea", {
    get: function () {
      return !!this.isoData && !!this.isoData.areaData && !!this.isoData.areaData.areaInfo && this.isoData.areaData.areaInfo.isOwnMapobject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "walkmapOffset", {
    get: function () {
      return this._walkmapOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "inDistrictID", {
    get: function () {
      return this._inDistrictID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "isInBuildingDistrict", {
    get: function () {
      return this._inDistrictID > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVO.prototype, "districtSlotID", {
    get: function () {
      return this._districtSlotID;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVO.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._isoData = null;
  };
  return AIsoObjectVO;
}(c.AVisualVO);
exports.AIsoObjectVO = d;
var p = require("./56.js");
var h = require("./80.js");
var g = require("./46.js");
var C = require("./33.js");