Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./30.js");
var l = require("./54.js");
var c = require("./4.js");
var u = require("./110.js");
var d = require("./142.js");
var p = require("./5715.js");
var h = require("./32.js");
var g = require("./37.js");
var C = function (e) {
  function GlobalEffectData(t) {
    var i = e.call(this) || this;
    i._globalEffectVOs = new Map();
    for (var n = 0, o = t.globalEffects; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        var s = new p.GlobalEffectVO();
        s.parseXml(a);
        if (i._globalEffectVOs.get(s.globalEffectID) == null) {
          i._globalEffectVOs.set(s.globalEffectID, []);
        }
        i._globalEffectVOs.get(s.globalEffectID).push(s);
      }
    }
    return i;
  }
  n.__extends(GlobalEffectData, e);
  GlobalEffectData.prototype.isEffectBoosted = function (e) {
    return this._boostedGlobalEffectIDs.indexOf(e) >= 0;
  };
  GlobalEffectData.prototype.getGlobalEffectVOsByGlobalEffectID = function (e) {
    return this._globalEffectVOs.get(e);
  };
  GlobalEffectData.prototype.getGlobalEffectsByType = function (e, t = null) {
    if (!this.eventVO) {
      return [];
    }
    var i = [];
    for (var n = 0, o = this.eventVO.globalEffectData; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined && a.length != 0 && !(a[1] < r.CachedTimer.getCachedTimer())) {
        var s = a[0];
        if (s != null) {
          for (var l = 0, c = s; l < c.length; l++) {
            var u = c[l];
            if (u !== undefined && u.canBeUsed && u.bonus.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
              i.push(u.bonus);
            }
          }
        }
      }
    }
    return i;
  };
  GlobalEffectData.prototype.getGlobalEffectValue = function (e, t = -1, i = -1, n = -1) {
    var o = u.CastleEffectsHelper.getTotalEffectValue(this.getGlobalEffectsByType(e, new d.CastleEffectConditionVO(i, n, t)), true);
    return o || new e.valueClass();
  };
  GlobalEffectData.prototype.getBonusByEffectType = function (e, t = -1, i = -1, n = -1) {
    if (!this.eventVO) {
      return 0;
    }
    var o = 0;
    var a = s.int(t < 0 ? c.CastleModel.areaData.activeArea.areaInfo.areaType : t);
    var l = s.int(i < 0 ? c.CastleModel.areaData.activeArea.spaceId : i);
    for (var u = 0, d = this.eventVO.globalEffectData; u < d.length; u++) {
      var p = d[u];
      if (p !== undefined && p.length != 0 && !(p[1] < r.CachedTimer.getCachedTimer())) {
        var h = p[0];
        if (h != null) {
          for (var g = 0, C = h; g < C.length; g++) {
            var _ = C[g];
            if (_ !== undefined && _.canBeUsed && _.bonus.matchesConditions(e, a, l, n)) {
              o += _.bonus.strength;
            }
          }
        }
      }
    }
    return o;
  };
  Object.defineProperty(GlobalEffectData.prototype, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectData.prototype, "eventBuffVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectData.prototype.parse_GIE = function (e) {
    if (e && e.GE) {
      this._boostedGlobalEffectIDs = e.GE;
      for (var t = 0, i = this._boostedGlobalEffectIDs; t < i.length; t++) {
        var n;
        var o = i[t];
        if (this.eventVO) {
          n = this.eventVO.getGlobalEffectByID(o);
        }
        if (n) {
          n.addBuffStrengthValue(this.eventBuffVO.getBoostValueForGlobalEffect(o));
        }
      }
      this.dispatchEvent(new h.CastleUserDataEvent(g.CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED));
    }
  };
  return GlobalEffectData;
}(l.CastleBasicData);
exports.GlobalEffectData = C;
o.classImplementsInterfaces(C, "IUpdatable", "ICastleBasicData");