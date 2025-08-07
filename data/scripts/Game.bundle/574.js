Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./28.js");
var p = require("./103.js");
var h = require("./53.js");
var g = require("./30.js");
var C = require("./44.js");
var _ = require("./4.js");
var m = require("./109.js");
var f = require("./64.js");
var O = require("./245.js");
var E = require("./205.js");
var y = function (e) {
  function DungeonMapobjectVO() {
    var t = this;
    t._victoryCount = 0;
    t._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Dungeon";
    t._areaType = s.WorldConst.AREA_TYPE_DUNGEON;
    t._isVisibleOnMap = true;
    t._secondsSinceEspionage = -1;
    return t;
  }
  n.__extends(DungeonMapobjectVO, e);
  DungeonMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i) {
    var n = this;
    if (i === undefined) {
      i = false;
    }
    var o = _.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var s = "Dungeon_Mapobject_Level" + this.visualDungeonWallLevel + "_" + o;
    var r = "Dungeon_Mapobject_EventSkin_" + C.SpecialServerHelper.skinName;
    if (C.SpecialServerHelper.useSkin && a.BasicModel.basicLoaderData.isItemAssetVersioned(r)) {
      s = r;
    }
    this._graphicClassName = s;
    return I.mapObjectsPool.obtain(s, function (e) {
      var t = new m.CastleDisplayObjectClipContainer();
      t.addItem(n.getAsExternalClip(e));
      return t;
    });
  };
  Object.defineProperty(DungeonMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      var e = _.CastleModel.allianceBattlegroundData.getDungeonVOByVictoryCount(this.victoryCount);
      if (h.ABGHelper.isOnABGServer && e) {
        return e.dungeonlevel;
      } else {
        this._dungeonLevel ||= c.int(r.DungeonConst.getLevel(this.victoryCount, this.kingdomID));
        return this._dungeonLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "dungeonWallLevel", {
    get: function () {
      return r.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "visualDungeonWallLevel", {
    get: function () {
      if (this.kingdomID == s.WorldClassic.KINGDOM_ID) {
        return r.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel);
      } else if (this.kingdomID == s.WorldIce.KINGDOM_ID) {
        if (this.dungeonLevel < 30) {
          return 1;
        } else if (this.dungeonLevel < 40) {
          return 2;
        } else {
          return 3;
        }
      } else if (this.kingdomID == s.WorldDessert.KINGDOM_ID) {
        if (this.dungeonLevel < 40) {
          return 1;
        } else if (this.dungeonLevel < 50) {
          return 2;
        } else {
          return 3;
        }
      } else if (this.kingdomID == s.WorldVolcano.KINGDOM_ID) {
        if (this.dungeonLevel < 50) {
          return 1;
        } else if (this.dungeonLevel < 60) {
          return 2;
        } else {
          return 3;
        }
      } else if (this.kingdomID == s.WorldIsland.KINGDOM_ID) {
        return this.dungeonWallLevel;
      } else {
        return undefined;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(O.BasicMapobjectVO.prototype, "kingdomID").get.call(this);
    },
    set: function (e) {
      this._kingdomID = e;
    },
    enumerable: true,
    configurable: true
  });
  DungeonMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._secondsSinceEspionage = e[3];
    this._victoryCount = c.int(e[4]);
    this._dungeonLevel = c.int(r.DungeonConst.getLevel(this._victoryCount, this.kingdomID));
    this._attackCooldownEndTimestamp = g.CachedTimer.getCachedTimer() + e[5] * d.ClientConstTime.SEC_2_MILLISEC;
    this._kingdomID = e[6];
    this._spyInfoReceivingTime = g.CachedTimer.getCachedTimer() * d.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(p.EventInstanceMapper.getEvent(f.VisualVOEvent, f.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  DungeonMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    if (t.DL) {
      this._dungeonLevel = c.int(t.DL);
      this._victoryCount = c.int(r.DungeonConst.getVictories(this._dungeonLevel, this._kingdomID));
    }
  };
  Object.defineProperty(DungeonMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return l.Localize.text(C.SpecialServerHelper.checkTextIDForSkinText("kingdom_dungeon_castleName_" + this.kingdomID));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DungeonMapobjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(DungeonMapobjectVO.prototype, "victoryCount", {
    get: function () {
      return this._victoryCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "moatLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "attackCooldownEndTimestamp", {
    set: function (e) {
      this._attackCooldownEndTimestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ContainerBuilderMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      if (h.ABGHelper.isOnABGServer) {
        return _.CastleModel.allianceBattlegroundData.getDungeonSkipCost(this.victoryCount, this.remainingCooldownTimeInSeconds);
      }
      var e = _.CastleModel.dungeonData.getDungeon(this.kingdomID, this.victoryCount).skipCosts;
      return r.DungeonConst.getSkipCost(e, this.remainingCooldownTimeInSeconds);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ContainerBuilderMapobjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "totalCooldownTime", {
    get: function () {
      var e = c.int(_.CastleModel.globalEffectData.getBonusByEffectType(D.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION, this.areaType));
      var t = c.int(r.DungeonConst.COOLDOWN);
      if (h.ABGHelper.isOnABGServer) {
        t = c.int(_.CastleModel.allianceBattlegroundData.getDungeonVOByVictoryCount(this.victoryCount).coolDown);
      }
      return t * (1 - e / 100);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ContainerBuilderMapobjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (h.ABGHelper.isOnABGServer) {
        return _.CastleModel.allianceBattlegroundData.getDungeonVOByDungeonLevel(this.dungeonLevel).wallBonus;
      } else {
        return Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "baseWallBonus").get.call(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (h.ABGHelper.isOnABGServer) {
        return _.CastleModel.allianceBattlegroundData.getDungeonVOByDungeonLevel(this.dungeonLevel).gateBonus;
      } else {
        return Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "baseGateBonus").get.call(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  return DungeonMapobjectVO;
}(E.ContainerBuilderMapobjectVO);
exports.DungeonMapobjectVO = y;
o.classImplementsInterfaces(y, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
var b = require("./101.js");
var D = require("./35.js");
var I = require("./575.js");