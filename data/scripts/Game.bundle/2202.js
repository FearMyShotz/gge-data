Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./68.js");
var r = require("./349.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function AScrollableComboboxItem(t, i, n = null) {
    var o = e.call(this, t, n) || this;
    o._isEnabled = true;
    o._isSelected = false;
    o._onSelectSignal = new a.Signal();
    o._data = i;
    return o;
  }
  n.__extends(AScrollableComboboxItem, e);
  AScrollableComboboxItem.prototype.show = function () {
    if (this.disp) {
      this.disp.addEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.addEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.addEventListener(l.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.addEventListener(l.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.addEventListener(l.CLICK, this.bindFunction(this.onClick));
    }
  };
  AScrollableComboboxItem.prototype.hide = function () {
    if (this.disp) {
      this.disp.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.disp.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.removeEventListener(l.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.disp.removeEventListener(l.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.disp.removeEventListener(l.CLICK, this.bindFunction(this.onClick));
    }
  };
  AScrollableComboboxItem.prototype.setSelected = function (e) {
    this._isSelected = e;
  };
  AScrollableComboboxItem.prototype.enableComponent = function (e) {
    this._isEnabled = e;
    if (this.disp) {
      if (this._isEnabled) {
        this.disp.useFilters(s.BitmapFilterHelper.NO_FILTER);
      } else {
        this.disp.useFilters(s.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    }
  };
  AScrollableComboboxItem.prototype.onMouseOver = function (e) {};
  AScrollableComboboxItem.prototype.onMouseOut = function (e) {};
  AScrollableComboboxItem.prototype.onRollOver = function (e) {};
  AScrollableComboboxItem.prototype.onRollOut = function (e) {};
  AScrollableComboboxItem.prototype.onClick = function (e) {
    if (this._isEnabled) {
      this._onSelectSignal.dispatch(this);
    }
  };
  Object.defineProperty(AScrollableComboboxItem.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "label", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AScrollableComboboxItem.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  return AScrollableComboboxItem;
}(r.MovieClipLayoutable);
exports.AScrollableComboboxItem = c;
o.classImplementsInterfaces(c, "ILayoutable");