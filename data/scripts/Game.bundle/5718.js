Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./198.js");
var r = require("./127.js");
var l = function (e) {
  function RandomEquipmentVO(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseEquipFromArray([0, r.BasicEquippableVO.SLOT_TYPE_ALL, r.BasicEquippableVO.LORD_TYPE_ALL, t, "asdf", [], 0, -1, 0, 0, s.BasicEquipmentVO.NO_GEM_ID]);
    return i;
  }
  n.__extends(RandomEquipmentVO, e);
  Object.defineProperty(RandomEquipmentVO.prototype, "nameString", {
    get: function () {
      return RandomEquipmentVO.ASSET_NAME.toLowerCase() + "_" + this.rarity.toLowerCase();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicEquipmentVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomEquipmentVO.prototype, "visClassName", {
    get: function () {
      return RandomEquipmentVO.ASSET_NAME + "_" + this.visualRareID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicEquipmentVO.prototype, "visClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RandomEquipmentVO.prototype.getFilePath = function () {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(RandomEquipmentVO.ASSET_NAME);
  };
  RandomEquipmentVO.__initialize_static_members = function () {
    RandomEquipmentVO.ASSET_NAME = "Random_Equipment";
  };
  return RandomEquipmentVO;
}(s.BasicEquipmentVO);
exports.RandomEquipmentVO = l;
a.classImplementsInterfaces(l, "IEquippableVO");
l.__initialize_static_members();