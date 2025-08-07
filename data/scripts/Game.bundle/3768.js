Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function EquipmentExpireDialogProperties(t, i, n, o, a, s) {
    var r = e.call(this) || this;
    r._travelTime = 0;
    r._boostTraveling = 0;
    r._premiumCommander = 0;
    r._lordVO = t;
    r._travelTime = i;
    r._boostTraveling = n;
    r._premiumCommander = o;
    r._onConfirmFunc = a;
    r._onDeniedFunc = s;
    return r;
  }
  n.__extends(EquipmentExpireDialogProperties, e);
  EquipmentExpireDialogProperties.prototype.willAnyEquipmentExpireBeforeArrival = function () {
    if (!this.lordVO || this.lordVO && a.instanceOfClass(this.lordVO, "DefaultLordVO")) {
      return false;
    }
    for (var e in this.lordVO.equipmentSlots) {
      var t = this.lordVO.equipmentSlots[e];
      if (t !== undefined) {
        var i = t.equipmentVO;
        if (i && i.remainingDuration > 0 && i.remainingDuration - this._travelTime <= 0) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "travelTime", {
    get: function () {
      return this._travelTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "onConfirmFunc", {
    get: function () {
      return this._onConfirmFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "onDeniedFunc", {
    get: function () {
      return this._onDeniedFunc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "boostTraveling", {
    get: function () {
      return this._boostTraveling;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentExpireDialogProperties.prototype, "premiumCommander", {
    get: function () {
      return this._premiumCommander;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentExpireDialogProperties;
}(o.BasicProperties);
exports.EquipmentExpireDialogProperties = s;