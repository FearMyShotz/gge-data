Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./268.js");
var s = require("./40.js");
var r = require("./5.js");
var o = require("./114.js");
var l = require("./65.js");
var u = require("./325.js");
var c = require("./18.js");
var _ = require("./3.js");
var d = createjs.StageQuality;
var m = createjs.Event;
var h = createjs.MouseEvent;
var p = createjs.Container;
var g = require("./2.js").getLogger("BasicLayoutManager");
var E = function (e) {
  function BasicLayoutManager() {
    var t = e.call(this) || this;
    t._initialized = false;
    if (BasicLayoutManager.layoutManager) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
    return t;
  }
  i.__extends(BasicLayoutManager, e);
  BasicLayoutManager.setLayoutManagerClass = function (e) {
    BasicLayoutManager.layoutManagerClass = e;
  };
  BasicLayoutManager.getInstance = function () {
    if (this.layoutManagerClass && !this.layoutManager) {
      try {
        BasicLayoutManager.layoutManager = new BasicLayoutManager.layoutManagerClass();
      } catch (e) {
        throw new Error("LayoutManagerClass is not extending BasicLayoutManager class! " + e.message);
      }
    }
    if (!BasicLayoutManager.layoutManager) {
      throw new Error("LayoutManager is not initialized!");
    }
    return BasicLayoutManager.layoutManager;
  };
  BasicLayoutManager.prototype.onMouseUp = function (e) {
    if (this.dragManager) {
      this.dragManager.stopDragging();
    }
  };
  BasicLayoutManager.prototype.initialize = function (e) {
    this.addEventListener(m.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.addEventListener(m.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    while (this.numChildren > 0) {
      this.removeChildAt(0);
    }
    this.animatedFlashUIComponents = [];
    this.dialogs = new Map();
    this.panels = new Map();
    this.screens = new Map();
    this._currentState = 0;
    this.adminLayer = new p();
    this.screenLayer = new p();
    this.panelLayer = new p();
    this.dialogLayer = new p();
    this.tutorialLayer = new p();
    this.tooltipLayer = new p();
    this._mouseLayer = new p();
    this._mouseLayer.mouseChildren = false;
    this._mouseLayer.mouseEnabled = false;
    this.backgroundLayer = new p();
    this._backgroundComponent = e;
    if (this._backgroundComponent) {
      this._backgroundComponent.disp.mouseEnabled = true;
      this._backgroundComponent.disp.mouseChildren = true;
      this.backgroundLayer.addChild(this._backgroundComponent.disp);
      if (this._backgroundComponent.customCursor) {
        this.customCursor = this._backgroundComponent.customCursor;
        this._mouseLayer.addChild(this.customCursor.disp);
      }
    }
    this._initialized = true;
  };
  Object.defineProperty(BasicLayoutManager.prototype, "initialized", {
    get: function () {
      return this._initialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "state", {
    set: function (e) {
      switch (e) {
        case BasicLayoutManager.STATE_LOAD_ITEMS:
          this.hideAllDialogs();
          this.hideAllPanels();
          this.showBackgroundLayer();
          this._backgroundComponent.showProgressBar();
          BasicLayoutManager.gameState = BasicLayoutManager.STATE_LOAD_ITEMS;
          break;
        case BasicLayoutManager.STATE_CONNECT:
          this.hideAllDialogs();
          this.hideAllPanels();
          this.showBackgroundLayer();
          break;
        case BasicLayoutManager.STATE_LOGIN:
          this.hideAllPanels();
          this.showBackgroundLayer();
          BasicLayoutManager.gameState = BasicLayoutManager.STATE_LOGIN;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.onEnterFrame = function (e) {
    for (var t = 0, n = this.animatedFlashUIComponents; t < n.length; t++) {
      n[t].onEnterFrameUpdate();
    }
  };
  BasicLayoutManager.prototype.addAnimFlashUIComponent = function (e) {
    this.animatedFlashUIComponents.push(e);
  };
  BasicLayoutManager.prototype.removeAnimFlashUIComponent = function (e) {
    for (var t = 0; t < this.animatedFlashUIComponents.length; t++) {
      if (this.animatedFlashUIComponents[t] == e) {
        this.animatedFlashUIComponents.splice(t, 1);
      }
    }
  };
  BasicLayoutManager.prototype.onAddedToStage = function (e) {
    g.debug("basicLayoutManager.onAddedToStage");
    this.removeEventListener(m.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  BasicLayoutManager.prototype.changeQualityLevel = function (e) {
    switch (e) {
      default:
      case BasicLayoutManager.QUALITY_HIGH:
        BasicLayoutManager.layoutManager.stage.quality = d.BEST;
        break;
      case BasicLayoutManager.QUALITY_MEDIUM:
        BasicLayoutManager.layoutManager.stage.quality = d.MEDIUM;
        break;
      case BasicLayoutManager.QUALITY_LOW:
        BasicLayoutManager.layoutManager.stage.quality = d.LOW;
    }
  };
  BasicLayoutManager.prototype.getScreen = function (e) {
    if (e in this.screens) {
      return this.screens.get(e);
    } else {
      return null;
    }
  };
  BasicLayoutManager.prototype.getPanel = function (e) {
    return this.panels.get(e) || null;
  };
  BasicLayoutManager.prototype.getDialog = function (e) {
    for (var t = 0, n = Array.from(this.dialogs.values()); t < n.length; t++) {
      var i = n[t];
      if (i && this.isDialogKey(i, e)) {
        return i;
      }
    }
    return null;
  };
  BasicLayoutManager.prototype.showDialog = function (e, t, n, i) {
    var a;
    if (t === undefined) {
      t = null;
    }
    if (n === undefined) {
      n = null;
    }
    if (i === undefined) {
      i = null;
    }
    if (n == null) {
      n = this.dialogLayer;
    }
    if (!(a = this.dialogs.get(e))) {
      a = this.createFlashComponent(e);
      this.dialogs.set(e, a);
    }
    a.setProperties(t);
    if (a.disp.parent != n) {
      n.addChild(a.disp);
    }
    n.setChildIndex(a.disp, n.numChildren - 1);
    a.show();
  };
  BasicLayoutManager.prototype.showAdminDialog = function (e, t = null) {
    this.showDialog(e, t, this.adminLayer);
  };
  BasicLayoutManager.prototype.hideAllDialogs = function () {
    for (var e = 0, t = Array.from(this.dialogs.values()); e < t.length; e++) {
      var n = t[e];
      if (n.isVisible()) {
        n.hide();
      }
    }
  };
  BasicLayoutManager.prototype.hideDialog = function (e) {
    for (var t = 0, n = Array.from(this.dialogs.values()); t < n.length; t++) {
      var i = n[t];
      if (i && this.isDialogKey(i, e) && i.isVisible()) {
        i.hide();
      }
    }
  };
  BasicLayoutManager.prototype.clearDialog = function (e) {
    for (var t = 0, n = Array.from(this.dialogs.keys()); t < n.length; t++) {
      var i = n[t];
      if (this.dialogs.get(i) === e) {
        if (e.isVisible()) {
          e.hide();
        }
        e.destroy();
        if (e.disp && e.disp.parent === this.dialogLayer) {
          this.dialogLayer.removeChild(e.disp);
        }
        if (e.disp && e.disp.parent === this.adminLayer) {
          this.adminLayer.removeChild(e.disp);
        }
        this.dialogs.delete(i);
        break;
      }
    }
  };
  BasicLayoutManager.prototype.clearAllDialogs = function () {
    for (var e = 0, t = Array.from(this.dialogs.keys()); e < t.length; e++) {
      var n = t[e];
      var i = this.dialogs.get(n);
      if (i) {
        i.hide();
        i.destroy();
        if (i.disp && i.disp.parent == this.dialogLayer) {
          this.dialogLayer.removeChild(i.disp);
        }
        if (i.disp && i.disp.parent == this.adminLayer) {
          this.adminLayer.removeChild(i.disp);
        }
        this.dialogs.delete(n);
      }
    }
    this.dialogs = new Map();
  };
  BasicLayoutManager.prototype.showScreen = function (e, t) {
    var n;
    if (t === undefined) {
      t = null;
    }
    if (this.screens.get(e)) {
      (n = this.screens.get(e)).setProperties(t);
    } else {
      n = this.createFlashComponent(e);
      this.screens.set(e, n);
      n.setProperties(t);
      this.screenLayer.addChild(n.disp);
    }
    n.show();
    return n;
  };
  BasicLayoutManager.prototype.hideScreen = function (e) {
    if (this.screens.get(e)) {
      this.screens.get(e).hide();
    }
  };
  BasicLayoutManager.prototype.hideAllScreens = function () {
    for (var e = 0, t = Array.from(this.screens.values()); e < t.length; e++) {
      var n = t[e];
      if (n.isVisible()) {
        n.hide();
      }
    }
  };
  BasicLayoutManager.prototype.onTopScreen = function (e) {
    var t;
    if (this.screens.get(e)) {
      t = this.screens.get(e);
      this.screenLayer.setChildIndex(t.disp, this.screenLayer.numChildren - 1);
    }
  };
  BasicLayoutManager.prototype.createIdleLayer = function () {
    this.idleHolderLayer = new p();
    BasicLayoutManager.layoutManager.addChild(this.idleHolderLayer);
    this._idleScreen = new u.BasicIdleScreen(this.idleHolderLayer);
  };
  BasicLayoutManager.prototype.clearAllScreens = function () {
    for (var e = 0, t = Array.from(this.screens.values()); e < t.length; e++) {
      var n = t[e];
      n.hide();
      n.destroy();
      this.screenLayer.removeChild(n.disp);
    }
    this.screens = new Map();
  };
  BasicLayoutManager.prototype.showPanel = function (e, t, n) {
    var i;
    if (t === undefined) {
      t = null;
    }
    if (n === undefined) {
      n = false;
    }
    if (this.panels.get(e)) {
      (i = this.panels.get(e)).setProperties(t);
      if (n) {
        this.panelLayer.setChildIndex(i.disp, this.panelLayer.numChildren - 1);
      }
    } else {
      (i = this.createFlashComponent(e)).disp.visible = false;
      this.panels.set(e, i);
      i.setProperties(t);
      this.panelLayer.addChild(i.disp);
    }
    if (!i.isVisible()) {
      i.show();
    }
  };
  BasicLayoutManager.prototype.hidePanel = function (e) {
    var t;
    if (this.panels.get(e) && (t = this.panels.get(e)).isVisible()) {
      t.hide();
    }
  };
  BasicLayoutManager.prototype.clearAllPanels = function () {
    for (var e = 0, t = Array.from(this.panels.values()); e < t.length; e++) {
      var n = t[e];
      n.hide();
      n.destroy();
      n.disp.parent.removeChild(n.disp);
    }
    this.panels = new Map();
  };
  BasicLayoutManager.prototype.hideAllPanels = function () {
    for (var e = 0, t = Array.from(this.panels.values()); e < t.length; e++) {
      var n = t[e];
      if (n.isVisible()) {
        n.hide();
      }
    }
  };
  BasicLayoutManager.prototype.lockPanel = function (e) {
    if (this.panels.get(e)) {
      this.panels.get(e).lockPanel();
    }
  };
  BasicLayoutManager.prototype.unLockPanel = function (e) {
    if (this.panels.get(e)) {
      this.panels.get(e).unLockPanel();
    }
  };
  BasicLayoutManager.prototype.existsDialog = function (e) {
    for (var t = 0, n = Array.from(this.dialogs.values()); t < n.length; t++) {
      var i = n[t];
      if (i && i.constructor.name === e.name) {
        return true;
      }
    }
    return false;
  };
  BasicLayoutManager.prototype.isPanelVisible = function (e) {
    for (var t = 0, n = Array.from(this.panels.values()); t < n.length; t++) {
      var i = n[t];
      if (i && i.constructor.name === e.name) {
        return i.isVisible();
      }
    }
    return false;
  };
  BasicLayoutManager.prototype.isPanelVisibleById = function (e) {
    var t = this.getPanel(e);
    return t && t.isVisible();
  };
  BasicLayoutManager.prototype.isDialogVisible = function (e) {
    for (var t = 0, n = Array.from(this.dialogs.values()); t < n.length; t++) {
      var i = n[t];
      if (i && i.constructor.name === e.name) {
        return i.isVisible();
      }
    }
    return false;
  };
  Object.defineProperty(BasicLayoutManager.prototype, "numVisibleDialogs", {
    get: function () {
      var e = 0;
      for (var t = 0, n = Array.from(this.dialogs.values()); t < n.length; t++) {
        var i = n[t];
        if (i && i.isVisible()) {
          e++;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.clearAllLayoutContent = function () {
    this.clearAllPanels();
    this.clearAllDialogs();
    this.clearAllScreens();
  };
  BasicLayoutManager.prototype.createFlashComponent = function (e) {
    return null;
  };
  BasicLayoutManager.prototype.checkWaitingAnimState = function (e) {
    for (var t = 0, n = Array.from(this.dialogs.values()); t < n.length; t++) {
      n[t].checkWaitingAnimState(e);
    }
    for (var i = 0, a = Array.from(this.panels.values()); i < a.length; i++) {
      a[i].checkWaitingAnimState(e);
    }
    for (var s = 0, r = Array.from(this.screens.values()); s < r.length; s++) {
      r[s].checkWaitingAnimState(e);
    }
  };
  BasicLayoutManager.prototype.toggleFullscreen = function () {
    var e = this.stage.canvas;
    var t = window.document;
    t.addEventListener("fullscreenerror", function (e) {
      this.showDialog(s.CommonDialogNames.StandardOkDialog_NAME, new l.BasicStandardOkDialogProperties(c.Localize.text("fullscreenerror_msg_title"), c.Localize.text("fullscreenerror_msg_copy")));
    });
    if (!!t.fullscreenElement || !!t.webkitFullscreenElement || !!t.mozFullScreenElement || !!t.msFullscreenElement) {
      this.revertFullscreen();
    } else {
      e.requestFullscreen();
    }
  };
  BasicLayoutManager.prototype.isDocumentHidden = function () {
    var e = window.document;
    return e.hidden || e.msHidden || e.webkitHidden;
  };
  BasicLayoutManager.prototype.revertFullscreen = function () {
    if (!this.isDocumentHidden()) {
      var e;
      var t = window.document;
      var n = !!t.fullscreenElement || !!t.webkitFullscreenElement || !!t.mozFullScreenElement || !!t.msFullscreenElement;
      try {
        if (n) {
          if (t.exitFullscreen) {
            e = t.exitFullscreen();
          } else if (t.webkitExitFullscreen) {
            e = t.webkitExitFullscreen();
          } else if (t.msExitFullscreen) {
            e = t.msExitFullscreen();
          }
          if (e && e.then) {
            e.catch(function (e) {
              g.warn("exitFullscreen fails: " + e);
            });
          }
        }
      } catch (e) {
        g.warn("exitFullscreen fails: " + e);
      }
    }
  };
  BasicLayoutManager.prototype.showFPS = function () {
    this.stats = new a.Stats();
    this.adminLayer.addChild(this.stats);
  };
  BasicLayoutManager.prototype.hideFPS = function () {
    this.adminLayer.removeChild(this.stats);
    this.stats = null;
  };
  BasicLayoutManager.prototype.isFPSshown = function () {
    return false;
  };
  BasicLayoutManager.prototype.toggleFPSvisibility = function () {
    if (this.isFPSshown()) {
      this.hideFPS();
    } else {
      this.showFPS();
    }
  };
  BasicLayoutManager.prototype.enableProgressbar = function () {
    this._backgroundComponent.progressBarEnabled = true;
  };
  BasicLayoutManager.prototype.disableProgressbar = function () {
    this._backgroundComponent.progressBarEnabled = false;
  };
  BasicLayoutManager.prototype.onEndProgressbar = function () {
    this._backgroundComponent.hideProgressBar();
  };
  BasicLayoutManager.prototype.onStartProgressbar = function () {
    this._backgroundComponent.show();
    this._backgroundComponent.showProgressBar();
  };
  Object.defineProperty(BasicLayoutManager.prototype, "inGameState", {
    get: function () {
      return this._currentState >= 10;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "outGameState", {
    get: function () {
      return this._currentState < 10;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.showBackgroundLayer = function () {
    this._backgroundComponent.show();
  };
  BasicLayoutManager.prototype.showServerAndClientVersion = function () {
    this._backgroundComponent.showVersion();
    o.BasicContextMenuController.instance.refreshVersionInfo();
  };
  BasicLayoutManager.prototype.xmlVersionSelect = function (e) {};
  BasicLayoutManager.prototype.onVisitGGS = function (e) {};
  BasicLayoutManager.prototype.hideBackgroundLayer = function () {
    this._backgroundComponent.hide();
  };
  Object.defineProperty(BasicLayoutManager.prototype, "scaleFactor", {
    get: function () {
      return this._backgroundComponent.scaleFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "gameNullPoint", {
    get: function () {
      return this._backgroundComponent.gameNullPoint;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "env", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLayoutManager.prototype, "mouseLayer", {
    get: function () {
      return this._mouseLayer;
    },
    enumerable: true,
    configurable: true
  });
  BasicLayoutManager.prototype.isDialogKey = function (e, t) {
    return typeof t == "string" && e.constructor.name === t || t instanceof Object && _.getQualifiedClassName(e) === t.name;
  };
  BasicLayoutManager.STATE_PRELOAD_INIT = -1;
  BasicLayoutManager.STATE_PRELOAD_CONNECTED = 0;
  BasicLayoutManager.STATE_CONNECT = 1;
  BasicLayoutManager.STATE_LOGIN = 2;
  BasicLayoutManager.STATE_AVATAR_CREATION = 3;
  BasicLayoutManager.STATE_LOAD_ITEMS = 4;
  BasicLayoutManager.STATE_REGISTRATION = 5;
  BasicLayoutManager.STATE_STARTSCREEN = 6;
  BasicLayoutManager.QUALITY_HIGH = 0;
  BasicLayoutManager.QUALITY_MEDIUM = 1;
  BasicLayoutManager.QUALITY_LOW = 2;
  BasicLayoutManager.gameState = 99;
  return BasicLayoutManager;
}(p);
exports.BasicLayoutManager = E;