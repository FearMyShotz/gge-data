Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./199.js");
var a = function () {
  function AValueComponent(e, t, n) {
    this.isDisposed = false;
    this.updatedByUserSignal = new i.ObjectSignal();
    this._parent = e;
    this._minValue = t;
    this._maxValue = n;
    this._value = t;
    this.isDisposed = false;
  }
  AValueComponent.prototype.updateValue = function (e) {
    this._value = e;
  };
  AValueComponent.prototype.dispatchUpdateByUserSignal = function (e) {
    this.updatedByUserSignal.signal(e);
  };
  AValueComponent.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.updatedByUserSignal.removeAll();
      this.isDisposed = true;
    }
  };
  AValueComponent.prototype.getUpdateByUserSignal = function () {
    return this.updatedByUserSignal;
  };
  Object.defineProperty(AValueComponent.prototype, "value", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AValueComponent.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AValueComponent.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  return AValueComponent;
}();
exports.AValueComponent = a;