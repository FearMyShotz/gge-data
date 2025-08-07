Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./6.js");
var E = require("./228.js");
var y = require("./18.js");
var b = require("./16.js");
var D = require("./192.js");
var I = require("./90.js");
var T = require("./576.js");
var v = require("./30.js");
var S = require("./15.js");
var A = require("./72.js");
var L = require("./4.js");
var P = require("./408.js");
var M = require("./41.js");
var R = require("./575.js");
var V = require("./4175.js");
var x = require("./276.js");
var w = require("./222.js");
var B = require("./884.js");
var F = require("./1874.js");
var N = createjs.Container;
var k = createjs.Event;
var U = createjs.MouseEvent;
var G = createjs.Point;
var H = function (e) {
  function CastleWorldmapRenderer(t, i = -1, n = -1) {
    var o = e.call(this) || this;
    o.isNaviVisible = false;
    o._mode = 0;
    o.viewPortWidthInPixels = 0;
    o.viewPortHeightInPixels = 0;
    o.viewPortInvalidated = false;
    o._movementsFirstRealRendered = false;
    o._isUsingMouse = false;
    o.lastTimeNaivRotationUpdate = 0;
    o.layer = t;
    o.layer.name = "worldmapContainer";
    o._bgLayer = new N();
    o._bgLayer.name = "worldMapRendererBgLayer";
    o.layoutManager.bgStage.addChild(o.bgLayer);
    o._staticLayer = new N();
    o._staticLayer.name = "worldMapRendererStaticLayer";
    o.layoutManager.staticStage.addChild(o._staticLayer);
    o.nonInteractiveLayer = new N();
    o.nonInteractiveLayer.name = "nonInteractiveLayer";
    o.nonInteractiveLayer.mouseChildren = false;
    o.nonInteractiveLayer.mouseEnabled = true;
    o.mapObjectsLayer = new N();
    o.mapObjectsLayer.name = "mapObjectsLayer";
    o.mapMovementsLayer = new N();
    o.mapMovementsLayer.name = "mapMovementsLayer";
    o.mapLabelsLayer = new N();
    o.mapLabelsLayer.name = "mapLabelsLayer";
    o.mapLabelsLayer.addEventListener(U.MOUSE_OVER, o.bindFunction(o._onMapMouseOver));
    o.mapLabelsLayer.addEventListener(U.MOUSE_OUT, o.bindFunction(o._onMapMouseOut));
    o.updateGlobalEventListener();
    o.connectionLines = new F.ConnectionMapObject();
    o.naviArrow = new (u.getDefinitionByName("CastleNavigationArrow"))();
    o.itxt_distance = o.textFieldManager.registerTextField(o.naviArrow.mc_circle.txt_value, new f.TextVO("---"));
    o.bgLayer.addChild(o.nonInteractiveLayer);
    o.staticLayer.addChild(o.mapObjectsLayer);
    o.layer.addChild(o.connectionLines);
    o.staticLayer.addChild(o.mapLabelsLayer);
    o.layer.addChild(o.mapMovementsLayer);
    o.mapLabelsLayer.stage.addEventListener(U.MOUSE_OUT, o.bindFunction(o._onMapMouseOut));
    for (var a = 0; a < o.layer.children.length; a++) {
      var s = o.layer.children[a];
      s.tickEnabled = false;
      s.tickChildren = false;
    }
    o.layer.addEventListener(U.ROLL_OVER, o.bindFunction(o.showNavi));
    o._domNaviContainer = document.getElementById("naviCursorContainer");
    var r = o.naviArrow.width;
    var l = o.naviArrow.height;
    o._domNaviContainer.style.width = r + "px";
    o._domNaviContainer.style.height = l + "px";
    o._domNaviCircleCanvas = document.getElementById("naviCircle");
    o._domNaviCircleCanvas.width = r;
    o._domNaviCircleCanvas.height = l;
    o._domNaviCtx = o._domNaviCircleCanvas.getContext("2d");
    o.naviArrow.mc_arrow.visible = false;
    o.naviArrow.mc_cursor.visible = false;
    o.naviArrow.mc_circle.txt_value.visible = false;
    o.naviArrow.draw(o._domNaviCtx, true);
    o._domNaviTxt = document.getElementById("naviTxt");
    o.naviArrow.mc_arrow.visible = true;
    o._domNaviArrowCanvas = document.getElementById("naviArrow");
    o._domNaviArrowCanvas.width = o.naviArrow.mc_arrow.width;
    o._domNaviArrowCanvas.height = o.naviArrow.mc_arrow.height;
    o.naviArrow.mc_arrow.bitmap_1.draw(o._domNaviArrowCanvas.getContext("2d"), true);
    o._domNaviArrowCanvas.style.top = o.naviArrow.mc_arrow.y + o.naviArrow.mc_arrow.bitmap_1.y - 5 + "px";
    o._domNaviArrowCanvas.style.left = o.naviArrow.mc_arrow.x + o.naviArrow.mc_arrow.bitmap_1.x + "px";
    o._domNaviCursorCanvas = document.getElementById("naviCursor");
    o._domNaviCursorCanvas.width = o.naviArrow.mc_cursor.width;
    o._domNaviCursorCanvas.height = o.naviArrow.mc_cursor.height;
    o.naviArrow.mc_cursor.visible = true;
    o.naviArrow.mc_cursor.draw(o._domNaviCursorCanvas.getContext("2d"), true);
    o.showNavi(null);
    o.camera = new W.CastleWorldmapCamera(o.layer, o.bgLayer, 0, 0, 1);
    o.camera.update.add(o.bindFunction(o.onCameraUpdate));
    o.viewPortWidthInPixels = i != -1 ? i : t.width;
    o.viewPortHeightInPixels = n != -1 ? n : t.height;
    o.initNonInteractiveContent();
    o.initNaviArrow();
    L.CastleModel.worldmapData.areaTiles.checkResetOnKingdomChange();
    L.CastleModel.worldmapData.areaTiles.directoryChanged.add(o.bindFunction(o.invalidateMap));
    o.interactiveMapObjects = new Map();
    o.movements = [];
    return o;
  }
  n.__extends(CastleWorldmapRenderer, e);
  CastleWorldmapRenderer.prototype.updateGlobalEventListener = function () {
    L.CastleModel.kingdomData.addEventListener(D.CastleKingdomEvent.KINGDOM_SWITCHED, this.bindFunction(this._onKingdomSwitched));
  };
  CastleWorldmapRenderer.prototype._onMapMouseOver = function (e) {
    var t = M.CastleMovieClipHelper.getFirstMovieClipParent(e.target);
    if (a.BasicToolTipManager.TOOLTIP_LABEL in t && t.toolTipText) {
      this.layoutManager.tooltipManager.show(t.toolTipText, t);
    }
  };
  CastleWorldmapRenderer.prototype._onMapMouseOut = function (e) {
    this.layoutManager.tooltipManager.hide();
  };
  CastleWorldmapRenderer.prototype.showNavi = function (e) {
    if (!this.isNaviVisible && j.CastleLayoutManager.getInstance().numVisibleDialogs == 0) {
      this.isNaviVisible = true;
      this._domNaviContainer.style.display = "block";
      this.layoutManager.nativeCursor.hideCustomCursor();
      c.Mouse.instance().showCssCursor(p.CSSMouseCursor.NONE);
      document.body.classList.add("cursor-none");
    }
  };
  CastleWorldmapRenderer.prototype.hideNavi = function (e = null) {
    if (this.isNaviVisible) {
      this.isNaviVisible = false;
      this.setNaviArrowRotation(new G(0, 0));
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
      this._domNaviContainer.style.display = "none";
      document.body.classList.remove("cursor-none");
    }
  };
  CastleWorldmapRenderer.prototype.isNaviUsingMouse = function (e) {
    this._isUsingMouse = e;
  };
  CastleWorldmapRenderer.prototype.hideTooltips = function () {
    this.layoutManager.tooltipManager.hide();
  };
  CastleWorldmapRenderer.prototype.initNonInteractiveContent = function () {
    this.viewportBackgroundSectorBitmaps = new Map();
    this.nonInteractiveLayer.removeChildren();
  };
  CastleWorldmapRenderer.prototype.invalidateMap = function () {
    this.viewPortInvalidated = true;
  };
  Object.defineProperty(CastleWorldmapRenderer.prototype, "mode", {
    set: function (e) {
      if (this._mode !== e) {
        this._mode = e;
        switch (e) {
          case CastleWorldmapRenderer.PAUSE:
            this.switchToPause();
            break;
          case CastleWorldmapRenderer.RUNNING:
            this.switchToRunMode();
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapRenderer.prototype.switchToRunMode = function () {
    this.layer.addEventListener(k.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.layoutManager.uiStage.addEventListener(U.ROLL_OUT, this.bindFunction(this.showNavi));
    this.layoutManager.uiStage.addEventListener(U.ROLL_OVER, this.bindFunction(this.hideNavi));
    this.camera.activate();
    this.viewPortInvalidated = true;
    r.debug("Worldmap Renderer engaged.");
    if (j.CastleLayoutManager.getInstance().currentState === j.CastleLayoutManager.STATE_WORLDMAP_RELOCATION) {
      S.CastleBasicController.getInstance().dispatchEvent(new I.CastleWorldmapEvent(I.CastleWorldmapEvent.UPDATE_AREA_INFO));
    }
    L.CastleModel.worldmapData.requestExtraData();
    this.updateMovementsFromModel();
    this.showNavi(null);
  };
  CastleWorldmapRenderer.prototype.switchToPause = function () {
    this.layer.removeEventListener(k.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.layoutManager.uiStage.removeEventListener(U.ROLL_OVER, this.bindFunction(this.hideNavi));
    this.layoutManager.uiStage.removeEventListener(U.ROLL_OUT, this.bindFunction(this.showNavi));
    this.camera.deactivate();
    this.clearMapobjects();
    this.clearBackground();
    this.clearMovements();
    this.hideLines();
    this.hideNavi();
    this.hideTooltips();
    r.debug("Worldmap Renderer suspended.");
  };
  CastleWorldmapRenderer.prototype.onEnterFrame = function (e) {
    if (this.layer.stage) {
      this.layer.stage.invalidate();
    }
    if (this._movementsFirstRealRendered) {
      this.updateMovements();
    }
    if (this.isNaviVisible && this._isUsingMouse) {
      if (e.timeStamp - this.lastTimeNaivRotationUpdate > 500) {
        this.setNaviArrowRotation(this.camera.relativeMousePos, true);
        this.lastTimeNaivRotationUpdate = e.timeStamp;
      } else {
        this.setNaviArrowRotation(this.camera.relativeMousePos, false);
      }
      this._domNaviContainer.style.top = Math.round(this.camera.lastMouseStage.y) + "px";
      this._domNaviContainer.style.left = Math.round(this.camera.lastMouseStage.x) + "px";
    }
    this.checkExpiredRelocationObjects();
    this.renderLayer();
  };
  CastleWorldmapRenderer.prototype.checkExpiredRelocationObjects = function () {
    if (L.CastleModel.worldmapData.getExpiredRelocationObject()) {
      var e = j.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      L.CastleModel.worldmapData.updateAreaRange(e.x, e.y, e.x + e.width, e.y + e.height);
    }
  };
  CastleWorldmapRenderer.prototype.renderNavForMobile = function (e = false) {
    if (!this._isUsingMouse) {
      if (e) {
        this._domNaviContainer.style.display = "none";
        return;
      }
      this.setNaviArrowRotation(this.camera.relativeMousePos, true);
      this._domNaviContainer.style.top = Math.round(this.camera.lastMouseStage.y) + "px";
      this._domNaviContainer.style.left = Math.round(this.camera.lastMouseStage.x) + "px";
      if (this.naviArrow.width + this.camera.lastMouseStage.x > document.documentElement.clientWidth || this.naviArrow.height + this.camera.lastMouseStage.y > document.documentElement.clientHeight) {
        this._domNaviContainer.style.display = "none";
      } else {
        this._domNaviContainer.style.display = "block";
      }
    }
  };
  CastleWorldmapRenderer.prototype.onRender = function (e) {
    if (this.layer.hasEventListener(k.RENDER)) {
      this.layer.removeEventListener(k.RENDER, this.bindFunction(this.onRender));
    }
    this.renderLayer();
  };
  CastleWorldmapRenderer.prototype.onCameraUpdate = function () {
    this.viewPortInvalidated = true;
  };
  CastleWorldmapRenderer.prototype.renderLayer = function () {
    if (this.viewPortInvalidated) {
      this.viewPortInvalidated = false;
      this.renderBackgrounds();
      if (L.CastleModel.worldmapData.areaTiles.allSectorsInitialized) {
        this.finishRendering();
      } else {
        L.CastleModel.worldmapData.areaTiles.SGN_SECTORS_INITIALIZED.add(this.bindFunction(this.finishRendering));
      }
    }
  };
  CastleWorldmapRenderer.prototype.finishRendering = function () {
    this.renderDecoObjects();
    this.renderMapObjects();
    this.updateConnections();
    if (!this._movementsFirstRealRendered) {
      this.updateMovementsFromModel();
      this._movementsFirstRealRendered = true;
      this.updateMovements();
    }
    L.CastleModel.worldmapData.areaTiles.SGN_SECTORS_INITIALIZED.remove(this.bindFunction(this.finishRendering));
  };
  CastleWorldmapRenderer.prototype.destroy = function () {
    this.camera.update.remove(this.bindFunction(this.onCameraUpdate));
    this.mapLabelsLayer.removeEventListener(U.MOUSE_OVER, this.bindFunction(this._onMapMouseOver));
    this.mapLabelsLayer.removeEventListener(U.MOUSE_OUT, this.bindFunction(this._onMapMouseOut));
    this.mapLabelsLayer.stage.removeEventListener(U.MOUSE_OUT, this.bindFunction(this._onMapMouseOut));
    L.CastleModel.kingdomData.removeEventListener(D.CastleKingdomEvent.KINGDOM_SWITCHED, this.bindFunction(this._onKingdomSwitched));
  };
  CastleWorldmapRenderer.prototype._onKingdomSwitched = function (e) {
    this.kingdomChanged();
  };
  CastleWorldmapRenderer.prototype.renderBackgrounds = function () {
    if (this.camera) {
      var e;
      var t;
      var i = Math.ceil(y.ClientConstCastle.SECTORPIXELSIZE_X * this.camera.viewPortZoom);
      var n = this.camera.getPixelOffset(y.ClientConstCastle.SECTORPIXELSIZE_X, y.ClientConstCastle.SECTORPIXELSIZE_Y);
      for (var o = this.camera.getSectorViewportRectangle(), a = new G(0, 0), r = 0; r < o.height; ++r) {
        for (var l = 0; l < o.width; ++l) {
          a.x = o.x + l;
          a.y = o.y + r;
          if (!(i > 3000)) {
            a = B.SectorHelper.getLoopedSectorPosition(a);
            var c = l + ":" + r;
            e = this.viewportBackgroundSectorBitmaps.get(c);
            t = L.CastleModel.worldmapData.bgTiles.getBitmapForSectorByXY(a.x, a.y);
            var u = s.MathBase.clamp(this.camera.viewPortZoom + 0.001, x.CastleWorldmapConst.ZOOM_MIN, x.CastleWorldmapConst.ZOOM_MAX);
            if (e instanceof V.CastleWorldmapBitmap) {
              if (t != null) {
                if (!o.contains(e.sectorX, e.sectorY)) {
                  L.CastleModel.worldmapData.bgTiles.freeBitmapDataMemory(e.sectorX, e.sectorY);
                }
                e.bitmapData = t;
                e.x = l * i;
                e.y = r * i;
                e.sectorX = O.int(l + o.x);
                e.sectorY = O.int(r + o.y);
                if (e.scaleX != u) {
                  e.scaleX = u;
                  e.scaleY = u;
                }
              }
            } else {
              e = new V.CastleWorldmapBitmap(t, h.PixelSnapping.ALWAYS, true);
              this.viewportBackgroundSectorBitmaps.set(c, e);
              e.x = l * i;
              e.y = r * i;
              e.sectorX = O.int(l + o.x);
              e.sectorY = O.int(r + o.y);
              if (e.scaleX != u) {
                e.scaleX = u + 0.001;
                e.scaleY = u + 0.001;
              }
              this.nonInteractiveLayer.addChild(e);
            }
          }
        }
      }
      this.removeOffscreenBackgroundBitmaps(o);
      this.nonInteractiveLayer.x = n.x;
      this.nonInteractiveLayer.y = n.y;
      this.layoutManager.renderBGStage();
    }
  };
  CastleWorldmapRenderer.prototype.removeOffscreenBackgroundBitmaps = function (e) {
    if (this.viewportBackgroundSectorBitmaps != null) {
      for (var t = 0, i = Array.from(this.viewportBackgroundSectorBitmaps.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = n.split(":");
          if (parseInt(o[0]) >= e.width || parseInt(o[1]) >= e.height) {
            var a = this.viewportBackgroundSectorBitmaps.get(n);
            if (!e.contains(a.sectorX, a.sectorY)) {
              L.CastleModel.worldmapData.bgTiles.freeBitmapDataMemory(a.sectorX, a.sectorY);
            }
            if (this.nonInteractiveLayer.contains(a)) {
              this.nonInteractiveLayer.removeChild(a);
            }
            this.viewportBackgroundSectorBitmaps.delete(n);
          }
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.renderDecoObjects = function () {
    var e;
    var t = new Map();
    for (var i = this.camera.getAreaViewportRectangle(), n = -1; n < i.height + 2; ++n) {
      for (var o = -1; o < i.width + 2; ++o) {
        var a = O.int(B.SectorHelper.getLoopedAreaPositionX(i.x + o));
        var s = O.int(i.y + n);
        e = null;
        if ((e = L.CastleModel.worldmapData.bgTiles.drawDecoAreaForAreaByXY(a, s)) && !t.get(e)) {
          t.set(e, e);
        }
      }
    }
    if (t != null) {
      for (var r = 0, l = Array.from(t.values()); r < l.length; r++) {
        var c = l[r];
        if (c !== undefined) {
          c.unlock();
          this.invalidateMap();
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.renderMapObjects = function () {
    for (var e = this.camera.getAreaViewportRectangle(), t = new Map(), i = 0, n = -1; n < e.height + 2; ++n) {
      for (var o = -1; o < e.width + 2; ++o) {
        var a = O.int(B.SectorHelper.getLoopedAreaPositionX(e.x + o));
        var s = O.int(e.y + n);
        var r = L.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(a, s);
        var l = CastleWorldmapRenderer.locationToInt(a, s);
        var c = this.interactiveMapObjects.get(l);
        if (r && r instanceof K.InteractiveMapobjectVO && r.isVisibleOnMap) {
          t.set(l, true);
          if (c) {
            if (c.worldmapObjectVO != r) {
              this.removeMapobject(c);
              this.interactiveMapObjects.set(l, this.initializeNewMapobject(r, o, n, i));
              i++;
            } else {
              this.updateMapobject(c, o, n);
              i++;
            }
          } else {
            this.interactiveMapObjects.set(l, this.initializeNewMapobject(r, o, n, i));
            i++;
          }
        } else if (c) {
          this.removeMapobject(c);
          this.interactiveMapObjects.delete(l);
        }
      }
    }
    this.removeOffscreenMapobjects(t);
    this.layoutManager.renderStaticStage();
  };
  CastleWorldmapRenderer.pointToInt = function (e) {
    return O.int(e.x + e.y * 10000);
  };
  CastleWorldmapRenderer.locationToInt = function (e, t) {
    return e + t * 10000;
  };
  CastleWorldmapRenderer.prototype.removeOffscreenMapobjects = function (e) {
    if (this.interactiveMapObjects != null) {
      for (var t = 0, i = Array.from(this.interactiveMapObjects.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (0, !e.get(n))) {
          var o = this.interactiveMapObjects.get(n);
          if (o instanceof Y.InteractiveMapobject) {
            this.removeMapobject(o);
            0;
          }
          this.interactiveMapObjects.delete(n);
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.initializeNewMapobject = function (e, t, i, n = -1) {
    var o = e.name + e.group;
    var a = new (u.getDefinitionByName(o))();
    a.initialize(e, this);
    var s = this.camera.getPixelOffset();
    a.visualX = s.x + t * y.ClientConstCastle.MAPTILESIZE_X * this.camera.viewPortZoom;
    a.visualY = s.y + i * y.ClientConstCastle.MAPTILESIZE_Y * this.camera.viewPortZoom;
    a.scale = this.camera.viewPortZoom;
    a.addDispToLayer(this.mapObjectsLayer, n);
    a.disp.addEventListener(T.VisualMapObjectEvent.VE_UPDATED, this.bindFunction(this.onVeUpdated));
    P.renderScheduler.addTask(this.updateMapObjectVe.bind(this, a));
    return a;
  };
  CastleWorldmapRenderer.prototype.updateMapObjectVe = function (e) {
    return !e || !e.disp || !e.disp.stage || (this.drawCastleName(e, e.visualX, e.visualY), false);
  };
  CastleWorldmapRenderer.prototype.updateMapobject = function (e, t, i) {
    var n = this.camera.getPixelOffset();
    e.visualX = n.x + t * y.ClientConstCastle.MAPTILESIZE_X * this.camera.viewPortZoom;
    e.visualY = n.y + i * y.ClientConstCastle.MAPTILESIZE_Y * this.camera.viewPortZoom;
    e.scale = this.camera.viewPortZoom;
    this.updateCastleName(e, n.x + t * y.ClientConstCastle.MAPTILESIZE_X * this.camera.viewPortZoom, n.y + i * y.ClientConstCastle.MAPTILESIZE_Y * this.camera.viewPortZoom);
  };
  CastleWorldmapRenderer.prototype.clearMapobjects = function (e = true, t = false) {
    if (this.interactiveMapObjects != null) {
      for (var i = 0, n = Array.from(this.interactiveMapObjects.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.removeMapobject(o);
        }
      }
    }
    this.interactiveMapObjects = new Map();
    if (t) {
      this.layoutManager.updateGameStage();
    }
    if (e) {
      this.layoutManager.renderStaticStage();
    }
  };
  CastleWorldmapRenderer.prototype.removeMapobject = function (e) {
    if (e.infoComponent) {
      var t = e.getNameMC();
      if (t && this.mapLabelsLayer.contains(t)) {
        M.CastleMovieClipHelper.uncacheSafe(t);
        this.mapLabelsLayer.removeChild(t);
      }
    }
    e.disp.removeEventListener(T.VisualMapObjectEvent.VE_UPDATED, this.bindFunction(this.onVeUpdated));
    if (R.isPoolable(e)) {
      R.mapObjectsPool.recycle(e);
    } else {
      e.remove();
    }
    e.die(-1);
    e.removeDispFromWorld();
    e = null;
  };
  CastleWorldmapRenderer.prototype.clearBackground = function () {
    if (this.viewportBackgroundSectorBitmaps != null && !E.isNullOrUndefined(L.CastleModel.worldmapData)) {
      var e = L.CastleModel.worldmapData.bgTiles;
      for (var t = 0, i = Array.from(this.viewportBackgroundSectorBitmaps.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this.viewportBackgroundSectorBitmaps.get(n);
          e.freeBitmapDataMemory(o.sectorX, o.sectorY);
          if (this.nonInteractiveLayer.contains(o)) {
            this.nonInteractiveLayer.removeChild(o);
          }
          this.viewportBackgroundSectorBitmaps.delete(n);
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.kingdomChanged = function () {
    this.clearMapobjects();
    this.clearBackground();
    if (L.CastleModel.worldmapData) {
      L.CastleModel.worldmapData.areaTiles.checkResetOnKingdomChange();
    }
    this.invalidateMap();
    this.clearMovements();
  };
  CastleWorldmapRenderer.prototype.getVEforAreaXY = function (e, t, i = false) {
    if (i) {
      this.viewPortInvalidated = true;
      this.renderLayer();
    }
    return this.interactiveMapObjects.get(CastleWorldmapRenderer.pointToInt(new G(e, t)));
  };
  CastleWorldmapRenderer.prototype.drawCastleName = function (e, t, i) {
    var n = e.getNameMC();
    if (n) {
      if (e.worldmapObjectVO.areaType == _.WorldConst.AREA_TYPE_METROPOL) {
        i += 10;
      }
      n.x = t;
      n.y = i;
      n.scaleX = n.scaleY = this.camera.viewPortZoom;
      this.mapLabelsLayer.addChild(n);
      this.cacheScaledNameMC(n);
    }
  };
  CastleWorldmapRenderer.prototype.cacheScaledNameMC = function (e) {
    M.CastleMovieClipHelper.uncacheSafe(e);
    var t = e.getBounds();
    if (t && t.width && t.height) {
      e.cache(Math.floor(t.x), Math.floor(t.y), Math.ceil(t.width), Math.ceil(t.height), 2);
    }
  };
  CastleWorldmapRenderer.prototype.updateCastleName = function (e, t, i) {
    if (e.infoComponent) {
      var n = e.getNameMC();
      if (n) {
        if (e.worldmapObjectVO.areaType == _.WorldConst.AREA_TYPE_METROPOL) {
          i += 10;
        }
        n.x = t;
        n.y = i;
        if (this.camera.viewPortZoom != n.scaleX) {
          n.scaleX = n.scaleY = this.camera.viewPortZoom;
        }
        if (e.infoComponent.updateNamePlateBgColor()) {
          this.cacheScaledNameMC(n);
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.onVeUpdated = function (e = null) {
    var t = e.params.shift();
    if (t instanceof Y.InteractiveMapobject && t.worldmapObjectVO.isVisibleOnMap) {
      this.drawCastleName(t, t.visualX, t.visualY);
    }
  };
  CastleWorldmapRenderer.prototype.drawHeatmap = function () {
    var e = L.CastleModel.worldmapData.areaTiles.activityHeatMap;
    var t = 0;
    var i = 0;
    var n = this.heatMapSprite.graphics;
    n.clear();
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          t = 0;
          if (s != null) {
            for (var r = 0, l = s; r < l.length; r++) {
              var c = l[r];
              if (c !== undefined) {
                if (c < 0) {
                  n.beginFill(b.ClientConstColor.GENERIC_BLACK, 0.7);
                } else {
                  n.beginFill(b.ClientConstColor.rgbToUint(0, c * 255, 0), 0.7);
                }
                n.drawRect(t * 4, i * 4, 4, 4);
                n.endFill();
                t++;
              }
            }
          }
          i++;
        }
      }
    }
    this.heatMapSprite.x = this.camera.viewPortWidth / 2 - this.heatMapSprite.width / 2;
    this.heatMapSprite.y = this.camera.viewPortHeight - 75 - this.heatMapSprite.height;
  };
  CastleWorldmapRenderer.prototype.addMovement = function (e) {
    var t;
    if (!z.instanceOfClass(e, "TreasureHuntMovementVO")) {
      (t = new (u.getDefinitionByName(e.name + e.group))()).initialize(e, this);
      t.addDispToLayer(this.mapMovementsLayer);
      this.movements.push(t);
    }
  };
  CastleWorldmapRenderer.prototype.removeMovement = function (e) {
    var t;
    if (this.movements != null) {
      for (var i = 0, n = this.movements; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.objectID == e) {
          t = o;
          break;
        }
      }
    }
    if (t) {
      this.movements.splice(this.movements.indexOf(t), 1);
      t.die(-1);
      t.remove();
      t.removeDispFromWorld();
      t = null;
    }
  };
  CastleWorldmapRenderer.prototype.updateMovements = function () {
    var e = v.CachedTimer.getCachedTimer();
    if (this.movements != null) {
      for (var t = 0, i = this.movements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.update(e);
          n.updateMovementPositionByViewport(this.camera.viewPort, this.camera.viewPortZoom);
          n.disp.scaleX = n.disp.scaleY = this.camera.viewPortZoom;
        }
      }
    }
  };
  CastleWorldmapRenderer.prototype.clearMovements = function () {
    if (this.movements && this.movements != null) {
      for (var e = 0, t = this.movements; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.die(-1);
          i.remove();
          i.removeDispFromWorld();
          i = null;
        }
      }
    }
    this.movements = [];
  };
  CastleWorldmapRenderer.prototype.updateMovementsFromModel = function () {
    this.clearMovements();
    for (var e = 0, t = Array.from(L.CastleModel.armyData.mapMovements.values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && i.kingdomID === L.CastleModel.kingdomData.activeKingdomID) {
        this.addMovement(i);
      }
    }
  };
  CastleWorldmapRenderer.prototype.invalideteMovements = function () {
    this._movementsFirstRealRendered = false;
  };
  CastleWorldmapRenderer.prototype.showLines = function (e, t, i, n = true, o = true) {
    if (n) {
      this.connectionLines.reset();
    }
    if (o) {
      var a = this.camera.getPixelPosForArea(e, true, false);
      if (a) {
        this.connectionLines.x = a.x;
        this.connectionLines.y = a.y;
        this.connectionLines.originPos = e;
      } else {
        console.warn("The connection line point is undefined");
      }
    }
    this.connectionLines.scaleX = this.connectionLines.scaleY = this.camera.viewPortZoom;
    this.connectionLines.showLines(e, t, i, n);
  };
  CastleWorldmapRenderer.prototype.hideLines = function () {
    this.connectionLines.reset();
  };
  CastleWorldmapRenderer.prototype.updateConnections = function () {
    if (this.connectionLines.visible) {
      if (this.connectionLines.sourceAreaPos) {
        var e = this.camera.getPixelPosForArea(this.connectionLines.originPos, true);
        this.connectionLines.x = e.x;
        this.connectionLines.y = e.y;
        this.connectionLines.scaleX = this.connectionLines.scaleY = this.camera.viewPortZoom;
      } else {
        this.hideLines();
      }
    }
  };
  CastleWorldmapRenderer.prototype.getNextDungeonMapobject = function (e, t = O.int(Number.MAX_VALUE), i = 3, n = true) {
    for (var o = i, a = o, s = null, r = -o; r <= o; r++) {
      for (var l = -o; l <= o; l++) {
        var c = e.absAreaPosX + l;
        var u = e.absAreaPosY + r;
        var p = d.castAs(this.getVEforAreaXY(c, u), "InteractiveMapobject");
        if (p && z.instanceOfClass(p, "DungeonMapobject") && p.dungeonMapObjectVO.dungeonLevel <= t && (n || !p.dungeonMapObjectVO.isCoolingDown)) {
          var h = w.MapHelper.getDistanceByMapobjects(p.worldmapObjectVO, e);
          if (h < a) {
            a = h;
            s = p;
          }
        }
      }
    }
    return s;
  };
  CastleWorldmapRenderer.prototype.initNaviArrow = function () {
    if (!this.layoutManager.nativeCursor.additionalCursorGfx.contains(this.naviArrow)) {
      this.layoutManager.nativeCursor.additionalCursorGfx.addChild(this.naviArrow);
      this.naviArrow.mc_circle.visible = true;
      this.itxt_distance = this.textFieldManager.registerTextField(this.naviArrow.mc_circle.txt_value, new f.TextVO("---"));
      this.itxt_distance.width = 42.05;
      this.setNaviArrowRotation(this.camera.relativeMousePos);
    }
  };
  CastleWorldmapRenderer.prototype.setNaviArrowRotation = function (e, t = true) {
    if (!this.isNaviVisible) {
      this.naviArrow.visible = false;
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
      return;
    }
    var i = L.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel;
    if (!i) {
      this.naviArrow.visible = false;
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
      return;
    }
    this.naviArrow.visible = true;
    if (i.kingdomID != L.CastleModel.kingdomData.activeKingdomID) {
      i = L.CastleModel.userData.castleList.getMainCastleByKingdomID(L.CastleModel.kingdomData.activeKingdomID);
    }
    if (!i) {
      this.naviArrow.mc_circle.visible = false;
      this.naviArrow.mc_arrow.visible = false;
      return;
    }
    var n = i.absAreaPos;
    var a = w.MapHelper.getRealPos(w.MapHelper.pixelPosToAreaGridPos(e));
    var s = this.calculateDistance(n, a);
    this.naviArrow.mc_arrow.rotation = w.MapHelper.getRotationToShortestDistance(a, n);
    this._domNaviArrowCanvas.style.transform = "rotate(" + this.naviArrow.mc_arrow.rotation + "deg)";
    var r = d.castAs(L.CastleModel.specialEventData.getActiveEventByEventId(C.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (L.CastleModel.kingdomData.activeKingdomID == g.FactionConst.KINGDOM_ID && z.instanceOfClass(r, "FactionEventVO") && r.isSpectator) {
      s = 0;
    }
    if (this._cacheDistance !== s && s && t) {
      this._domNaviTxt.value = m.Localize.number(s, true, 1);
      this._cacheDistance = s;
    }
    var l = s < 1 ? 0 : s;
    var c = Math.min(l / 4, 1).toFixed(1);
    if (this._domNaviArrowCanvas.style.opacity !== c) {
      this._domNaviArrowCanvas.style.opacity = c;
      this._domNaviCircleCanvas.style.opacity = c;
      this._domNaviTxt.style.opacity = c;
    }
  };
  CastleWorldmapRenderer.prototype.calculateDistance = function (e, t) {
    var i = w.MapHelper.getShortestDistance(e, t);
    return i = i < 100 ? s.MathBase.round(i, 1) : s.MathBase.round(i, 0);
  };
  Object.defineProperty(CastleWorldmapRenderer.prototype, "amountMovementsToRender", {
    get: function () {
      return this.movements.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "bgLayer", {
    get: function () {
      return this._bgLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "staticLayer", {
    get: function () {
      return this._staticLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "layoutManager", {
    get: function () {
      return j.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapRenderer.prototype, "textFieldManager", {
    get: function () {
      return l.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapRenderer.PAUSE = 0;
  CastleWorldmapRenderer.RUNNING = 1;
  CastleWorldmapRenderer.SHOW_HEATMAP = false;
  return CastleWorldmapRenderer;
}(A.CastleEventDispatcher);
exports.CastleWorldmapRenderer = H;
var j = require("./17.js");
var W = require("./1236.js");
var Y = require("./124.js");
var K = require("./101.js");
var z = require("./1.js");