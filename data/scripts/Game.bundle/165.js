Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./176.js");
var a = require("./4.js");
var s = require("./682.js");
var r = function () {
  function BonusVO() {
    this._effectSources = [];
  }
  BonusVO.prototype.parseFromValueString = function (e, t, i = "") {
    this._effect = e;
    if (e) {
      this._effectValue = new e.effectType.valueClass();
      this._effectValue.parseFromValueString(t);
    }
    this.parseEffectSource(i);
    return this;
  };
  BonusVO.prototype.parseFromValueArray = function (e, t, i = "") {
    this._effect = e;
    if (e) {
      this._effectValue = new e.effectType.valueClass();
      this._effectValue.parseFromValueArray(t);
    }
    this.parseEffectSource(i);
    return this;
  };
  BonusVO.prototype.matchesConditions = function (e, t = -1, i = -1, o = -1, a = null) {
    var s = true;
    if (e && e.id != this.effect.effectType.id) {
      s = false;
    }
    if (o > -1 && (n.instanceOfClass(this.effectValue, "EffectValueWodID") && !this.effectValue.hasWodId(o) || n.instanceOfClass(this.effectValue, "EffectValueMap") && !this.effectValue.hasWodId(o))) {
      s = false;
    }
    if (i > -1 && !this.effect.isForSpaceID(i)) {
      s = false;
    }
    if (t > -1 && !this.effect.isForAreaType(t)) {
      s = false;
    }
    if (a && !this.effect.checkPlayerRelation(a)) {
      s = false;
    }
    return s;
  };
  Object.defineProperty(BonusVO.prototype, "descriptionText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "decriptionSuffix", {
    get: function () {
      if (o.CastleDataHolder.instance.showEffectTypeIDs) {
        return "  || TypeID: " + this.effect.effectType.id + " ||";
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "strength", {
    get: function () {
      return this._effectValue.strength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "effect", {
    get: function () {
      return this._effect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "effectValue", {
    get: function () {
      return this._effectValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BonusVO.prototype, "maxValueStrength", {
    get: function () {
      return a.CastleModel.effectsData.getEffectCap(this.effect.capId).maxTotalBonus;
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.clone = function () {
    return new BonusVO().parseFromValueArray(this._effect, this._effectValue.rawValues);
  };
  Object.defineProperty(BonusVO.prototype, "capID", {
    get: function () {
      return this.effect.capId;
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.addEffectSource = function (e) {
    if (e && this._effectSources.indexOf(e) == -1) {
      this._effectSources.push(e);
    }
  };
  Object.defineProperty(BonusVO.prototype, "effectSources", {
    get: function () {
      return this._effectSources;
    },
    enumerable: true,
    configurable: true
  });
  BonusVO.prototype.parseEffectSource = function (e) {
    var t = s.EffectSourceEnum.getEffectSourceByServerKey(e);
    this.addEffectSource(t);
  };
  return BonusVO;
}();
exports.BonusVO = r;