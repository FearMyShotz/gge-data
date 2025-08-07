Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./111.js");
var r = require("./1884.js");
var l = require("./22.js");
var c = require("./4.js");
var u = require("./165.js");
var d = require("./142.js");
var p = function (e) {
  function PremiumCrestSymbolVO(t) {
    var i = this;
    i._requiredAchievmentID = 0;
    i._costC1 = 0;
    i._costC2 = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(PremiumCrestSymbolVO, e);
  PremiumCrestSymbolVO.prototype.parseXML = function (e) {
    this._requiredAchievmentID = a.int(e.requiredAchievementID || "");
    if ((e.costC1 || "").length > 0) {
      this._costC1 = parseInt(e.costC1 || "");
    }
    if ((e.costC2 || "").length > 0) {
      this._costC2 = parseInt(e.costC2 || "");
    }
    this.parseEffects(e);
  };
  PremiumCrestSymbolVO.prototype.parseEffects = function (e) {
    this._effects = [];
    var t = l.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, n = t.split(","); i < n.length; i++) {
        var o = n[i];
        if (o.length > 0) {
          var a = o.split("&");
          var s = c.CastleModel.effectsData.getEffectByID(parseInt(a[0]));
          var r = new u.BonusVO().parseFromValueString(s, a[1]);
          this._effects.push(r);
        }
      }
    }
  };
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "toolTipText", {
    get: function () {
      var e = "";
      for (var t = 0; t < this._effects.length; t++) {
        var i = this._effects[t];
        if (e != "") {
          e += "\n";
        }
        e += o.Localize.text("crestSymbol_" + i.effect.name, i.effectValue.textReplacements);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  PremiumCrestSymbolVO.prototype.getAdjustedTooltipText = function (e = false) {
    if (e) {
      var t = "";
      for (var i = 0; i < this._effects.length; i++) {
        var n = this._effects[i];
        if (t != "") {
          t += "\n";
        }
        var a = n.effectValue.clone();
        a.add(n.effectValue, null);
        t += o.Localize.text("crestSymbol_" + n.effect.name, a.textReplacements);
      }
      return t;
    }
    return this.toolTipText;
  };
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "requiredAchievmentID", {
    get: function () {
      return this._requiredAchievmentID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "costC1", {
    get: function () {
      return this._costC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "costC2", {
    get: function () {
      return this._costC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumCrestSymbolVO.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  PremiumCrestSymbolVO.prototype.getEffectValue = function (e, t) {
    var i = s.CastleEffectsHelper.getTotalEffectValue(this.getEffectsByType(e, t), true);
    return i || new e.valueClass();
  };
  PremiumCrestSymbolVO.prototype.getEffectsByType = function (e, t = null) {
    t = t || d.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    if (this._effects != null) {
      for (var n = 0, o = this._effects; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
          i.push(a);
        }
      }
    }
    return i;
  };
  return PremiumCrestSymbolVO;
}(r.ACrestSymbolVO);
exports.PremiumCrestSymbolVO = p;