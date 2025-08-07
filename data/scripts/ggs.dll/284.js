Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./14.js");
var a = function () {
  function AbstractLogObject() {
    this.logData = new Map();
    this.isEssentialFilled = false;
  }
  Object.defineProperty(AbstractLogObject.prototype, "subErrorId", {
    get: function () {
      return this.logData.get(i.ExternalLoggingConstants.PARAM_SUB_ERROR_ID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractLogObject.prototype, "data", {
    get: function () {
      var e = {};
      this.logData.forEach(function (t, n) {
        e[n] = t;
      });
      return e;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractLogObject;
}();
exports.AbstractLogObject = a;