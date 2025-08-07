Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = function () {
  function Pin(e) {
    this.logger = i.getLogger(Pin.PIN_LOGGER);
    this._source = e;
  }
  Object.defineProperty(Pin.prototype, "source", {
    get: function () {
      return this._source;
    },
    enumerable: true,
    configurable: true
  });
  Pin.prototype.configure = function () {
    this.logger.debug("Pin.config is not implemented");
  };
  Pin.prototype.dispose = function () {
    this.logger.debug("Pin.dispose is not implemented");
  };
  Pin.prototype.execute = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this.logger.debug("Pin.execute is not implemented");
  };
  Pin.PIN_LOGGER = "pinLogger";
  return Pin;
}();
exports.Pin = a;