Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./148.js");
var h = require("./28.js");
var g = require("./374.js");
var C = require("./103.js");
var _ = require("./30.js");
var m = require("./4.js");
var f = require("./108.js");
var O = require("./64.js");
var E = require("./245.js");
var y = require("./205.js");
var b = function (e) {
  function BossdungeonMapobjectVO() {
    var t = this;
    t._defeaterPlayerID = 0;
    t._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Bossdungeon";
    t._areaType = a.WorldConst.AREA_TYPE_BOSS_DUNGEON;
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    return t;
  }
  n.__extends(BossdungeonMapobjectVO, e);
  BossdungeonMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n;
    var o = m.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var a = new f.CastleDisplayObjectClipContainer();
    n = this.isCoolingDown ? "Bossdungeon_Mapobject_" + o + "_Damaged" : "Bossdungeon_Mapobject_" + o;
    a.addItem(this.getAsExternalClip(n));
    return a;
  };
  BossdungeonMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._secondsSinceEspionage = e[3];
    this._dungeonLevel = u.int(e[4]);
    this._attackCooldownEndTimestamp = _.CachedTimer.getCachedTimer() + e[5] * h.ClientConstTime.SEC_2_MILLISEC;
    this._defeaterPlayerID = u.int(e[6]);
    this._kingdomID = e[7];
    this._spyInfoReceivingTime = _.CachedTimer.getCachedTimer() * h.ClientConstTime.MILLISEC_2_SEC;
    this._isVisibleOnMap = true;
    this._ownerInfo = m.CastleModel.otherPlayerData.getOwnerInfoVO(p.ClientConstNPCs.NPC_ID_KINGDOM_BOSS_DUNGEON_FIRST_ID - (this._kingdomID - 1));
    if (this._defeaterPlayerID > 0 && !m.CastleModel.otherPlayerData.getOwnerInfoVO(this._defeaterPlayerID)) {
      m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetDetailPlayerInfo(this._defeaterPlayerID));
    }
    this.dispatchEvent(C.EventInstanceMapper.getEvent(O.VisualVOEvent, O.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(E.BasicMapobjectVO.prototype, "kingdomID").get.call(this);
    },
    set: function (e) {
      this._kingdomID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "defeaterInfo", {
    get: function () {
      return m.CastleModel.otherPlayerData.getOwnerInfoVO(this._defeaterPlayerID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return c.Localize.text("kingdom_bossDungeon_castleName_" + this.kingdomID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(D.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BossdungeonMapobjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "dungeonWallLevel", {
    get: function () {
      switch (this._kingdomID) {
        case r.WorldIce.KINGDOM_ID:
          return 2;
        case s.WorldDessert.KINGDOM_ID:
        case l.WorldVolcano.KINGDOM_ID:
          return 3;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(D.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(D.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "attackType", {
    get: function () {
      return d.ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return BossdungeonMapobjectVO;
}(y.ContainerBuilderMapobjectVO);
exports.BossdungeonMapobjectVO = b;
var D = require("./101.js");
o.classImplementsInterfaces(b, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");