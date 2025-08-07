Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./4.js");
var c = require("./105.js");
var u = require("./566.js");
var d = createjs.Point;
var p = function (e) {
  function ASurroundingBuildingVO() {
    var t = this;
    t._posOrigin = c.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset = new d();
    t._minLevel = 0;
    t._maxLevel = 99;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._name = "";
    t._type = "";
    t._group = r.ClientConstCastle.GROUP_SURROUNDINGS;
    t._width = 2;
    t._height = 2;
    t._rotation = 0;
    return t;
  }
  n.__extends(ASurroundingBuildingVO, e);
  ASurroundingBuildingVO.prototype.updateData = function () {
    this.updatePosition();
    e.prototype.updateData.call(this);
  };
  ASurroundingBuildingVO.prototype.updatePosition = function () {
    var e = this.isoData.grid.origins.getOriginPos(this.posOrigin);
    this._x = e.x + this.posOffset.x;
    this._y = e.y + this.posOffset.y;
  };
  ASurroundingBuildingVO.prototype.isUserInLevelRange = function () {
    var e = s.int(l.CastleModel.userData.userLevel);
    return e >= this.minLevel && e < this.maxLevel;
  };
  Object.defineProperty(ASurroundingBuildingVO.prototype, "canBeRotated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "canBeRotated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ASurroundingBuildingVO.prototype.getInfoTooltipLine1 = function () {
    return a.Localize.text(this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name");
  };
  Object.defineProperty(ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AInteractiveIsoObjectVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "posOrigin", {
    get: function () {
      return this._posOrigin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASurroundingBuildingVO.prototype, "posOffset", {
    get: function () {
      return this._posOffset;
    },
    enumerable: true,
    configurable: true
  });
  return ASurroundingBuildingVO;
}(u.AInteractiveIsoObjectVO);
exports.ASurroundingBuildingVO = p;
o.classImplementsInterfaces(p, "IRelativeGridBuildingVO");