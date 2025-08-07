Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./55.js");
var l = require("./4.js");
var c = require("./127.js");
var u = require("./1265.js");
var d = function (e) {
  function RelicGemVO(t = -1) {
    var i = e.call(this) || this;
    i._relicInfoVO = new g.RelicItemInfoVO();
    i._id = NaN;
    i._enchantmentLevel = 0;
    i.relicInfoVO.relicTypeId = -1;
    i.relicInfoVO.relicCategoryId = -1;
    i.relicInfoVO.mightValue = 0;
    i._enchantmentLevel = 0;
    if (t >= 0) {
      i.relicInfoVO.bluePrintVO = l.CastleModel.equipData.relicXml.getBluePrint(t);
      i.relicInfoVO.relicTypeId = i.relicInfoVO.bluePrintVO.relicTypeId;
      var n = l.CastleModel.equipData.relicXml.getRelicType(i.relicInfoVO.bluePrintVO.relicTypeId);
      i._slotType = c.BasicEquippableVO.getSlotType(n.slotId);
      i._slotTypeId = n.slotId;
      i._lordType = c.BasicEquippableVO.getLordType(n.wearerId);
      i._lordTypeId = n.wearerId;
    } else {
      i.relicInfoVO.relicTypeId = -1;
      i._slotType = c.BasicEquippableVO.getSlotType(i._slotTypeId = -1);
      i._lordType = c.BasicEquippableVO.getLordType(i._lordTypeId = -1);
    }
    return i;
  }
  n.__extends(RelicGemVO, e);
  RelicGemVO.prototype.parseServerObject = function (e) {
    var t = e;
    if (t) {
      this._id = t[0];
      this.relicInfoVO.relicTypeId = t[1];
      this.relicInfoVO.relicCategoryId = t[2];
      this.relicInfoVO.mightValue = t[3];
      this._enchantmentLevel = s.int(t[5]);
      if (t.length > 4) {
        this.relicInfoVO.parseRelicBoni(t[4]);
      }
      var i = l.CastleModel.equipData.relicXml.getRelicType(this.relicInfoVO.relicTypeId);
      this._slotType = c.BasicEquippableVO.getSlotType(i.slotId);
      this._slotTypeId = i.slotId;
      this._lordType = c.BasicEquippableVO.getLordType(i.wearerId);
      this._lordTypeId = i.wearerId;
    }
  };
  RelicGemVO.prototype.parseRelicBoni = function (e) {
    var t = [];
    if (e) {
      if (e != null) {
        for (var i = 0, n = e; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            var a = new u.RelicBonusVO();
            a.parseRelicFromValueArray(o);
            t.push(a);
          }
        }
      }
      t.sort(p.ClientConstSort.sortRelicBoni);
    }
    return t;
  };
  Object.defineProperty(RelicGemVO.prototype, "nameString", {
    get: function () {
      if (this.relicInfoVO.isRelicDefined()) {
        return a.Localize.text("relicequip_tier" + this.lordTypeId + "_slot" + (this.id % 4 + 7) + "_name");
      } else {
        return a.Localize.text("relicequip_gem_name_undefined");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicEquippableVO.prototype, "nameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicGemVO.prototype.getDescriptionText = function () {
    var e = [];
    e.push(a.Localize.text("relicequip_dialog_category_relicGem"));
    e.push(a.Localize.text("equipment_itemType_" + r.ClientConstUtils.lowercaseFirstLetter(this.lordType)));
    if (this.relicInfoVO.relicTypeId >= 0) {
      var t = l.CastleModel.equipData.relicXml.getRelicType(this.relicInfoVO.relicTypeId).name;
      if (t != "") {
        e.push(a.Localize.text("relicequip_dialog_category_" + t));
      }
    } else {
      e.push(a.Localize.text("relicequip_dialog_category_relic"));
    }
    e.push(a.Localize.text(this.relicInfoVO.isRelicDefined() ? "relicequip_dialog_category_defined" : "relicequip_dialog_category_undefined"));
    return a.Localize.text("relicequip_dialog_category_placeholder_" + e.length, e);
  };
  Object.defineProperty(RelicGemVO.prototype, "typeDescriptionText", {
    get: function () {
      return this.getDescriptionText();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicEquippableVO.prototype, "typeDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicGemVO.prototype, "bonusDescriptionText", {
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
      Object.getOwnPropertyDescriptor(c.BasicEquippableVO.prototype, "bonusDescriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicGemVO.prototype.getAssetClipName = function () {
    if (this.relicInfoVO.isRelicDefined()) {
      return "Relic_Gem_" + this.lordTypeId + "_" + (this.id % 4 + 7) + "_" + this.relicInfoVO.relicCategoryId;
    } else {
      return h.CollectableItemRelicVE.ASSET_PREFIX + "_" + c.BasicEquippableVO.SLOT_TYPE_GEM;
    }
  };
  Object.defineProperty(RelicGemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicEquippableVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicGemVO.prototype, "relicInfoVO", {
    get: function () {
      return this._relicInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicGemVO.prototype, "enchantmentLevel", {
    get: function () {
      return this._enchantmentLevel;
    },
    enumerable: true,
    configurable: true
  });
  return RelicGemVO;
}(c.BasicEquippableVO);
exports.RelicGemVO = d;
var p = require("./75.js");
var h = require("./857.js");
var g = require("./907.js");
o.classImplementsInterfaces(d, "IEquippableVO", "IRelicInfoVO");