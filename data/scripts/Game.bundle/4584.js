Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./90.js");
var g = require("./4.js");
var C = require("./24.js");
var _ = require("./407.js");
var m = createjs.Container;
var f = createjs.Point;
var O = function (e) {
  function SiegeMapmovement() {
    var t = this;
    t._isWaiting = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SiegeMapmovement, e);
  Object.defineProperty(SiegeMapmovement.prototype, "arrowColor", {
    get: function () {
      return 153;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ArmyMapmovement.prototype, "arrowColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovement.prototype.initGraphics = function () {
    if (this.siegeMapmovementVO.movementProgress <= 1) {
      this._isWaiting = true;
      r.debug("------------------------------ Siegemovement movementProgress <= 1 - drawing siege");
      this.drawSiege();
    } else {
      this._isWaiting = false;
      r.debug("------------------------------ Siegemovement movementProgress > 1 - calling super.initGraphics()");
      e.prototype.initGraphics.call(this);
    }
  };
  SiegeMapmovement.prototype.drawMovementIcon = function () {
    this.drawSiege();
  };
  SiegeMapmovement.prototype.onUpdateProgress = function () {
    if (!this._isWaiting) {
      e.prototype.onUpdateProgress.call(this);
    }
  };
  SiegeMapmovement.prototype.drawSiege = function () {
    if (this._movementIconContainer) {
      a.MovieClipHelper.clearMovieClip(this._movementIconContainer);
    } else {
      this.initMovementIconContainer();
    }
    if (this._arrowLayer) {
      this.objectLayer.removeChild(this._arrowLayer);
    }
    var e = E.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.viewPort;
    var t = new C.CastleGoodgameExternalClip("MapObjectSiege_Common", this.assetFileURL("MapObjectSiege_Common"), this.clipColor, 0, false, null, false, 1, false, false, true);
    this._movementIconContainer.addChild(t);
    var i = this.areaToPixel(this.siegeMapmovementVO.targetAreaPos);
    this._movementIconContainer.x = i.x - 32 - e.x;
    this._movementIconContainer.y = i.y - 32 - e.y;
  };
  SiegeMapmovement.prototype.initMovementIconContainer = function () {
    if (this._movementIconContainer == null) {
      this._movementIconContainer = new m();
    }
    this.objectLayer.addChild(this._movementIconContainer);
    this._posOnBezier = new f();
    this._bezier.position(this._posOnBezier, 0);
    this._movementIconContainer.x = this._posOnBezier.x;
    this._movementIconContainer.y = this._posOnBezier.y;
  };
  SiegeMapmovement.prototype.onRollOver = function (t) {
    if (!this.hasRingMenu && this._isWaiting) {
      this.worldmapRenderer.dispatchEvent(new h.CastleWorldmapEvent(h.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
    }
    e.prototype.onRollOver.call(this, t);
  };
  SiegeMapmovement.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new h.CastleWorldmapEvent(h.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  SiegeMapmovement.prototype.onMouseUp = function (e = null) {
    if (g.CastleModel.userData.playerID == this.mapMovementVO.movementOwnerInfo.playerID) {
      this.showRingMenu();
    }
  };
  SiegeMapmovement.prototype.updateMovementPositionByViewport = function (e, t) {
    if (!e.equals(this.viewPointStart) || this.lastZoom != t) {
      this.lastZoom = t;
      this.viewPointStart.x = e.x;
      this.viewPointStart.y = e.y;
      var i = this.areaToPixel(this.siegeMapmovementVO.targetAreaPos);
      i = i.subtract(this.viewPointStart);
      this._movementIconContainer.x = i.x - 32;
      this._movementIconContainer.y = i.y - 32;
    }
  };
  Object.defineProperty(SiegeMapmovement.prototype, "siegeMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "line1Content", {
    get: function () {
      if (this.ringMenuBlocksTooltip()) {
        return null;
      } else {
        return new p.TextVO(y.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.siegeMapmovementVO.movementOwnerInfo));
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ArmyMapmovement.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "line2Content", {
    get: function () {
      if (this.ringMenuBlocksTooltip()) {
        return null;
      } else {
        return new d.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, ["resttime", s.TimeStringHelper.getShortTimeStringBySeconds(this.siegeMapmovementVO.getTimeUntilWaitOverInSeconds())]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ArmyMapmovement.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "line3Content", {
    get: function () {
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ArmyMapmovement.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovement.prototype, "isTimerToolTip", {
    get: function () {
      return !this.ringMenuBlocksTooltip();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ArmyMapmovement.prototype, "isTimerToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovement.prototype.ringMenuBlocksTooltip = function () {
    var e = this.siegeMapmovementVO.targetArea;
    var t = E.CastleLayoutManager.getInstance().getIngameUIComponent(b.WorldMapCastleInfoMenu);
    if (u.instanceOfClass(t, "WorldMapCastleInfoMenu")) {
      var i = l.castAs(t, "WorldMapCastleInfoMenu");
      return !!i && !!i.isVisible() && i.worldMapTarget.worldmapObjectVO.equalsOtherWMO(e.objectId, e.kingdomID);
    }
    return false;
  };
  Object.defineProperty(SiegeMapmovement.prototype, "toolTipPosition", {
    get: function () {
      var e = E.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      var t = this.movementIconContainer.getBounds(null);
      return new f((this.movementIconContainer.x + t.x + t.width / 2) * e, (this.movementIconContainer.y + t.y + t.height / 2) * e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.ArmyMapmovement.prototype, "toolTipPosition").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SiegeMapmovement;
}(_.ArmyMapmovement);
exports.SiegeMapmovement = O;
var E = require("./17.js");
var y = require("./106.js");
var b = require("./1139.js");
c.classImplementsInterfaces(O, "IIngameUICapable", "IWorldmapTooltipData");