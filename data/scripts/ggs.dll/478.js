Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.MovieClip;
var s = createjs.Event;
var r = createjs.MouseEvent;
var o = function (e) {
  function CountryPickerButton() {
    var t = e.call(this) || this;
    t._minWidth = 100;
    t.textXOffset = 0;
    t.mouseOverScale = 1.05;
    t.addEventListener(s.ADDED_TO_STAGE, t.bindFunction(t.onAddedToStage));
    return t;
  }
  i.__extends(CountryPickerButton, e);
  CountryPickerButton.prototype.onAddedToStage = function (e) {
    this.removeEventListener(s.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this.init();
    this.addEventListener(s.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage));
  };
  CountryPickerButton.prototype.onRemoveToStage = function (e) {
    this.removeEventListener(s.REMOVED_FROM_STAGE, this.bindFunction(this.onRemoveToStage));
    this.removeEventListener(r.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.removeEventListener(r.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  CountryPickerButton.prototype.init = function () {
    this.useHandCursor = true;
    this.buttonMode = true;
    this.mouseChildren = false;
    this.tabEnabled = false;
    this.initScale = Math.min(this.scaleX, this.scaleY);
    this.addEventListener(r.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.addEventListener(r.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  Object.defineProperty(CountryPickerButton.prototype, "minWidth", {
    set: function (e) {
      this._minWidth = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CountryPickerButton.prototype, "enableButton", {
    set: function (e) {
      this.enabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CountryPickerButton.prototype, "selectButton", {
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
  CountryPickerButton.prototype.selected = function () {
    if (this.enabled) {
      this.filters = [this.glowfilter];
    }
  };
  CountryPickerButton.prototype.deselected = function () {
    if (this.enabled) {
      this.filters = null;
    }
  };
  CountryPickerButton.prototype.onRollOut = function (e) {
    if (this.enabled) {
      this.scaleX = this.scaleY = this.initScale;
    }
  };
  CountryPickerButton.prototype.onRollOver = function (e) {
    if (this.enabled) {
      this.scaleX = this.scaleY = this.initScale * this.mouseOverScale;
    }
  };
  return CountryPickerButton;
}(a);
exports.CountryPickerButton = o;