Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSpyLogVO() {
    this._castleID = 0;
    this._spyOwnerID = 0;
    this._areaPosX = 0;
    this._areaPosY = 0;
    this._enemyOwnerID = 0;
    this._spyCount = 0;
    this._guardCount = 0;
    this._spyAccuracy = 0;
    this._spyRisk = 0;
  }
  CastleSpyLogVO.prototype.parseSpyLog = function (e) {
    this._mapobjectVO = s.WorldmapObjectFactory.parseWorldMapArea([e.AI.AT], false);
    if (e.SSID) {
      e.AI.SSID = e.SSID;
    }
    if (e.DAR) {
      e.AI.DAR = e.DAR;
    }
    this._mapobjectVO.parseAreaInfoBattleLog(e.AI);
    this._mapobjectVO.objectId = p.int(e.CID);
    this._castleID = p.int(e.CID);
    this._areaPosX = this._mapobjectVO.absAreaPosX;
    this._areaPosY = this._mapobjectVO.absAreaPosY;
    this._spyOwnerID = p.int(e.SID);
    this._enemyOwnerID = p.int(e.PID);
    this._spyCount = p.int(e.SC);
    this._guardCount = p.int(e.GC);
    this._spyAccuracy = p.int(e.SA);
    this._spyRisk = p.int(e.SR);
    if (e.S) {
      this._armyInfoVO = new r.CastleSpyArmyInfoVO();
      this._armyInfoVO.parseArmyInfo(e.S, e.AS, e.B, e.LS);
    }
    if (e.R) {
      this._spyResources = o.CollectableManager.parser.s2cParamList.createList(e.R);
    }
    if (e.B) {
      this._lordVO = a.LordFactory.createLord(e.B, true, true);
    }
    this._legendSkills = [];
    if (e.LS) {
      this._legendSkills = e.LS;
    }
    if (e.AS) {
      this._mapobjectVO.secondsSinceEspionage = p.int(e.AS);
    }
    this._spyOwnerInfo = C.CastleModel.otherPlayerData.getOwnerInfoVO(this._spyOwnerID);
    this._enemyOwnerInfo = C.CastleModel.otherPlayerData.getOwnerInfoVO(this._enemyOwnerID);
    if (e.AI.DP < 0) {
      this._enemyOwnerInfo.playerLevel = p.int(e.AI.DL);
    }
    if (this._spyOwnerInfo && e.AI.DP == this._spyOwnerInfo.playerID) {
      this._mapobjectVO.ownerInfo = this._spyOwnerInfo;
    } else {
      this._mapobjectVO.ownerInfo = this._enemyOwnerInfo;
    }
    if (c.instanceOfClass(this._mapobjectVO, "OutpostMapobjectVO")) {
      this._mapobjectVO.outpostType = e.AI.RT;
    }
    if (c.instanceOfClass(this._mapobjectVO, "VillageMapobjectVO") && !c.instanceOfClass(this._mapobjectVO, "ResourceIsleMapobjectVO")) {
      this._mapobjectVO.villageType = e.AI.RT;
    }
    if (c.instanceOfClass(this._mapobjectVO, "DungeonMapobjectVO")) {
      this._mapobjectVO.attackCooldownEndTimestamp = Math.max(e.RS * l.ClientConstTime.SEC_2_MILLISEC + h.CachedTimer.getCachedTimer(), 0);
    }
  };
  Object.defineProperty(CastleSpyLogVO.prototype, "spyOwnerInfo", {
    get: function () {
      return this._spyOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "enemyOwnerInfo", {
    get: function () {
      return this._enemyOwnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyCount", {
    get: function () {
      return this._spyCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "guardCount", {
    get: function () {
      return this._guardCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyResources", {
    get: function () {
      return this._spyResources;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyRisk", {
    get: function () {
      return this._spyRisk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "armyInfoVO", {
    get: function () {
      return this._armyInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "spyAccuracy", {
    get: function () {
      return this._spyAccuracy;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyLogVO.prototype.getCastleName = function (e = -1) {
    if (this._mapobjectVO.areaNameString && this._mapobjectVO.areaNameString != "") {
      return this._mapobjectVO.areaNameString;
    } else {
      return g.PlayerHelper.getNPCCastleName(this._mapobjectVO.kingdomID, this.enemyOwnerInfo.playerID);
    }
  };
  Object.defineProperty(CastleSpyLogVO.prototype, "isFactionSpyLog", {
    get: function () {
      return this._mapobjectVO.kingdomID == u.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "isIslandSpyLog", {
    get: function () {
      return this._mapobjectVO.kingdomID == d.WorldIsland.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "areaPosX", {
    get: function () {
      return this._areaPosX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "areaPosY", {
    get: function () {
      return this._areaPosY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "mapobjectVO", {
    get: function () {
      return this._mapobjectVO;
    },
    set: function (e) {
      this._mapobjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogVO.prototype, "legendSkills", {
    get: function () {
      return this._legendSkills;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyLogVO;
}();
exports.CastleSpyLogVO = n;
var o = require("./50.js");
var a = require("./729.js");
var s = require("./147.js");
var r = require("./829.js");
var l = require("./28.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./6.js");
var h = require("./30.js");
var g = require("./112.js");
var C = require("./4.js");