Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./463.js");
var d = require("./4.js");
var p = require("./41.js");
var h = require("./1220.js");
var g = require("./4582.js");
var C = createjs.Shape;
var _ = createjs.Container;
var m = createjs.MouseEvent;
var f = createjs.Point;
var O = function (e) {
  function BasicMapmovement() {
    var t = this;
    t.pointingRight = false;
    t.hasJumped = false;
    t.lastZoom = 0;
    t.graphicsInitialized = false;
    t.coordsRelativated = false;
    t._direction = 1;
    t.distanceType = BasicMapmovement.NORMALDISTANCE;
    t._lastAnimationUpdateTimeStamp = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).isMutable = true;
    t.style = new o.ArrowStyle();
    t.style.shaftThickness = 20;
    t.style.headWidth = 35;
    t.style.headLength = 35;
    t.style.shaftPosition = 0;
    t.style.edgeControlPosition = 0.5;
    t.style.edgeControlSize = 0.5;
    return t;
  }
  n.__extends(BasicMapmovement, e);
  BasicMapmovement.prototype.initialize = function (t, i) {
    e.prototype.initialize.call(this, t, i);
    d.CastleModel.settingsData.addEventListener(u.SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED, this.bindFunction(this.onChangedVisible));
    this.disp.addEventListener(m.MOUSE_OVER, this.bindFunction(this.doZSortForHoverMovement));
  };
  BasicMapmovement.prototype.doZSortForHoverMovement = function (e) {
    if (this.disp && this.disp.parent && this.disp.parent.getChildIndex(this.disp) != this.disp.parent.numChildren - 1) {
      this.disp.parent.setChildIndex(this.disp, this.disp.parent.numChildren - 1);
    }
  };
  BasicMapmovement.prototype.onChangedVisible = function (e) {
    this.disp.visible = d.CastleModel.settingsData.worldmapMovementsVisible;
  };
  BasicMapmovement.prototype.initVisualRep = function () {
    e.prototype.initVisualRep.call(this);
    o.MovieClipHelper.clearMovieClip(this.disp);
    this.setPositioning();
    this.calculateBezier();
    this.baseCampLayer = new _();
    this.disp.addChild(this.baseCampLayer);
    this.objectLayer = new _();
    this.disp.addChild(this.objectLayer);
    this.initGraphics();
    this.redrawGraphics();
    this.disp.visible = d.CastleModel.settingsData.worldmapMovementsVisible;
  };
  BasicMapmovement.prototype.update = function (e) {
    if (this._lastAnimationUpdateTimeStamp + BasicMapmovement.ANIMATION_UPDATE_INTERVAL + (this.worldmapRenderer.amountMovementsToRender >= BasicMapmovement.ANIMATION_RENDER_LIMIT ? (this.worldmapRenderer.amountMovementsToRender - BasicMapmovement.ANIMATION_RENDER_LIMIT) * BasicMapmovement.ANIMATION_ADDITIONAL_INTERVAL_FOR_ONE_MOVEMENT : 0) < e && this.disp.visible) {
      this.onUpdateProgress();
      this._lastAnimationUpdateTimeStamp = e;
    }
  };
  BasicMapmovement.prototype.worldWidth = function () {
    return l.int(c.ClientConstCastle.WORLDMAPSIZE_X * c.ClientConstCastle.SECTORPIXELSIZE_X);
  };
  BasicMapmovement.prototype.onUpdateProgress = function () {
    if (this.disp.visible) {
      var e = false;
      this._bezier.position(this._posOnBezier, this.mapMovementVO.movementProgress);
      var t = Math.trunc(this._posOnBezier.x);
      var i = Math.trunc(this._posOnBezier.y);
      if (Math.trunc(this._movementIconContainer.x) != t) {
        e = true;
      }
      if (Math.trunc(this._movementIconContainer.y) != i) {
        e = true;
      }
      this.setProgressLayerVisibility();
      if (e) {
        this._movementIconContainer.x = t;
        this._movementIconContainer.y = i;
        p.CastleMovieClipHelper.snapToScreenPixels(this._movementIconContainer);
        this._arrowLayerGrowingMask.scaleX = this.mapMovementVO.movementProgress;
      }
    }
  };
  Object.defineProperty(BasicMapmovement.prototype, "isProgressLayerShown", {
    get: function () {
      return this.worldmapRenderer.amountMovementsToRender <= BasicMapmovement.ANIMATION_PROGRESS_LAYER_RENDER_LIMIT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovement.prototype, "arrowColor", {
    get: function () {
      return 16750899;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovement.prototype.initGraphics = function () {
    this._arrowLayer = new _();
    this._arrowLayer.mouseChildren = false;
    this._arrowLayerShadow = new C();
    this._arrowLayerGrowing = new C();
    this._arrowLayerGrowingMask = new C();
    this.setCorrectGeo();
    this._arrowLayer.addChild(this._arrowLayerShadow);
    this._arrowLayer.addChild(this._arrowLayerGrowing);
    this._arrowLayer.addChild(this._arrowLayerGrowingMask);
    this._arrowLayerGrowing.mask = this._arrowLayerGrowingMask;
    this.objectLayer.addChild(this._arrowLayer);
    this.drawMovementIcon();
    this.graphicsInitialized = true;
  };
  BasicMapmovement.prototype.setCorrectGeo = function () {
    var e = l.int(this.pixelEndPos.x - this.pixelStartPos.x);
    var t = l.int(this.pixelEndPos.y - this.pixelStartPos.y);
    var i = l.int(Math.atan(t / e) * (180 / Math.PI));
    var n = 1;
    if (e < 0) {
      n = -1;
    }
    var o = l.int(this.getDistance(this.pixelStartPos, this.pixelEndPos));
    this._posOnBezier = new f();
    this._bezier.position(this._posOnBezier, 1 - 60 / o);
    this._arrowLayerShadow.graphics.clear();
    this._arrowLayerGrowing.graphics.clear();
    this._arrowLayerShadow.graphics.beginFill(this.arrowColor, 0.4);
    this._arrowLayerGrowing.graphics.beginFill(this.arrowColor, 0.5);
    var a;
    var r = new f();
    this._bezier.position(r, 0.5);
    r.x += t > 0 ? this.style.shaftThickness : -this.style.shaftThickness;
    r.y -= this.style.shaftThickness;
    a = s.GraphicsUtil.drawArrowBezier(this._arrowLayerShadow.graphics, this.pixelStartPos, this.pixelEndPos, this.style);
    a = s.GraphicsUtil.getBoundsByPoints([a.topLeft, a.bottomRight, r]);
    this._arrowLayerShadow.setBounds(a.x, a.y, a.width, a.height);
    s.GraphicsUtil.drawArrowBezier(this._arrowLayerGrowing.graphics, this.pixelStartPos, this.pixelEndPos, this.style);
    this._arrowLayerGrowing.setBounds(a.x, a.y, a.width, a.height);
    this._arrowLayerShadow.graphics.endFill();
    this._arrowLayerGrowing.graphics.endFill();
    this._arrowLayerShadow.graphics.lineStyle();
    this._arrowLayerGrowing.graphics.lineStyle();
    var c = l.int(Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)));
    var u = l.int(Math.max(c * 0.2, 100));
    this.drawRectangle(this._arrowLayerGrowingMask, this.pixelStartPos, c, u);
    if (n < 1) {
      i -= 180;
    }
    this._arrowLayerGrowingMask.rotation = i;
  };
  BasicMapmovement.prototype.redrawGraphics = function () {
    if (this.graphicsInitialized) {
      this.setPositioning();
      this.calculateBezier();
      this.baseCampLayer.x = this.pixelStartPos.x - 32;
      this.baseCampLayer.y = this.pixelStartPos.y - 32;
      this.setCorrectGeo();
      this.onUpdateProgress();
      if (this._arrowLayer.filters && this._arrowLayer.filters.length > 0) {
        this._arrowLayer.doCache(0, 1);
      }
    }
  };
  BasicMapmovement.prototype.calculateBezier = function () {
    var e = l.int(c.ClientConstCastle.WORLDMAPSIZE_X * c.ClientConstCastle.SECTORPIXELSIZE_X);
    this.pointingRight = this.arrowPointsToTheRight();
    if (this.pointingRight && this.pixelStartPos.x > this.pixelEndPos.x) {
      this.pixelStartPos.x -= e;
      this.hasJumped = true;
    } else if (!this.pointingRight && this.pixelStartPos.x < this.pixelEndPos.x) {
      this.pixelEndPos.x -= e;
      this.hasJumped = true;
    } else {
      this.hasJumped = false;
    }
    this.curveControlPoint = this.getCurveControlPoint(this.pixelStartPos, this.pixelEndPos);
    this._bezier = new g.CastleBezier(this.pixelStartPos.x, this.pixelStartPos.y, this.curveControlPoint.x, this.curveControlPoint.y, this.pixelEndPos.x, this.pixelEndPos.y);
    this._posOnBezier = new f();
  };
  BasicMapmovement.prototype.setPositioning = function () {
    this.pixelStartPos = this.areaToPixel(this.mapMovementVO.sourceAreaPos);
    this.pixelEndPos = this.areaToPixel(this.mapMovementVO.targetAreaPos);
    var e = this.worldmapRenderer.camera.viewPort.clone();
    this.lastZoom = this.worldmapRenderer.camera.viewPortZoom;
    this.pixelStartPos = this.pixelStartPos.subtract(e);
    this.pixelEndPos = this.pixelEndPos.subtract(e);
    this.viewPointStart = e;
    this.clampXCoord(this.pixelStartPos);
    this.clampXCoord(this.pixelEndPos);
  };
  BasicMapmovement.prototype.arrowPointsToTheRight = function () {
    this.clampXCoord(this.pixelEndPos);
    this.clampXCoord(this.pixelStartPos);
    var e = Math.abs(this.pixelEndPos.x - this.pixelStartPos.x);
    var t = this.pixelStartPos.x < this.pixelEndPos.x;
    if (e > this.worldWidth() / 2) {
      return !t;
    } else {
      return t;
    }
  };
  BasicMapmovement.prototype.clampXCoord = function (e) {
    var t = l.int(c.ClientConstCastle.WORLDMAPSIZE_X * c.ClientConstCastle.SECTORPIXELSIZE_X);
    if (e.x > t) {
      e.x -= t;
    }
    if (e.x < 0) {
      e.x += t;
    }
  };
  BasicMapmovement.prototype.initMovementIconContainer = function () {
    if (this._movementIconContainer == null) {
      this._movementIconContainer = new _();
      this.objectLayer.addChild(this._movementIconContainer);
    }
    this._posOnBezier = new f();
    if (this.mapMovementVO == null || this.mapMovementVO.movementProgress <= 0) {
      this._bezier.position(this._posOnBezier, 0);
    } else {
      this._bezier.position(this._posOnBezier, this.mapMovementVO.movementProgress);
      this.setProgressLayerVisibility();
      this._arrowLayerGrowingMask.scaleX = this.mapMovementVO.movementProgress;
    }
    this._movementIconContainer.x = l.int(this._posOnBezier.x);
    this._movementIconContainer.y = l.int(this._posOnBezier.y);
  };
  BasicMapmovement.prototype.setProgressLayerVisibility = function () {
    if (this.isProgressLayerShown) {
      if (!this._arrowLayerGrowing.visible) {
        this._arrowLayerGrowing.visible = true;
        this._arrowLayerGrowingMask.visible = true;
      }
    } else if (!this.isProgressLayerShown) {
      if (this._arrowLayerGrowing.visible) {
        this._arrowLayerGrowing.visible = false;
        this._arrowLayerGrowingMask.visible = false;
      }
    }
  };
  BasicMapmovement.prototype.drawMovementIcon = function () {};
  BasicMapmovement.prototype.drawRectangle = function (e, t, i, n) {
    e.x = t.x;
    e.y = t.y;
    var o = e.graphics;
    o.clear();
    o.beginFill(16777215);
    o.drawRect(0, n * -0.5, i, n);
    o.endFill();
  };
  BasicMapmovement.prototype.getDistance = function (e, t) {
    return l.int(f.distance(e, t));
  };
  BasicMapmovement.prototype.getCurveControlPoint = function (e, t) {
    var i = 0;
    i = l.int(f.distance(e, t)) < BasicMapmovement.ROUND_TO_LINEAR_ARROWRANGE_INPIXEL ? 0 : 0.1;
    var n = l.int(t.x - e.x);
    var o = l.int(t.y - e.y);
    var a = n / 2;
    var s = o / 2;
    if (n < 0) {
      n = -n;
      o = -o;
      this._direction = 0;
    }
    var r = l.int(e.x + a + o * i);
    var c = l.int(e.y + s - n * i);
    return new f(r, c);
  };
  BasicMapmovement.prototype.areaToPixel = function (e) {
    return new f(e.x * c.ClientConstCastle.MAPTILESIZE_X + c.ClientConstCastle.MAPTILESIZE_X / 2, e.y * c.ClientConstCastle.MAPTILESIZE_Y + c.ClientConstCastle.MAPTILESIZE_Y / 2);
  };
  Object.defineProperty(BasicMapmovement.prototype, "movementIconContainer", {
    get: function () {
      return this._movementIconContainer;
    },
    enumerable: true,
    configurable: true
  });
  BasicMapmovement.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.disp.removeEventListener(m.MOUSE_OVER, this.bindFunction(this.doZSortForHoverMovement));
    while (this.disp.numChildren > 0) {
      this.disp.removeChildAt(0);
    }
    d.CastleModel.settingsData.removeEventListener(u.SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED, this.bindFunction(this.onChangedVisible));
  };
  Object.defineProperty(BasicMapmovement.prototype, "direction", {
    get: function () {
      return this._direction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovement.prototype, "mapMovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMapmovement.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  BasicMapmovement.prototype.updateMovementPositionByViewport = function (e, t) {
    if (!e.equals(this.viewPointStart) || this.lastZoom != t) {
      this.lastZoom = t;
      this.viewPointStart = e;
      this.redrawGraphics();
    }
  };
  BasicMapmovement.prototype.assetFileURL = function (e) {
    return a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  BasicMapmovement.__initialize_static_members = function () {
    BasicMapmovement.ANIMATION_UPDATE_INTERVAL = 175;
    BasicMapmovement.ANIMATION_ADDITIONAL_INTERVAL_FOR_ONE_MOVEMENT = 175;
    BasicMapmovement.ANIMATION_RENDER_LIMIT = 30;
    BasicMapmovement.ROUND_TO_LINEAR_ARROWRANGE_INPIXEL = 150;
    BasicMapmovement.ANIMATION_PROGRESS_LAYER_RENDER_LIMIT = 30;
    BasicMapmovement.NORMALDISTANCE = "no_loop";
  };
  return BasicMapmovement;
}(h.VisualMapElement);
exports.BasicMapmovement = O;
r.classImplementsInterfaces(O, "IIngameUICapable");
O.__initialize_static_members();