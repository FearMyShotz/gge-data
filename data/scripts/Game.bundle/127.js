Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function BasicEquippableVO() {
    this._isFavorite = false;
    this._setID = 0;
    this._lordType = "";
    this._lordTypeId = 0;
    this._slotType = "";
    this._slotTypeId = 0;
  }
  Object.defineProperty(BasicEquippableVO.prototype, "setID", {
    get: function () {
      return this._setID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "lordType", {
    get: function () {
      return this._lordType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "setVO", {
    get: function () {
      return s.CastleModel.equipData.equipmentXml.getEquipmentSet(this._setID);
    },
    enumerable: true,
    configurable: true
  });
  BasicEquippableVO.getSlotType = function (e) {
    switch (e) {
      case a.EquipmentConst.SLOT_ARMOR:
        return BasicEquippableVO.SLOT_TYPE_ARMOR;
      case a.EquipmentConst.SLOT_WEAPON:
        return BasicEquippableVO.SLOT_TYPE_WEAPON;
      case a.EquipmentConst.SLOT_HELMET:
        return BasicEquippableVO.SLOT_TYPE_HELMET;
      case a.EquipmentConst.SLOT_ARTIFACT:
        return BasicEquippableVO.SLOT_TYPE_ARTIFACT;
      case a.EquipmentConst.SLOT_SKIN:
        return BasicEquippableVO.SLOT_TYPE_SKIN;
      case a.EquipmentConst.SLOT_HERO:
        return BasicEquippableVO.SLOT_TYPE_HERO;
      default:
        return BasicEquippableVO.SLOT_TYPE_ALL;
    }
  };
  BasicEquippableVO.getLordType = function (e) {
    switch (e) {
      case a.EquipmentConst.BARON_WEARER_ID:
        return BasicEquippableVO.LORD_TYPE_BARON;
      case a.EquipmentConst.COMMANDER_WEARER_ID:
        return BasicEquippableVO.LORD_TYPE_COMMANDER;
    }
    return BasicEquippableVO.LORD_TYPE_ALL;
  };
  Object.defineProperty(BasicEquippableVO.prototype, "lordTypeId", {
    get: function () {
      return this._lordTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "slotTypeId", {
    get: function () {
      return this._slotTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "typeDescriptionText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "typeDescriptionStarLevelText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "nameString", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "isPermanent", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "id", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "extraText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "extraTextAppearanceTarget", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "bonusDescriptionText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "nameColor", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "isFavorite", {
    get: function () {
      return this._isFavorite;
    },
    set: function (e) {
      this._isFavorite = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEquippableVO.prototype, "isFavoriteSaved", {
    get: function () {
      return r.EquipmentIconHelper.isFavorite(this);
    },
    enumerable: true,
    configurable: true
  });
  BasicEquippableVO.LORD_TYPE_BARON = "Baron";
  BasicEquippableVO.LORD_TYPE_COMMANDER = "General";
  BasicEquippableVO.LORD_TYPE_ALL = "AllLords";
  BasicEquippableVO.SLOT_TYPE_ARMOR = "Armor";
  BasicEquippableVO.SLOT_TYPE_HELMET = "Helmet";
  BasicEquippableVO.SLOT_TYPE_ARTIFACT = "Artifact";
  BasicEquippableVO.SLOT_TYPE_WEAPON = "Weapon";
  BasicEquippableVO.SLOT_TYPE_SKIN = "Skin";
  BasicEquippableVO.SLOT_TYPE_GEM = "Gem";
  BasicEquippableVO.SLOT_TYPE_HERO = "Hero";
  BasicEquippableVO.SLOT_TYPE_ALL = "All";
  return BasicEquippableVO;
}();
exports.BasicEquippableVO = o;
var a = require("./5.js");
var s = require("./4.js");
var r = require("./73.js");
n.classImplementsInterfaces(o, "IEquippableVO");