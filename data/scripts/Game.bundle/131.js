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
var d = require("./338.js");
var p = require("./15.js");
var h = require("./683.js");
var g = createjs.MouseEvent;
var C = createjs.MovieClip;
var _ = function (e) {
  function CastlePanel(t) {
    var i = this;
    i.isWaitingForServerMessage = false;
    i._allowCaching = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastlePanel, e);
  CastlePanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.dispToCache.tickEnabled = false;
  };
  CastlePanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    O.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
  };
  Object.defineProperty(CastlePanel, "dialogHandler", {
    get: function () {
      return m.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "layoutManager", {
    get: function () {
      return f.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.onMouseOver = function (t) {
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      O.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
    }
    p.CastleBasicController.getInstance().dispatchEvent(new d.CastlePanelEvent(d.CastlePanelEvent.MOUSE_OVER_PANEL, this));
    e.prototype.onMouseOver.call(this, t);
    if (s.BasicToolTipManager.TOOLTIP_LABEL in t.target && t.target[s.BasicToolTipManager.TOOLTIP_LABEL] != null) {
      this.layoutManager.tooltipManager.show(t.target.toolTipText, t.target);
    }
    if (t.target instanceof c.TextField && t.target.selectable) {
      this.layoutManager.customCursor.setCursorType(h.CastleNativeCustomCursor.CURSOR_INPUT);
    }
  };
  CastlePanel.prototype.onMouseOut = function (t) {
    p.CastleBasicController.getInstance().dispatchEvent(new d.CastlePanelEvent(d.CastlePanelEvent.MOUSE_OUT_PANEL, this));
    e.prototype.onMouseOut.call(this, t);
    this.layoutManager.tooltipManager.hide();
    if (t.target instanceof c.TextField && t.target.selectable) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastlePanel.prototype.onCursorOver = function (e) {
    if (u.instanceOfClass(e.target, "CountryPickerButton") || u.instanceOfClass(e.target, "BasicButton") || e.target instanceof C && e.target.basicButton != null) {
      if (e.target.enabled) {
        this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
      }
    } else if (CastlePanel.ACTLIKEBUTTON_LABEL in e.target && e.target.actLikeButton) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    } else {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastlePanel.prototype.onCursorOut = function (e) {
    this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastlePanel.prototype, "env", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicPanel.prototype, "env").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.onClick = function (e) {};
  Object.defineProperty(CastlePanel.prototype, "allowCaching", {
    get: function () {
      return this._allowCaching;
    },
    set: function (e) {
      this._allowCaching = e;
      if (this._allowCaching && !this.dispToCache.cacheCanvas) {
        this.dispToCache.doCache();
      } else if (!this._allowCaching && this.dispToCache.cacheCanvas) {
        O.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
      } else {
        this.updateCache();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    if (this._allowCaching) {
      this.dispToCache.doCache();
    }
  };
  CastlePanel.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (this._allowCaching && this.dispToCache.cacheCanvas) {
      O.CastleMovieClipHelper.uncacheSafe(this.dispToCache);
    }
  };
  CastlePanel.prototype.updateCache = function () {
    if (this.dispToCache.cacheCanvas) {
      this.dispToCache.updateCache();
    }
  };
  Object.defineProperty(CastlePanel.prototype, "dispToCache", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "controller", {
    get: function () {
      return p.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "textFieldManager", {
    get: function () {
      return l.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePanel.prototype, "castleEnv", {
    get: function () {
      return this.env;
    },
    enumerable: true,
    configurable: true
  });
  CastlePanel.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.disp.addEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastlePanel.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.disp.removeEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastlePanel.prototype.removeEventListenerOnDestroy = function () {
    e.prototype.removeEventListenerOnDestroy.call(this);
    this.disp.removeEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  CastlePanel.ACTLIKEBUTTON_LABEL = "actLikeButton";
  return CastlePanel;
}(a.BasicPanel);
exports.CastlePanel = _;
var m = require("./9.js");
var f = require("./17.js");
var O = require("./41.js");