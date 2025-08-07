Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./28.js");
var h = require("./103.js");
var g = require("./4.js");
var C = require("./109.js");
var _ = require("./64.js");
var m = require("./245.js");
var f = require("./205.js");
var O = function (e) {
  function EventdungeonMapobjectVO() {
    var t = this;
    t._isDefeated = false;
    t._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Eventdungeon";
    t._areaType = l.WorldConst.AREA_TYPE_EVENT_DUNGEON;
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    return t;
  }
  n.__extends(EventdungeonMapobjectVO, e);
  EventdungeonMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n;
    var a = new C.CastleDisplayObjectClipContainer();
    var l = s.DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
    if (this._ownerInfo && this._ownerInfo.playerID != 0) {
      l = this._ownerInfo.playerID;
    } else {
      var c = o.castAs(g.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_DUNGEON), "RandomdungeonEventVO");
      if (c) {
        l = c.playerID;
      }
      this._ownerInfo = g.CastleModel.otherPlayerData.getOwnerInfoVO(l);
    }
    n = l == s.DungeonConst.APRIL_DUNGEON_EVENT_PLAYER_ID ? "Eventdungeon_Mapobject_Cow" : l == s.DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID ? "Eventdungeon_Mapobject" : "Eventdungeon_Mapobject_" + Math.abs(l);
    a.addItem(this.getAsExternalClip(n));
    return a;
  };
  EventdungeonMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    if (e.length > 3) {
      this._spyInfoReceivingTime = Date.now() * p.ClientConstTime.MILLISEC_2_SEC;
      this._secondsSinceEspionage = e[3];
      this._dungeonLevel = u.int(e[4]);
      this._isDefeated = e[5] == 1;
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    var t = o.castAs(g.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_DUNGEON), "RandomdungeonEventVO");
    if (t) {
      this._ownerInfo = g.CastleModel.otherPlayerData.getOwnerInfoVO(t.playerID);
    }
    this.dispatchEvent(h.EventInstanceMapper.getEvent(_.VisualVOEvent, _.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "dungeonWallLevel", {
    get: function () {
      return Math.min(s.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel), 2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "kingdomID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(m.BasicMapobjectVO.prototype, "kingdomID").get.call(this);
    },
    set: function (e) {
      this._kingdomID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "isDefeated", {
    get: function () {
      return this._isDefeated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return c.Localize.text("eventDungeon_castleName_" + this._ownerInfo.playerID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventdungeonMapobjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this.dungeonWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "moatLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "attackType", {
    get: function () {
      return d.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return EventdungeonMapobjectVO;
}(f.ContainerBuilderMapobjectVO);
exports.EventdungeonMapobjectVO = O;
var E = require("./101.js");
a.classImplementsInterfaces(O, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");