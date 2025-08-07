Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./27.js");
var u = require("./105.js");
var d = require("./209.js");
var p = createjs.Point;
var h = function (e) {
  function ResourceCartSurroundingsVO() {
    var t = this;
    t._resourceType = g.CollectableEnum.UNKNOWN;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._name = "ResourceCart";
    t._height = 4;
    t._width = 4;
    t._minLevel = a.ResourceCartConst.MIN_LEVEL;
    t._posOrigin = u.IsoGridOriginEnum.TOP_CORNER;
    return t;
  }
  n.__extends(ResourceCartSurroundingsVO, e);
  ResourceCartSurroundingsVO.prototype.updatePosition = function () {
    var t = new p();
    switch (this.resourceType) {
      case g.CollectableEnum.WOOD:
        t = new p(-18, -18);
        break;
      case g.CollectableEnum.STONE:
        var i = this.isoData.objects.surroundings.getStoneField();
        if (i) {
          (t = i.getLastPartStartOffset()).x += -6;
        }
        break;
      case g.CollectableEnum.FOOD:
        var n = this.isoData.objects.surroundings.getFoodField();
        if (n) {
          (t = n.getLastPartStartOffset()).y += -6;
        }
    }
    this._posOffset = t;
    e.prototype.updatePosition.call(this);
  };
  ResourceCartSurroundingsVO.prototype.isUserInLevelRange = function () {
    return l.CastleModel.userData.userXP >= s.TutorialConst.LAST_TUTORIAL_STEP_XP;
  };
  ResourceCartSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    if (this.resourceCartData.isCollectable || this.resourceCartData.secondsUntilCollect > 0) {
      return r.Localize.text("eventBuilding_resourceCart_resources");
    } else {
      return "";
    }
  };
  ResourceCartSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    if (this.resourceCartData.isCollectable) {
      return r.Localize.text("ReadyForPickup");
    } else if (this.resourceCartData.secondsUntilCollect > 0) {
      return r.Localize.text("CountdownReadyIn", [c.CastleTimeStringHelper.getEventTimeString(this.resourceCartData.secondsUntilCollect)]);
    } else {
      return "";
    }
  };
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASurroundingBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return this.resourceCartData.isCollectable;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "resourceCartData", {
    get: function () {
      return l.CastleModel.resourceCartsData.getResourceCartData(this._resourceType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVO.prototype, "resourceType", {
    get: function () {
      return this._resourceType;
    },
    set: function (e) {
      this._resourceType = e;
    },
    enumerable: true,
    configurable: true
  });
  return ResourceCartSurroundingsVO;
}(d.ASurroundingBuildingVO);
exports.ResourceCartSurroundingsVO = h;
var g = require("./12.js");
o.classImplementsInterfaces(h, "IRelativeGridBuildingVO");