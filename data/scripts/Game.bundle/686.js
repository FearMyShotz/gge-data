Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function EffectsHandlerVO() {
    this._boni = [];
  }
  EffectsHandlerVO.prototype.getBonusVOsByType = function (e, t) {
    t = t || a.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    this._boni.forEach(function (n) {
      if (n.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
        i.push(n);
      }
    });
    return i;
  };
  EffectsHandlerVO.prototype.getEffectValueByType = function (e, t = -1, i = -1, n = -1, s = null) {
    var r = o.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(e, new a.CastleEffectConditionVO(t, i, n)), this.ignoreCap);
    return r || new e.valueClass();
  };
  EffectsHandlerVO.prototype.getBonusVOByEffectType = function (e) {
    if (e == s.EffectTypeEnum.EFFECT_TYPE_UNKNOWN) {
      if (this._boni.length > 0) {
        return this._boni[0];
      } else {
        return null;
      }
    }
    if (this._boni != null) {
      for (var t = 0, i = this._boni; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.effect.effectTypeID == e.id) {
          return n;
        }
      }
    }
    return null;
  };
  EffectsHandlerVO.prototype.hasEffects = function () {
    return this._boni.length > 0;
  };
  Object.defineProperty(EffectsHandlerVO.prototype, "boni", {
    get: function () {
      return this._boni;
    },
    enumerable: true,
    configurable: true
  });
  EffectsHandlerVO.prototype.getBoniVOByFirstFoundEffectType = function (e) {
    if (e && e.length > 0 && this.hasEffects) {
      for (var t = 0; t < e.length; t++) {
        if (this._boni != null) {
          for (var i = 0, n = this._boni; i < n.length; i++) {
            var o = n[i];
            if (o !== undefined && o.effect.effectTypeID == e[t].id) {
              return o;
            }
          }
        }
      }
    }
    return null;
  };
  EffectsHandlerVO.prototype.hasOneOrMoreEffectTypes = function (e, t = false) {
    if (e && e.length > 0 && this.hasEffects) {
      for (var i = 0; i < e.length; i++) {
        if (this._boni != null) {
          for (var n = 0, o = this._boni; n < o.length; n++) {
            var a = o[n];
            if (a !== undefined && a.effect.effectTypeID == e[i].id) {
              if (!t) {
                return true;
              }
              if (a.effectValue.strength < 0) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  };
  EffectsHandlerVO.prototype.hasAllEffectTypes = function (e) {
    if (e && e.length > 0 && this.hasEffects) {
      var t = new Map();
      for (var i = 0; i < e.length; i++) {
        t.set(e[i], false);
        if (this._boni != null) {
          for (var n = 0, o = this._boni; n < o.length; n++) {
            r = o[n];
            if (r !== undefined && r.effect.effectTypeID == e[i].id) {
              t.set(e[i], true);
            }
          }
        }
      }
      if (t != null) {
        for (var a = 0, s = Array.from(t.values()); a < s.length; a++) {
          var r;
          r = s[a];
          if (r !== undefined && !r) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
  Object.defineProperty(EffectsHandlerVO.prototype, "ignoreCap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return EffectsHandlerVO;
}();
exports.EffectsHandlerVO = n;
var o = require("./111.js");
var a = require("./142.js");
var s = require("./35.js");