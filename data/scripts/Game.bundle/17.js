Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = require("./1.js");
var m = require("./1.js");
var f = require("./1.js");
var O = require("./1.js");
var E = require("./1.js");
var y = require("./1.js");
var b = require("./1.js");
var D = require("./1.js");
var I = require("./1.js");
var T = require("./1.js");
var v = require("./1.js");
var S = require("./118.js");
var A = require("./6.js");
var L = require("./18.js");
var P = require("./1989.js");
var M = require("./91.js");
var R = require("./32.js");
var V = require("./122.js");
var x = require("./92.js");
var w = require("./15.js");
var B = require("./1990.js");
var F = require("./4.js");
var N = require("./408.js");
var k = require("./197.js");
var U = require("./853.js");
var G = require("./680.js");
var H = require("./176.js");
var j = require("./307.js");
var W = require("./41.js");
var Y = require("./73.js");
var K = require("./994.js");
var z = require("./3877.js");
var q = createjs.DisplayObject;
var X = createjs.Container;
var Q = createjs.Event;
var J = S.getLogger("CastleGame");
var Z = function (e) {
  function CastleLayoutManager() {
    var t = this;
    t.lastShownDialog = "";
    t.uiCreator = new re.CastleUIComponentCreator();
    t._muteDialogs = false;
    t._dialogCastleSwitch = false;
    t._oldState = 0;
    t.defaultIngameUIComponentLayerIndex = 0;
    t._gamestageNeedsUpdate = false;
    t._gamestageUpdateThrottle = 0;
    t._uitageUpdateThrottle = 0;
    CONSTRUCTOR_HACK;
    t = e.call(this) || this;
    if (l.BasicLayoutManager.layoutManager) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
    return t;
  }
  n.__extends(CastleLayoutManager, e);
  CastleLayoutManager.getInstance = function () {
    l.BasicLayoutManager.layoutManager ||= new CastleLayoutManager();
    return l.BasicLayoutManager.layoutManager;
  };
  Object.defineProperty(CastleLayoutManager.prototype, "state", {
    get: function () {
      return Object.getOwnPropertyDescriptor(l.BasicLayoutManager.prototype, "state").get.call(this);
    },
    set: function (e) {
      N.renderScheduler.terminate();
      document.body.classList.remove("cursor-none");
      this._oldState = A.int(this._currentState);
      if (this.oldState != e) {
        Object.getOwnPropertyDescriptor(l.BasicLayoutManager.prototype, "state").set.call(this, e);
        this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_TIME_TRACKING, [this._currentState]));
      }
      if ((this.oldState == l.BasicLayoutManager.STATE_CONNECT || this.oldState == l.BasicLayoutManager.STATE_STARTSCREEN) && e == CastleLayoutManager.STATE_ISO) {
        this.addAttackAlertComponent();
      }
      if (this.oldState == CastleLayoutManager.STATE_ISO && e == CastleLayoutManager.STATE_ISO) {
        this.isoScreen.rebuildIsoRenderer();
      }
      this._currentState = e;
      g.debug("layoutManager stateChange: " + this.currentState);
      this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, [this._currentState]));
      this.updateLayout();
      if (e == CastleLayoutManager.STATE_WORLDMAP && H.CastleDataHolder.instance.requestUptOnWorldmapSwitch) {
        H.CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
        F.CastleModel.smartfoxClient.sendCommandVO(new P.C2SGetUnsentPriceTrackingVO());
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.updateLayout = function () {
    if (this.worldmapScreen && this.worldmapScreen.renderer) {
      this.worldmapScreen.renderer.hideNavi();
    }
    var e = CastleLayoutManager.LAYOUT_STRATEGIES.get(this.currentState);
    if (e) {
      e.setLayout(this, this.oldState);
    }
    this.addPopoverPanel();
    this.addKoreanPanel();
    if (F.CastleModel.userData.isCheater && this.isIngameState) {
      this.showPanel(ye.CastleCheatPanel);
      var t = this.fix_panels.get(ye.CastleCheatPanel).disp;
      t.parent.setChildIndex(t, 0);
      this.uiStage.addChild(t);
    }
    this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, [this._currentState]));
  };
  CastleLayoutManager.prototype.renderGamestage = function (e) {
    if (this._gamestageUpdateThrottle % (e.delta > 20 ? 2 : 1) == 0 || window.renderStaticStageOnNextTick) {
      if (this.gamestage) {
        this.gamestage.update(e);
      }
      this._gamestageUpdateThrottle = 1;
    } else {
      this._gamestageUpdateThrottle++;
    }
  };
  CastleLayoutManager.prototype.renderUIstage = function (e) {
    if (!ae.CastleDialogHandler.getInstance().isDisplayingAnyDialog && this.worldmapScreen && this.worldmapScreen.isVisible()) {
      if (this._uitageUpdateThrottle % (e.delta > 30 ? 2 : 1) == 0) {
        this._uiStage.update(e);
        this._uitageUpdateThrottle = 1;
      } else {
        this._uitageUpdateThrottle++;
      }
    } else if (this._uiStage) {
      this._uiStage.update(e);
    }
  };
  CastleLayoutManager.prototype.renderBGstage = function (e) {
    this._bgStage.update(e);
  };
  CastleLayoutManager.prototype.renderStaticstage = function (e) {
    this._staticStage.update(e);
  };
  Object.defineProperty(CastleLayoutManager.prototype, "stage", {
    get: function () {
      return this._uiStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "uiStage", {
    get: function () {
      return this._uiStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "bgStage", {
    get: function () {
      return this._bgStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "staticStage", {
    get: function () {
      return this._staticStage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "gamestage", {
    get: function () {
      var e = Object.getOwnPropertyDescriptor(q.prototype, "stage");
      if (e && typeof e.get == "function") {
        try {
          return e.get.call(this);
        } catch (e) {
          console.warn("gamestage getter failed", e);
          return null;
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "castleTutorialStage", {
    get: function () {
      return this._castleTutorialStage;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.destroyPanel = function (e) {
    if (this.fix_panels.get(e)) {
      this.fix_panels.get(e).hide();
    }
  };
  Object.defineProperty(CastleLayoutManager.prototype, "muteDialogs", {
    set: function (e) {
      this._muteDialogs = e;
      if (!e) {
        r.BasicDialogHandler.getInstance().init();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "tutorialPanel", {
    get: function () {
      return this._tutorialPanel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "guidancePanel", {
    get: function () {
      return this._guidancePanel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInEventState", {
    get: function () {
      return this.isInTreasureCamp || this.currentState == CastleLayoutManager.STATE_SEASON_WORLDMAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isIngameState", {
    get: function () {
      return this.currentState >= CastleLayoutManager.STATE_ISO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyCastle", {
    get: function () {
      if (this.currentState == CastleLayoutManager.STATE_ISO) {
        var e = F.CastleModel.areaData.activeArea;
        if (e) {
          return e.isMyArea && !e.isUnderConquerProcess;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyCastleBuildMode", {
    get: function () {
      return this.isInMyCastle && oe.Iso.renderer.strategies.currentStrategy.isActive(V.IsoRenderStrategyEnum.BUILD_MODE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInTreasureCamp", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_ISO && !!oe.Iso.data && oe.Iso.data.areaData.isTreasureCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInTreasureEvent", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_ISO && !!oe.Iso.data && oe.Iso.data.areaData.isTreasureCamp || this.currentState == CastleLayoutManager.STATE_SEASON_WORLDMAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInSpectatedCastle", {
    get: function () {
      if (this.currentState == CastleLayoutManager.STATE_ISO) {
        var e = F.CastleModel.areaData.activeArea;
        if (e) {
          return !e.isMyArea && !e.isUnderConquerProcessByMe;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isOnMap", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_WORLDMAP || this.currentState == CastleLayoutManager.STATE_WORLDMAP_RELOCATION || this.currentState == CastleLayoutManager.STATE_KINGDOMMAP || this.currentState == CastleLayoutManager.STATE_SEASON_WORLDMAP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyOccupiedCastle", {
    get: function () {
      return this.currentState == CastleLayoutManager.STATE_ISO && !!oe.Iso.data && oe.Iso.data.areaData.isUnderConquerProcessByMe;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "isInMyProperCastle", {
    get: function () {
      return this.isInMyCastle && !this.isInTreasureCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "tutorialLayerSprite", {
    get: function () {
      return this.tutorialLayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.isInState = function (e) {
    return this._currentState == e;
  };
  Object.defineProperty(CastleLayoutManager.prototype, "controller", {
    get: function () {
      return w.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.initialize = function (t) {
    e.prototype.initialize.call(this, t);
    this._uiStageAnimatedUIComponents = [];
    this.gamestage.enableDOMEvents(false);
    this.gamestage.snapToPixelEnabled = true;
    this.gamestage.enableMouseOver(0);
    window.gamestage = this.gamestage;
    this.prepareUIStage();
    this.prepareTutorialStage();
    this.prepareStaticStage();
    this.prepareBGStage();
    ee.CastleTimeSpendTrackingController.getInstance();
    this.flashUIComponents = new Map();
    this.attackpanels = new Map();
    this.attackpanelLayer = new X();
    this.ingameUIComponentLayer = new X();
    this.ingameUIComponentLayer.mouseChildren = true;
    this.ingameTutorialLayer = new X();
    this.ingameTutorialLayer.mouseEnabled = false;
    this.panelTutorialLayer = new X();
    this.panelTutorialLayer.mouseEnabled = false;
    this.ingameMessageLayer = new X();
    this.ingameMessageLayer.mouseEnabled = false;
    this.ingameMessageLayer.mouseChildren = false;
    this.popoverLayer = new X();
    this.koreanLayer = new X();
    this.attackAlertLayer = new X();
    this.attackAlertLayer.mouseEnabled = false;
    this.attackAlertLayer.mouseChildren = false;
    this.interactiveToolTipLayer = new X();
    this.guidanceLayer = new X();
    this.staticIsoObjectLayer = new X();
    this.staticIsoObjectLayer.name = "staticIsoObjectLayer";
    this.initToolTipManager();
    this.locaLayer = new se.CastleLocationCheatPanel();
    this.locaLayer.show();
    window.gamestage = this.gamestage;
    this.addChild(this.screenLayer);
    this.screenLayer.name = "screenLayer";
    this.addChild(this.backgroundLayer);
    this.backgroundLayer.name = "loginBackgroundLayer";
    this.staticStage.addChild(this.staticIsoObjectLayer);
    this.uiStage.addChild(this.ingameUIComponentLayer);
    this.uiStage.addChild(this.ingameTutorialLayer);
    this.uiStage.addChild(this.panelLayer);
    this.uiStage.addChild(this.panelTutorialLayer);
    this.uiStage.addChild(this.dialogLayer);
    this.uiStage.addChild(this.attackpanelLayer);
    this.uiStage.addChild(this.ingameMessageLayer);
    this.uiStage.addChild(this.guidanceLayer);
    this.uiStage.addChild(this.tutorialLayer);
    this.uiStage.addChild(this.locaLayer.disp);
    this.uiStage.addChild(this.interactiveToolTipLayer);
    this.uiStage.addChild(this.tooltipLayer);
    this.uiStage.addChild(this.adminLayer);
    this.uiStage.addChild(this._mouseLayer);
    this.uiStage.addChild(this.popoverLayer);
    this.uiStage.addChild(this.koreanLayer);
    this.uiStage.addChild(this.attackAlertLayer);
    this.defaultIngameUIComponentLayerIndex = A.int(l.BasicLayoutManager.layoutManager.getChildIndex(this.ingameUIComponentLayer));
    this.initPHPCallbacks();
    this.createIdleLayer();
    this.addAttackAlertComponent();
    this.optimizeLayersForPerformance();
    if (L.ClientConstCastle.SHOW_FPS) {
      this.showFPS();
    }
    if (this.stage) {
      this.castleOnAddedToStage();
    } else {
      this.addEventListener(Q.ADDED_TO_STAGE, this.bindFunction(this.castleOnAddedToStage));
    }
  };
  CastleLayoutManager.prototype.prepareTutorialStage = function () {
    this._castleTutorialStage = new createjs.Stage("CastleTutorial");
    this._castleTutorialStage.name = b.TUTORIAL_STAGE;
    this._castleTutorialStage.snapToPixelEnabled = true;
    this._castleTutorialStage.enableDOMEvents(false);
    window.tutorialStage = this._castleTutorialStage;
  };
  CastleLayoutManager.prototype.prepareBGStage = function () {
    this._bgStage = new createjs.Stage("CastleBG");
    this._bgStage.name = m.BG_STAGE;
    this._bgStage.snapToPixelEnabled = true;
    this._staticStage.nextStage = this._bgStage;
    this.bgStage.enableDOMEvents(false);
    this._bgStage.enableMouseOver(0);
    window.bgStage = this.bgStage;
    this.bgStage.addEventListener(Q.ADDED, this.bindFunction(this.renderBGStage));
    this.bgStage.addEventListener(Q.REMOVED, this.bindFunction(this.renderBGStage));
    this.bgStage.tickEnabled = this.bgStage.tickChildren = this.bgStage.tickOnUpdate = false;
  };
  CastleLayoutManager.prototype.prepareStaticStage = function () {
    this._staticStage = new createjs.Stage("CastleStatic");
    this._staticStage.name = E.STATIC_STAGE;
    this._staticStage.snapToPixelEnabled = true;
    this.gamestage.nextStage = this._staticStage;
    this._staticStage.enableDOMEvents(false);
    this._staticStage.enableMouseOver(0);
    window.staticStage = this._staticStage;
    this._staticStage.addEventListener(Q.ADDED, this.bindFunction(this.renderBGStage));
    this._staticStage.addEventListener(Q.REMOVED, this.bindFunction(this.renderBGStage));
    this._staticStage.tickEnabled = this._staticStage.tickChildren = this._staticStage.tickOnUpdate = false;
  };
  CastleLayoutManager.prototype.prepareUIStage = function () {
    this._uiStage = new createjs.Stage("CastleUI");
    this._uiStage.name = D.UI_STAGE;
    this._uiStage.nextStage = this.gamestage;
    this._uiStage.snapToPixelEnabled = true;
    this._uiStage.enableDOMEvents(true);
    this._uiStage.enableMouseOver($.CastleGame.STAGE_MOUSEOVER_TIME);
    window.uiStage = this.uiStage;
    this.uiStage.addEventListener(Q.ENTER_FRAME, this.bindFunction(this.onEnterFrameUI));
  };
  CastleLayoutManager.prototype.renderBGStage = function () {
    window.renderBgStageOnNextTick = true;
    window.renderStaticStageOnNextTick = true;
  };
  CastleLayoutManager.prototype.renderStaticStage = function () {
    window.renderStaticStageOnNextTick = true;
  };
  CastleLayoutManager.prototype.optimizeLayersForPerformance = function () {
    this.ingameMessageLayer.tickChildren = this.ingameMessageLayer.tickEnabled = false;
    this.locaLayer.disp.tickChildren = this.locaLayer.disp.tickEnabled = false;
    this.adminLayer.tickChildren = this.adminLayer.tickEnabled = false;
    this._mouseLayer.tickChildren = this._mouseLayer.tickEnabled = false;
    this.koreanLayer.tickChildren = this.koreanLayer.tickEnabled = false;
    this.attackAlertLayer.tickChildren = this.attackAlertLayer.tickEnabled = false;
  };
  CastleLayoutManager.prototype.nameLayers = function () {};
  CastleLayoutManager.prototype.castleOnAddedToStage = function (e = null) {
    this.removeEventListener(Q.ADDED_TO_STAGE, this.bindFunction(this.castleOnAddedToStage));
    this.stage.removeEventListener(O.FullScreenEvent.FULL_SCREEN, this.bindFunction(this.onFullScreenModeChanged));
    this.stage.addEventListener(O.FullScreenEvent.FULL_SCREEN, this.bindFunction(this.onFullScreenModeChanged));
    window.removeEventListener(Q.RESIZE, this.bindFunction(this.onResize));
    window.addEventListener(Q.RESIZE, this.bindFunction(this.onResize));
    this.controller.removeEventListener(R.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(R.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    this.controller.addEventListener(x.IsoEvent.ON_RENDERER_READY, this.bindFunction(this.onIsoRendererReady));
    this.onResize();
  };
  CastleLayoutManager.prototype.onIsoRendererReady = function (e) {
    F.CastleModel.settingsData.isLoginReady = true;
  };
  CastleLayoutManager.prototype.onResize = function (e = null) {
    if (!m.currentBrowserInfo.isMobile || !m.TextField.isMobileKeyboardShown) {
      var t = window.devicePixelRatio || 1;
      var i = [this.gamestage, this.uiStage, this.bgStage, this.staticStage, this.castleTutorialStage];
      if (m.currentBrowserInfo.isMobile) {
        i.forEach(function (e) {
          var t = e && e.canvas;
          if (t) {
            t.style.width = "100%";
            t.style.height = "100%";
          }
        });
      }
      var n = document.documentElement.clientWidth;
      var o = document.documentElement.clientHeight;
      for (var a = 0; a < i.length; a++) {
        var s = i[a];
        if (s) {
          s.setBounds(0, 0, n, o);
          try {
            this.fixCanvasSize(s.canvas, n, o, t);
          } catch (e) {
            throw new Error("fixCanvasSize function failed! more info: " + s.canvas.width + " " + s.canvas.height + " " + n + " " + o + " " + t + " " + e);
          }
          s.scaleX = s.scaleY = t;
        }
      }
      this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.ON_RESIZE));
      this.updateGameStage();
      this.renderBGStage();
    }
  };
  CastleLayoutManager.prototype.fixCanvasSize = function (e, t, i, n) {
    var o = e.getContext("2d");
    e.style.width = t + "px";
    e.style.height = i + "px";
    e.width = Math.round(t * n);
    e.height = Math.round(i * n);
    o.scale(n, n);
  };
  CastleLayoutManager.prototype.onFullScreenModeChanged = function (e) {
    this.stage.addEventListener(Q.ENTER_FRAME, this.bindFunction(this.onNextFrameAfterFullscreenChanged));
  };
  CastleLayoutManager.prototype.onNextFrameAfterFullscreenChanged = function (e) {
    this.stage.removeEventListener(Q.ENTER_FRAME, this.bindFunction(this.onNextFrameAfterFullscreenChanged));
    this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, [this.stage.displayState]));
  };
  CastleLayoutManager.prototype.isDialogVisibleByName = function (e) {
    if (this.fix_dialogs != null) {
      for (var t = 0, i = Array.from(this.fix_dialogs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n && (typeof e == "string" && n.constructor.NAME == e || typeof e == "function" && n.constructor == e)) {
          if (v.instanceOfClass(n, "CastleExternalDialog")) {
            return n.isVisible() && !!n.loaded;
          } else {
            return n.isVisible();
          }
        }
      }
    }
    return false;
  };
  CastleLayoutManager.prototype.hideAllDialogsExcept = function (e) {
    if (this.fix_dialogs != null) {
      for (var t = 0, i = Array.from(this.fix_dialogs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isVisible() && e.indexOf(n.constructor) < 0) {
          n.hide();
        }
      }
    }
  };
  CastleLayoutManager.prototype.onAllianceStatusChanged = function (e) {
    if (H.CastleDataHolder.instance.gbdParsed && F.CastleModel.userData) {
      this.state = this._currentState;
    }
    if (this.worldmapScreen && this.worldmapScreen.renderer) {
      this.worldmapScreen.renderer.invalidateMap();
      this.worldmapScreen.renderer.invalideteMovements();
    }
  };
  CastleLayoutManager.prototype.showPanelRedirecter = function (e, t, i) {
    this.showPanel(e, t, i);
  };
  CastleLayoutManager.prototype.showDialogRedirecter = function (e, t, i) {
    this.showDialog(e, t, i);
  };
  CastleLayoutManager.prototype.showDialog = function (t, i = null, n = null) {
    if (t != "DummyForServer") {
      if (this._muteDialogs) {
        r.BasicDialogHandler.getInstance().removeDialog(t);
      } else {
        try {
          if (t.NAME && t.NAME != "CastleExternalPreloaderDialog") {
            if (this.dialogs.get(t) && this.dialogs.get(t).dialogClassName) {
              o.EnvGlobalsHandler.globals.lastShownDialog = this.dialogs.get(t).dialogClassName;
            } else if (typeof t == "string") {
              o.EnvGlobalsHandler.globals.lastShownDialog = String(t);
            } else if (t.NAME) {
              o.EnvGlobalsHandler.globals.lastShownDialog = t.NAME;
            } else {
              o.EnvGlobalsHandler.globals.lastShownDialog = "";
            }
          }
          e.prototype.showDialog.call(this, t, i, n);
        } catch (e) {
          var a = typeof t == "string" ? String(t) : t.NAME;
          J.error("Error during displaying dialog! ", e);
          console.log("Error during displaying dialog: dialogKey: " + t + ", properties: " + i + ", layer: " + n);
          d.ExternalLog.logger.log(new z.LayoutManagerErrorLOFactory(e, a));
        }
        ue.TooltipManagerFacade.hideAllTooltips();
        this.nativeCursor.stopAllDrag();
        this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.SHOW_DIALOG, [t]));
        if (this.gamestage) {
          this.gamestage.update();
          this.gamestage.tickEnabled = false;
        }
      }
    } else {
      ae.CastleDialogHandler.getInstance().blockDialogs = false;
    }
  };
  CastleLayoutManager.prototype.showFlashUIComponent = function (e, t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    if (this.flashUIComponents.get(e)) {
      (i = this.flashUIComponents.get(e)).setProperties(t);
    } else {
      (i = this.createFlashComponent(e)).disp.visible = false;
      this.flashUIComponents.set(e, i);
      i.setProperties(t);
      this.panelLayer.addChild(i.disp);
    }
    if (!i.isVisible()) {
      i.show();
    }
  };
  CastleLayoutManager.prototype.getIngameUIComponent = function (e) {
    if (this.ingameUIComponents) {
      return this.ingameUIComponents.get(e);
    } else {
      return null;
    }
  };
  CastleLayoutManager.prototype.hideFlashUIComponent = function (e) {
    var t;
    if (this.flashUIComponents.get(e) && (t = this.flashUIComponents.get(e)).isVisible()) {
      t.hide();
    }
  };
  CastleLayoutManager.prototype.clearAllFlashUIComponents = function () {
    if (this.flashUIComponents != null) {
      for (var e = 0, t = Array.from(this.flashUIComponents.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
          i.destroy();
          i.disp.parent.removeChild(i.disp);
        }
      }
    }
    this.flashUIComponents = new Map();
  };
  CastleLayoutManager.prototype.checkWaitingAnimState = function (e) {
    if (this.fix_dialogs != null) {
      for (var t = 0, i = Array.from(this.fix_dialogs.values()); t < i.length; t++) {
        i[t].checkWaitingAnimState(e);
      }
    }
    if (this.fix_panels != null) {
      for (var n = 0, o = Array.from(this.fix_panels.values()); n < o.length; n++) {
        o[n].checkWaitingAnimState(e);
      }
    }
  };
  CastleLayoutManager.prototype.toggleFullscreen = function (e) {
    var t = this;
    if (e === undefined) {
      e = false;
    }
    if (!this.isDocumentHidden()) {
      var i = window.document;
      var n = !!i.fullscreenElement || !!i.webkitFullscreenElement || !!i.mozFullScreenElement || !!i.msFullscreenElement;
      if (this.stage.displayState == y.StageDisplayState.FULL_SCREEN && n) {
        if (e) {
          return;
        }
        this.revertFullscreen();
      } else {
        try {
          var o = document.body;
          var a = undefined;
          if (f.ExternalInterface.available) {
            f.ExternalInterface.call("UIButtonClicked", ["fullscreen.on"]);
          } else if (o.msRequestFullscreen) {
            a = o.msRequestFullscreen();
          } else if (o.mozRequestFullScreen) {
            a = o.mozRequestFullScreen();
          } else if (o.webkitRequestFullscreen) {
            a = o.webkitRequestFullscreen();
          } else if (o.requestFullscreen) {
            a = o.requestFullscreen();
          }
          if (a && a.catch) {
            a.catch(function (e) {
              t.stage.displayState = y.StageDisplayState.NORMAL;
              C.warn("ERROR: Could not switch to FULL_SCREEN:", e);
            });
          }
          this.stage.displayState = y.StageDisplayState.FULL_SCREEN;
        } catch (e) {
          C.warn("ERROR: Could not switch to FULL_SCREEN:", e);
        }
      }
    }
  };
  CastleLayoutManager.prototype.revertFullscreen = function () {
    if (!this.isDocumentHidden()) {
      var t = this.stage.displayState;
      this.stage.displayState = y.StageDisplayState.NORMAL;
      if (f.ExternalInterface.available) {
        f.ExternalInterface.call("UIButtonClicked", ["fullscreen.off"]);
        this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, [this.stage.displayState]));
      } else {
        e.prototype.revertFullscreen.call(this);
      }
      if (this.stage.displayState != t) {
        this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.CHANGE_DISPLAYSTATE, [this.stage.displayState]));
      }
    }
  };
  CastleLayoutManager.prototype.clearAllLayoutContent = function () {
    if (this.customCursor) {
      this.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_ARROW);
    }
    this.removeTutorialPanel();
    this.removeGuidancePanel();
    this.removeTutorialArrows();
    this.removeAllIngameUIComponents();
    this.clearAllDialogs();
    this.clearAllPanels();
    this.clearAllFlashUIComponents();
    this.clearToolTipLayer();
    this.initToolTipManager();
    this.destroyAllScreens();
    this.removeKoreanPanel();
    this.removePopoverPanel();
    this.removeAttackAlertFrame();
    p.GoodgameTextFieldManager.getInstance().unregisterAllTextFields();
  };
  CastleLayoutManager.prototype.clearAllDialogs = function () {
    var e;
    if (this.fix_dialogs != null) {
      for (var t = 0, i = Array.from(this.fix_dialogs.keys()); t < i.length; t++) {
        if ((e = i[t]) !== undefined) {
          var n = I.castAs(this.fix_dialogs.get(e), "BasicDialog");
          if (n) {
            n.hide();
            n.destroy();
            if (n.disp && n.disp.parent == this.dialogLayer) {
              this.dialogLayer.removeChild(n.disp);
            }
            if (n.disp && n.disp.parent == this.adminLayer) {
              this.adminLayer.removeChild(n.disp);
            }
          }
        }
      }
    }
    ae.CastleDialogHandler.getInstance().clearAllRegisteredDialogs();
    this.dialogs = new Map();
  };
  CastleLayoutManager.prototype.createFlashComponent = function (e) {
    return this.uiCreator.createFlashComponent(e);
  };
  CastleLayoutManager.prototype.showIngameUIComponent = function (e, t, i) {
    var n;
    if (i === undefined) {
      i = -1;
    }
    this.ingameUIComponents ||= new Map();
    if (i == -1) {
      i = this.defaultIngameUIComponentLayerIndex;
    }
    if (this.ingameUIComponentLayer.parent.getChildIndex(this.ingameUIComponentLayer) != i) {
      this.ingameUIComponentLayer.parent.setChildIndex(this.ingameUIComponentLayer, i);
    }
    if (this.ingameUIComponents.get(e)) {
      n = this.ingameUIComponents.get(e);
    } else {
      var o = this.createFlashComponent(e);
      if (v.instanceOfClass(o, "BasicIngameUIComponent") && (n = o, this.ingameUIComponents.set(e, n), this.ingameUIComponentLayer.addChild(n.disp), v.instanceOfClass(n, "AnimatedFlashUIComponent"))) {
        var a = n;
        this.addUIStageAnimUIComponent(a);
      }
    }
    if (n.isPermanent && !n.isVisible()) {
      this.hideAllIngameUIComponents();
    } else {
      this.hideAllNonPermanentUIComponents();
    }
    n.target = t;
    if (v.instanceOfClass(n, "AnimatedFlashUIComponent")) {
      var s = n;
      this.addUIStageAnimUIComponent(s);
    }
    n.show();
    if (v.instanceOfClass(n, "FlashUIComponent")) {
      return n;
    } else {
      return null;
    }
  };
  CastleLayoutManager.prototype.hideAllNonPermanentUIComponents = function () {
    var e = false;
    if (this.ingameUIComponents != null) {
      for (var t = 0, i = Array.from(this.ingameUIComponents.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (!n.isPermanent) {
            n.hide();
            e = true;
          }
        }
      }
    }
    return e;
  };
  CastleLayoutManager.prototype.hideIngameUIComponent = function (e) {
    if (this.ingameUIComponents && this.ingameUIComponents.get(e)) {
      this.ingameUIComponents.get(e).hide();
    }
  };
  CastleLayoutManager.prototype.hideAllIngameUIComponents = function () {
    var e = false;
    if (this.ingameUIComponents != null) {
      for (var t = 0, i = Array.from(this.ingameUIComponents.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.hide();
          e = true;
        }
      }
    }
    if (this.worldmapScreen && this.worldmapScreen.renderer) {
      this.worldmapScreen.renderer.hideLines();
      e = true;
    }
    return e;
  };
  CastleLayoutManager.prototype.hideWorldmapIngameUIComponents = function () {
    var e = false;
    if (this.ingameUIComponents != null) {
      for (var t = 0, i = Array.from(this.ingameUIComponents.values()); t < i.length; t++) {
        var n = i[t];
        if (n && n.isVisible()) {
          n.hide();
          e = true;
        }
      }
    }
    return e;
  };
  CastleLayoutManager.prototype.hideAllRingMenus = function () {
    var e = false;
    if (this.ingameUIComponents != null) {
      for (var t = 0, i = Array.from(this.ingameUIComponents.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (v.instanceOfClass(n, "RingMenuBuilding")) {
            n.hide();
            e = true;
          }
          if (v.instanceOfClass(n, "WorldMapRingMenu")) {
            n.hide();
            e = true;
          }
        }
      }
    }
    return e;
  };
  CastleLayoutManager.prototype.hideWorldMapCastleInfoMenuWithMapObject = function (e) {
    if (this.ingameUIComponents != null) {
      for (var t = 0, i = Array.from(this.ingameUIComponents.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && v.instanceOfClass(n, "WorldMapCastleInfoMenu") && n.hideWithSpecificMapObject(e)) {
          return;
        }
      }
    }
  };
  CastleLayoutManager.prototype.removeAllIngameUIComponents = function () {
    if (this.ingameUIComponents != null) {
      for (var e = 0, t = Array.from(this.ingameUIComponents.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
          i.destroy();
          i.disp.parent.removeChild(i.disp);
          this.removeUIStageAnimUIComponent(i);
          i = null;
        }
      }
    }
    this.ingameUIComponents = null;
  };
  CastleLayoutManager.prototype.hideDialog = function (e) {
    ae.CastleDialogHandler.getInstance().removeDialog(e);
    ae.CastleDialogHandler.getInstance().removeDialog(e.NAME);
    ae.CastleDialogHandler.getInstance().removeDialog(e.PO_NAME);
    if (this.fix_dialogs != null) {
      for (var t = 0, i = Array.from(this.fix_dialogs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n && (typeof e == "string" && n.constructor.NAME == e || typeof e == "function" && n instanceof e) && (ae.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(e) || ae.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(e.NAME) || ae.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(e.PO_NAME))) {
          this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.HIDE_DIALOG, [e]));
          if (n.isVisible()) {
            n.hide();
          }
        }
      }
    }
    if (!ae.CastleDialogHandler.getInstance().isDisplayingAnyDialog) {
      if (this.gamestage) {
        this.gamestage.tickEnabled = true;
      }
    }
  };
  CastleLayoutManager.prototype.hideDialogWithDialogKey = function (e) {
    ae.CastleDialogHandler.getInstance().removeDialog(e);
    if (this.fix_dialogs && this.fix_dialogs.get(e) !== undefined) {
      var t = this.fix_dialogs.get(e);
      if (ae.CastleDialogHandler.getInstance().removeDisplayedDialogFromList(e)) {
        this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.HIDE_DIALOG, [e]));
        if (t.isVisible()) {
          t.hide();
        }
      }
    }
    if (!ae.CastleDialogHandler.getInstance().isDisplayingAnyDialog) {
      if (this.gamestage) {
        this.gamestage.tickEnabled = true;
      }
    }
  };
  CastleLayoutManager.prototype.showEventBuildingPanel = function (e = null) {
    var t = CastleLayoutManager.LAYOUT_STRATEGIES.get(CastleLayoutManager.STATE_ISO);
    t.eventBuildingPanelProperties = e;
    t.openEventPanelFlag = true;
    if (!this.isInState(CastleLayoutManager.STATE_ISO)) {
      this.state = CastleLayoutManager.STATE_ISO;
    }
    if (oe.Iso.renderer.strategies.currentStrategy.isActive(V.IsoRenderStrategyEnum.BUILD_MODE)) {
      oe.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    oe.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    t.openEventPanelFlag = false;
  };
  CastleLayoutManager.prototype.changeScreen = function (e, t) {
    if (this.fix_screens != null) {
      for (var i = 0, n = Array.from(this.fix_screens.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o != this.fix_screens.get(e) && o.isVisible()) {
          o.hide();
          this.screenLayer.removeChild(o.disp);
        }
      }
    }
    var a = this.showScreen(e, t);
    var s = false;
    switch (e) {
      case ve.CastleIsoScreen:
        this.isoScreen = a;
        s = true;
        break;
      case Se.CastleWorldMapScreen:
        this.worldmapScreen = a;
    }
    this.controller.dispatchEvent(new M.CastleLayoutManagerEvent(M.CastleLayoutManagerEvent.SCREEN_CHANGED, [s]));
    return a;
  };
  CastleLayoutManager.prototype.showScreen = function (t, i) {
    if (this.screens.get(t)) {
      var n = this.screens.get(t);
      if (n.disp.parent != this.screenLayer) {
        this.screenLayer.addChild(n.disp);
      }
    }
    return e.prototype.showScreen.call(this, t, i);
  };
  CastleLayoutManager.prototype.isScreenActive = function (e) {
    return !!this.fix_screens.get(e) && this.fix_screens.get(e).isVisible();
  };
  CastleLayoutManager.prototype.removeTutorialArrows = function () {
    te.CastleTutorialArrowController.instance.clear();
    ie.CastleTutorialClickBlocker.instance.clear();
    de.CastleTutorialSpotlight.instance.clear();
    ne.CastleTutorialDialogFilter.instance.clear();
  };
  CastleLayoutManager.prototype.removeTutorialPanel = function () {
    if (this._tutorialPanel) {
      this.castleTutorialStage.removeChild(this._tutorialPanel.disp);
      this._tutorialPanel = null;
    }
  };
  CastleLayoutManager.prototype.removeGuidancePanel = function () {
    if (this._guidancePanel) {
      this.guidanceLayer.removeChild(this._guidancePanel.disp);
      this._guidancePanel = null;
    }
  };
  CastleLayoutManager.prototype.switchKoreanLayerToFront = function (e) {
    var t = e ? this.uiStage.numChildren - 1 : this.uiStage.getChildIndex(this.panelLayer) - 1;
    this.uiStage.setChildIndex(this.koreanLayer, t);
  };
  CastleLayoutManager.prototype.removeKoreanPanel = function () {
    if (this._koreanPanel) {
      this.koreanLayer.removeChild(this._koreanPanel.disp);
      this._koreanPanel.destroy();
      this._koreanPanel = null;
    }
  };
  CastleLayoutManager.prototype.removeAttackAlertFrame = function () {
    if (this.attackAlertComponent) {
      this.attackAlertLayer.removeChild(this.attackAlertComponent.panelDisp);
      this.attackAlertComponent.destroy();
      this.attackAlertComponent = null;
      h.MovieClipHelper.clearMovieClip(this.attackAlertLayer);
    }
  };
  CastleLayoutManager.prototype.destroyAllScreens = function () {
    if (this.fix_screens != null) {
      for (var e = 0, t = Array.from(this.fix_screens.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
        }
      }
    }
  };
  CastleLayoutManager.prototype.showIngameMessage = function (e, t = null) {
    this.showDialog(e, t, this.ingameMessageLayer);
  };
  CastleLayoutManager.prototype.hideAllAttackPanels = function () {
    if (this.attackpanels != null) {
      for (var e = 0, t = Array.from(this.attackpanels.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isVisible()) {
          i.hide();
        }
      }
    }
  };
  CastleLayoutManager.prototype.addTutorialPanel = function () {
    if (!this._tutorialPanel) {
      this._tutorialPanel = new be.CastleTutorialPanel(new Library.CastleInterfaceElements.TutorialPanel());
      this.castleTutorialStage.addChild(this._tutorialPanel.disp);
      this._tutorialPanel.hide();
    }
  };
  CastleLayoutManager.prototype.addGuidancePanel = function () {
    if (!this._guidancePanel) {
      this._guidancePanel = new De.GuidancePanel();
      this.guidanceLayer.addChild(this._guidancePanel.disp);
      this._guidancePanel.hide();
    }
  };
  CastleLayoutManager.prototype.addKoreanPanel = function () {
    if (!this._koreanPanel) {
      this._koreanPanel = new Ie.IdentityManagementView();
      this.koreanLayer.addChild(this._koreanPanel.disp);
      this._koreanPanel.show();
    }
    if (this.env.currentCountryLanguageCode != "ko" || this.env.isIdentityManagementActive) {
      if (this.env.currentCountryLanguageCode != "ko" && this.env.isIdentityManagementActive) {
        u.CommandController.instance.executeCommand(a.BasicController.COMMAND_IDENTITY_MANAGEMENT, false);
      }
    } else {
      u.CommandController.instance.executeCommand(a.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
    }
    if (c.BasicModel.identityManagement && c.BasicModel.identityManagement.showStuff) {
      c.BasicModel.identityManagement.resetLicenseTimer();
      c.BasicModel.identityManagement.showStuff = false;
    }
  };
  CastleLayoutManager.prototype.addPopoverPanel = function () {
    if (!this.popoverPanel) {
      this.popoverPanel = new Te.PopoverPanel();
      this.popoverLayer.addChild(this.popoverPanel.disp);
      this.popoverPanel.show();
    }
  };
  CastleLayoutManager.prototype.removePopoverPanel = function () {
    if (this.popoverPanel) {
      this.popoverPanel.hide();
      this.popoverLayer.removeChild(this.popoverPanel.disp);
      this.popoverPanel.destroy();
      this.popoverPanel = null;
    }
  };
  CastleLayoutManager.prototype.addAttackAlertComponent = function () {
    if (this.attackAlertLayer && !this.attackAlertComponent) {
      this.attackAlertComponent = new le.CastleAttackAlertFrameComponent();
      this.attackAlertLayer.addChild(this.attackAlertComponent.panelDisp);
    }
  };
  CastleLayoutManager.prototype.initToolTipManager = function () {
    this.tooltipManager = new k.CastleToolTipManager(this.tooltipLayer, _.getDefinitionByName("Tooltip_Body"), _.getDefinitionByName("Tooltip_Arrow"));
    this.tooltipLayer.addChild(Y.EquipmentIconHelper.equipToolTip.disp);
    this.tooltipLayer.addChild(Y.EquipmentIconHelper.relicEquipToolTip.disp);
    this.tooltipLayer.addChild(j.DecoBuildingToolTipManager.initDisp);
    this.tooltipLayer.addChild(G.CastleFusionCompareToolTip.initDisp);
    this.tooltipLayer.addChild(K.LegendSkillIconHelper.disp);
    this.tooltipLayer.addChild(pe.ConstructionItemTooltipHelper.disp);
    this.tooltipLayer.addChild(he.MaterialBagTooltipHelper.disp);
    this.tooltipLayer.addChild(ce.LordEffectHelper.disp);
    this.tooltipLayer.addChild(Le.GeneralsSkillTooltipHelper.disp);
    this.tooltipLayer.addChild(U.TextDarkTooltip.getInstance().disp);
    ue.TooltipManagerFacade.hideAllTooltips();
  };
  CastleLayoutManager.prototype.addInteractiveToolTip = function (e) {
    if (!this.interactiveToolTipLayer.contains(e)) {
      this.interactiveToolTipLayer.addChild(e);
    }
  };
  CastleLayoutManager.prototype.clearToolTipLayer = function () {
    this.tooltipManager.destroy();
    h.MovieClipHelper.clearMovieClip(this.tooltipLayer);
    h.MovieClipHelper.clearMovieClip(this.interactiveToolTipLayer);
  };
  CastleLayoutManager.prototype.initPHPCallbacks = function () {
    f.ExternalInterface.addCallback("showPrePaymentDialog", this.bindFunction(this.showPaymentSite));
  };
  CastleLayoutManager.prototype.showPaymentSite = function () {
    Pe.CastleOpenShopExecutor.open(Pe.CastleOpenShopExecutor.SOURCE_NETWORK_PANEL, Ae.CXFSourceTrackingConstants.SOURCE_NETWORK_PANEL);
  };
  Object.defineProperty(CastleLayoutManager.prototype, "nativeCursor", {
    get: function () {
      return this.customCursor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "dialogCastleSwitch", {
    get: function () {
      return this._dialogCastleSwitch;
    },
    set: function (e) {
      this._dialogCastleSwitch = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.findLayer = function (e) {
    if (!e) {
      return null;
    }
    var t;
    do {
      t = e;
      e = e.parent;
    } while (e && e != this && e != this.uiStage && e != this.root);
    if (e != this && e != this.uiStage) {
      return null;
    } else {
      return t;
    }
  };
  CastleLayoutManager.prototype.getTutorialLayer = function (e) {
    switch (this.findLayer(e)) {
      case this.backgroundLayer:
      case this.screenLayer:
      case this.ingameUIComponentLayer:
      case this.ingameTutorialLayer:
        return this.ingameTutorialLayer;
      case this.panelLayer:
      case this.panelTutorialLayer:
        return this.panelTutorialLayer;
      case this.dialogLayer:
      case this.attackpanelLayer:
      case this.ingameMessageLayer:
      case this.tutorialLayer:
        return this.tutorialLayer;
      default:
        console.warn("error getting tutorial layer - target is not in a layer managed by the layout manager");
        return this.tutorialLayer;
    }
  };
  CastleLayoutManager.prototype.getLayerInDialogLayer = function (e) {
    if (e.parent == this.dialogLayer) {
      return e;
    } else if (e == this.stage) {
      return e;
    } else {
      return this.getLayerInDialogLayer(e.parent);
    }
  };
  Object.defineProperty(CastleLayoutManager.prototype, "highestShownDialog", {
    get: function () {
      var e;
      var t;
      var i = null;
      if (this.fix_dialogs != null) {
        for (var n = 0, o = Array.from(this.fix_dialogs.values()); n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && this.dialogLayer.contains(a.disp)) {
            t = v.instanceOfClass(a, "CastleExternalDialog") ? a.disp.parent == this.dialogLayer ? a.disp : a.disp.parent : a.disp;
            if (i != null) {
              if (a && a.isVisible() && this.dialogLayer.getChildIndex(t) > this.dialogLayer.getChildIndex(e)) {
                i = a;
                e = t;
              }
            } else {
              i = a;
              e = t;
            }
          }
        }
      }
      return i;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "highestInteractiveShownDialog", {
    get: function () {
      var e = this.highestShownDialog;
      if (e) {
        return e.disp;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.getInteractiveAreas = function (e) {
    var t = [];
    if (e && (Array.isArray(e) && e.length ? t = t.concat(e) : t && t.push(e), t.length > 0)) {
      t.push(this.interactiveToolTipLayer);
      t.push(this.ingameUIComponentLayer);
      t.push(this.locaLayer.disp);
      t.push(this.guidanceLayer);
      return t;
    } else {
      return null;
    }
  };
  CastleLayoutManager.prototype.restrictToHighestDialog = function () {
    window.restrictedInteractiveArea = this.getInteractiveAreas(this.highestInteractiveShownDialog);
    for (var e = 0; e < this.dialogLayer.children.length; e++) {
      var t = this.dialogLayer.children[e];
      if (e == this.dialogLayer.children.length - 1) {
        W.CastleMovieClipHelper.uncacheSafe(t);
        t.tickEnabled = true;
      } else if (!t.cacheCanvas) {
        t.doCache(0, Math.ceil(t.getDoCacheScale() * t.scaleX));
        t.tickEnabled = false;
      }
    }
    var i = this.highestShownDialog;
    if (i) {
      i.setTickEnablement();
    }
  };
  Object.defineProperty(CastleLayoutManager.prototype, "oldState", {
    get: function () {
      return this._oldState;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.updateGameStage = function () {
    this._gamestageNeedsUpdate = true;
  };
  Object.defineProperty(CastleLayoutManager.prototype, "gamestageNeedsUpdate", {
    get: function () {
      var e = this._gamestageNeedsUpdate;
      this._gamestageNeedsUpdate = false;
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "fix_panels", {
    get: function () {
      return this.panels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "fix_screens", {
    get: function () {
      return this.screens;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLayoutManager.prototype, "fix_dialogs", {
    get: function () {
      return this.dialogs;
    },
    enumerable: true,
    configurable: true
  });
  CastleLayoutManager.prototype.clearDialog = function (t) {
    e.prototype.clearDialog.call(this, t);
  };
  CastleLayoutManager.prototype.forceHitTest = function (e) {
    var t = e && e.stage ? e.stage : this.stage;
    t._mouseOverX = 0;
    t._testMouseOver();
  };
  CastleLayoutManager.prototype.onEnterFrameUI = function (e) {
    for (var t = 0, i = this._uiStageAnimatedUIComponents; t < i.length; t++) {
      i[t].onEnterFrameUpdate();
    }
  };
  CastleLayoutManager.prototype.addUIStageAnimUIComponent = function (e) {
    var t = this._uiStageAnimatedUIComponents.indexOf(e);
    if (t > -1) {
      this._uiStageAnimatedUIComponents[t] = e;
    } else {
      this._uiStageAnimatedUIComponents.push(e);
    }
  };
  CastleLayoutManager.prototype.removeUIStageAnimUIComponent = function (e) {
    for (var t = 0; t < this._uiStageAnimatedUIComponents.length; t++) {
      if (this._uiStageAnimatedUIComponents[t] == e) {
        this._uiStageAnimatedUIComponents.splice(t, 1);
      }
    }
  };
  CastleLayoutManager.__initialize_static_members = function () {
    var e;
    (e = new Map()).set(l.BasicLayoutManager.STATE_CONNECT, new ge.CastleLayoutConnectingServer());
    e.set(l.BasicLayoutManager.STATE_STARTSCREEN, new fe.CastleLayoutStartScreen());
    e.set(CastleLayoutManager.STATE_ISO, new Ce.CastleLayoutIso());
    e.set(CastleLayoutManager.STATE_WORLDMAP, new Oe.CastleLayoutWorldmap());
    e.set(CastleLayoutManager.STATE_WORLDMAP_RELOCATION, new Ee.CastleLayoutWorldmapRelocation());
    e.set(CastleLayoutManager.STATE_SEASON_WORLDMAP, new me.CastleLayoutSeasonWorldmap());
    e.set(CastleLayoutManager.STATE_KINGDOMMAP, new _e.CastleLayoutKingdomMap());
    CastleLayoutManager.LAYOUT_STRATEGIES = e;
  };
  CastleLayoutManager.STATE_ISO = 10;
  CastleLayoutManager.STATE_ISO_BUILD_MODE = 11;
  CastleLayoutManager.STATE_SEASON_WORLDMAP = 16;
  CastleLayoutManager.STATE_KINGDOMMAP = 17;
  CastleLayoutManager.STATE_WORLDMAP = 50;
  CastleLayoutManager.STATE_WORLDMAP_RELOCATION = 51;
  CastleLayoutManager.UI_SCALE_FACTOR = 1.25;
  return CastleLayoutManager;
}(B.CastleBasicLayoutManager);
exports.CastleLayoutManager = Z;
var $ = require("./365.js");
var ee = require("./3878.js");
var te = require("./300.js");
var ie = require("./433.js");
var ne = require("./326.js");
var oe = require("./33.js");
var ae = require("./9.js");
var se = require("./3880.js");
var re = require("./3919.js");
var le = require("./3921.js");
var ce = require("./133.js");
var ue = require("./200.js");
var de = require("./471.js");
var pe = require("./356.js");
var he = require("./1054.js");
var ge = require("./3922.js");
var Ce = require("./3928.js");
var _e = require("./4139.js");
var me = require("./4143.js");
var fe = require("./4160.js");
var Oe = require("./4171.js");
var Ee = require("./4204.js");
var ye = require("./1108.js");
var be = require("./675.js");
var De = require("./4206.js");
var Ie = require("./1877.js");
var Te = require("./4208.js");
var ve = require("./1863.js");
var Se = require("./1138.js");
var Ae = require("./108.js");
var Le = require("./854.js");
var Pe = require("./146.js");
T.classImplementsInterfaces(Z, "Container", "ILayoutManagerContext");
Z.__initialize_static_members();