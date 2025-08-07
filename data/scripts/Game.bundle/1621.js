Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./55.js");
var s = function (e) {
  function AllianceGiftTypeEnum(t, i, n) {
    var a = this;
    a._id = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, o.BasicEnum.instantiationKey) || this)._tooltipTextId = i;
    a._id = n;
    return a;
  }
  n.__extends(AllianceGiftTypeEnum, e);
  AllianceGiftTypeEnum.getTypeById = function (e) {
    return this.getByProperty(AllianceGiftTypeEnum, "id", e, AllianceGiftTypeEnum.TYPE_UNKNOWN);
  };
  AllianceGiftTypeEnum.getTypeByName = function (e) {
    return this.getByProperty(AllianceGiftTypeEnum, "name", a.ClientConstUtils.lowercaseFirstLetter(e), AllianceGiftTypeEnum.TYPE_UNKNOWN);
  };
  Object.defineProperty(AllianceGiftTypeEnum.prototype, "tooltipTextId", {
    get: function () {
      return this._tooltipTextId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftTypeEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceGiftTypeEnum.prototype, "iconName", {
    get: function () {
      return "Icon_AllianceGift_" + a.ClientConstUtils.capitalizeFirstLetter(this.name);
    },
    enumerable: true,
    configurable: true
  });
  AllianceGiftTypeEnum.__initialize_static_members = function () {
    AllianceGiftTypeEnum.ID_WOOD = 0;
    AllianceGiftTypeEnum.ID_STONE = 1;
    AllianceGiftTypeEnum.ID_C1 = 2;
    AllianceGiftTypeEnum.ID_UNITS = 3;
    AllianceGiftTypeEnum.TYPE_UNKNOWN = new AllianceGiftTypeEnum("unknown", "UNKNOWN", AllianceGiftTypeEnum.ID_UNKNOWN);
    AllianceGiftTypeEnum.TYPE_WOOD = new AllianceGiftTypeEnum("wood", "allianceGift_wood", AllianceGiftTypeEnum.ID_WOOD);
    AllianceGiftTypeEnum.TYPE_STONE = new AllianceGiftTypeEnum("stone", "allianceGift_stone", AllianceGiftTypeEnum.ID_STONE);
    AllianceGiftTypeEnum.TYPE_C1 = new AllianceGiftTypeEnum("c1", "allianceGift_gold", AllianceGiftTypeEnum.ID_C1);
    AllianceGiftTypeEnum.TYPE_UNITS = new AllianceGiftTypeEnum("units", "allianceGift_units", AllianceGiftTypeEnum.ID_UNITS);
  };
  AllianceGiftTypeEnum.ID_UNKNOWN = -1;
  return AllianceGiftTypeEnum;
}(o.BasicEnum);
exports.AllianceGiftTypeEnum = s;
s.__initialize_static_members();