Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function (e) {
  function CollectableItemEquipmentUniqueEnchantedVO(t = -1, i = 0) {
    var n = e.call(this, t) || this;
    n._enchantLevel = 0;
    n._enchantLevel = i;
    n.updateEquipmentVO();
    return n;
  }
  n.__extends(CollectableItemEquipmentUniqueEnchantedVO, e);
  CollectableItemEquipmentUniqueEnchantedVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.enchantLevel = this._enchantLevel;
    t.equipmentVO.enchantmentLevel = this._enchantLevel;
    return t;
  };
  CollectableItemEquipmentUniqueEnchantedVO.prototype.parseServerObject = function (t) {
    if (Array.isArray(t)) {
      e.prototype.parseServerObject.call(this, t[0]);
      this.enchantLevel = o.int(t[1]);
    } else {
      e.prototype.parseServerObject.call(this, t);
    }
  };
  CollectableItemEquipmentUniqueEnchantedVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this.id = o.int(t[0]);
    this.enchantLevel = o.int(t[1]);
    this.amount = 1;
  };
  Object.defineProperty(CollectableItemEquipmentUniqueEnchantedVO.prototype, "equipmentVO", {
    get: function () {
      var e = Object.getOwnPropertyDescriptor(r.ACollectableItemEquipmentVO.prototype, "equipmentVO").get.call(this);
      if (e) {
        e.enchantmentLevel = this._enchantLevel;
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ACollectableItemEquipmentVO.prototype, "equipmentVO").set.call(this, e);
      if (this.equipmentVO) {
        this.equipmentVO.enchantmentLevel = this._enchantLevel;
        for (var t = 0; t < this.equipmentVO.boni.length; t++) {
          var i = this.equipmentVO.boni[t];
          try {
            var n = i.effectValue.strength + a.CastleModel.equipData.equipmentXml.getEnchantmentFactor(i.effect.effectID, t == 0) * this.enchantLevel;
            i.effectValue.parseFromValueArray([n]);
          } catch (e) {}
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemEquipmentUniqueEnchantedVO.prototype, "enchantLevel", {
    get: function () {
      return this._enchantLevel;
    },
    set: function (e) {
      this._enchantLevel = e;
      this.updateEquipmentVO();
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemEquipmentUniqueEnchantedVO.SERVER_KEY = "EUE";
  CollectableItemEquipmentUniqueEnchantedVO.XML_KEY = "enchantedEquipmentIDs";
  return CollectableItemEquipmentUniqueEnchantedVO;
}(require("./1618.js").CollectableItemEquipmentUniqueVO);
exports.CollectableItemEquipmentUniqueEnchantedVO = s;
var r = require("./479.js");