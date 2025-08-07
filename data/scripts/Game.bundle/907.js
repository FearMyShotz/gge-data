Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./2225.js");
var r = require("./4.js");
var l = require("./52.js");
var c = require("./1265.js");
var u = require("./495.js");
var d = function () {
  function RelicItemInfoVO() {
    this.relicTypeId = 0;
    this.relicCategoryId = 0;
    this.mightValue = 0;
    this.relicBoni = [];
    this.predefinedEffectIds = [];
    this._predefinedMinRating = -1;
    this._predefinedMaxRating = -1;
  }
  RelicItemInfoVO.prototype.parseRelicBoni = function (e) {
    this.relicBoni = [];
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = new c.RelicBonusVO();
            o.parseRelicFromValueArray(n);
            this.relicBoni.push(o);
          }
        }
      }
      this.relicBoni.sort(p.ClientConstSort.sortRelicBoni);
    }
  };
  RelicItemInfoVO.prototype.getCategoryEffects = function (e, t, i) {
    var n;
    var o;
    if (i === undefined) {
      i = false;
    }
    if (t != null) {
      for (var a = 0, r = t; a < r.length; a++) {
        var l = r[a];
        if (l !== undefined && l.relicEffectVO.effectType == e) {
          n ||= [];
          n.push(l);
        }
      }
    }
    if (n && n.length > 0 || i) {
      (o = new s.RelicEquipmentInfoEffectCategoryVO()).categoryType = e;
      o.effects = n || [];
    }
    return o;
  };
  RelicItemInfoVO.prototype.getCategorisedEffectsDefined = function () {
    var e = [];
    for (var t = 0, i = u.XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = this.getCategoryEffects(n, this.relicBoni);
        if (o) {
          e.push(o);
        }
      }
    }
    return e;
  };
  RelicItemInfoVO.prototype.getCategorisedEffectsUndefined = function () {
    var e = [];
    for (var t = 0, i = this.bluePrintVO.baseRelicEffectIds; t < i.length; t++) {
      var o = i[t];
      if (o !== undefined) {
        var s = new c.RelicBonusVO();
        s.parseRelicFromValueArray([o, 0, 0]);
        s.predefinedMinRating = this._predefinedMinRating;
        s.predefinedMaxRating = this._predefinedMaxRating;
        e.push(s);
      }
    }
    for (var l = 0, d = this.predefinedEffectIds; l < d.length; l++) {
      o = d[l];
      (s = new c.RelicBonusVO()).parseRelicFromValueArray([o, 0, 0]);
      s.predefinedMinRating = this._predefinedMinRating;
      s.predefinedMaxRating = this._predefinedMaxRating;
      e.push(s);
    }
    if (this.bluePrintVO.specialAmount > 0) {
      var p;
      if (this.bluePrintVO.specialRelicEffectListId >= 0) {
        if (r.CastleModel.equipData.relicXml.getRelicEffectList(this.bluePrintVO.specialRelicEffectListId)) {
          var h = r.CastleModel.equipData.relicXml.getRelicEffectList(this.bluePrintVO.specialRelicEffectListId).relicEffectIds;
          if (h && h.length > 0) {
            p = r.CastleModel.equipData.relicXml.getRelicEffect(h[0]).effectType;
          }
        }
      }
      if (!p || p == "") {
        p = u.XmlRelicEffectVO.EFFECT_TYPE_UNIT_TOOL;
      }
    }
    var g = [];
    g.push(u.XmlRelicEffectVO.EFFECT_TYPE_NORMAL);
    if (p != null && p != "") {
      g.push(p);
    }
    var C = [];
    if (g != null) {
      for (var _ = 0, m = g; _ < m.length; _++) {
        var f = m[_];
        if (f !== undefined) {
          var O = this.getCategoryEffects(f, e, true);
          if (O) {
            O.numberOfUnknownEffects = a.int(n.MathBase.max((f == u.XmlRelicEffectVO.EFFECT_TYPE_NORMAL ? this.bluePrintVO.normalAmount : this.bluePrintVO.specialAmount) - O.effects.length, 0));
            C.push(O);
          }
        }
      }
    }
    return C;
  };
  RelicItemInfoVO.getSellPriceTextByInfoVO = function (e, t) {
    if (e.isRelicDefined()) {
      return o.Localize.text("relicequip_dialog_sellValue_name", [t]);
    } else {
      return o.Localize.text("relicequip_dialog_sellValue_range_name", [C.RelicItemConst.calculateFragmentSellMinValue(), e.bluePrintVO ? C.RelicItemConst.calculateFragmentSellMaxValue(e.bluePrintVO.normalAmount) : e.predefinedEffectIds.length]);
    }
  };
  RelicItemInfoVO.prototype.getSellPriceText = function () {
    return RelicItemInfoVO.getSellPriceTextByInfoVO(this, this.getSellPrice().amount);
  };
  RelicItemInfoVO.prototype.isRelicDefined = function () {
    return this.bluePrintVO == null && this.relicTypeId >= 0 && this.relicCategoryId >= 0;
  };
  RelicItemInfoVO.prototype.getSellPrice = function () {
    return g.CollectableHelper.createVO(h.CollectableEnum.GENERIC_CURRENCY, C.EffectConst.applyBoostToValueRoundingWithCeil(r.CastleModel.equipData.relicFragmentBoost, C.RelicItemConst.calculateFragmentSellValue(this.mightValue)), l.ClientConstCurrency.ID_RELIC_FRAGMENTS);
  };
  Object.defineProperty(RelicItemInfoVO.prototype, "predefinedMinRating", {
    set: function (e) {
      this._predefinedMinRating = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicItemInfoVO.prototype, "predefinedMaxRating", {
    set: function (e) {
      this._predefinedMaxRating = e;
    },
    enumerable: true,
    configurable: true
  });
  return RelicItemInfoVO;
}();
exports.RelicItemInfoVO = d;
var p = require("./75.js");
var h = require("./12.js");
var g = require("./45.js");
var C = require("./5.js");