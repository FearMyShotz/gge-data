Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./313.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function AInteractiveIsoObjectVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AInteractiveIsoObjectVE, e);
  AInteractiveIsoObjectVE.prototype.updateInteractionVisibility = function () {
    var e = this.isoRenderer.mouse.hoveredTarget == this;
    var t = this.isoRenderer.mouse.focusedTarget == this;
    var i = this.isoRenderer.mouse.selectedTarget == this;
    var n = this.isoRenderer.mouse.draggedTarget == this;
    if (e || t || i || n) {
      this.addGlow();
    } else {
      this.removeGlow();
    }
  };
  AInteractiveIsoObjectVE.prototype.addGlow = function () {
    if (this.interactiveVO.isHoverGlowAvailable && this.disp && (!this.disp.filters || this.disp.filters.length == 0)) {
      var e;
      var t = p.Iso.data.areaData.areaInfo.kingdomID == a.WorldIce.KINGDOM_ID ? d.IsoConst.VE_GLOW_FILTER_BLUE : d.IsoConst.VE_GLOW_FILTER_STANDARD;
      var i = this.disp.children;
      e = i && i.length === 1;
      var n = i[0];
      if (e && !n.allowCaching && n._running && n.numFrames > 1) {
        n.gotoAndStop(1);
        n.currentDisplayObject.tickChildren = false;
      }
      var o = this.disp._cacheScale;
      var s = this.disp.glowCache;
      if (e && s && n.sourceClassName && n.sourceClassName === this._prevSourceName && o === this._prevGlowScale && this.disp.cacheCanvas) {
        this.disp.cacheCanvas.width = s.width;
        this.disp.cacheCanvas.height = s.height;
        var r = this.disp.cacheCanvas.getContext("2d");
        r.clearRect(0, 0, this.disp.cacheCanvas.width, this.disp.cacheCanvas.height);
        r.drawImage(s, 0, 0);
        this.disp.filters = t;
        this.disp._filterOffsetX = this.glowOffsetX;
        this.disp._filterOffsetY = this.glowOffsetY;
      } else {
        this.disp.useFilters(t, true);
        this.glowOffsetX = this.disp._filterOffsetX = this.disp._filterOffsetX / o;
        this.glowOffsetY = this.disp._filterOffsetY = this.disp._filterOffsetY / o;
        if (this.disp.cacheCanvas && e) {
          var l = document.createElement("canvas");
          var c = l.getContext("2d");
          l.width = this.disp.cacheCanvas.width;
          l.height = this.disp.cacheCanvas.height;
          try {
            c.drawImage(this.disp.cacheCanvas, 0, 0);
          } catch (e) {
            throw new Error("drawImage function failed! more info: " + this.disp.cacheCanvas.width + " " + this.disp.cacheCanvas.height + " " + e);
          }
          this.invalidateGlowCache();
          this.disp.glowCache = l;
          this._prevSourceName = n.sourceClassName;
          this._prevGlowScale = this.disp._cacheScale;
        }
      }
    }
  };
  AInteractiveIsoObjectVE.prototype.removeGlow = function () {
    if (this.disp && this.interactiveVO.isHoverGlowAvailable) {
      try {
        this.disp.useFilters([], true);
      } catch (e) {
        throw new Error("useFilters function failed! more info: " + this.disp.width + " " + this.disp.height + " " + e);
      }
      if (s.CastleModel.gfxData.animationActive) {
        var e = this.disp.children[0];
        if (e && !e.allowCaching && !e._running && e.numFrames > 1) {
          e.currentDisplayObject.tickChildren = true;
          e.gotoAndPlay(1);
        }
      }
    }
  };
  AInteractiveIsoObjectVE.prototype.invalidateGlowCache = function () {
    if (this.disp.glowCache instanceof HTMLCanvasElement) {
      this.disp.glowCache.width = 0;
      this.disp.glowCache = null;
    }
  };
  AInteractiveIsoObjectVE.prototype.destroyDisp = function () {
    e.prototype.destroyDisp.call(this);
    this.invalidateGlowCache();
  };
  AInteractiveIsoObjectVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    for (var t = 0, i = this.getInteractionDisps(); t < i.length; t++) {
      var n = i[t];
      n.addEventListener(l.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      n.addEventListener(l.MOUSE_UP, this.bindFunction(this.onMouseUp));
      n.addEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      n.addEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
  };
  AInteractiveIsoObjectVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (n) {
      for (var t = 0, i = this.getInteractionDisps(); t < i.length; t++) {
        var n = i[t];
        n.removeEventListener(l.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
        n.removeEventListener(l.MOUSE_UP, this.bindFunction(this.onMouseUp));
        n.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
        n.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      }
    }
  };
  AInteractiveIsoObjectVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    u.CastleLayoutManager.getInstance().updateGameStage();
  };
  AInteractiveIsoObjectVE.prototype.getInteractionDisps = function () {
    return [this.elementContainer];
  };
  AInteractiveIsoObjectVE.prototype.onMouseClick = function () {};
  AInteractiveIsoObjectVE.prototype.onMouseUp = function (e) {
    this.objectInteractions.onMouseUpTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onMouseDown = function (e) {
    this.objectInteractions.onMouseDownTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onMouseOver = function (e) {
    this.objectInteractions.onMouseOverTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onMouseOut = function (e) {
    this.objectInteractions.onMouseOutTarget(this);
  };
  AInteractiveIsoObjectVE.prototype.onHoverTarget = function () {};
  AInteractiveIsoObjectVE.prototype.onUnHoverTarget = function () {};
  AInteractiveIsoObjectVE.prototype.onCameraZoomChanged = function () {
    e.prototype.onCameraZoomChanged.call(this);
    if (this.disp.glowCache) {
      this.disp.glowCache = null;
      if (this.disp.filters && this.disp.filters.length > 0) {
        this.removeGlow();
        this.addGlow();
      }
    }
  };
  Object.defineProperty(AInteractiveIsoObjectVE.prototype, "interactiveVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AInteractiveIsoObjectVE;
}(r.AIsoObjectVE);
exports.AInteractiveIsoObjectVE = c;
var u = require("./17.js");
var d = require("./144.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");
var p = require("./33.js");