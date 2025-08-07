Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./127.js");
var o = function () {
  function RelicEquipmentInfoShutterConfig(e = "", t = "") {
    this._category = "";
    this._effectsType = "";
    this._category = e;
    this._effectsType = t;
  }
  RelicEquipmentInfoShutterConfig.prototype.slotTypeMatchesCategory = function (e) {
    if (this.category != "") {
      if (this.category == RelicEquipmentInfoShutterConfig.CATEGORY_GEM && e == n.BasicEquippableVO.SLOT_TYPE_GEM) {
        return true;
      }
      if (this.category == RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT && e != n.BasicEquippableVO.SLOT_TYPE_GEM) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(RelicEquipmentInfoShutterConfig.prototype, "category", {
    get: function () {
      return this._category;
    },
    set: function (e) {
      this._category = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoShutterConfig.prototype, "effectsType", {
    get: function () {
      return this._effectsType;
    },
    set: function (e) {
      this._effectsType = e;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT = "equipment";
  RelicEquipmentInfoShutterConfig.CATEGORY_GEM = "gem";
  return RelicEquipmentInfoShutterConfig;
}();
exports.RelicEquipmentInfoShutterConfig = o;