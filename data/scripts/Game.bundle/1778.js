Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleAttackArmyVO() {}
  CastleAttackArmyVO.prototype.prefillInit = function (e) {
    this._waves = [];
    this._waves.push(e);
  };
  CastleAttackArmyVO.prototype.init = function (e, t, i, n) {
    this._waves = [];
    var o = 0;
    if (p.CastleModel.userData.isLegend && e >= c.PlayerConst.LEVEL_CAP && (n.ownerInfo && !a.PlayerHelper.isNPCPlayer(n.ownerInfo.playerID) || s.instanceOfClass(n, "AAlienInvasionMapobjectVO"))) {
      o = d.int(p.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(h.CastleLegendSkillEffectsEnum.ADDITIONAL_WAVE));
    }
    for (var l = 0; l < r.CombatConst.getMaxWaveCountWithBonus(p.CastleModel.userData.userLevel, t, o); l++) {
      this.addAdditionalWave(e, t, n);
    }
  };
  CastleAttackArmyVO.prototype.addAdditionalWave = function (e, t, i) {
    if (i.areaType == u.WorldConst.AREA_TYPE_CAPITAL) {
      this._waves.push(new o.CastleAttackWaveVO(e, p.CastleModel.landmark.capitalLandmark.minDefenseLevel, i));
    } else if (i.areaType == u.WorldConst.AREA_TYPE_METROPOL) {
      this._waves.push(new o.CastleAttackWaveVO(e, p.CastleModel.landmark.metroLandmark.minDefenseLevel, i));
    } else if (i.areaType == u.WorldConst.AREA_TYPE_KINGS_TOWER) {
      this._waves.push(new o.CastleAttackWaveVO(e, l.OutpostConst.KINGS_TOWER_DEFAULT_LEVEL, i));
    } else if (i.areaType == u.WorldConst.AREA_TYPE_MONUMENT) {
      this._waves.push(new o.CastleAttackWaveVO(e, l.OutpostConst.MONUMENT_DEFAULT_LEVEL, i));
    } else if (i.areaType == u.WorldConst.AREA_TYPE_LABORATORY) {
      this._waves.push(new o.CastleAttackWaveVO(e, l.OutpostConst.LABORATORY_DEFAULT_LEVEL, i));
    } else {
      this._waves.push(new o.CastleAttackWaveVO(e, 0, i));
    }
  };
  CastleAttackArmyVO.prototype.getUnitVectorFromCompleteWave = function (e) {
    return this._waves[e].getAllUnitsAsVector();
  };
  CastleAttackArmyVO.prototype.deductLastWave = function () {
    this._waves.pop();
  };
  CastleAttackArmyVO.prototype.getSumOfItems = function () {
    var e = 0;
    if (this._waves != null) {
      for (var t = 0, i = this._waves; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.getSumOfItems();
        }
      }
    }
    return e;
  };
  CastleAttackArmyVO.prototype.getSumOfTools = function () {
    var e = 0;
    if (this._waves != null) {
      for (var t = 0, i = this._waves; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.getSumOfTools();
        }
      }
    }
    return e;
  };
  CastleAttackArmyVO.prototype.getSumOfUnits = function () {
    var e = 0;
    if (this._waves != null) {
      for (var t = 0, i = this._waves; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.getSumOfUnits();
        }
      }
    }
    return e;
  };
  CastleAttackArmyVO.prototype.getWaveByID = function (e) {
    return this._waves[e];
  };
  CastleAttackArmyVO.prototype.getWaveCount = function () {
    return d.int(this._waves.length);
  };
  CastleAttackArmyVO.prototype.getLowestTravelSpeed = function (e = false, t = null) {
    var i = d.int(Number.MAX_VALUE);
    if (this._waves != null) {
      for (var n = 0, o = this._waves; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i = d.int(Math.min(i, a.getLowestTravelSpeed(e, t)));
        }
      }
    }
    if (i == Number.MAX_VALUE) {
      return 0;
    } else {
      return i;
    }
  };
  CastleAttackArmyVO.prototype.isAnyWaveComplete = function () {
    if (this._waves != null) {
      for (var e = 0, t = this._waves; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isWaveComplete()) {
          return true;
        }
      }
    }
    return false;
  };
  CastleAttackArmyVO.prototype.isAnyWaveSoldiersButNoTools = function () {
    if (this._waves != null) {
      for (var e = 0, t = this._waves; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && (i.itemsMiddleWall_units.sumOfItems == 0 && i.itemsMiddleWall_tools.sumOfItems > 0 || i.itemsRightWall_units.sumOfItems == 0 && i.itemsRightWall_tools.sumOfItems > 0 || i.itemsLeftWall_units.sumOfItems == 0 && i.itemsLeftWall_tools.sumOfItems > 0)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleAttackArmyVO.prototype.getArmyData = function () {
    var e = [];
    if (this._waves != null) {
      for (var t = 0, i = this._waves; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isWaveComplete()) {
          e.push(n.getWaveInfoObject());
        }
      }
    }
    return e;
  };
  Object.defineProperty(CastleAttackArmyVO.prototype, "waves", {
    get: function () {
      return this._waves;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackArmyVO;
}();
exports.CastleAttackArmyVO = n;
var o = require("./3773.js");
var a = require("./119.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./6.js");
var p = require("./4.js");
var h = require("./214.js");