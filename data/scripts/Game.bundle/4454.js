Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./1843.js");
var l = require("./30.js");
var c = require("./1769.js");
var u = require("./4.js");
var d = function (e) {
  function GlobalEffectEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GlobalEffectEventVO, e);
  GlobalEffectEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this.seenGlobalEffects = t.SGE;
    var i = t.GE;
    this.globalEffectData = [];
    var n = 0;
    if (i != null) {
      for (var o = 0, r = i; o < r.length; o++) {
        var c = r[o];
        if (c !== undefined) {
          var d = a.int(c[0]);
          var p = c[1];
          var h = a.int(c[2]);
          var g = l.CachedTimer.getCachedTimer() + p * s.ClientConstTime.SEC_2_MILLISEC;
          var C = u.CastleModel.globalEffectData.getGlobalEffectVOsByGlobalEffectID(d);
          if (h > -1 && C != null) {
            for (var _ = 0, m = C; _ < m.length; _++) {
              var f = m[_];
              if (f !== undefined) {
                f.setEffectStrength(h, f.rawBonus);
              }
            }
          }
          this.globalEffectData.push([C, g, this.seenGlobalEffects.indexOf(d) >= 0]);
          if (n < g) {
            n = g;
          }
        }
      }
    }
    this._endTimestamp = n;
  };
  GlobalEffectEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, c.GlobalEffectEventDialog);
  };
  GlobalEffectEventVO.prototype.getShownItems = function () {
    var e = [];
    if (this.globalEffectData != null) {
      for (var t = 0, i = this.globalEffectData; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          for (var o = 0, a = n[0]; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && s.canBeUsed) {
              e.push(n);
            }
          }
        }
      }
    }
    return e;
  };
  GlobalEffectEventVO.prototype.getGlobalEffectByID = function (e) {
    if (this.globalEffectData != null) {
      for (var t = 0, i = this.globalEffectData; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          for (var o = 0, a = n[0]; o < a.length; o++) {
            var s = a[o];
            if (s !== undefined && s.globalEffectID == e) {
              return s;
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(GlobalEffectEventVO.prototype, "showNewSign", {
    get: function () {
      var e = this.getShownItems();
      var t = 0;
      if (e != null) {
        for (var i = 0, n = e; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            for (var a = 0, s = o[0]; a < s.length; a++) {
              var r = s[a];
              if (r !== undefined && r.canBeUsed && this.seenGlobalEffects.indexOf(r.globalEffectID) < 0) {
                t++;
              }
            }
          }
        }
      }
      return t;
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectEventVO.prototype.parse_USG = function (e) {
    this.seenGlobalEffects = e.SGE;
    u.CastleModel.globalEffectData.dispatchEvent(new r.GlobalEffectEvent(r.GlobalEffectEvent.SEEN_EFFECTS_UPDATED));
    this.updateData();
  };
  GlobalEffectEventVO.prototype.updateData = function () {
    if (this.globalEffectData != null) {
      for (var e = 0, t = this.globalEffectData; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i[0] != null) {
          i[2] = this.seenGlobalEffects.indexOf(i[0][0].globalEffectID) >= 0;
        }
      }
    }
  };
  return GlobalEffectEventVO;
}(require("./1143.js").ATriggerEventVO);
exports.GlobalEffectEventVO = d;
o.classImplementsInterfaces(d, "IEventOverviewable");