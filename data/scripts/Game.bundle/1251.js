Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ALordEffectItemCreator() {}
  ALordEffectItemCreator.prototype.createTotalEffectItem = function (e) {
    var t = new d.LordEffectItem(this.getTotalEffectMC(e), this.getMargin(), this.defaultFontColor, this.malusFontColor);
    if (e.length > 1) {
      var i = o.CastleEffectsHelper.getTotalEffectValue(e);
      t.applyText(this.getTotalEffectText(e), i.strength < 0);
    } else {
      t.applyText(this.getEffectText(e[0]), e[0].effectValue.strength < 0);
      t.applySources(e[0]);
    }
    return t;
  };
  ALordEffectItemCreator.prototype.createDetailEffectItem = function (e, t = true) {
    var i = new d.LordEffectItem(this.getDetailEffectMC(), this.getMargin(), this.defaultFontColor, this.malusFontColor);
    i.applyText(this.getEffectText(e, t), e.effectValue.strength < 0);
    i.applySources(e);
    return i;
  };
  ALordEffectItemCreator.prototype.createCappedEffectGroupItem = function (e) {
    var t = this;
    var i = new u.LordEffectCapGroupItem(this.getCapGroupMC(), this.getMargin(), this.defaultFontColor, this.malusFontColor);
    i.applyText(r.Localize.text("effect_category_commonEffectCap", [e[0].maxValueStrength]));
    e.forEach(function (e) {
      var n = t.createDetailEffectItem(e, false);
      i.addEffectItem(n);
    });
    return i;
  };
  ALordEffectItemCreator.prototype.getTotalEffectText = function (e) {
    var t = e[0].effect;
    if (this._filterStrategy.isGroupActive(t.effectCategory, t.effectGroup)) {
      var i = o.CastleEffectsHelper.getTotalEffectValue(e);
      if (i.strength < 0) {
        return r.Localize.text("effect_group_" + t.effectCategory + "_" + t.effectGroup + "_active_malus", i.textReplacements);
      } else {
        return r.Localize.text("effect_group_" + t.effectCategory + "_" + t.effectGroup + "_active", i.textReplacements);
      }
    }
    return r.Localize.text("effect_group_" + t.effectCategory + "_" + t.effectGroup + "_passive");
  };
  ALordEffectItemCreator.prototype.createSeperatorLine = function () {
    return new p.MovieClipLayoutable(this.getSeperatorLineMC(), this.getMargin());
  };
  ALordEffectItemCreator.prototype.getEffectText = function (e, t = true) {
    if (t) {
      var i = e;
      if (c.instanceOf_ILordEffectText(e)) {
        var n = s.castAs(i, "ILordEffectText");
        if (n) {
          return n.lordEffectText();
        }
      }
    }
    return e.descriptionText;
  };
  ALordEffectItemCreator.prototype.getTotalEffectMC = function (e = null) {
    throw new l.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getDetailEffectMC = function () {
    throw new l.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getCapGroupMC = function () {
    throw new l.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getSeperatorLineMC = function () {
    throw new l.AbstractMethodError();
  };
  ALordEffectItemCreator.prototype.getMargin = function () {
    throw new l.AbstractMethodError();
  };
  Object.defineProperty(ALordEffectItemCreator.prototype, "defaultFontColor", {
    get: function () {
      return a.ClientConstColor.FONT_DEFAULT_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALordEffectItemCreator.prototype, "malusFontColor", {
    get: function () {
      return ALordEffectItemCreator.MALUS_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ALordEffectItemCreator.prototype, "filterStrategy", {
    set: function (e) {
      this._filterStrategy = e;
    },
    enumerable: true,
    configurable: true
  });
  ALordEffectItemCreator.__initialize_static_members = function () {
    ALordEffectItemCreator.MALUS_COLOR = 14357270;
  };
  return ALordEffectItemCreator;
}();
exports.ALordEffectItemCreator = n;
var o = require("./111.js");
var a = require("./16.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./69.js");
var c = require("./2190.js");
var u = require("./2191.js");
var d = require("./590.js");
var p = require("./349.js");
n.__initialize_static_members();