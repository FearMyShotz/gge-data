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
var s = function (e) {
  function CheckBoxButton(t = null, n = false) {
    var i = e.call(this, t, n) || this;
    i._isSelected = false;
    i._zoomOnMouseOver = true;
    return i;
  }
  a(CheckBoxButton, e);
  CheckBoxButton.prototype.init = function () {
    if (!this._isSelected) {
      this.deselected();
    }
    this.disp.actLikeButton = true;
    e.prototype.init.call(this);
  };
  Object.defineProperty(CheckBoxButton.prototype, "isSelected", {
    get: function () {
      return this._isSelected;
    },
    set: function (e) {
      this._isSelected = e;
      if (this._isSelected) {
        this.selected();
      } else {
        this.deselected();
      }
    },
    enumerable: true,
    configurable: true
  });
  CheckBoxButton.prototype.selected = function () {
    if (this.enabled) {
      this._isSelected = true;
      this.disp.gotoAndStop(2);
    }
  };
  CheckBoxButton.prototype.deselected = function () {
    if (this.enabled) {
      this._isSelected = false;
      this.disp.gotoAndStop(1);
    }
  };
  CheckBoxButton.prototype.toggleSelected = function () {
    this.isSelected = !this.isSelected;
  };
  Object.defineProperty(CheckBoxButton.prototype, "enableZoomOnMouseOver", {
    set: function (e) {
      this._zoomOnMouseOver = e;
    },
    enumerable: true,
    configurable: true
  });
  CheckBoxButton.prototype.onRollOut = function (e) {
    if (this.enabled && this._zoomOnMouseOver) {
      this.disp.scaleX = this.disp.scaleY = this.initScale;
    }
  };
  CheckBoxButton.prototype.onRollOver = function (e) {
    if (this.enabled && this._zoomOnMouseOver) {
      this.disp.scaleX = this.disp.scaleY = this.initScale * this._mouseOverScale;
    }
  };
  return CheckBoxButton;
}(require("./54.js").BasicButton);
exports.CheckBoxButton = s;