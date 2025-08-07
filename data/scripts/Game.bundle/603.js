Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./148.js");
var u = require("./273.js");
var d = require("./4.js");
var p = require("./109.js");
var h = require("./24.js");
var g = require("./574.js");
var C = function (e) {
  function TreasureDungeonMapObjectVO() {
    var t = this;
    t.tmapID = -1;
    t._baseWallBonus = 0;
    t._baseGateBonus = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._areaType = s.WorldConst.AREA_TYPE_TREASURE_DUNGEON;
    return t;
  }
  n.__extends(TreasureDungeonMapObjectVO, e);
  TreasureDungeonMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    this.tMapNode = t;
    var n;
    var o;
    var s;
    var r = new p.CastleDisplayObjectClipContainer();
    if (a.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.mapID) > -1) {
      switch (t.nodeType) {
        case _.TMapNodeVO.NODE_TYPE_DUNGEON:
          n = t.isEndNode ? "Boss" : t.isVillage ? "Village" + l.int(this.villageSize / 3) : "Dungeon";
          break;
        case _.TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON:
          n = "Bridge";
          break;
        case _.TMapNodeVO.NODE_TYPE_MORALBOOSTER:
          n = "Morale";
          break;
        default:
          n = "Dungeon";
      }
      this.mapID = u.TMapHelper.getMapIDForGraphics(this.mapID);
      if (this.mapID == a.TreasureMapsConst.MAP_ID_THORNKING_EASY && t.ownerID == c.ClientConstNPCs.NPC_ID_THORNKING_COW_DUNGEON) {
        n += "Cow";
      }
      o = "Season" + n + "_Mapobject_" + this.mapID;
      s = new h.CastleGoodgameExternalClip(o, this.assetFileURL("SeasonEvent_" + this.mapID), null, 0, false);
    } else {
      o = t.isEndNode ? "TreasureMapFinish_" + this.mapID : "TreasureMapDungeon_" + this.mapID;
      s = new h.CastleGoodgameExternalClip(o, this.assetFileURL(this.generateTreasureMapAssetName(this.mapID)), null, 0, false);
    }
    r.addItem(s);
    return r;
  };
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "victoryCount", {
    get: function () {
      return this.tMapNode.countVictories * -1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "victoryCount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var e = d.CastleModel.dungeonData.getDungeon(this.kingdomID, this.tMapNode.countVictories).skipCosts;
      return a.DungeonConst.getSkipCost(e, this.remainingCooldownTimeInSeconds);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this.tMapNode.coolDown;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "remainingCooldownTimeInSeconds", {
    get: function () {
      return this.tMapNode.coolDownInRemainingSeconds;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "remainingCooldownTimeInSeconds").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TreasureDungeonMapObjectVO.prototype.generateTreasureMapAssetName = function (e) {
    return "Treasuremap_" + e + "_Assets";
  };
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "areaNameString", {
    get: function () {
      this.tmapID = l.int(this.mapID);
      if (u.TMapHelper.isThornKingMap(this.mapID)) {
        if (this.tMapNode.nodeID == a.TreasureMapsConst.NODE_ID_HIDDEN_COW_DUNGEON) {
          return r.Localize.text("dialog_seasonEvent_2_cowDungeon");
        } else if (this.tMapNode.isEndNode) {
          return r.Localize.text("dialog_seasonEvent_2_FinalCastle");
        } else if (this.tMapNode.isVillage) {
          return r.Localize.text("village");
        } else {
          return r.Localize.text("dialog_seasonEvent_2_Dungeon");
        }
      } else if (u.TMapHelper.isSeaQueenMap(this.mapID)) {
        if (this.tMapNode.isEndNode) {
          if (this.tMapNode.isUnlocked) {
            return r.Localize.text("dialog_seasonEvent_4_FinalCastle");
          } else {
            return r.Localize.text("Castle");
          }
        } else if (this.tMapNode.isVillage) {
          return r.Localize.text("dialog_seasonEvent_4_konvy");
        } else {
          return r.Localize.text("dialog_seasonEvent_2_Dungeon");
        }
      } else if (u.TMapHelper.isUnderworldMap(this.mapID)) {
        if (this.tMapNode.isEndNode) {
          return r.Localize.text("dialog_seasonEvent_64_FinalCastle");
        } else if (this.tMapNode.isVillage) {
          return r.Localize.text("dialog_seasonEvent_64_village");
        } else {
          return r.Localize.text("dialog_seasonEvent_2_Dungeon");
        }
      } else if (this.tMapNode.isEndNode) {
        return r.Localize.text("dialog_treasureMap_TreasureTooltip");
      } else {
        return r.Localize.text("dialog_treasureMap_DungeonTooltip");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (a.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.tmapID) > -1 && this._baseWallBonus > 0) {
        return this._baseWallBonus;
      } else {
        return Object.getOwnPropertyDescriptor(m.InteractiveMapobjectVO.prototype, "baseWallBonus").get.call(this);
      }
    },
    set: function (e) {
      this._baseWallBonus = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (a.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.tmapID) > -1 && this._baseGateBonus > 0) {
        return this._baseGateBonus;
      } else {
        return Object.getOwnPropertyDescriptor(m.InteractiveMapobjectVO.prototype, "baseGateBonus").get.call(this);
      }
    },
    set: function (e) {
      this._baseGateBonus = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "villageSize", {
    get: function () {
      if (a.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(this.tmapID) > -1 && this.tMapNode.isVillage) {
        return this.tMapNode.villageSize;
      } else {
        return this._dungeonLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureDungeonMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.DungeonMapobjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return TreasureDungeonMapObjectVO;
}(g.DungeonMapobjectVO);
exports.TreasureDungeonMapObjectVO = C;
o.classImplementsInterfaces(C, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
var _ = require("./733.js");
var m = require("./101.js");