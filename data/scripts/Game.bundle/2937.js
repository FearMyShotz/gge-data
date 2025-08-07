Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleHospitalReviveAllDialogProperties(t, i, n, o, a) {
    var s = this;
    s._currency2 = 0;
    s._foodConsumption = 0;
    s._meadConsumption = 0;
    s._beefConsumption = 0;
    s._discount = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this)._discount = a;
    s._currency2 = t;
    s._foodConsumption = i;
    s._meadConsumption = n;
    s._beefConsumption = o;
    return s;
  }
  n.__extends(CastleHospitalReviveAllDialogProperties, e);
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "currency2", {
    get: function () {
      return this._currency2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "foodConsumption", {
    get: function () {
      return this._foodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "meadConsumption", {
    get: function () {
      return this._meadConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "beefConsumption", {
    get: function () {
      return this._beefConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHospitalReviveAllDialogProperties.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHospitalReviveAllDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleHospitalReviveAllDialogProperties = o;