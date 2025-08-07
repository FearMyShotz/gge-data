Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./5587.js");
var r = require("./396.js");
var l = require("./15.js");
var c = require("./72.js");
var u = require("./4.js");
var d = require("./33.js");
var p = require("./214.js");
var h = createjs.Point;
var g = function (e) {
  function CastleSpyData() {
    var t = this;
    t._maxSpies = 0;
    t._bonusSpies = 0;
    t._availablePlagueMonks = 0;
    t._totalPlagueMonks = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleSpyData, e);
  CastleSpyData.prototype.parse_SSI = function (e) {
    var t;
    if (e) {
      this._startSpyVO = new m.CastleStartSpyVO();
      this._startSpyVO.guardCount = a.int(e.GC);
      this._startSpyVO.availableSpies = a.int(e.AS);
      this._startSpyVO.availablePlagueMonks = a.int(e.APM);
      this._startSpyVO.totalPlagueMonks = a.int(e.TPM);
      u.CastleModel.userData.parse_UAP(e.gaa.uap);
      u.CastleModel.otherPlayerData.parseOwnerInfoArray(e.gaa.OI);
      if (u.CastleModel.worldmapData) {
        u.CastleModel.worldmapData.parseAreaInfos(e.gaa.AI);
      }
      t = e.TX && e.TY ? [this._startSpyVO, new h(e.TX, e.TY)] : [this._startSpyVO];
      this.controller.dispatchEvent(new r.CastleSpyDataEvent(r.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, t));
    }
  };
  CastleSpyData.prototype.getSpyLog = function (e) {
    u.CastleModel.smartfoxClient.sendCommandVO(new s.C2SGetSpyLog(e));
  };
  CastleSpyData.prototype.parseSpyLog = function (e) {
    if (e) {
      var t = new _.CastleSpyLogVO();
      t.parseSpyLog(e);
      this.controller.dispatchEvent(new r.CastleSpyDataEvent(r.CastleSpyDataEvent.NEW_SPY_LOG, [t]));
    }
  };
  CastleSpyData.prototype.parse_CPI = function (e) {
    if (e) {
      this._availablePlagueMonks = a.int(e.APM);
      this._totalPlagueMonks = a.int(e.TPM);
      this.dispatchEvent(new r.CastleSpyDataEvent(r.CastleSpyDataEvent.PLAGUEMONK_COUNT_UPDATE));
    }
  };
  Object.defineProperty(CastleSpyData.prototype, "availablePlagueMonks", {
    get: function () {
      return this._availablePlagueMonks;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyData.prototype.getNumAvailableSpies = function (e = false) {
    var t = 0;
    for (var i = 0, n = Array.from(u.CastleModel.armyData.mapMovements.values()); i < n.length; i++) {
      var s = n[i];
      if (o.instanceOfClass(s, "SpyMapmovementVO") && s.isMyMovement) {
        t += a.int(s.spyCount);
      }
    }
    return a.int(this.getNumAllSpies(e) - t);
  };
  CastleSpyData.prototype.getNumAllSpies = function (e = false) {
    var t = C.CastleTitleSystemHelper.returnTitleEffectValue(d.EffectTypeEnum.EFFECT_TYPE_SPY_COUNT_BOOST).strength;
    var i = a.int(u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_AMOUNT_SPIES_BOOST).strength);
    var n = a.int(e ? u.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(p.CastleLegendSkillEffectsEnum.SPY_AMOUNT_BONUS) : 0);
    return a.int((this._maxSpies + i + n) * (1 + t / 100));
  };
  CastleSpyData.prototype.parse_GMS = function (e) {
    if (e) {
      this._maxSpies = a.int(e.MS);
      this._bonusSpies = a.int(e.BS);
    }
  };
  Object.defineProperty(CastleSpyData.prototype, "totalPlagueMonks", {
    get: function () {
      return this._totalPlagueMonks;
    },
    set: function (e) {
      this._totalPlagueMonks = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyData.prototype, "bonusSpies", {
    get: function () {
      return this._bonusSpies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyData.prototype, "controller", {
    get: function () {
      return l.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyData;
}(c.CastleEventDispatcher);
exports.CastleSpyData = g;
var C = require("./117.js");
var _ = require("./1942.js");
var m = require("./5588.js");