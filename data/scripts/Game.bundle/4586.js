Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./90.js");
var u = require("./24.js");
var d = require("./222.js");
var p = require("./407.js");
var h = createjs.Container;
var g = createjs.Point;
var C = function (e) {
  function SupportDefenceMapmovement() {
    var t = this;
    t._isWaiting = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SupportDefenceMapmovement, e);
  Object.defineProperty(SupportDefenceMapmovement.prototype, "arrowColor", {
    get: function () {
      return 153;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyMapmovement.prototype, "arrowColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SupportDefenceMapmovement.prototype.initGraphics = function () {
    if (this.supportdefenceMapmovementVO.movementProgress == 1) {
      this._isWaiting = true;
      this.drawCamp();
    } else {
      this._isWaiting = false;
      e.prototype.initGraphics.call(this);
    }
  };
  SupportDefenceMapmovement.prototype.onUpdateProgress = function () {
    if (!this._isWaiting) {
      e.prototype.onUpdateProgress.call(this);
    }
    if (this._isWaiting) {
      var t = d.MapHelper.areaToPixelTopLeft(this.mapMovementVO.targetAreaPos);
      var i = _.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.viewPort.clone();
      t = t.subtract(i);
      this._movementIconContainer.x = t.x;
      this._movementIconContainer.y = t.y;
    }
  };
  SupportDefenceMapmovement.prototype.drawCamp = function () {
    if (this._movementIconContainer) {
      a.MovieClipHelper.clearMovieClip(this._movementIconContainer);
    } else {
      this.initMovementIconContainer();
    }
    if (this._arrowLayer) {
      this.objectLayer.removeChild(this._arrowLayer);
    }
    var e = "MapObjectCamp" + this.iArmyMapmovementVO.getArmySizeLevel() + p.ArmyMapmovement.CLIP_KINGDOM_AFFIX_SEPARATOR + "Common";
    var t = new u.CastleGoodgameExternalClip(e, this.assetFileURL(e), this.clipColor, 0, false);
    this._movementIconContainer.addChild(t);
    var i = _.CastleLayoutManager.getInstance().worldmapScreen.renderer;
    var n = this.areaToPixel(this.mapMovementVO.targetAreaPos);
    var o = i.camera.viewPort;
    n.x -= o.x;
    n.y -= o.y;
    this._movementIconContainer.x = n.x - 32;
    this._movementIconContainer.y = n.y - 32;
  };
  SupportDefenceMapmovement.prototype.initMovementIconContainer = function () {
    if (this._movementIconContainer == null) {
      this._movementIconContainer = new h();
    }
    this.objectLayer.addChild(this._movementIconContainer);
    this._posOnBezier = new g();
    this._bezier.position(this._posOnBezier, 0);
    this._movementIconContainer.x = this._posOnBezier.x;
    this._movementIconContainer.y = this._posOnBezier.y;
  };
  SupportDefenceMapmovement.prototype.onRollOver = function (t) {
    if (!this.hasRingMenu && this._isWaiting) {
      this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
    }
    e.prototype.onRollOver.call(this, t);
  };
  SupportDefenceMapmovement.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(SupportDefenceMapmovement.prototype, "supportdefenceMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  SupportDefenceMapmovement.prototype.updateMovementPositionByViewport = function (t, i) {
    if (this.supportdefenceMapmovementVO.movementProgress < 1) {
      e.prototype.updateMovementPositionByViewport.call(this, t, i);
    } else if (!t.equals(this.viewPointStart) || this.lastZoom != i) {
      this.lastZoom = i;
      this.viewPointStart.x = t.x;
      this.viewPointStart.y = t.y;
      var n = this.areaToPixel(this.supportdefenceMapmovementVO.targetAreaPos);
      n = n.subtract(this.viewPointStart);
      this._movementIconContainer.x = n.x - 32;
      this._movementIconContainer.y = n.y - 32;
    }
  };
  Object.defineProperty(SupportDefenceMapmovement.prototype, "line1Content", {
    get: function () {
      return new l.LocalizedTextVO("movementToolTip_supporting");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyMapmovement.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "line2Content", {
    get: function () {
      return new l.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, ["resttime", s.TimeStringHelper.getShortTimeStringBySeconds(this.supportdefenceMapmovementVO.getTimeUntilWaitOverInSeconds())]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyMapmovement.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "line3Content", {
    get: function () {
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyMapmovement.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "isTimerToolTip", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyMapmovement.prototype, "isTimerToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovement.prototype, "toolTipPosition", {
    get: function () {
      var e = _.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      var t = this.movementIconContainer.getBounds(null);
      return new g((this.movementIconContainer.x + t.x + t.width / 2) * e, (this.movementIconContainer.y + t.y + t.height / 2) * e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ArmyMapmovement.prototype, "toolTipPosition").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SupportDefenceMapmovement;
}(p.ArmyMapmovement);
exports.SupportDefenceMapmovement = C;
var _ = require("./17.js");
r.classImplementsInterfaces(C, "IIngameUICapable", "IWorldmapTooltipData");