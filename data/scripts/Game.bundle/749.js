Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./53.js");
var s = require("./2496.js");
var r = function () {
  function AllianceBuffData(e) {
    this._allianceBuffIdToBuffSeriesMap = new Map();
    this._allianceBuffMap = new Map();
    var t;
    var i = e.alliancebuffs;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          (t = new c.AllianceBuffVO()).fillFromParamXml(a);
          this._allianceBuffIdToBuffSeriesMap.set(t.allianceBuffID, "" + t.seriesID + AllianceBuffData.MAP_AFFIX + t.level);
          this.addBuffToMap(t);
        }
      }
    }
    this._allianceForgeMap = new Map();
    var r;
    var l = e.allianceForges;
    if (l != null) {
      for (var u = 0, d = l; u < d.length; u++) {
        var p = d[u];
        if (p !== undefined) {
          r = new s.AllianceForgeVO(p);
          this._allianceForgeMap.set(r.level, r);
        }
      }
    }
  }
  AllianceBuffData.prototype.getMaxBuffVOByID = function (e) {
    var t = this._allianceBuffMap.get(e);
    var i = o.int(t[0].maxLevel);
    return this.getBuffVObyLevel(t, i);
  };
  AllianceBuffData.prototype.getSeriesIDsOfPurchasableBuffs = function () {
    var e = [];
    if (this._allianceBuffMap != null) {
      for (var t = 0, i = Array.from(this._allianceBuffMap.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if ((!this._allianceBuffMap.get(n)[0].isBattleground || !!a.ABGHelper.isOnABGServer) && (!this._allianceBuffMap.get(n)[0].hiddenBattleGround || !a.ABGHelper.isOnABGServer)) {
            if (this._allianceBuffMap.get(n)[0].availableInAllianceFunds) {
              e.push(n);
            }
          }
        }
      }
    }
    return e;
  };
  AllianceBuffData.prototype.getCosts = function (e, t) {
    var i = this.getAllianceBuffVoBySeriesIDAndLevel(e, t);
    if (i) {
      return i.costsList;
    } else {
      return new l.CollectableList();
    }
  };
  AllianceBuffData.prototype.getAllianceBuffVoBySeriesIDAndLevel = function (e, t) {
    var i = this._allianceBuffMap.get(e);
    return this.getBuffVObyLevel(i, t);
  };
  AllianceBuffData.prototype.getBuffLevelByBuffID = function (e) {
    var t = this._allianceBuffIdToBuffSeriesMap.get(e).split(AllianceBuffData.MAP_AFFIX);
    return o.int(t[AllianceBuffData.MAP_LEVEL_POSITION]);
  };
  AllianceBuffData.prototype.getBuffSeriesIDByBuffID = function (e) {
    var t = this._allianceBuffIdToBuffSeriesMap.get(e).split(AllianceBuffData.MAP_AFFIX);
    return o.int(t[AllianceBuffData.MAP_SERIES_ID_POSITION]);
  };
  AllianceBuffData.prototype.isUpgradeAble = function (e, t) {
    return this._allianceBuffMap.get(e)[0].maxLevel > t;
  };
  AllianceBuffData.prototype.maxLevelOfBuff = function (e) {
    return o.int(this._allianceBuffMap.get(e)[0].maxLevel);
  };
  AllianceBuffData.prototype.getRequiredBuffID = function (e, t) {
    var i = this._allianceBuffMap.get(e);
    if (t > i[0].maxLevel) {
      t = o.int(i[0].maxLevel);
    }
    return o.int(this._allianceBuffMap.get(e)[t].requiredBuffID);
  };
  AllianceBuffData.prototype.isTemporaryBuff = function (e, t) {
    return this.getBuffDuration(e, t) != -1;
  };
  AllianceBuffData.prototype.getBuffDuration = function (e, t) {
    var i = this._allianceBuffMap.get(e);
    if (t > i[0].maxLevel) {
      t = o.int(i[0].maxLevel);
    }
    return o.int(this.getBuffVObyLevel(i, t).duration);
  };
  AllianceBuffData.prototype.isActive = function (e) {
    return this._allianceBuffMap.get(e)[0].duration > 0;
  };
  AllianceBuffData.prototype.getBuffSeries = function (e) {
    return this._allianceBuffMap.get(e);
  };
  AllianceBuffData.prototype.addBuffToMap = function (e) {
    if (!this._allianceBuffMap.get(e.seriesID)) {
      this._allianceBuffMap.set(e.seriesID, []);
    }
    this._allianceBuffMap.get(e.seriesID).push(e);
  };
  AllianceBuffData.prototype.getBuffVObyLevel = function (e, t) {
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.level == t) {
          return o;
        }
      }
    }
    return null;
  };
  Object.defineProperty(AllianceBuffData.prototype, "allianceBuffMap", {
    get: function () {
      return this._allianceBuffMap;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBuffData.prototype.getAllianceForgeCostByLevel = function (e) {
    return o.int(this._allianceForgeMap.get(e).forgingCostC1);
  };
  AllianceBuffData.prototype.getPreviousBuffVOInSeries = function (e) {
    var t = null;
    var i = this.getBuffSeries(e.seriesID);
    var n = i.indexOf(e);
    if (n > 0) {
      t = i[n - 1];
    }
    return t;
  };
  AllianceBuffData.__initialize_static_members = function () {
    AllianceBuffData.CUSTOMIZABLE_BUFFS = [n.AllianceConst.TYPE_RAGE_POINT_BOOST, n.AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN, n.AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS, n.AllianceConst.TYPE_ALIEN_ATTACK_BOOST, n.AllianceConst.TYPE_DAIMYO_ATTACK_BOOST, n.AllianceConst.TYPE_KHAN_DEFENSE_BOOST, n.AllianceConst.TYPE_HEALING_SPEED_BOOST, n.AllianceConst.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP, n.AllianceConst.TYPE_COOLDOWN_REDUCTION_DAIYMO];
  };
  AllianceBuffData.MAP_AFFIX = "&";
  AllianceBuffData.MAP_SERIES_ID_POSITION = 0;
  AllianceBuffData.MAP_LEVEL_POSITION = 1;
  return AllianceBuffData;
}();
exports.AllianceBuffData = r;
var l = require("./48.js");
var c = require("./2497.js");
r.__initialize_static_members();