Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./148.js");
var r = require("./28.js");
var l = require("./22.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./2355.js");
var p = function () {
  function TMapNodeVO() {
    this._nodeID = 0;
    this._mapID = 0;
    this._countVictories = 0;
    this._payedGoods = new g.CollectableList();
    this._costsWoodC2 = 0;
    this._costsStoneC2 = 0;
    this._costsC1C2 = 0;
    this._pos = 0;
    this._distance = 0;
    this._dungeonlevel = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._isUnlocked = false;
    this._isDefeated = false;
    this._isEndNode = false;
    this.eventID = 0;
    this._coolDown = 0;
    this.coolDownEndStemp = 0;
    this.columnOnMap = -1;
    this.isUnockedByPortLevel = true;
    this._villageSize = 0;
    this._ownerID = 0;
    this._isHighlighted = false;
  }
  TMapNodeVO.prototype.fillFromParamXML = function (e) {
    this._nodeID = parseInt(l.CastleXMLUtils.getValueOrDefault("tmapnodeID", e, "0"));
    this._orUnlockIDs = l.CastleXMLUtils.getValueOrDefault("orUnlockIDs", e, "0").split("+");
    this._andUnlockIDs = l.CastleXMLUtils.getValueOrDefault("andUnlockIDs", e, "0").split("+");
    this._nodeType = l.CastleXMLUtils.getValueOrDefault("type", e, "DUNGEON");
    this._capturedProduction = this._nodeType == "DUNGEON" ? TMapNodeVO.getCapturedProduction(e) : null;
    this._countVictories = parseInt(l.CastleXMLUtils.getValueOrDefault("countVictories", e, "1"));
    this._partpaypriceVO = u.CastleModel.partPayPricesData.getVOById(parseInt(l.CastleXMLUtils.getValueOrDefault("partPayPriceID", e, "-1")));
    this._pos = parseInt(l.CastleXMLUtils.getValueOrDefault("pos", e, "0"));
    this._distance = parseFloat(l.CastleXMLUtils.getValueOrDefault("distance", e, "0"));
    this._dungeonlevel = parseInt(l.CastleXMLUtils.getValueOrDefault("dungeonlevel", e, "0"));
    this._coolDown = parseInt(l.CastleXMLUtils.getValueOrDefault("coolDown", e, "0"));
    this.columnOnMap = parseInt(l.CastleXMLUtils.getValueOrDefault("columnOnMap", e, "0"));
    this._villageSize = parseInt(l.CastleXMLUtils.getValueOrDefault("villageSize", e, "-1"));
    this._wallBonus = parseInt(l.CastleXMLUtils.getValueOrDefault("wallBonus", e, "0"));
    this._gateBonus = parseInt(l.CastleXMLUtils.getValueOrDefault("gateBonus", e, "0"));
    this._rewardLists = h.CollectableManager.parser.createListsFromRewardIdsString(l.CastleXMLUtils.getValueOrDefault("rewardIDs", e, "0"));
    this._ownerID = parseInt(l.CastleXMLUtils.getValueOrDefault("ownerID", e, "" + s.ClientConstNPCs.NPC_ID_UNKNOWN_EVENT_OWNER));
  };
  TMapNodeVO.getCapturedProduction = function (e) {
    var t = 0;
    var i = d.CapturedProduction.CAPTURED_PRODUCTION_TYPES;
    for (var n = i.length, o = 0; o < n; o++) {
      var a = i[o];
      var s = d.CapturedProduction.CAPTURED_PRODUCTION + a;
      if ((t = parseInt(l.CastleXMLUtils.getValueOrDefault(s, e, "-1"))) > 0) {
        return new d.CapturedProduction(a, t);
      }
    }
    return null;
  };
  TMapNodeVO.prototype.parseParamObject = function (e) {
    if (e.CD > 0) {
      this.coolDownEndStemp = c.CachedTimer.getCachedTimer() + e.CD * r.ClientConstTime.SEC_2_MILLISEC;
    } else {
      this.coolDownEndStemp = 0;
    }
    if (e.G) {
      this._payedGoods = h.CollectableManager.parser.s2cParamList.createList(e.G);
    }
    this._costsC1C2 = a.int(e.C1C2 ? e.C1C2 : 0);
    this._costsStoneC2 = a.int(e.SC2 ? e.SC2 : 0);
    this._costsWoodC2 = a.int(e.WC2 ? e.WC2 : 0);
  };
  Object.defineProperty(TMapNodeVO.prototype, "isVillage", {
    get: function () {
      return this.villageSize > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "nodeID", {
    get: function () {
      return this._nodeID;
    },
    set: function (e) {
      this._nodeID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "countVictories", {
    get: function () {
      return this._countVictories;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (e) {
      this._pos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "distance", {
    get: function () {
      return this._distance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "dungeonlevel", {
    get: function () {
      return this._dungeonlevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isUnlocked", {
    get: function () {
      return this._isUnlocked;
    },
    set: function (e) {
      this._isUnlocked = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isDefeated", {
    get: function () {
      return this._isDefeated;
    },
    set: function (e) {
      this._isDefeated = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "orUnlockIDs", {
    get: function () {
      return this._orUnlockIDs;
    },
    set: function (e) {
      this._orUnlockIDs = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isStartNode", {
    get: function () {
      return this._nodeID == TMapNodeVO.START_NODE_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isEndNode", {
    get: function () {
      return this._isEndNode;
    },
    set: function (e) {
      this._isEndNode = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    set: function (e) {
      this._mapID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "nodeType", {
    get: function () {
      return this._nodeType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "wallLevel", {
    get: function () {
      return Math.min(o.DungeonConst.getWallUpgradeByLevel(this._dungeonlevel), 2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "keepLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "towerLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "gateLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "moatLevel", {
    get: function () {
      return this.wallLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "crestVO", {
    get: function () {
      return this._crestVO;
    },
    set: function (e) {
      this._crestVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "hasCoolDown", {
    get: function () {
      return this.coolDownEndStemp - c.CachedTimer.getCachedTimer() > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "payedGoods", {
    get: function () {
      return this._payedGoods;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isDungeon", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_DUNGEON;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isBridgeDungeon", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isMoralBooster", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_MORALBOOSTER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isPort", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_PORT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isChar", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_CHAR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isChest", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_CHEST;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isBridge", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_BRIDGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isSwamp", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_SWAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isQuickSand", {
    get: function () {
      return this._nodeType == TMapNodeVO.NODE_TYPE_QUICK_SAND;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isTreasureHuntObstacle", {
    get: function () {
      return this.isBridge || this.isQuickSand || this.isSwamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "coolDownInRemainingSeconds", {
    get: function () {
      return (this.coolDownEndStemp - c.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "partpaypriceVO", {
    get: function () {
      return this._partpaypriceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "andUnlockIDs", {
    get: function () {
      return this._andUnlockIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "costsWoodC2", {
    get: function () {
      return this._costsWoodC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "costsStoneC2", {
    get: function () {
      return this._costsStoneC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "costsC1C2", {
    get: function () {
      return this._costsC1C2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "villageSize", {
    get: function () {
      return this._villageSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "rewardLists", {
    get: function () {
      return this._rewardLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "mapIndex", {
    get: function () {
      if (this.eventID > 0) {
        return this.pos;
      } else {
        return this._nodeID;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "capturedProduction", {
    get: function () {
      return this._capturedProduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TMapNodeVO.prototype, "isHighlighted", {
    get: function () {
      return this._isHighlighted;
    },
    set: function (e) {
      this._isHighlighted = e;
    },
    enumerable: true,
    configurable: true
  });
  TMapNodeVO.START_NODE_ID = 0;
  TMapNodeVO.NODE_TYPE_DUNGEON = "DUNGEON";
  TMapNodeVO.NODE_TYPE_BRIDGE = "BRIDGE";
  TMapNodeVO.NODE_TYPE_MORALBOOSTER = "MORALBOOSTER";
  TMapNodeVO.NODE_TYPE_BRIDGEDUNGEON = "BRIDGEDUNGEON";
  TMapNodeVO.NODE_TYPE_PORT = "PORT";
  TMapNodeVO.NODE_TYPE_CHAR = "CHAR";
  TMapNodeVO.NODE_TYPE_CHEST = "CHEST";
  TMapNodeVO.NODE_TYPE_SWAMP = "SWAMP";
  TMapNodeVO.NODE_TYPE_QUICK_SAND = "SAND";
  return TMapNodeVO;
}();
exports.TMapNodeVO = p;
var h = require("./50.js");
var g = require("./48.js");
n.classImplementsInterfaces(p, "IDetailViewAble");