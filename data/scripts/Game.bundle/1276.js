Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSocketDialogProperties(t, i, n, o, a, s) {
    var r = e.call(this) || this;
    r._lordID = 0;
    r._gemVO = t;
    r._oldGemVO = i;
    r._eqVO = n;
    r._lordID = o;
    r._onConfirm = a;
    r._onAbort = s;
    return r;
  }
  n.__extends(CastleSocketDialogProperties, e);
  Object.defineProperty(CastleSocketDialogProperties.prototype, "lordID", {
    get: function () {
      return this._lordID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "oldGemVO", {
    get: function () {
      return this._oldGemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "eqVO", {
    get: function () {
      return this._eqVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "onConfirm", {
    get: function () {
      return this._onConfirm;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSocketDialogProperties.prototype, "onAbort", {
    get: function () {
      return this._onAbort;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSocketDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSocketDialogProperties = o;