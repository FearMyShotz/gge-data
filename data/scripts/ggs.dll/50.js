Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./20.js");
var a = function () {
  function AbstractTextContentVO() {
    this.triggerUpdate = true;
  }
  Object.defineProperty(AbstractTextContentVO.prototype, "propertyChangedSignal", {
    get: function () {
      this._propertyChangedSignal ||= new i.Signal();
      return this._propertyChangedSignal;
    },
    set: function (e) {
      this._propertyChangedSignal = e;
    },
    enumerable: true,
    configurable: true
  });
  AbstractTextContentVO.prototype.dispose = function () {
    if (this._propertyChangedSignal) {
      this._propertyChangedSignal.removeAll();
    }
  };
  AbstractTextContentVO.prototype.compose = function () {
    throw new Error(AbstractTextContentVO.MESSAGE_ERROR_COMPOSE_NOT_OVERRIDDEN);
  };
  AbstractTextContentVO.prototype.toString = function () {
    return AbstractTextContentVO.NAME;
  };
  AbstractTextContentVO.NAME = "AbstractTextContentVO";
  AbstractTextContentVO.MESSAGE_ERROR_COMPOSE_NOT_OVERRIDDEN = "Compose method is not implemented";
  return AbstractTextContentVO;
}();
exports.AbstractTextContentVO = a;