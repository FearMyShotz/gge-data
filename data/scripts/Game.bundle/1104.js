Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./4.js");
var a = require("./110.js");
var s = require("./934.js");
var r = require("./142.js");
var l = function () {
  function SimpleEffectSource() {
    this._ignoreCap = false;
    this._effects = [];
  }
  SimpleEffectSource.prototype.parseEffects = function (e) {
    this._effects = [];
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      var n = new s.RawLordEffectBonusVO();
      var a = o.CastleModel.effectsData.getEffectByID(i[0]);
      n.parseFromValueArray(a, i[1], i[2]);
      if (n.effect) {
        this._effects.push(n);
      }
    }
  };
  SimpleEffectSource.prototype.getEffectValue = function (e, t = null) {
    if (t == null) {
      t = r.CastleEffectConditionVO.NULL_CONDITION;
    }
    var i = a.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(e, t), this._ignoreCap);
    return i || new e.valueClass();
  };
  SimpleEffectSource.prototype.getBonusVOsByType = function (e, t = null) {
    if (t == null) {
      t = r.CastleEffectConditionVO.NULL_CONDITION;
    }
    var i = [];
    for (var n = 0; n < this._effects.length; n++) {
      var o = this._effects[n];
      if (o.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
        i.push(o);
      }
    }
    return i;
  };
  Object.defineProperty(SimpleEffectSource.prototype, "effects", {
    get: function () {
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleEffectSource.prototype, "ignoreCap", {
    get: function () {
      return this._ignoreCap;
    },
    set: function (e) {
      this._ignoreCap = e;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleEffectSource;
}();
exports.SimpleEffectSource = l;
n.classImplementsInterfaces(l, "IEffectSource");