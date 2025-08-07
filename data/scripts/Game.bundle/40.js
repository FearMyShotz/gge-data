Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./68.js");
var r = require("./14.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function CastleItemRenderer(t, i = null) {
    var n = e.call(this) || this;
    n._isEnabled = true;
    n._isShown = false;
    n.preConstructorBG(i);
    n._disp = t;
    return n;
  }
  n.__extends(CastleItemRenderer, e);
  CastleItemRenderer.prototype.preConstructorBG = function (e) {};
  CastleItemRenderer.prototype.enableComponent = function (e) {
    this._isEnabled = e;
    if (this.disp) {
      if (this._isEnabled) {
        this.disp.useFilters(s.BitmapFilterHelper.NO_FILTER);
      } else {
        this.disp.useFilters(s.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    }
  };
  CastleItemRenderer.prototype.setVisibility = function (e) {
    if (this.disp) {
      this.disp.visible = e;
    }
  };
  CastleItemRenderer.prototype.onShow = function () {
    this._isShown = true;
    this.removeEventListener();
    this.addEventListener();
  };
  CastleItemRenderer.prototype.onHide = function () {
    this.removeEventListener();
    this._isShown = false;
  };
  CastleItemRenderer.prototype.addEventListener = function () {
    if (this.disp) {
      this.disp.addEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.addEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.addEventListener(l.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.addEventListener(l.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.addEventListener(l.CLICK, this.bindFunction(this.onClick));
      this.disp.addEventListener(l.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      if (r.CastleComponent.layoutManager.uiStage) {
        r.CastleComponent.layoutManager.uiStage.addEventListener(o.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      }
    }
  };
  CastleItemRenderer.prototype.removeEventListener = function () {
    if (this.disp) {
      this.disp.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.removeEventListener(l.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.removeEventListener(l.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(l.CLICK, this.bindFunction(this.onClick));
      this.disp.removeEventListener(l.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    if (r.CastleComponent.layoutManager.uiStage) {
      r.CastleComponent.layoutManager.uiStage.removeEventListener(o.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
    }
  };
  CastleItemRenderer.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeEventListener();
  };
  Object.defineProperty(CastleItemRenderer.prototype, "isVisible", {
    get: function () {
      return !!this.disp && this.disp.visible;
    },
    enumerable: true,
    configurable: true
  });
  CastleItemRenderer.prototype.onMouseOver = function (e) {};
  CastleItemRenderer.prototype.onMouseOut = function (e) {};
  CastleItemRenderer.prototype.onRollOver = function (e) {};
  CastleItemRenderer.prototype.onRollOut = function (e) {};
  CastleItemRenderer.prototype.onClick = function (e) {};
  CastleItemRenderer.prototype.onMouseWheel = function (e) {};
  CastleItemRenderer.prototype.onKeyUp = function (e) {};
  Object.defineProperty(CastleItemRenderer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    set: function (e) {
      this._disp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleItemRenderer.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleItemRenderer.prototype, "isShown", {
    get: function () {
      return this._isShown;
    },
    enumerable: true,
    configurable: true
  });
  return CastleItemRenderer;
}(r.CastleComponent);
exports.CastleItemRenderer = c;
a.classImplementsInterfaces(c, "ICollectableRendererList");