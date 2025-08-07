Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./312.js");
var r = require("./91.js");
var l = require("./867.js");
var c = require("./695.js");
var u = require("./102.js");
var d = require("./26.js");
var p = require("./32.js");
var h = require("./338.js");
var g = require("./30.js");
var C = require("./4.js");
var _ = require("./14.js");
var m = require("./105.js");
var f = require("./122.js");
var O = require("./92.js");
var E = createjs.Event;
var y = createjs.MouseEvent;
var b = createjs.Point;
var D = function (e) {
  function IsoUpdaterView() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoUpdaterView, e);
  IsoUpdaterView.prototype.init = function () {
    this.removeEventListener();
    this.addEventListener();
    this.touchController = this.touchController || new P.CastleTouchZoomController(this.isoRenderer.camera.zoomRel.bind(this.isoRenderer.camera, L.IsoViewCamera.ZOOM_IN), this.isoRenderer.camera.zoomRel.bind(this.isoRenderer.camera, L.IsoViewCamera.ZOOM_OUT));
  };
  IsoUpdaterView.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeEventListener();
  };
  IsoUpdaterView.prototype.addEventListener = function () {
    var e = I.CastleLayoutManager.getInstance().gamestage;
    var t = I.CastleLayoutManager.getInstance().bgStage;
    var i = I.CastleLayoutManager.getInstance().staticStage;
    if (e) {
      e.addEventListener(y.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      t.addEventListener(y.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      e.addEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
      t.addEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
      i.addEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
      window.addEventListener(E.RESIZE, this.bindFunction(this.onResize));
      e.addEventListener(a.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      e.addEventListener(a.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      e.addEventListener(E.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      e.addEventListener(y.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      t.addEventListener(y.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      if (o.currentBrowserInfo.isMobile) {
        i.addEventListener(y.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      }
    }
    if (this.worldLayer) {
      this.worldLayer.mouseChildren = true;
      this.worldLayer.addEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      t.addEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      i.addEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    A.Iso.controller.keyWords.addEventListener();
    _.CastleComponent.controller.addEventListener(O.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onRingMenuHidden));
    _.CastleComponent.controller.addEventListener(h.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOverPanel));
    _.CastleComponent.controller.addEventListener(h.CastlePanelEvent.MOUSE_OUT_PANEL, this.bindFunction(this.onMouseOutPanel));
    _.CastleComponent.controller.addEventListener(r.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    _.CastleComponent.controller.addEventListener(l.CastleZoomEvent.ZOOM, this.bindFunction(this.onOptionPanelZoom));
    C.CastleModel.gfxData.addEventListener(c.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    C.CastleModel.allianceData.addEventListener(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    C.CastleModel.allianceHelpRequestData.addEventListener(s.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onAllianceHelpUpdated));
    C.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventAdded));
    _.CastleComponent.controller.addEventListener(p.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    _.CastleComponent.controller.addEventListener(O.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
  };
  IsoUpdaterView.prototype.removeEventListener = function () {
    var e = I.CastleLayoutManager.getInstance().gamestage;
    var t = I.CastleLayoutManager.getInstance().bgStage;
    var i = I.CastleLayoutManager.getInstance().staticStage;
    if (e) {
      e.removeEventListener(y.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      t.removeEventListener(y.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      e.removeEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
      t.removeEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
      i.removeEventListener(y.MOUSE_UP, this.bindFunction(this.onMouseUp));
      window.removeEventListener(E.RESIZE, this.bindFunction(this.onResize));
      e.removeEventListener(a.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      e.removeEventListener(a.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      e.removeEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      t.removeEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      i.removeEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      e.removeEventListener(E.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      e.removeEventListener(y.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      t.removeEventListener(y.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      if (o.currentBrowserInfo.isMobile) {
        i.removeEventListener(y.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      }
    }
    if (this.worldLayer) {
      this.worldLayer.removeEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this.worldLayer.removeEventListener(y.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    }
    A.Iso.controller.keyWords.removeEventListener();
    _.CastleComponent.controller.removeEventListener(O.IsoEvent.ON_HIDE_RING_MENU, this.bindFunction(this.onRingMenuHidden));
    _.CastleComponent.controller.removeEventListener(h.CastlePanelEvent.MOUSE_OVER_PANEL, this.bindFunction(this.onMouseOverPanel));
    _.CastleComponent.controller.removeEventListener(h.CastlePanelEvent.MOUSE_OUT_PANEL, this.bindFunction(this.onMouseOutPanel));
    _.CastleComponent.controller.removeEventListener(r.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onDialogOpened));
    _.CastleComponent.controller.removeEventListener(l.CastleZoomEvent.ZOOM, this.bindFunction(this.onOptionPanelZoom));
    C.CastleModel.gfxData.removeEventListener(c.GFXEvent.ANIMATION_STATE_CHANGED, this.bindFunction(this.onAnimationOptionChanged));
    C.CastleModel.allianceData.removeEventListener(u.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onMyAllianceInfoUpdated));
    C.CastleModel.allianceHelpRequestData.removeEventListener(s.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onAllianceHelpUpdated));
    C.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventAdded));
    _.CastleComponent.controller.removeEventListener(p.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onCrestColorUpdated));
    _.CastleComponent.controller.removeEventListener(O.IsoEvent.ON_RENDER_STRATEGY_CHANGED, this.bindFunction(this.onRenderStrategyChanged));
  };
  IsoUpdaterView.prototype.updateOnTimer = function (e) {
    for (var t = 0, i = this.isoRenderer.objects.getCompleteObjectsList(); t < i.length; t++) {
      i[t].update(e);
    }
  };
  IsoUpdaterView.prototype.switchBuildModeInOwnCastle = function (e) {
    if (S.IsoHelper.view.isInIsoScreen) {
      if (this.isoRenderer.strategies.currentStrategy.isActive(f.IsoRenderStrategyEnum.BUILD_MODE) == e) {
        return;
      }
      if (e) {
        this.isoRenderer.strategies.switchTo(f.IsoRenderStrategyEnum.set_defaultBuildMode);
      } else {
        this.isoRenderer.strategies.switchToNormalMode();
      }
      I.CastleLayoutManager.getInstance().updateLayout();
    }
  };
  IsoUpdaterView.prototype.onEnterFrame = function (e) {
    if (this.dataUpdater && S.IsoHelper.view.isInIsoScreen) {
      if (T.IsoConst.MOVEMENTS_ACTIVATED) {
        this.dataUpdater.movementUpdater.update(g.CachedTimer.getCachedTimer());
        this.dataUpdater.triggerObjectsUpdate(v.IsoObjectGroupEnum.MOVEMENTS);
      }
      this.dataUpdater.triggerObjectsUpdate(v.IsoObjectGroupEnum.EFFECTS);
    }
    this.isoRenderer.camera.updateShake();
    A.Iso.controller.processor.executeQueue();
  };
  IsoUpdaterView.prototype.onMouseDown = function (e) {
    if (this.isoRenderer.layers.isUnderBuildingLayer(e.target)) {
      this.isoRenderer.mouse.onMouseDownOnGround();
    }
    this.touchController.markTouchDownPoint(e);
  };
  IsoUpdaterView.prototype.onMouseUp = function (e) {
    if (this.isoRenderer.layers.isUnderBuildingLayer(e.target)) {
      this.isoRenderer.mouse.onMouseUpOnGround();
    }
    this.touchController.markTouchDownPoint(e, true);
  };
  IsoUpdaterView.prototype.onMobileDoubleClick = function () {
    I.CastleLayoutManager.getInstance().toggleFullscreen();
  };
  IsoUpdaterView.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.isoRenderer.camera.zoomRel(L.IsoViewCamera.ZOOM_IN);
    } else if (e.delta > 0) {
      this.isoRenderer.camera.zoomRel(L.IsoViewCamera.ZOOM_OUT);
    }
  };
  IsoUpdaterView.prototype.onMouseMove = function (e) {
    if (!this.touchController.shouldTouchMoveIgnored(e)) {
      if (!this.touchController.isMultiTouch(e)) {
        this.isoRenderer.mouse.onMouseMove();
      }
      this.touchController.handleTouchZoom(e);
    }
  };
  IsoUpdaterView.prototype.onResize = function (e) {
    this.isoRenderer.camera.onScreenResize();
  };
  IsoUpdaterView.prototype.onKeyDown = function (e) {};
  IsoUpdaterView.prototype.onKeyUp = function (e) {};
  IsoUpdaterView.prototype.onMouseOverPanel = function (e) {
    if (!S.IsoHelper.view.isValidDragPanel(e.panel)) {
      this.isoRenderer.mouse.onMouseOverPanel();
    }
  };
  IsoUpdaterView.prototype.onMouseOutPanel = function (e) {
    if (!S.IsoHelper.view.isValidDragPanel(e.panel)) {
      this.isoRenderer.mouse.onMouseOutPanel();
    }
  };
  IsoUpdaterView.prototype.onRingMenuHidden = function (e) {
    this.isoRenderer.mouse.deselectTarget();
  };
  IsoUpdaterView.prototype.onDialogOpened = function (e) {
    this.isoRenderer.mouse.onDialogOpened();
  };
  IsoUpdaterView.prototype.onAnimationOptionChanged = function (e) {
    if (S.IsoHelper.view && (!S.IsoHelper.view.areAnimationsActive && this.dataUpdater && this.dataUpdater.movementUpdater && this.dataUpdater.movementUpdater.despawnAllMovements(), this.isoRenderer && this.isoRenderer.objects)) {
      for (var t = 0, i = this.isoRenderer.objects.getCompleteObjectsList(); t < i.length; t++) {
        var n = i[t];
        if (n) {
          n.onAnimationOptionChanged(e);
        }
      }
    }
  };
  IsoUpdaterView.prototype.onMyAllianceInfoUpdated = function (e) {
    for (var t = 0, i = this.isoRenderer.objects.getCompleteObjectsList(); t < i.length; t++) {
      i[t].onMyAllianceInfoUpdated(e);
    }
  };
  IsoUpdaterView.prototype.onAllianceHelpUpdated = function (e) {
    for (var t = 0, i = this.isoRenderer.objects.getCompleteObjectsList(); t < i.length; t++) {
      var n = i[t];
      var o = n;
      if (M.instanceOfClass(n, "ABasicBuildingVE")) {
        o.onAllianceHelpUpdated(e);
      }
    }
  };
  IsoUpdaterView.prototype.onCrestColorUpdated = function (e) {
    for (var t = 0, i = this.isoRenderer.objects.getCompleteObjectsList(); t < i.length; t++) {
      i[t].onCrestColorUpdated(e);
    }
  };
  IsoUpdaterView.prototype.onRenderStrategyChanged = function (e) {
    for (var t = 0, i = this.isoRenderer.objects.getCompleteObjectsList(); t < i.length; t++) {
      i[t].onRenderStrategyChanged(e);
    }
  };
  IsoUpdaterView.prototype.onExpansion = function () {
    this.isoRenderer.mouse.deselectTarget();
    this.isoRenderer.mouse.unFocusTarget();
    this.isoRenderer.mouse.unHoverTarget();
    this.isoRenderer.camera.onExpansion();
    this.isoRenderer.objects.reset();
    this.isoRenderer.objects.setup();
    this.isoRenderer.objects.render(true);
    C.CastleModel.smartfoxClient.sendCommandVO(new R.C2SShowConstructionListVO());
  };
  IsoUpdaterView.prototype.onOptionPanelZoom = function (e) {
    switch (e.zoomType) {
      case l.CastleZoomEvent.ZOOM_IN:
        this.isoRenderer.camera.zoomRel(L.IsoViewCamera.ZOOM_IN);
        break;
      case l.CastleZoomEvent.ZOOM_OUT:
        this.isoRenderer.camera.zoomRel(L.IsoViewCamera.ZOOM_OUT);
    }
  };
  IsoUpdaterView.prototype.onSpecialEventAdded = function (e) {
    if (e.specialEventVO && S.IsoHelper.view.isInIsoScreen && !C.CastleModel.tutorialData.isInTutorial() && C.CastleModel.userData.level > 1) {
      this.isoRenderer.camera.scrollToGridPos(A.Iso.data.grid.origins.getOriginPos(m.IsoGridOriginEnum.BOTTOM_CORNER).add(new b(5, 15)));
    }
    if (M.instanceOfClass(e.specialEventVO, "EventSkinEventVO") && S.IsoHelper.view.isInIsoScreen) {
      A.Iso.data.updater.updateSurroundings();
    }
  };
  IsoUpdaterView.prototype.traceDebugInfo = function () {
    var e = "";
    var t = this.isoRenderer.mouse.getMouseScreenPos();
    var i = this.isoRenderer.mouse.getMouseGridPos();
    var n = this.isoRenderer.camera.getGridPosByScreenPos(t);
    var o = this.isoRenderer.camera.getScreenPosByGridPos(n);
    e += "MousePos: " + t.x + " | " + t.y + "\n";
    e += "MouseGridPos: " + i.x + " | " + i.y + "\n";
    e += "GridPos : " + n.x + " | " + n.y + "\n";
    e += "ScreenPosFromGridPos : " + o.x + " | " + o.y;
    console.log(e);
  };
  Object.defineProperty(IsoUpdaterView.prototype, "dataUpdater", {
    get: function () {
      return this.isoRenderer.isoData.updater;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterView.prototype, "isoRenderer", {
    get: function () {
      return A.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterView.prototype, "worldLayer", {
    get: function () {
      return this.isoRenderer.layers.renderTarget;
    },
    enumerable: true,
    configurable: true
  });
  return IsoUpdaterView;
}(_.CastleComponent);
exports.IsoUpdaterView = D;
var I = require("./17.js");
var T = require("./144.js");
var v = require("./143.js");
var S = require("./46.js");
var A = require("./34.js");
var L = require("./1186.js");
var P = require("./1193.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
var M = require("./1.js");
var R = require("./2066.js");