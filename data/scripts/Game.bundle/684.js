Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./55.js");
var u = require("./4.js");
var d = require("./198.js");
var p = require("./127.js");
var h = function (e) {
  function RelicEquipmentVO(t = -1) {
    var i = this;
    i._relicInfoVO = new _.RelicItemInfoVO();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._rarity = d.BasicEquipmentVO.RARITY_RELIC;
    i._rareID = s.EquipmentConst.RARENESS_RELIC;
    i._visualRareID = s.EquipmentConst.RARENESS_RELIC;
    i.relicInfoVO.relicTypeId = -1;
    i.relicInfoVO.relicCategoryId = -1;
    i.relicInfoVO.mightValue = 0;
    i._enchantmentLevel = 0;
    if (t >= 0) {
      i.relicInfoVO.bluePrintVO = u.CastleModel.equipData.relicXml.getBluePrint(t);
      i.relicInfoVO.relicTypeId = i.relicInfoVO.bluePrintVO.relicTypeId;
      var n = u.CastleModel.equipData.relicXml.getRelicType(i.relicInfoVO.bluePrintVO.relicTypeId);
      i._slotType = p.BasicEquippableVO.getSlotType(n.slotId);
      i._slotTypeId = n.slotId;
      i._lordType = p.BasicEquippableVO.getLordType(n.wearerId);
      i._lordTypeId = n.wearerId;
    } else {
      i.relicInfoVO.relicTypeId = -1;
      i._slotType = p.BasicEquippableVO.getSlotType(i._slotTypeId = -1);
      i._lordType = p.BasicEquippableVO.getLordType(i._lordTypeId = -1);
    }
    i._visClassName = i.setVisClassName();
    return i;
  }
  n.__extends(RelicEquipmentVO, e);
  RelicEquipmentVO.prototype.setVisClassName = function () {
    if (this.relicInfoVO.isRelicDefined()) {
      return g.CollectableItemRelicVE.ASSET_PREFIX + "_" + this.lordTypeId + "_" + this.slotTypeId + "_" + this.relicInfoVO.relicCategoryId;
    } else {
      return g.CollectableItemRelicVE.ASSET_PREFIX + "_" + this.slotType;
    }
  };
  RelicEquipmentVO.prototype.parseEquipFromArray = function (t) {
    e.prototype.parseEquipFromArray.call(this, t);
    this.relicInfoVO.parseRelicBoni(t[5]);
    if (t.length >= 13) {
      var i = t[12];
      this.relicInfoVO.relicTypeId = i[0];
      this.relicInfoVO.relicCategoryId = i[1];
      this.relicInfoVO.mightValue = i[2];
      if (i[3] && i[3].length > 0) {
        var n = new C.RelicGemVO();
        this._gemVO = n;
        n.parseServerObject(i[3]);
      } else {
        this._gemVO = null;
      }
    }
    this._visClassName = this.setVisClassName();
  };
  RelicEquipmentVO.prototype.getFilePath = function () {
    return a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.relicInfoVO.isRelicDefined() ? this._visClassName : g.CollectableItemRelicVE.ASSET_FILE_NAME_UNDEFINED);
  };
  Object.defineProperty(RelicEquipmentVO.prototype, "nameString", {
    get: function () {
      if (this.relicInfoVO.isRelicDefined()) {
        return r.Localize.text("relicequip_tier" + this.relicInfoVO.relicCategoryId + "_slot" + this.slotTypeId + "_name");
      } else {
        return r.Localize.text("relicequip_slot" + this.slotTypeId + "_name_undefined");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicEquipmentVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentVO.prototype.getDescriptionText = function () {
    var e = [];
    e.push(r.Localize.text("relicequip_dialog_category_relic" + this.slotType));
    e.push(r.Localize.text("equipment_itemType_" + c.ClientConstUtils.lowercaseFirstLetter(this.lordType)));
    if (this.relicInfoVO.relicTypeId >= 0) {
      var t = u.CastleModel.equipData.relicXml.getRelicType(this.relicInfoVO.relicTypeId).name;
      if (t != "") {
        e.push(r.Localize.text("relicequip_dialog_category_" + t));
      }
    } else {
      e.push(r.Localize.text("relicequip_dialog_category_relic"));
    }
    e.push(r.Localize.text(this.relicInfoVO.isRelicDefined() ? "relicequip_dialog_category_defined" : "relicequip_dialog_category_undefined"));
    return r.Localize.text("relicequip_dialog_category_placeholder_" + e.length, e);
  };
  Object.defineProperty(RelicEquipmentVO.prototype, "canSlotGem", {
    get: function () {
      return this.slotTypeId != s.EquipmentConst.SLOT_HERO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicEquipmentVO.prototype, "canSlotGem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentVO.prototype, "typeDescriptionText", {
    get: function () {
      return this.getDescriptionText();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicEquipmentVO.prototype, "typeDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentVO.prototype, "bonusDescriptionText", {
    get: function () {
      var e = "";
      var t = this.relicInfoVO.getCategorisedEffectsDefined();
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            for (var a = 0, s = o.effects; a < s.length; a++) {
              var r = s[a];
              if (r !== undefined) {
                e += r.descriptionText + "\n";
              }
            }
          }
        }
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicEquipmentVO.prototype, "bonusDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentVO.prototype.getSellPrice = function () {
    var e = this.relicInfoVO.getSellPrice();
    var t = this.gemVO;
    if (t) {
      e.amount += l.int(t.relicInfoVO.getSellPrice().amount);
    }
    return e;
  };
  Object.defineProperty(RelicEquipmentVO.prototype, "relicInfoVO", {
    get: function () {
      return this._relicInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEquipmentVO;
}(d.BasicEquipmentVO);
exports.RelicEquipmentVO = h;
o.classImplementsInterfaces(h, "IEquippableVO", "IRelicInfoVO");
var g = require("./856.js");
var C = require("./610.js");
var _ = require("./906.js");