Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AdvancedCombatInfoEnum(e, t) {
    this._iconClass = e;
    this._toolTip = t;
  }
  Object.defineProperty(AdvancedCombatInfoEnum, "DEFENCE_RANGED", {
    get: function () {
      if (o.isUndefined(this._DEFENCE_RANGED)) {
        this._DEFENCE_RANGED = new AdvancedCombatInfoEnum(Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceRange, "rangedefence");
      }
      return this._DEFENCE_RANGED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedCombatInfoEnum, "DEFENCE_MELEE", {
    get: function () {
      if (o.isUndefined(this._DEFENCE_MELEE)) {
        this._DEFENCE_MELEE = new AdvancedCombatInfoEnum(Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceMelee, "meleedefence");
      }
      return this._DEFENCE_MELEE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedCombatInfoEnum, "ATTACK_RANGED", {
    get: function () {
      if (o.isUndefined(this._ATTACK_RANGED)) {
        this._ATTACK_RANGED = new AdvancedCombatInfoEnum(Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerRange, "attackpower_range");
      }
      return this._ATTACK_RANGED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedCombatInfoEnum, "ATTACK_MELEE", {
    get: function () {
      if (o.isUndefined(this._ATTACK_MELEE)) {
        this._ATTACK_MELEE = new AdvancedCombatInfoEnum(Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerMelee, "attackpower_melee");
      }
      return this._ATTACK_MELEE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedCombatInfoEnum.prototype, "iconClass", {
    get: function () {
      return this._iconClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedCombatInfoEnum.prototype, "toolTip", {
    get: function () {
      return this._toolTip;
    },
    enumerable: true,
    configurable: true
  });
  return AdvancedCombatInfoEnum;
}();
exports.AdvancedCombatInfoEnum = n;
var o = require("./229.js");