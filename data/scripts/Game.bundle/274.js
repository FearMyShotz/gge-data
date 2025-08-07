Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function BasicSliderVO(e, t, i, n = 0, o = null) {
    this._minValue = 0;
    this._maxValue = 0;
    this._sliderBar = e;
    this._sliderButton = t;
    this._sliderButton.actLikeButton = true;
    this._sliderButton.mouseChildren = false;
    this._parent = o || e.parent;
    this._minValue = n;
    this._maxValue = i;
  }
  Object.defineProperty(BasicSliderVO.prototype, "sliderBar", {
    get: function () {
      return this._sliderBar;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "sliderButton", {
    get: function () {
      return this._sliderButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "parent", {
    get: function () {
      return this._parent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    set: function (e) {
      this._minValue = e;
      this.sendNotification();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    set: function (e) {
      if (e < this._minValue) {
        this._maxValue = this._minValue;
      } else {
        this._maxValue = e;
      }
      this.sendNotification();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSliderVO.prototype, "changeCallback", {
    set: function (e) {
      this._changeCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicSliderVO.prototype.sendNotification = function () {
    if (this._changeCallback) {
      this._changeCallback();
    }
  };
  Object.defineProperty(BasicSliderVO.prototype, "numOfElements", {
    get: function () {
      return this._maxValue - this._minValue;
    },
    set: function (e) {
      this.maxValue = e + this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSliderVO;
}();
exports.BasicSliderVO = o;
n.classImplementsInterfaces(o, "ISliderBarVO");