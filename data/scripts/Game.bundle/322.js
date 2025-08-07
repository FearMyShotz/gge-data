Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SimpleProgressBarComponent(e, t, i = 0) {
    this._fullWidth = 1;
    this._minWidth = 0;
    this._currentWidth = 0;
    this._currentPercentFactor = 0;
    this._disp = e;
    this._fullWidth = t;
    this._minWidth = i;
    e.mouseChildren = false;
    this._fillMc = e.mc_fill;
  }
  SimpleProgressBarComponent.prototype.setProgressByValue = function (e) {
    this._currentWidth = o.MathBase.clamp(e, this._minWidth, this._fullWidth);
    this._currentPercentFactor = this._currentWidth / this._fullWidth;
    this.update();
  };
  SimpleProgressBarComponent.prototype.setProgressByPercent = function (e) {
    this._currentPercentFactor = o.MathBase.clamp(e, 0, 1);
    this._currentWidth = this._fullWidth * this._currentPercentFactor;
    this.update();
  };
  SimpleProgressBarComponent.prototype.update = function () {
    this.fillMc.width = this._currentWidth;
  };
  Object.defineProperty(SimpleProgressBarComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "fullWidth", {
    get: function () {
      return this._fullWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "currentWidth", {
    get: function () {
      return this._currentWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "currentPercentFactor", {
    get: function () {
      return this._currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "fillMc", {
    get: function () {
      return this._fillMc;
    },
    set: function (e) {
      this._fillMc = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleProgressBarComponent.prototype, "minWidth", {
    get: function () {
      return this._minWidth;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleProgressBarComponent;
}();
exports.SimpleProgressBarComponent = n;
var o = require("./2.js");