Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DecorationForgeNotEnoughEnergyDialogProperties(t, i) {
    var n = e.call(this) || this;
    n._costAmount = 0;
    n._amountInStorage = 0;
    n._costAmount = t;
    n._amountInStorage = i;
    return n;
  }
  n.__extends(DecorationForgeNotEnoughEnergyDialogProperties, e);
  Object.defineProperty(DecorationForgeNotEnoughEnergyDialogProperties.prototype, "costAmount", {
    get: function () {
      return this._costAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeNotEnoughEnergyDialogProperties.prototype, "amountInStorage", {
    get: function () {
      return this._amountInStorage;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeNotEnoughEnergyDialogProperties;
}(require("./2.js").BasicProperties);
exports.DecorationForgeNotEnoughEnergyDialogProperties = o;