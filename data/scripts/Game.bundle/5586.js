Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleStartSpyVO() {
    this._guardCount = 0;
    this._availableSpies = 0;
    this._availablePlagueMonks = 0;
    this._totalPlagueMonks = 0;
    this._distance = 0;
    this._spiesInUse = 1;
    this._accuracy = 0;
    this._damage = 0;
    this._risk = 0;
    this._cost = 0;
    this._startCastleId = 0;
    this._spyType = 0;
  }
  CastleStartSpyVO.prototype.setSpyValues = function (e, t) {
    var i = !s.instanceOfClass(this.worldmapObjectVO, "OutpostMapobjectVO") || s.instanceOfClass(this._worldmapObjectVO, "OutpostMapobjectVO") && this._worldmapObjectVO.ownerInfo.playerID > 0;
    this._spiesInUse = c.int(Math.max(1, t));
    this._accuracy = e;
    this._risk = c.int(r.SpyConst.getSpyRisk(this._spiesInUse, this._guardCount, this._accuracy, this._worldmapObjectVO.ownerInfo.playerID < 0 && !u.PlayerHelper.isNpcPvpPlayer(this._worldmapObjectVO.ownerInfo.playerID), i));
    this._cost = c.int(r.SpyConst.getTravelCostC1(this._spiesInUse, this._distance, this._risk));
  };
  CastleStartSpyVO.prototype.setSabotageValues = function (e, t) {
    this._spiesInUse = c.int(Math.max(1, t));
    this._damage = e;
    this._risk = c.int(r.SpyConst.getSabotageRisk(this._spiesInUse, this._guardCount, this._damage));
    this._cost = c.int(r.SpyConst.getTravelCostC1(this._spiesInUse, this._distance, this._risk));
  };
  CastleStartSpyVO.prototype.setPlagueValues = function (e, t) {
    this._spiesInUse = c.int(Math.max(1, t));
    this._damage = e;
    this._risk = c.int(r.SpyConst.getSabotageRisk(this._spiesInUse, this._guardCount, this._damage));
    this._cost = c.int(r.SpyConst.getTravelCostC1(this._spiesInUse, this._distance, this._risk));
  };
  Object.defineProperty(CastleStartSpyVO.prototype, "distance", {
    get: function () {
      return this._distance;
    },
    set: function (e) {
      this._distance = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "guardCount", {
    get: function () {
      return this._guardCount;
    },
    set: function (e) {
      this._guardCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "availableSpies", {
    get: function () {
      return this._availableSpies;
    },
    set: function (e) {
      this._availableSpies = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "availablePlagueMonks", {
    get: function () {
      return this._availablePlagueMonks;
    },
    set: function (e) {
      this._availablePlagueMonks = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartSpyVO.prototype.getTravelTime = function (e, t) {
    var i = 0;
    i = e == a.ClientConstCastle.SPYTYPE_SABOTAGE ? r.SpyConst.TRAVELSPEED_SABOTAGE : r.SpyConst.TRAVELSPEED_SPY;
    var n = 1 + d.CastleModel.researchData.getResearchEffectValue(h.EffectTypeEnum.EFFECT_TYPE_ESPIONAGE_SPEED_BOOST).strength / 100;
    n += d.CastleModel.userData.getGlobalConstructionItemEffectByType(p.CastleEffectEnum.ESPIONAGESPEEDBOOST) / 100;
    n += o.CastleTitleSystemHelper.returnTitleEffectValue(h.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, -1, this.worldmapObjectVO.areaType, this.worldmapObjectVO.spaceID).strength / 100;
    n += d.CastleModel.globalEffectData.getBonusByEffectType(h.EffectTypeEnum.EFFECT_TYPE_SPEED_BONUS, this.worldmapObjectVO.areaType, this.worldmapObjectVO.spaceID) / 100;
    return c.int(l.TravelConst.getTravelTime(i, this._distance, n, 0, false));
  };
  Object.defineProperty(CastleStartSpyVO.prototype, "accuracy", {
    get: function () {
      return this._accuracy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "spiesInUse", {
    get: function () {
      return this._spiesInUse;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "risk", {
    get: function () {
      return this._risk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "cost", {
    get: function () {
      return this._cost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "startCastleId", {
    get: function () {
      return this._startCastleId;
    },
    set: function (e) {
      this._startCastleId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "worldmapObjectVO", {
    get: function () {
      return this._worldmapObjectVO;
    },
    set: function (e) {
      this._worldmapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "spyType", {
    get: function () {
      return this._spyType;
    },
    set: function (e) {
      this._spyType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "damage", {
    get: function () {
      return this._damage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartSpyVO.prototype, "totalPlagueMonks", {
    get: function () {
      return this._totalPlagueMonks;
    },
    set: function (e) {
      this._totalPlagueMonks = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleStartSpyVO;
}();
exports.CastleStartSpyVO = n;
var o = require("./106.js");
var a = require("./18.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./112.js");
var d = require("./4.js");
var p = require("./97.js");
var h = require("./35.js");