Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function GenericEvent(e = false) {
    this._bubbles = e;
  }
  Object.defineProperty(GenericEvent.prototype, "signal", {
    get: function () {
      return this._signal;
    },
    set: function (e) {
      this._signal = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEvent.prototype, "target", {
    get: function () {
      return this._target;
    },
    set: function (e) {
      this._target = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEvent.prototype, "currentTarget", {
    get: function () {
      return this._currentTarget;
    },
    set: function (e) {
      this._currentTarget = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEvent.prototype, "bubbles", {
    get: function () {
      return this._bubbles;
    },
    set: function (e) {
      this._bubbles = e;
    },
    enumerable: true,
    configurable: true
  });
  GenericEvent.prototype.clone = function () {
    return new GenericEvent(this._bubbles);
  };
  return GenericEvent;
}();
exports.GenericEvent = i;