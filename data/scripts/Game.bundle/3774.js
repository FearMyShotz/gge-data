Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleAttackWaveVO(e, t = 0, i = null) {
    this._allItems = [];
    this._allTools = [];
    this._allUnits = [];
    this._target = i;
    e = l.int(Math.max(e, t));
    var n = 0;
    if (i && i.ownerInfo && (i.hasOtherPlayerInfo && !a.PlayerHelper.isNPCPlayer(i.ownerInfo.playerID) || a.PlayerHelper.isNpcPvpPlayer(i.ownerInfo.playerID)) && e >= r.PlayerConst.LEVEL_CAP && c.CastleModel.userData.userLevel >= r.PlayerConst.LEVEL_CAP) {
      n += c.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(u.CastleLegendSkillEffectsEnum.ADDITIONAL_ATTACK_TOOL_AMOUNT_FLANK);
    }
    var d = l.int(s.CombatConst.getTotalAmountToolsFlank(e, n));
    var p = l.int(s.CombatConst.getAmountSoldiersFlank(e, 0));
    var h = l.int(s.CombatConst.getTotalAmountToolsMiddle(e));
    var g = l.int(s.CombatConst.getAmountSoldiersMiddle(e, 0));
    this._itemsLeftWall_tools = new o.CastleFightItemContainer(s.CombatConst.ITEMS_LEFTWALL_TOOLS, s.CombatConst.LEVELS_LEFTWALL_TOOLS, e, d);
    this._itemsLeftWall_units = new o.CastleFightItemContainer(s.CombatConst.ITEMS_LEFTWALL_UNITS, s.CombatConst.LEVELS_LEFTWALL_UNITS, e, p);
    this._itemsMiddleWall_tools = new o.CastleFightItemContainer(s.CombatConst.ITEMS_MIDDLEWALL_TOOLS, s.CombatConst.LEVELS_MIDDLEWALL_TOOLS, e, h);
    this._itemsMiddleWall_units = new o.CastleFightItemContainer(s.CombatConst.ITEMS_MIDDLEWALL_UNITS, s.CombatConst.LEVELS_MIDDLEWALL_UNITS, e, g);
    this._itemsRightWall_tools = new o.CastleFightItemContainer(s.CombatConst.ITEMS_RIGHTWALL_TOOLS, s.CombatConst.LEVELS_RIGHTWALL_TOOLS, e, d);
    this._itemsRightWall_units = new o.CastleFightItemContainer(s.CombatConst.ITEMS_RIGHTWALL_UNITS, s.CombatConst.LEVELS_RIGHTWALL_UNITS, e, p);
    this._allTools.push(this._itemsMiddleWall_tools);
    this._allTools.push(this._itemsLeftWall_tools);
    this._allTools.push(this._itemsRightWall_tools);
    this._allUnits.push(this._itemsMiddleWall_units);
    this._allUnits.push(this._itemsLeftWall_units);
    this._allUnits.push(this._itemsRightWall_units);
    this._allItems = this._allTools.concat(this._allUnits);
  }
  CastleAttackWaveVO.prototype.getWaveInfoObject = function () {
    var e = {
      L: {},
      R: {},
      M: {}
    };
    e.L.T = this._itemsLeftWall_tools.getSlotList();
    e.L.U = this._itemsLeftWall_units.getSlotList();
    e.M.T = this._itemsMiddleWall_tools.getSlotList();
    e.M.U = this._itemsMiddleWall_units.getSlotList();
    e.R.T = this._itemsRightWall_tools.getSlotList();
    e.R.U = this._itemsRightWall_units.getSlotList();
    return e;
  };
  CastleAttackWaveVO.prototype.getLowestTravelSpeed = function (e = false, t = null) {
    var i = l.int(Number.MAX_VALUE);
    if (this._allItems != null) {
      for (var n = 0, o = this._allItems; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i = l.int(Math.min(i, a.getLowestTravelSpeed(e, t)));
        }
      }
    }
    return i;
  };
  CastleAttackWaveVO.prototype.isWaveComplete = function () {
    return this.getSumOfUnits() > 0;
  };
  CastleAttackWaveVO.prototype.getSumOfItems = function () {
    var e = 0;
    if (this._allItems != null) {
      for (var t = 0, i = this._allItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.sumOfItems;
        }
      }
    }
    return e;
  };
  CastleAttackWaveVO.prototype.getSumOfUnits = function () {
    var e = 0;
    if (this._allUnits != null) {
      for (var t = 0, i = this._allUnits; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.sumOfItems;
        }
      }
    }
    return e;
  };
  CastleAttackWaveVO.prototype.getSumOfTools = function () {
    var e = 0;
    if (this._allTools != null) {
      for (var t = 0, i = this._allTools; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.sumOfItems;
        }
      }
    }
    return e;
  };
  CastleAttackWaveVO.prototype.getSumOfToolsByTool = function (e) {
    var t = 0;
    if (this._allTools != null) {
      for (var i = 0, n = this._allTools; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t += l.int(o.getAmountOfToolInContainer(e));
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsLeftWall_tools", {
    get: function () {
      return this._itemsLeftWall_tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsLeftWall_units", {
    get: function () {
      return this._itemsLeftWall_units;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsMiddleWall_tools", {
    get: function () {
      return this._itemsMiddleWall_tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsMiddleWall_units", {
    get: function () {
      return this._itemsMiddleWall_units;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsRightWall_tools", {
    get: function () {
      return this._itemsRightWall_tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "itemsRightWall_units", {
    get: function () {
      return this._itemsRightWall_units;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackWaveVO.prototype.findEffectingFlankTools = function (e) {
    if (this.itemsLeftWall_units.containsUnit(e)) {
      return this.itemsLeftWall_tools;
    } else if (this.itemsMiddleWall_units.containsUnit(e)) {
      return this.itemsMiddleWall_tools;
    } else if (this.itemsRightWall_units.containsUnit(e)) {
      return this.itemsRightWall_tools;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleAttackWaveVO.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackWaveVO.prototype, "flanks", {
    get: function () {
      return this._allItems;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackWaveVO.prototype.getAllUnitsAsVector = function () {
    var e = [];
    var t = 0;
    for (t = 0; t < this._allUnits.length; t++) {
      for (var i = 0, n = this._allUnits[t].items; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.unitVO) {
          e.push(o.unitVO);
        }
      }
    }
    for (t = 0; t < this._allTools.length; t++) {
      for (var a = 0, s = this._allTools[t].items; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && r.unitVO) {
          e.push(r.unitVO);
        }
      }
    }
    return e;
  };
  CastleAttackWaveVO.prototype.exceedsUnitLimit = function () {
    return this._allUnits.some(function (e) {
      return e.exceedsLimit();
    });
  };
  return CastleAttackWaveVO;
}();
exports.CastleAttackWaveVO = n;
var o = require("./552.js");
var a = require("./112.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./230.js");