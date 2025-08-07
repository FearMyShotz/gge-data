Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./4.js");
var l = require("./127.js");
var c = function (e) {
  function CollectableItemRelicVO() {
    var t = this;
    t._type = CollectableItemRelicVO.TYPE_ALL;
    t.predefinedMinRating = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, 1) || this;
  }
  n.__extends(CollectableItemRelicVO, e);
  CollectableItemRelicVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    if (Array.isArray(t)) {
      var i = t;
      this.parseBluePrintId(i[0]);
      if (i.length > 3 && i[3].length > 0) {
        this.parsePredefinedEffectIds(i[3]);
      }
      this.parseMinMaxValue(i[1], i[2]);
      this.predefinedMinRating = a.int(i[1]);
    } else if (t.GEM) {
      var n = new d.RelicGemVO();
      n.parseServerObject(t.GEM);
      this._vo = n;
      this._type = CollectableItemRelicVO.TYPE_GEM;
    } else if (t.EQ) {
      var o = new u.RelicEquipmentVO();
      o.parseEquipFromArray(t.EQ);
      this._vo = o;
      this._type = CollectableItemRelicVO.TYPE_EQUIPMENT;
    }
  };
  CollectableItemRelicVO.prototype.parseXmlObject = function (e) {
    var t = e.split("@");
    this.parseBluePrintId(parseInt(t[0]));
    if (t.length > 2) {
      this.parsePredefinedEffectIds(t[2].split(","));
    }
    var i = t[1].split(",");
    var n = parseInt(i[0]);
    this.predefinedMinRating = n;
    var o = parseInt(i[1]);
    this.parseMinMaxValue(n, o);
  };
  CollectableItemRelicVO.prototype.parseMinMaxValue = function (e, t) {
    if (p.instanceOfClass(this._vo, "RelicEquipmentVO")) {
      this.vo.relicInfoVO.predefinedMinRating = e;
      this.vo.relicInfoVO.predefinedMaxRating = t;
    } else if (p.instanceOfClass(this._vo, "RelicGemVO")) {
      this.vo.relicInfoVO.predefinedMinRating = e;
      this.vo.relicInfoVO.predefinedMaxRating = t;
    }
  };
  CollectableItemRelicVO.prototype.parseBluePrintId = function (e) {
    if (e >= 0) {
      var t = r.CastleModel.equipData.relicXml.getBluePrint(e);
      var i = r.CastleModel.equipData.relicXml.getRelicType(t.relicTypeId);
      this._type = i.isGem ? CollectableItemRelicVO.TYPE_GEM : CollectableItemRelicVO.TYPE_EQUIPMENT;
      if (this.type == CollectableItemRelicVO.TYPE_EQUIPMENT) {
        this.vo = new u.RelicEquipmentVO(e);
      } else if (this.type == CollectableItemRelicVO.TYPE_GEM) {
        this.vo = new d.RelicGemVO(e);
      }
    } else {
      this._type = CollectableItemRelicVO.TYPE_ALL;
      this._vo = null;
    }
  };
  CollectableItemRelicVO.prototype.parsePredefinedEffectIds = function (e) {
    if (this.vo && e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = parseInt(n);
          if (this.type == CollectableItemRelicVO.TYPE_EQUIPMENT) {
            this.vo.relicInfoVO.predefinedEffectIds.push(o);
          } else if (this.type == CollectableItemRelicVO.TYPE_GEM) {
            this.vo.relicInfoVO.predefinedEffectIds.push(o);
          }
        }
      }
    }
  };
  CollectableItemRelicVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.vo = this.vo;
    t.predefinedMinRating = this.predefinedMinRating;
    return t;
  };
  CollectableItemRelicVO.prototype.equals = function (t) {
    return e.prototype.equals.call(this, t) && this.vo == t.vo;
  };
  CollectableItemRelicVO.prototype.isRelicDefined = function () {
    if (this.vo) {
      if (p.instanceOfClass(this.vo, "RelicEquipmentVO")) {
        return this.vo.relicInfoVO.isRelicDefined();
      }
      if (p.instanceOfClass(this.vo, "RelicGemVO")) {
        return this.vo.relicInfoVO.isRelicDefined();
      }
    }
    return false;
  };
  CollectableItemRelicVO.prototype.getBluePrintVO = function () {
    if (this.vo) {
      if (p.instanceOfClass(this.vo, "RelicEquipmentVO")) {
        return this.vo.relicInfoVO.bluePrintVO;
      }
      if (p.instanceOfClass(this.vo, "RelicGemVO")) {
        return this.vo.relicInfoVO.bluePrintVO;
      }
    }
    return null;
  };
  CollectableItemRelicVO.prototype.getTooltipTextId = function () {
    if (p.instanceOfClass(this.vo, "BasicEquippableVO")) {
      return this.vo.nameString;
    } else {
      return "relicequip_dialog_randomRelic_name";
    }
  };
  CollectableItemRelicVO.prototype.getDescriptionTextId = function () {
    var e = "";
    if (this.vo) {
      e = (p.instanceOfClass(this.vo, "RelicGemVO") ? o.Localize.text("relicequip_dialog_" + l.BasicEquippableVO.SLOT_TYPE_GEM + s.ClientConstUtils.capitalizeFirstLetter(this.vo.lordType) + "_desc") : o.Localize.text("relicequip_dialog_" + s.ClientConstUtils.capitalizeFirstLetter(this.vo.slotType) + s.ClientConstUtils.capitalizeFirstLetter(this.vo.lordType) + "_desc")) + "\n" + o.Localize.text((this.isRelicDefined(), "relicequip_undefined_short_info"));
    } else {
      e = o.Localize.text("relicequip_random_short_info");
    }
    return e;
  };
  CollectableItemRelicVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemRelicVO.prototype.getSlotType = function () {
    if (this.vo) {
      if (p.instanceOfClass(this.vo, "RelicGemVO")) {
        return l.BasicEquippableVO.SLOT_TYPE_GEM;
      } else {
        return this.vo.slotType;
      }
    }
    var e = this.getBluePrintVO();
    if (e) {
      var t = r.CastleModel.equipData.relicXml.getRelicType(e.relicTypeId);
      if (t) {
        if (t.isGem) {
          return l.BasicEquippableVO.SLOT_TYPE_GEM;
        } else {
          return l.BasicEquippableVO.getSlotType(t.slotId);
        }
      }
    }
    return l.BasicEquippableVO.SLOT_TYPE_ALL;
  };
  CollectableItemRelicVO.prototype.getId = function () {
    if (p.instanceOfClass(this._vo, "RelicEquipmentVO")) {
      return a.int(this._vo.id);
    } else if (p.instanceOfClass(this._vo, "RelicGemVO")) {
      return a.int(this._vo.id);
    } else {
      return -1;
    }
  };
  CollectableItemRelicVO.prototype.getEnchantmentLevel = function () {
    if (p.instanceOfClass(this._vo, "RelicEquipmentVO")) {
      return a.int(this._vo.enchantmentLevel);
    } else if (p.instanceOfClass(this._vo, "RelicGemVO")) {
      return a.int(this._vo.enchantmentLevel);
    } else {
      return 0;
    }
  };
  Object.defineProperty(CollectableItemRelicVO.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    set: function (e) {
      this._vo = e;
      if (p.instanceOfClass(this._vo, "RelicEquipmentVO")) {
        this._type = CollectableItemRelicVO.TYPE_EQUIPMENT;
      } else if (p.instanceOfClass(this._vo, "RelicGemVO")) {
        this._type = CollectableItemRelicVO.TYPE_GEM;
      } else {
        this._type = CollectableItemRelicVO.TYPE_ALL;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemRelicVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemRelicVO.prototype.getSearchString = function () {
    var e = "";
    if (this.vo) {
      e += this.vo.nameString;
      e += this.vo.typeDescriptionText;
      e += this.vo.bonusDescriptionText;
      if (this.vo instanceof u.RelicEquipmentVO && this.vo.gemVO) {
        e += this.vo.gemVO.bonusDescriptionText;
      }
      if (this.vo.setVO) {
        e += this.vo.setVO.name;
      }
    }
    return e;
  };
  CollectableItemRelicVO.SERVER_KEY = "RI";
  CollectableItemRelicVO.XML_KEY = "relicEquipments";
  CollectableItemRelicVO.TYPE_ALL = "all";
  CollectableItemRelicVO.TYPE_EQUIPMENT = "equipment";
  CollectableItemRelicVO.TYPE_GEM = "gem";
  return CollectableItemRelicVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemRelicVO = c;
var u = require("./684.js");
var d = require("./610.js");
var p = require("./1.js");