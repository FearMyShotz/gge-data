Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./4.js");
var a = function () {
  function EquippableEffectValueSupportUnits() {
    this._amount = 0;
    this._wodID = 0;
    this._amount2 = 0;
    this._wodID2 = 0;
  }
  EquippableEffectValueSupportUnits.prototype.parseFromValueString = function (e) {
    var t = e.split(/\D/g);
    return this.parseFromValueArray(t);
  };
  EquippableEffectValueSupportUnits.prototype.parseFromValueArray = function (e) {
    this._wodID = parseInt(e[0]);
    this._amount = parseInt(e[1]);
    this._wodID2 = parseInt(e[2]);
    this._amount2 = parseInt(e[3]) ? parseInt(e[3]) : 0;
    this._troopsPackageTextID = this.getTroopPackageTypeByWodId();
    return this;
  };
  EquippableEffectValueSupportUnits.prototype.add = function (e, t) {
    if (this._wodID == 0) {
      this._wodID = e.rawValues[0];
    } else if (this._wodID2 == 0) {
      this._wodID2 = e.rawValues[2];
    } else if (e.rawValues[0] == this._wodID) {
      this._amount += e.rawValues[1];
      this._amount += e.rawValues[3];
    }
    if (e.rawValues.length == 1) {
      this._amount += Math.ceil(e.rawValues[0]);
    }
    return this;
  };
  Object.defineProperty(EquippableEffectValueSupportUnits.prototype, "textReplacements", {
    get: function () {
      return [this._amount + this._amount2, this._troopsPackageTextID];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquippableEffectValueSupportUnits.prototype, "rawValues", {
    get: function () {
      return [this._wodID, this._amount, this._wodID2, this._amount2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquippableEffectValueSupportUnits.prototype, "strength", {
    get: function () {
      return this._amount + this._amount2;
    },
    enumerable: true,
    configurable: true
  });
  EquippableEffectValueSupportUnits.prototype.clone = function () {
    return new EquippableEffectValueSupportUnits().parseFromValueArray(this.rawValues);
  };
  EquippableEffectValueSupportUnits.prototype.getTroopPackageTypeByWodId = function () {
    switch (this._wodID) {
      case EquippableEffectValueSupportUnits.TRAVELING_KNIGHTS_WOD_ID:
        return "troops_package_travellingKnight";
      case EquippableEffectValueSupportUnits.DEMON_WARRIORS_WOD_ID:
        return "troops_package_demonWarriors";
      case EquippableEffectValueSupportUnits.DESERT_ELITE_WOD_ID:
        return "troops_package_desertElite";
      case EquippableEffectValueSupportUnits.KINGSGUARD_WOD_ID:
        return "troops_package_kingsguard";
      default:
        var e = o.CastleModel.wodData.getUnitVOByWodId(this._wodID);
        if (e) {
          return e.getNameString();
        } else {
          return "";
        }
    }
  };
  EquippableEffectValueSupportUnits.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  EquippableEffectValueSupportUnits.__initialize_static_members = function () {
    EquippableEffectValueSupportUnits.TRAVELING_KNIGHTS_WOD_ID = 655;
    EquippableEffectValueSupportUnits.DEMON_WARRIORS_WOD_ID = 714;
    EquippableEffectValueSupportUnits.DESERT_ELITE_WOD_ID = 723;
    EquippableEffectValueSupportUnits.KINGSGUARD_WOD_ID = 686;
  };
  return EquippableEffectValueSupportUnits;
}();
exports.EquippableEffectValueSupportUnits = a;
n.classImplementsInterfaces(a, "IEffectValue");
a.__initialize_static_members();