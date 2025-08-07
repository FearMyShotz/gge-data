Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./1.js");
var _ = require("./1.js");
var m = require("./1.js");
var f = require("./1.js");
var O = require("./1.js");
var E = require("./1.js");
var y = require("./1.js");
var b = require("./28.js");
var D = require("./103.js");
var I = require("./91.js");
var T = require("./199.js");
var v = require("./15.js");
var S = require("./4.js");
var A = require("./43.js");
var L = require("./24.js");
var P = require("./683.js");
var M = require("./41.js");
var R = require("./201.js");
var V = createjs.MovieClip;
var x = createjs.Container;
var w = createjs.Event;
var B = createjs.MouseEvent;
var F = createjs.TimerEvent;
var N = function (e) {
  function CastleExternalDialog(t, i = null, n = null) {
    var o = this;
    o._isLocked = false;
    o.isWaitingForServerMessage = false;
    o._dialogClassName = "";
    o.applyPropertiesCalled = false;
    o._collectableRenderList = [];
    o._loaded = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this, CastleExternalDialog.createExternalClipInConstructor(t, i, n)) || this)._dialogClassName = t;
    o.externalClip = o.disp;
    if (o.externalClip) {
      o.initExternalClipInConstructor();
    }
    o._textDialogName = new C.TextField();
    return o;
  }
  n.__extends(CastleExternalDialog, e);
  CastleExternalDialog.prototype.insertDialogInfo = function () {
    if (CastleExternalDialog.showDialogName) {
      var e = false;
      if (this.bg && this.bg.parent && this.disp == this.bg.parent) {
        this.disp.removeChild(this.bg);
        e = true;
      }
      if (this._textDialogName.parent) {
        this._textDialogName.parent.removeChild(this._textDialogName);
      }
      var t = this.disp.getBounds();
      this._textDialogName.text = this._dialogClassName + " - Asset: " + p.PathProvider.instance.itemVersions.getPath(this._dialogClassName);
      this._textDialogName.textColor = "#00FF00";
      this._textDialogName.autoSize = _.TextFieldAutoSize.LEFT;
      this._textDialogName.x = t.x;
      this._textDialogName.y = t.y - 35;
      this._textDialogName.background = true;
      this._textDialogName.backgroundColor = "#000000";
      this.disp.addChild(this._textDialogName);
      if (e) {
        this.disp.addChildAt(this.bg, 0);
      }
    }
  };
  CastleExternalDialog.createExternalClipInConstructor = function (e, t = null, i = null) {
    if (i == null) {
      if (t == null) {
        t = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
      }
      return new L.CastleGoodgameExternalClip(e, t, null, 0, false);
    } else {
      return i;
    }
  };
  CastleExternalDialog.prototype.initExternalClipInConstructor = function () {
    this.initExternalClip();
  };
  CastleExternalDialog.prototype.initExternalClip = function () {
    if (this.externalClip.isLoaded) {
      this.displayObjectClipIsLoaded(this.externalClip);
    } else {
      if (this.hasPreloaderDialog) {
        k.CastleDialogHandler.getInstance().registerDialogsWithType(H.CastleExternalPreloaderDialog, new R.CastleExternalPreloaderDialogProperties(this.bindFunction(this.hideOnLoading)), false, A.CastleDialogConsts.PRIORITY_TOP, 0, A.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
      }
      if (this.externalClip.clipLoaded) {
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.displayObjectClipIsLoaded), CastleExternalDialog.CLIP_LOADED_PRIORITY_LOADED);
      }
    }
  };
  CastleExternalDialog.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
    if (c.EnvGlobalsHandler.globals.isTest && t.key == h.Keyboard.ESCAPE) {
      this.hide();
    }
  };
  CastleExternalDialog.prototype.onBGAddedToStage = function (e) {
    this.bg.removeEventListener(w.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    if (this.bg.width != 0) {
      this.bg.width = this.bg.stage.stageWidth + 10;
      this.bg.height = this.bg.stage.stageHeight + 10;
    }
    this.bg.x = -(this.disp.x + 5);
    this.bg.y = -(this.disp.y + 5);
    this.bg.doCache();
  };
  CastleExternalDialog.prototype.updateBackground = function () {
    if (this.bg && this.bg.stage) {
      this.bg.graphics.clear();
      this.bg.graphics.beginFill(0, 1);
      this.bg.graphics.drawRect(0, 0, this.disp.stage.stageWidth / this.disp.scaleX + 10, this.disp.stage.stageHeight / this.disp.scaleY + 10);
      this.bg.graphics.endFill();
      this.bg.x = -this.disp.x / this.disp.scaleX - 5;
      this.bg.y = -this.disp.y / this.disp.scaleY - 5;
      this.bg.updateBounds();
      this.bg.doCache();
      if (this.dialogDisp.bg_cached && !this.dialogDisp.bg_cached.cacheCanvas) {
        this.dialogDisp.bg_cached.doCache();
      }
    }
  };
  CastleExternalDialog.prototype.hideOnLoading = function () {
    this.externalClip.clipLoaded.removeAll();
    this.hide();
  };
  CastleExternalDialog.prototype.show = function () {
    if (h.currentBrowserInfo.isMobile && this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
      this.layoutManager.worldmapScreen.renderer.renderNavForMobile(true);
    }
    if (this.externalClip.isLoaded) {
      this.showLoadedAndNotify();
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.showLoadedAndNotify), CastleExternalDialog.CLIP_LOADED_PRIORITY_SHOWN);
    }
  };
  CastleExternalDialog.prototype.applyProperties = function () {
    if (!this.applyPropertiesCalled) {
      this.applyPropertiesCalled = true;
      if (this.externalClip.isLoaded) {
        this.applyPropertiesLoaded();
      } else {
        this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.applyPropertiesLoaded), CastleExternalDialog.CLIP_LOADED_PRIORITY_APPLIEDPROPERTIE);
      }
    }
  };
  CastleExternalDialog.prototype.init = function () {
    if (this.externalClip.isLoaded) {
      this.initLoaded();
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.initLoaded));
    }
  };
  CastleExternalDialog.prototype.hide = function () {
    if (this.externalClip) {
      if (this.externalClip.isLoaded) {
        this.hideLoaded();
      } else {
        this.externalClip.clipLoaded.addOnce(this.bindFunction(this.hideLoaded));
      }
    }
  };
  CastleExternalDialog.prototype.initBasicButtons = function (e) {
    this.buttonArray = [];
    for (var t = 0; t < e.length; t++) {
      if (e[t]) {
        e[t].basicButton = new o.BasicButton(e[t], true);
        this.buttonArray.push(e[t].basicButton);
      }
    }
  };
  CastleExternalDialog.prototype.initDelayedButtons = function (e) {
    if (e) {
      this.delayTimerArray = [];
      this.delayButtonArray = e;
      for (var t = 0; t < e.length; t++) {
        var i = new m.Timer(500, 1);
        e[t].basicButton = new o.BasicButton(e[t], true);
        e[t].basicButton.enableButton = false;
        this.delayTimerArray.push(i);
        this.buttonArray.push(e[t].basicButton);
        i.addEventListener(F.TIMER, this.bindFunction(this.onBtnDelayOver(i, e[t])));
        i.start();
      }
    }
  };
  CastleExternalDialog.prototype.onBtnDelayOver = function (e, t) {
    return function (i) {
      e.stop();
      e.removeEventListener(F.TIMER, this.bindFunction(this.onBtnDelayOver));
      e = null;
      t.basicButton.enableButton = true;
    };
  };
  CastleExternalDialog.prototype.hideLoaded = function (t = null) {
    if (this.buttonArray != null) {
      for (var i = 0, n = this.buttonArray; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.resetHoverState();
          o.removeMouseEventListener();
          o.enableButton = true;
        }
      }
    }
    if (this.delayTimerArray != null) {
      for (var a = 0, s = this.delayTimerArray; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          r.stop();
          r.removeEventListener(F.TIMER, this.bindFunction(this.onBtnDelayOver));
          r = null;
        }
      }
    }
    this.clearTimedFunctions();
    this.destroyCollectableRenderList();
    this.removeDispEventListeners();
    e.prototype.hide.call(this);
    this.layoutManager.hideDialog(O.getDefinitionByName(E.getQualifiedClassName(this)));
    this.applyPropertiesCalled = false;
    this.controller.dispatchEvent(new I.CastleLayoutManagerEvent(I.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, [this.constructor]));
    var l = this.layoutManager.findLayer(this.disp);
    for (var c = this.disp; c && c.parent;) {
      if (c.parent == l) {
        l.removeChild(c);
        c = null;
      } else {
        c = c.parent;
      }
    }
    this.layoutManager.restrictToHighestDialog();
    if (h.currentBrowserInfo.isMobile) {
      G.TooltipManagerFacade.hideAllTooltips();
    }
  };
  CastleExternalDialog.prototype.clearTimedFunctions = function () {
    if (this._timedFunctions && this._timedFunctions.size > 0 && this._timedFunctions != null) {
      for (var e = 0, t = Array.from(this._timedFunctions.keys()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          if (y.instanceOfClass(i, "Timer")) {
            i.removeEventListener(F.TIMER, this.bindFunction(this.onTimedFunction));
            i.stop();
          }
          this._timedFunctions.delete(i);
        }
      }
    }
  };
  CastleExternalDialog.prototype.initLoaded = function (t = null) {
    this.showBackground = true;
    e.prototype.init.call(this);
  };
  CastleExternalDialog.prototype.applyPropertiesLoaded = function (e = null) {};
  CastleExternalDialog.prototype.showLoadedAndNotify = function (e = null) {
    this.showLoaded(e);
    this.controller.dispatchEvent(new I.CastleLayoutManagerEvent(I.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, [this.constructor]));
  };
  CastleExternalDialog.prototype.showLoaded = function (t) {
    var i = this;
    if (t === undefined) {
      t = null;
    }
    if (this.hasPreloaderDialog) {
      this.layoutManager.hideDialog(H.CastleExternalPreloaderDialog);
    }
    this.disp = this.dialogDisp;
    this.updatePosition();
    this.applyProperties();
    if (this.disp instanceof x) {
      if (this.disp.numChildren > 0) {
        e.prototype.show.call(this);
      }
    } else {
      console.warn(" is Invalid --> maybe Empty");
    }
    this.setToolTips();
    this.setCopyTexts();
    this.initDelayedButtons(this.delayButtonArray);
    if (this.buttonArray != null) {
      for (var n = 0, o = this.buttonArray; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.addMouseEventListener();
        }
      }
    }
    if (this.disp instanceof V && this.bg) {
      var s = this.disp.addEventListener("tick", function (e) {
        if (i.disp.paused) {
          i.disp.removeEventListener("tick", s);
        }
        i.disp.addChildAt(i.bg, 0);
      });
    }
    this.insertDialogInfo();
    this.layoutManager.restrictToHighestDialog();
    this.layoutManager.hideAllRingMenus();
  };
  CastleExternalDialog.prototype.setToolTips = function () {};
  CastleExternalDialog.prototype.setCopyTexts = function () {};
  CastleExternalDialog.prototype.displayObjectClipIsLoaded = function (e) {
    if (this.bg) {
      this.bg.visible = false;
    }
    this.dispBounds = this.dialogDisp.getBounds();
    if (this.bg) {
      this.bg.visible = true;
    }
    this._loaded = true;
    this.disp = this.dialogDisp;
  };
  CastleExternalDialog.prototype.onAddedToStage = function (e) {};
  Object.defineProperty(CastleExternalDialog.prototype, "disp", {
    get: function () {
      return Object.getOwnPropertyDescriptor(u.FlashUIComponent.prototype, "disp").get.call(this);
    },
    set: function (e) {
      this.destroy();
      Object.getOwnPropertyDescriptor(u.FlashUIComponent.prototype, "disp").set.call(this, this.dialogDisp);
      this.updatePosition();
      if (!this.isInitialized) {
        this.isInitialized = true;
        this.init();
      }
      this.disp.removeEventListener(w.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
      this.disp.addEventListener(B.CLICK, this.bindFunction(this.onClick));
      this.disp.addEventListener(B.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.disp.addEventListener(B.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(B.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.addEventListener(B.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.addEventListener(w.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
      this.disp.addEventListener(B.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.addEventListener(B.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      window.addEventListener(w.RESIZE, this.bindFunction(this.onResize));
      if (this.disp.stage) {
        this.disp.stage.addEventListener(g.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.removeDispEventListeners = function () {
    if (this.disp) {
      this.disp.removeEventListener(B.CLICK, this.bindFunction(this.onClick));
      this.disp.removeEventListener(B.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.disp.removeEventListener(B.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(B.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.removeEventListener(B.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(w.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
      this.disp.removeEventListener(B.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.removeEventListener(B.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
    window.removeEventListener(w.RESIZE, this.bindFunction(this.onResize));
    if (this.disp.stage) {
      this.disp.stage.removeEventListener(g.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
    }
  };
  Object.defineProperty(CastleExternalDialog.prototype, "assetFileURL", {
    get: function () {
      return r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetClassName);
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.lockDialog = function () {
    this._isLocked = true;
  };
  CastleExternalDialog.prototype.unLockDialog = function () {
    this._isLocked = false;
  };
  Object.defineProperty(CastleExternalDialog.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.onResize = function (t) {
    e.prototype.onResize.call(this, t);
    this.updatePosition();
    this.updateBackground();
  };
  CastleExternalDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.controller.dispatchEvent(D.EventInstanceMapper.getEvent(T.CastleDialogEvent, T.CastleDialogEvent.MOUSE_ON_DIALOG));
    var i = M.CastleMovieClipHelper.getFirstMovieClipParent(t.target);
    if (t.target instanceof C.TextField && t.target.selectable) {
      this.layoutManager.customCursor.setCursorType(P.CastleNativeCustomCursor.CURSOR_INPUT);
    } else if (i && l.BasicToolTipManager.TOOLTIP_LABEL in i && i.toolTipText) {
      this.layoutManager.tooltipManager.show(i.toolTipText, i);
    }
  };
  CastleExternalDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    G.TooltipManagerFacade.hideAllTooltips();
    if (t && t.target instanceof C.TextField && t.target.selectable) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleExternalDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = h.currentBrowserInfo.getTouchEvent(t);
    if (i && !i.isLongPressed) {
      G.TooltipManagerFacade.hideAllTooltips();
    }
  };
  CastleExternalDialog.prototype.onCursorOver = function (e) {
    if (e.target instanceof V && e.target.basicButton != null) {
      if (e.target.basicButton.enabled) {
        this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (e.target.actLikeButton || e.target.parent && e.target.parent.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleExternalDialog.prototype.onCursorOut = function (e) {
    this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleExternalDialog.prototype, "hasPreloaderDialog", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "env", {
    get: function () {
      return c.EnvGlobalsHandler.globals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicDialog.prototype, "env").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog, "dialogHandler", {
    get: function () {
      return k.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "layoutManager", {
    get: function () {
      return U.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "controller", {
    get: function () {
      return v.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "dialogDisp", {
    get: function () {
      return this.externalClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "textFieldManager", {
    get: function () {
      return d.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    e.prototype.destroy.call(this);
    this.removeDispEventListeners();
  };
  CastleExternalDialog.prototype.getButtonByDisplayObjectInstance = function (e) {
    for (var t = 0; t < this.buttonArray.length; t++) {
      if (this.buttonArray[t].disp == e) {
        return this.buttonArray[t];
      }
    }
    return null;
  };
  CastleExternalDialog.prototype.disableButtonsForSeconds = function (e, t = b.ClientConstTime.DEFAULT_ENABLE_BUTTON_WAIT_IN_SECONDS) {
    var i = [];
    for (var n = 0; n < e.length; n++) {
      if (y.instanceOfClass(e[n], "BasicButton")) {
        i.push(e[n]);
      } else if (e[n] instanceof V) {
        i.push(this.getButtonByDisplayObjectInstance(e[n]));
      }
    }
    this._timedFunctions ||= new Map();
    this.disableButtons(i);
    var o = new m.Timer(t * 1000, 1);
    o.addEventListener(F.TIMER, this.bindFunction(this.onTimedFunction));
    this._timedFunctions.set(o, {
      function: this.enableButtons,
      params: [i]
    });
    o.start();
  };
  CastleExternalDialog.prototype.disableButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.enableButton = false;
        }
      }
    }
  };
  CastleExternalDialog.prototype.enableButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.enableButton = true;
        }
      }
    }
  };
  CastleExternalDialog.prototype.onTimedFunction = function (e) {
    var t = e.target;
    t.stop();
    t.removeEventListener(F.TIMER, this.bindFunction(this.onTimedFunction));
    if (this._timedFunctions && this._timedFunctions.get(t)) {
      this._timedFunctions.get(t).function.apply(null, this._timedFunctions.get(t).params);
      this._timedFunctions.delete(t);
    }
  };
  CastleExternalDialog.prototype.destroyCollectableRenderList = function () {
    this.destroyRenderList(this._collectableRenderList);
  };
  CastleExternalDialog.prototype.destroyRenderList = function (e) {
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        e[t].destroy();
      }
      e.length = 0;
    }
  };
  Object.defineProperty(CastleExternalDialog.prototype, "dialogClassName", {
    get: function () {
      return this._dialogClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "assetClassName", {
    get: function () {
      return this._dialogClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalDialog.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.isOutOfTutorial = function () {
    return !S.CastleModel.tutorialData.isTutorialActive;
  };
  CastleExternalDialog.prototype.unlockProperties = function () {
    this.applyPropertiesCalled = false;
  };
  Object.defineProperty(CastleExternalDialog.prototype, "loaded", {
    get: function () {
      return this._loaded;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.prototype.onRemovedFromStage = function (e) {};
  CastleExternalDialog.prototype.setTickEnablement = function () {
    this.disp.tickEnabled = true;
  };
  Object.defineProperty(CastleExternalDialog.prototype, "castleEnv", {
    get: function () {
      return this.env;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalDialog.ACTLIKEBUTTON_LABEL = "actLikeButton";
  CastleExternalDialog.showDialogName = false;
  CastleExternalDialog.CLIP_LOADED_PRIORITY_LOADED = 3;
  CastleExternalDialog.CLIP_LOADED_PRIORITY_SHOWN = 2;
  CastleExternalDialog.CLIP_LOADED_PRIORITY_APPLIEDPROPERTIE = 1;
  return CastleExternalDialog;
}(s.BasicDialog);
exports.CastleExternalDialog = N;
var k = require("./9.js");
var U = require("./17.js");
var G = require("./200.js");
var H = require("./154.js");
f.classImplementsInterfaces(N, "ICollectableRendererList");