Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./49.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./103.js");
var h = require("./91.js");
var g = require("./199.js");
var C = require("./24.js");
var _ = require("./131.js");
var m = createjs.MovieClip;
var f = createjs.Event;
var O = createjs.MouseEvent;
var E = createjs.TimerEvent;
var y = function (e) {
  function CastleExternalPanel(t, i = null) {
    var n = this;
    n._panelClassName = "";
    n.applyPropertiesCalled = false;
    n._collectableRenderList = [];
    n._loaded = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, CastleExternalPanel.createExternalClipInConstructor(t, i)) || this)._panelClassName = t;
    n.externalClip = n.disp;
    if (n.externalClip) {
      n.initExternalClipInConstructor();
    }
    return n;
  }
  n.__extends(CastleExternalPanel, e);
  CastleExternalPanel.createExternalClipInConstructor = function (e, t = null) {
    if (t == null) {
      t = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    }
    return new C.CastleGoodgameExternalClip(e, t, null, 0, false);
  };
  CastleExternalPanel.prototype.initExternalClipInConstructor = function () {
    this.initExternalClip();
  };
  CastleExternalPanel.prototype.initExternalClip = function () {
    if (this.externalClip.isLoaded) {
      this.displayObjectClipIsLoaded(this.externalClip);
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.displayObjectClipIsLoaded), CastleExternalPanel.CLIP_LOADED_PRIORITY_LOADED);
    }
  };
  CastleExternalPanel.prototype.show = function () {
    if (this.externalClip.isLoaded) {
      this.showLoadedAndNotify();
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.showLoadedAndNotify), CastleExternalPanel.CLIP_LOADED_PRIORITY_SHOWN);
    }
  };
  CastleExternalPanel.prototype.init = function () {
    if (this.externalClip.isLoaded) {
      this.initLoaded();
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.initLoaded));
    }
  };
  CastleExternalPanel.prototype.hide = function () {
    if (this.externalClip.isLoaded) {
      this.hideLoaded();
    } else {
      this.externalClip.clipLoaded.addOnce(this.bindFunction(this.hideLoaded));
    }
  };
  CastleExternalPanel.prototype.initBasicButtons = function (e) {
    this.buttonArray = [];
    for (var t = 0; t < e.length; t++) {
      if (e[t]) {
        e[t].basicButton = new a.BasicButton(e[t], true);
        this.buttonArray.push(e[t].basicButton);
      }
    }
  };
  CastleExternalPanel.prototype.onBtnDelayOver = function (e, t) {
    return function (i) {
      e.stop();
      e.removeEventListener(E.TIMER, this.bindFunction(this.onBtnDelayOver));
      e = null;
      t.basicButton.enableButton = true;
    };
  };
  CastleExternalPanel.prototype.hideLoaded = function (t = null) {
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
    this.destroyCollectableRenderList();
    e.prototype.hide.call(this);
    this.layoutManager.hideDialog(c.getDefinitionByName(d.getQualifiedClassName(this)));
    this.applyPropertiesCalled = false;
    this.controller.dispatchEvent(new h.CastleLayoutManagerEvent(h.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, [this.constructor]));
  };
  CastleExternalPanel.prototype.initLoaded = function (t = null) {
    e.prototype.init.call(this);
  };
  CastleExternalPanel.prototype.showLoadedAndNotify = function (e = null) {
    this.showLoaded(e);
    this.controller.dispatchEvent(new h.CastleLayoutManagerEvent(h.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, [this.constructor]));
  };
  CastleExternalPanel.prototype.showLoaded = function (t = null) {
    this.updatePosition();
    this.applyProperties();
    e.prototype.show.call(this);
    if (this.buttonArray != null) {
      for (var i = 0, n = this.buttonArray; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.addMouseEventListener();
        }
      }
    }
    this.disp.mouseChildren = true;
    this.updatePosition();
    if (!this.isInitialized) {
      this.isInitialized = true;
      this.init();
    }
    this.panelDisp.removeEventListener(f.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.panelDisp.addEventListener(O.CLICK, this.bindFunction(this.onClick));
    this.panelDisp.addEventListener(O.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.panelDisp.addEventListener(O.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.panelDisp.addEventListener(O.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.panelDisp.addEventListener(O.ROLL_OUT, this.bindFunction(this.onRollOut));
    this.panelDisp.addEventListener(f.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    this.panelDisp.addEventListener(O.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.panelDisp.addEventListener(O.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    if (this.panelDisp.stage) {
      this.panelDisp.stage.addEventListener(u.KeyboardEvent.KEY_UP, this.onKeyUp);
      this.panelDisp.stage.addEventListener(f.RESIZE, this.onResize);
    }
  };
  CastleExternalPanel.prototype.displayObjectClipIsLoaded = function (e) {
    this._loaded = true;
  };
  CastleExternalPanel.prototype.onAddedToStage = function (e) {};
  Object.defineProperty(CastleExternalPanel.prototype, "assetFileURL", {
    get: function () {
      return s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetClassName);
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    this.controller.dispatchEvent(p.EventInstanceMapper.getEvent(g.CastleDialogEvent, g.CastleDialogEvent.MOUSE_ON_DIALOG));
  };
  CastleExternalPanel.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
  };
  CastleExternalPanel.prototype.onCursorOver = function (e) {
    if (e.target instanceof m && e.target.basicButton != null) {
      if (e.target.basicButton.enabled) {
        this.layoutManager.customCursor.setCursorType(r.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (CastleExternalPanel.ACTLIKEBUTTON_LABEL in e.target && e.target.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(r.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleExternalPanel.prototype.onCursorOut = function (e) {
    this.layoutManager.customCursor.setCursorType(r.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleExternalPanel.prototype, "env", {
    get: function () {
      return l.EnvGlobalsHandler.globals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.CastlePanel.prototype, "env").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel, "dialogHandler", {
    get: function () {
      return b.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel.prototype, "panelDisp", {
    get: function () {
      return this.externalClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPanel.prototype.destroy = function () {
    this.destroyCollectableRenderList();
    e.prototype.destroy.call(this);
    if (this.panelDisp) {
      this.panelDisp.removeEventListener(O.CLICK, this.bindFunction(this.onClick));
      this.panelDisp.removeEventListener(O.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this.panelDisp.removeEventListener(O.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.panelDisp.removeEventListener(O.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.panelDisp.removeEventListener(O.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.panelDisp.removeEventListener(f.REMOVED_FROM_STAGE, this.bindFunction(this.onRemovedFromStage));
    }
    if (this.panelDisp) {
      this.panelDisp.removeEventListener(O.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.panelDisp.removeEventListener(O.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    }
  };
  CastleExternalPanel.prototype.getButtonByDisplayObjectInstance = function (e) {
    for (var t = 0; t < this.buttonArray.length; t++) {
      if (this.buttonArray[t].disp == e) {
        return this.buttonArray[t];
      }
    }
    return null;
  };
  CastleExternalPanel.prototype.destroyCollectableRenderList = function () {
    this.destroyRenderList(this._collectableRenderList);
  };
  CastleExternalPanel.prototype.destroyRenderList = function (e) {
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        e[t].destroy();
      }
      e.length = 0;
    }
  };
  Object.defineProperty(CastleExternalPanel.prototype, "assetClassName", {
    get: function () {
      return this._panelClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalPanel.prototype, "loaded", {
    get: function () {
      return this._loaded;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalPanel.prototype.onRemovedFromStage = function (e) {};
  CastleExternalPanel.ACTLIKEBUTTON_LABEL = "actLikeButton";
  CastleExternalPanel.CLIP_LOADED_PRIORITY_LOADED = 3;
  CastleExternalPanel.CLIP_LOADED_PRIORITY_SHOWN = 2;
  return CastleExternalPanel;
}(_.CastlePanel);
exports.CastleExternalPanel = y;
o.classImplementsInterfaces(y, "ICollectableRendererList");
var b = require("./9.js");