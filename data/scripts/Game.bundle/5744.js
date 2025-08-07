Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./5745.js");
var c = require("./22.js");
var u = require("./1038.js");
var d = require("./155.js");
var p = require("./30.js");
var h = require("./54.js");
var g = require("./4.js");
var C = require("./649.js");
var _ = require("./5746.js");
var m = require("./5747.js");
var f = function (e) {
  function OfficersSchoolData(t) {
    var i = this;
    i._rawEffectVOs = new Map();
    i._availableEffectsList = [];
    i._activeEffectVO = null;
    i._officersSchoolCurrencies = new Map();
    i._officersSchoolUnitPairs = new Map();
    i._activeEffectProlongCount = 0;
    i._rerollCountSoftCurrency = 0;
    i._rerollCountHardCurrency = 0;
    i._dailyCurrency = 0;
    CONSTRUCTOR_HACK;
    i = e.call(this) || this;
    for (var n = 0, o = t.officersSchoolEffects; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        var s = new _.OfficersSchoolEffectVO();
        s.parseXml(a);
        i._rawEffectVOs.set(s.id, s);
      }
    }
    for (var l = 0, u = t.officersSchoolCurrencies; l < u.length; l++) {
      var p = u[l];
      if (p !== undefined) {
        var h = c.CastleXMLUtils.getStringAttribute("currency", p);
        var C = r.int(c.CastleXMLUtils.getIntAttribute("id", p));
        var f = g.CastleModel.currencyData.getXmlCurrencyByName(h);
        var O = new d.CollectableItemGenericCurrencyVO(f.id);
        i._officersSchoolCurrencies.set(C, O);
      }
    }
    for (var E = 0, y = t.officersSchoolUnitPairs; E < y.length; E++) {
      var b = y[E];
      if (b !== undefined) {
        var D = new m.OfficersSchoolUnitPairVO();
        D.parseXml(b);
        i._officersSchoolUnitPairs.set(D.id, D);
      }
    }
    return i;
  }
  n.__extends(OfficersSchoolData, e);
  Object.defineProperty(OfficersSchoolData.prototype, "uniqueOfficersSchoolUnitWodIDs", {
    get: function () {
      var e = [];
      if (this._officersSchoolUnitPairs != null) {
        for (var t = 0, i = Array.from(this._officersSchoolUnitPairs.values()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            for (var o = 0, a = n.wodIDs; o < a.length; o++) {
              var s = a[o];
              if (s !== undefined && e.indexOf(s) < 0) {
                e.push(s);
              }
            }
          }
        }
      }
      e.sort(this.bindFunction(this.sortUnlockWods));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolData.prototype.sortUnlockWods = function (e, t) {
    var i = g.CastleModel.wodData.getBuildingVOById(this.getUnlockBuildingWodIDByUnitWodID(e));
    var n = g.CastleModel.wodData.getBuildingVOById(this.getUnlockBuildingWodIDByUnitWodID(t));
    return r.int(i.level - n.level);
  };
  OfficersSchoolData.prototype.getUnlockBuildingWodIDByUnitWodID = function (e) {
    if (this._officersSchoolUnitPairs != null) {
      for (var t = 0, i = Array.from(this._officersSchoolUnitPairs.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.wodIDs.indexOf(e) >= 0) {
          return n.unlockBuildingWodID;
        }
      }
    }
    return -1;
  };
  OfficersSchoolData.prototype.reset = function () {
    this._availableEffectsList = [];
    this._activeEffectVO = null;
  };
  OfficersSchoolData.prototype.sendReroll = function (e) {
    var t = [];
    if (this._availableEffectsList != null) {
      for (var i = 0, n = this._availableEffectsList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.isLockedAgainstRefresh) {
          t.push(o.slotID);
        }
      }
    }
    a.BasicModel.smartfoxClient.sendCommandVO(new l.C2SRerollTrainingProgramsVO(e, t));
  };
  OfficersSchoolData.prototype.parse_GATP = function (e) {
    this._activeEffectVO = null;
    if (e) {
      var t = r.int(e.S);
      var i = e.E;
      var n = e.RS;
      if (t > -1 && n > 0 || i.length > 0) {
        this._activeEffectVO = this._rawEffectVOs.get(o.DictionaryUtil.getKeys(this._rawEffectVOs)[0]).clone();
        this._activeEffectVO.slotID = t;
        this._activeEffectVO.setActiveTime(n);
        this._activeEffectVO.setBonusVOByValueArray(i);
      }
    }
  };
  OfficersSchoolData.prototype.parse_GTP = function (e) {
    if (e) {
      var t = e.TP;
      if (e.AT) {
        if (this._activeEffectVO) {
          if (this._activeEffectVO.id != e.AT.TE) {
            var i = this.parseOfficerEffectVO(e.AT);
            i.setActiveTime(this._activeEffectVO.remainingTimeInSeconds);
            this._activeEffectVO = i;
          }
          this._activeEffectVO.durationInSeconds = e.AT.D;
        }
      } else {
        this._activeEffectVO = null;
      }
      this._activeEffectProlongCount = r.int(e.PC);
      this._rerollCountSoftCurrency = r.int(e.RCSC);
      this._rerollCountHardCurrency = r.int(e.RCHC);
      this._dailyCurrency = r.int(e.CT);
      var n = [];
      if (this._availableEffectsList && this._availableEffectsList != null) {
        for (var o = 0, a = this._availableEffectsList; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined && s.isLockedAgainstRefresh) {
            n.push(s.slotID);
          }
        }
      }
      this._availableEffectsList = [];
      if (t != null) {
        for (var l = 0, c = t; l < c.length; l++) {
          var d = c[l];
          if (d !== undefined) {
            this._availableEffectsList.push(this.parseOfficerEffectVO(d));
          }
        }
      }
      if (this._availableEffectsList != null) {
        for (var p = 0, h = this._availableEffectsList; p < h.length; p++) {
          var g = h[p];
          if (g !== undefined && n.indexOf(g.slotID) >= 0) {
            g.isLockedAgainstRefresh = true;
          }
        }
      }
      this.dispatchEvent(new u.OfficersSchoolDataEvent(u.OfficersSchoolDataEvent.DATA_UPDATED));
    }
  };
  OfficersSchoolData.prototype.parseOfficerEffectVO = function (e) {
    if (!e) {
      return null;
    }
    var t = this._rawEffectVOs.get(e.TE).clone();
    t.slotID = r.int(e.S);
    t.durationInSeconds = e.D;
    t.setBonusVOByValueArray(e.E);
    return t;
  };
  OfficersSchoolData.prototype.getBonusByEffectType = function (e, t = -1, i = -1, n = -1) {
    if (!this._activeEffectVO) {
      return 0;
    }
    var o = 0;
    var a = r.int(t < 0 ? g.CastleModel.areaData.activeArea.areaInfo.areaType : t);
    var s = r.int(i < 0 ? g.CastleModel.areaData.activeArea.spaceId : i);
    if (this._activeEffectVO.endTimestamp < p.CachedTimer.getCachedTimer()) {
      return 0;
    } else {
      if (this._activeEffectVO.bonusVO.matchesConditions(e, a, s, n)) {
        o += this._activeEffectVO.bonusVO.strength;
      }
      return o;
    }
  };
  OfficersSchoolData.prototype.getC2ProlongCosts = function () {
    return r.int(g.CastleModel.rerollCostData.getRerollCostsByTypeAndCount(C.CastleRerollCostData.REROLL_TYPE_PROLONG_TRAINING, this._activeEffectProlongCount + 1).c2Cost);
  };
  Object.defineProperty(OfficersSchoolData.prototype, "activeEffectVO", {
    get: function () {
      return this._activeEffectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "availableEffectsList", {
    get: function () {
      return this._availableEffectsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "rerollCountSoftCurrency", {
    get: function () {
      return this._rerollCountSoftCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "rerollCountHardCurrency", {
    get: function () {
      return this._rerollCountHardCurrency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfficersSchoolData.prototype, "dailyCurrency", {
    get: function () {
      return this._dailyCurrency;
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolData;
}(h.CastleBasicData);
exports.OfficersSchoolData = f;
s.classImplementsInterfaces(f, "IUpdatable", "ICastleBasicData");