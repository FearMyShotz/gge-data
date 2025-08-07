Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./103.js");
var p = require("./44.js");
var h = require("./4.js");
var g = require("./335.js");
var C = require("./308.js");
var _ = require("./699.js");
var m = require("./64.js");
var f = require("./205.js");
var O = function (e) {
  function ABGAllianceTowerMapobjectVO() {
    var t = this;
    t._isAttackable = false;
    t._victoryCount = 0;
    t._defeatedConnections = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "ABGAllianceTower";
    t.group = "Mapobject";
    t._isVisibleOnMap = true;
    t._secondsSinceEspionage = -1;
    t._areaType = s.WorldConst.AREA_TYPE_OUTPOST;
    t._keepLevel = -1;
    return t;
  }
  n.__extends(ABGAllianceTowerMapobjectVO, e);
  ABGAllianceTowerMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    this._areaNameString = e[4];
    this._isAttackable = e[5];
    this._victoryCount = c.int(e[6]);
    this._towerInfoVO = h.CastleModel.allianceBattlegroundData.getTowerInfoByCountVictory(this._victoryCount);
    var t = new E.WorldMapOwnerInfoVO();
    t.allianceID = c.int(e[7]);
    t.allianceName = e[8];
    t.allianceCrestVO = new g.AllianceCrestVO();
    t.allianceCrestVO.fillFromArray(e[9]);
    t.playerLevel = 70;
    if (t.allianceCrestVO.isEmpty) {
      t.allianceCrestVO = ABGAllianceTowerMapobjectVO.DEFAULT_CREST_TOWER;
    }
    this._ownerInfo = t;
    this._customConnections = this.parseConnections(e[10]);
    this.dispatchEvent(d.EventInstanceMapper.getEvent(m.VisualVOEvent, m.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  ABGAllianceTowerMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    this._victoryCount = c.int(t.ACVC || 0);
    this._towerInfoVO = h.CastleModel.allianceBattlegroundData.getTowerInfoByCountVictory(this._victoryCount);
    var i = new E.WorldMapOwnerInfoVO();
    i.allianceID = c.int(t.AID);
    i.allianceName = t.N;
    i.allianceCrestVO = new g.AllianceCrestVO();
    i.allianceCrestVO.fillWithData(t.E);
    i.crest = C.CrestVO.createDummyCrest();
    i.playerLevel = 70;
    this._ownerInfo = i;
    this._isAttackable = true;
    this._customConnections = this.parseConnections([]);
  };
  ABGAllianceTowerMapobjectVO.prototype.parseConnections = function (e) {
    var t = [];
    this._defeatedConnections = 0;
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      var o = new _.ABGTowerConnectionVO();
      o.fillFromConnectionValues(n);
      t.push(o);
      this._defeatedConnections += o.status;
    }
    return t;
  };
  ABGAllianceTowerMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnedByMyAlliance && this.supportCapacity - this.getCurrentUnitSupport() > 0;
  };
  ABGAllianceTowerMapobjectVO.prototype.getCurrentUnitSupport = function () {
    return c.int(h.CastleModel.armyData.getUnitSupportUnitCountToArea(this));
  };
  ABGAllianceTowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new b.CastleDisplayObjectClipContainer();
    var a = "ABGAllianceTower_Mapobject_" + p.SpecialServerHelper.skinName + "_Level" + this.level + (i ? "_big" : "");
    if (!p.SpecialServerHelper.useSkin || !o.BasicModel.basicLoaderData.isItemAssetVersioned(a)) {
      a = "ABGAllianceTower_Mapobject_Maya_Level" + this.level + (i ? "_big" : "");
    }
    n.addItem(this.getAsExternalClip(a));
    if (this._defeatedConnections < this._customConnections.length || this.isAttackable) {
      n.addItem(this.getAsExternalClip(a + this.assetStatusName, this.assetFileURL(a)));
    }
    return n;
  };
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString == "" || this._areaNameString == null) {
        return l.Localize.text("allianceTower_Maya");
      } else {
        return l.Localize.text("allianceTower_placeholder_Maya", [this._areaNameString]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobjectVO.prototype.canBeSupported = function () {
    return this.isOwnedByMyAlliance;
  };
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnedByMyAlliance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobjectVO.prototype.canBeAttacked = function () {
    return this._isAttackable && !this.isOwnedByMyAlliance;
  };
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "isOwnedByMyAlliance", {
    get: function () {
      return this.ownerInfo.allianceID == h.CastleModel.userData.allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return this.ownerInfo != null && !this.isOwnMapobject && (!this.ownerInfo || !this.ownerInfo.isOutpostOwner);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      var e = Object.getOwnPropertyDescriptor(y.InteractiveMapobjectVO.prototype, "ownerInfo").get.call(this);
      e ||= h.CastleModel.otherPlayerData.getOwnerInfoVO(r.OutpostConst.OUTPOST_DEFAULT_OWNER_ID);
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.InteractiveMapobjectVO.prototype, "ownerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "level", {
    get: function () {
      return this._towerInfoVO.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "assetStatusName", {
    get: function () {
      if (this._isAttackable) {
        return "_Attackable";
      } else {
        return "_Rechargeable";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "allianceName", {
    get: function () {
      return this._ownerInfo.allianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "allianceCrest", {
    get: function () {
      return this._ownerInfo.allianceCrestVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "connections", {
    get: function () {
      return this._customConnections;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "currentTowerPoints", {
    get: function () {
      return s.AllianceBattleGroundConst.calculateAllianceTowerPointsToLoot(this.towerInfoVO.addStatuette, this.towerInfoVO.defeatedPVPBasePoints, this.defeatedConnections, this.towerInfoVO.allianceTowerLevelMultiplier);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportCapacity", {
    get: function () {
      return this._towerInfoVO.unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportCapacityToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_support_defenseLimit_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportCapacityReachedToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_support_defenseLimitReached_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "defenceCapacityToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "defenceCapacityReachedToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_tower_troopsStationed_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportOverviewToolTip", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_defense_yourTroops_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "supportOverviewNoTroopsToolTipID", {
    get: function () {
      return "dialog_beyondTheHorizon_AllianceTower_defense_yourTroopsEmpty_tooltip";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "towerInfoVO", {
    get: function () {
      return this._towerInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "neededVictoryCountForLevel", {
    get: function () {
      var e = h.CastleModel.allianceBattlegroundData.getTowerInfoByCountLevel(this.level + 1);
      if (e) {
        return e.countVictory - this.towerInfoVO.countVictory;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "currentVictoryCountFromLevel", {
    get: function () {
      if (h.CastleModel.allianceBattlegroundData.getTowerInfoByCountLevel(this.level + 1)) {
        return this._victoryCount - this.towerInfoVO.countVictory;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "isAttackable", {
    get: function () {
      return this._isAttackable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobjectVO.prototype, "defeatedConnections", {
    get: function () {
      return this._defeatedConnections;
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobjectVO.createDefaultCrestVO = function () {
    var e = new g.AllianceCrestVO();
    e.fillFromArray([0, [2]]);
    return e;
  };
  ABGAllianceTowerMapobjectVO.__initialize_static_members = function () {
    ABGAllianceTowerMapobjectVO.DEFAULT_CREST_TOWER = ABGAllianceTowerMapobjectVO.createDefaultCrestVO();
  };
  return ABGAllianceTowerMapobjectVO;
}(f.ContainerBuilderMapobjectVO);
exports.ABGAllianceTowerMapobjectVO = O;
a.classImplementsInterfaces(O, "IDetailViewAble", "IWorldmapObjectVO", "ISupportCapacityVO");
var E = require("./316.js");
var y = require("./101.js");
var b = require("./109.js");
O.__initialize_static_members();