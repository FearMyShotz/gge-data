Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./105.js");
var s = require("./209.js");
var r = createjs.Point;
var l = function (e) {
  function FillerSurroundingsVO(t, i, n = null, o = false, s = null) {
    var r = this;
    r._isPath = false;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this)._name = "Filler";
    if (o) {
      r._width = 0;
      r._height = 0;
    } else {
      r._width = s ? s.x : FillerSurroundingsVO.DEFAULT_DIMENSIONS.x;
      r._height = s ? s.y : FillerSurroundingsVO.DEFAULT_DIMENSIONS.y;
    }
    r._posOrigin = n || a.IsoGridOriginEnum.BOTTOM_CORNER;
    r._posOffset.x = i.x;
    r._posOffset.y = i.y;
    r._assetName = t;
    r._isPath = o;
    return r;
  }
  n.__extends(FillerSurroundingsVO, e);
  Object.defineProperty(FillerSurroundingsVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FillerSurroundingsVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FillerSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingsVO.prototype.getVisualClassName = function () {
    return this._assetName;
  };
  Object.defineProperty(FillerSurroundingsVO.prototype, "isPath", {
    get: function () {
      return this._isPath;
    },
    enumerable: true,
    configurable: true
  });
  FillerSurroundingsVO.prototype.setAssetName = function (e) {
    this._assetName = e;
  };
  FillerSurroundingsVO.prototype.setPosOrigin = function (e) {
    this._posOrigin = e;
  };
  FillerSurroundingsVO.prototype.setPosOffset = function (e) {
    this._posOffset = e;
  };
  FillerSurroundingsVO.__initialize_static_members = function () {
    FillerSurroundingsVO.DEFAULT_DIMENSIONS = new r(5, 5);
  };
  return FillerSurroundingsVO;
}(s.ASurroundingBuildingVO);
exports.FillerSurroundingsVO = l;
l.__initialize_static_members();
o.classImplementsInterfaces(l, "IRelativeGridBuildingVO");