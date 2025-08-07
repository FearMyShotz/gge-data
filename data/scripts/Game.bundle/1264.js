Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function RelicEquipmentInfoElementEnum(t, i = false) {
    var n = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    n._isNewCategory = false;
    n._isNewCategory = i;
    return n;
  }
  n.__extends(RelicEquipmentInfoElementEnum, e);
  Object.defineProperty(RelicEquipmentInfoElementEnum.prototype, "isNewCategory", {
    get: function () {
      return this._isNewCategory;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentInfoElementEnum.__initialize_static_members = function () {
    RelicEquipmentInfoElementEnum.TITLE = new RelicEquipmentInfoElementEnum("title", true);
    RelicEquipmentInfoElementEnum.TITLE_UNDEFINED = new RelicEquipmentInfoElementEnum("titleUndefined", true);
    RelicEquipmentInfoElementEnum.HEADER = new RelicEquipmentInfoElementEnum("header", true);
    RelicEquipmentInfoElementEnum.HEADER_SUB = new RelicEquipmentInfoElementEnum("headerSub", true);
    RelicEquipmentInfoElementEnum.EFFECT_ITEM = new RelicEquipmentInfoElementEnum("effectItem");
    RelicEquipmentInfoElementEnum.EFFECT_ITEM_UNDEFINED = new RelicEquipmentInfoElementEnum("effectItemUndefined");
    RelicEquipmentInfoElementEnum.EFFECT_ITEM_UPGRADE = new RelicEquipmentInfoElementEnum("effectItemUpgrade");
    RelicEquipmentInfoElementEnum.LOCKED = new RelicEquipmentInfoElementEnum("locked", true);
    RelicEquipmentInfoElementEnum.GEM_SOCKET = new RelicEquipmentInfoElementEnum("gemSocket");
    RelicEquipmentInfoElementEnum.TEXT = new RelicEquipmentInfoElementEnum("text");
    RelicEquipmentInfoElementEnum.END = new RelicEquipmentInfoElementEnum("end");
  };
  return RelicEquipmentInfoElementEnum;
}(require("./84.js").CastleEnum);
exports.RelicEquipmentInfoElementEnum = a;
a.__initialize_static_members();