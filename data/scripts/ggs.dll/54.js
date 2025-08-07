var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = require("./211.js");
var r = require("./60.js");
var o = require("./3.js");
var l = createjs.MovieClip;
var u = createjs.Event;
var c = createjs.TimerEvent;
var _ = createjs.GlowFilter;
var d = function (e) {
  function BasicButton(t = null, n = false) {
    var i = e.call(this) || this;
    i._minWidth = 100;
    i.textXOffset = 0;
    i.initScale = NaN;
    i._mouseOverScale = BasicButton.DEFAULT_MOUSEOVER_SCALE;
    i._enablingIsDelayed = false;
    i._useCaching = false;
    i._disp = t ?? i;
    if (n) {
      i.init();
      i._disp.addEventListener(u.REMOVED_FROM_STAGE, i.bindFunction(i.onRemoveToStage), false, 0, true);
    } else {
      i._disp.addEventListener(u.ADDED_TO_STAGE, i.bindFunction(i.onAddedToStage), false, 0, true);
    }
    if (i.disp.txt_label) {
      i.textField = i.disp.txt_label;
    }
    return i;
  }
  a(BasicButton, e);
  BasicButton.prototype.onAddedToStage = function (e) {
    this._disp.removeEventListener(u.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.init();
    this._disp.addEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage), false, 0, true);
    if (this.cacheCanvas) {
      this._useCaching = true;
    }
  };
  BasicButton.prototype.onRemoveToStage = function (e) {
    this._disp.scaleX = this._disp.scaleY = this.initScale;
    this._disp.removeEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage));
    this._disp.removeEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.removeEventListener("rollout", this.bindFunction(this.onRollOut));
    this._disp.addEventListener(u.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage), false, 0, true);
    if (this.delayTimer) {
      this.delayTimer.removeEventListener(c.TIMER_COMPLETE, this.bindFunction(this.executeDelayedEnabling));
      this.delayTimer.stop();
    }
  };
  BasicButton.prototype.setCaching = function (e) {
    this._useCaching = e;
  };
  BasicButton.prototype.removeMouseEventListener = function () {
    this._disp.removeEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.removeEventListener("rollout", this.bindFunction(this.onRollOut));
  };
  BasicButton.prototype.addMouseEventListener = function () {
    this._disp.addEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.addEventListener("rollout", this.bindFunction(this.onRollOut));
  };
  BasicButton.prototype.init = function () {
    this._disp.useHandCursor = true;
    this._disp.buttonMode = true;
    this._disp.mouseChildren = false;
    this._disp.tabEnabled = false;
    this.initScale = Math.min(this._disp.scaleX, this._disp.scaleY);
    this.updateButtonEnablement();
    this._disp.addEventListener("rollover", this.bindFunction(this.onRollOver));
    this._disp.addEventListener("rollout", this.bindFunction(this.onRollOut));
  };
  Object.defineProperty(BasicButton.prototype, "minWidth", {
    set: function (e) {
      this._minWidth = e;
      if (this.textField) {
        this.label = this.textField.text;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButton.prototype, "label", {
    set: function (e) {
      this.textField = this._disp.txt_label;
      this.background = this._disp.mc_background;
      if (this.textField) {
        this.textField.text = e;
        this.textField.width = this.textField.textWidth + 5;
        this.textField.x = -this.textField.width / 2 + this.textXOffset;
        if (this.background) {
          this.background.width = Math.max(this._minWidth, this.textField.width + this.textXOffset + 30);
          this.background.x = -this.background.width / 2;
          if (this._disp.getChildByName("mc_symbol")) {
            this._disp.mc_symbol.x = -this.background.width / 2;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.createColorMatrixFilter = function () {
    var e = new s.ButtonColorMatrix();
    e.desaturate();
    return [e.filter];
  };
  BasicButton.prototype.updateButtonEnablement = function () {
    this._disp.enabled = this.enabled;
    this._disp.useFilters(this.enabled ? BasicButton.NO_FILTER : BasicButton.COLOR_MATRIX_FILTER, this._useCaching);
  };
  BasicButton.prototype.clearEnablementDelay = function () {
    this._enablingIsDelayed = false;
    if (this.delayTimer) {
      this.delayTimer.removeEventListener(c.TIMER_COMPLETE, this.bindFunction(this.executeDelayedEnabling));
      this.delayTimer.reset();
    }
  };
  Object.defineProperty(BasicButton.prototype, "enableButton", {
    get: function () {
      return this.enabled;
    },
    set: function (e) {
      if (this.enabled !== e) {
        this.enabled = e;
        this.updateButtonEnablement();
        this.clearEnablementDelay();
        if (e) {
          this.useFilters(BasicButton.NO_FILTER, this._useCaching);
        } else {
          this.useFilters(BasicButton.COLOR_MATRIX_FILTER, this._useCaching);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.prototype.delayEnableButton = function (e, t = BasicButton.DEFAULT_DELAY_TIME) {
    var n = r.int(t >= 0 ? t : BasicButton.DEFAULT_DELAY_TIME);
    if (e && n != 0) {
      this.enableButton = false;
      this._enablingIsDelayed = true;
      this.delayTimer = new o.Timer(n, 1);
      this.delayTimer.addEventListener(c.TIMER_COMPLETE, this.bindFunction(this.executeDelayedEnabling));
      this.delayTimer.start();
    } else {
      this.enableButton = e;
    }
  };
  BasicButton.prototype.executeDelayedEnabling = function (e) {
    this.enableButton = true;
  };
  Object.defineProperty(BasicButton.prototype, "selectButton", {
    set: function (e) {
      if (e) {
        this.selected();
      } else {
        this.deselected();
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.prototype.selected = function () {
    if (this._disp.enabled) {
      this._disp.useFilters(BasicButton.FILTERS_SELECTED, this._useCaching);
    }
  };
  BasicButton.prototype.deselected = function () {
    if (this._disp.enabled) {
      this._disp.useFilters(BasicButton.NO_FILTER, this._useCaching);
    }
  };
  BasicButton.prototype.onRollOut = function (e) {
    this.normalSize();
    this.applyCacheScale(this.initScale);
  };
  BasicButton.prototype.onRollOver = function (e) {
    this.changeSize(this.initScale * this._mouseOverScale, this.initScale * this._mouseOverScale);
    this.applyCacheScale(2);
  };
  BasicButton.prototype.normalSize = function () {
    this.changeSize(this.initScale, this.initScale);
  };
  BasicButton.prototype.changeSize = function (e, t) {
    if (this._disp.enabled) {
      this._disp.scaleX = e;
      this._disp.scaleY = t;
    }
  };
  BasicButton.prototype.applyCacheScale = function (e) {
    this.textField ||= this.getTextField();
    if (this.textField && this.textField.cacheCanvas) {
      this.textField.uncache();
      this.textField.doCache(0, 2);
    }
    if (this._useCaching) {
      this._disp.uncache();
      this._disp.doCache(0, e);
    }
  };
  BasicButton.prototype.getTextField = function () {
    var e = null;
    this._disp.children.forEach(function (t) {
      if (t instanceof createjs.TextField) {
        e = t;
      }
    });
    return e;
  };
  Object.defineProperty(BasicButton.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicButton.prototype, "mouseOverScale", {
    set: function (e) {
      this._mouseOverScale = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.prototype.resetHoverState = function () {
    this.onRollOut(null);
  };
  Object.defineProperty(BasicButton.prototype, "enablingIsDelayed", {
    get: function () {
      return this._enablingIsDelayed;
    },
    enumerable: true,
    configurable: true
  });
  BasicButton.DEFAULT_DELAY_TIME = 500;
  BasicButton.DEFAULT_MOUSEOVER_SCALE = 1.05;
  BasicButton.FILTERS_SELECTED = [new _(16777215, 0.8, 16, 16, 4)];
  BasicButton.NO_FILTER = [];
  BasicButton.COLOR_MATRIX_FILTER = BasicButton.createColorMatrixFilter();
  return BasicButton;
}(l);
exports.BasicButton = d;