Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./103.js");
var c = require("./4502.js");
var u = require("./64.js");
var d = require("./4.js");
var p = require("./79.js");
var h = function (e) {
  function RandomdungeonEventVO() {
    var t = this;
    t._hasWon = false;
    t._dungeonProtectionTime = 0;
    t._dungeonLootC2 = 0;
    t._skinID = 0;
    t._playerID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(RandomdungeonEventVO, e);
  Object.defineProperty(RandomdungeonEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_RandomDungeon";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RandomdungeonEventVO.prototype.parseParamObject = function (e) {
    this._skinID = r.int(e.SID);
    this._playerID = r.int(s.DungeonConst.getEventDungeonOwnerIDBySkinID(this._skinID));
    if (e.C2) {
      this._dungeonLootC2 = r.int(e.C2);
    }
    if (e.DPT) {
      this._dungeonProtectionTime = r.int(e.DPT);
    }
    if (e.RID) {
      this._rewardList = d.CastleModel.rewardData.getListById(e.RID);
    }
    if (this._dungeonLootC2 > 0) {
      this._rewardList.addItem(new g.CollectableItemC2VO(this.dungeonLootC2));
    }
    if (this._dungeonProtectionTime > 0) {
      this._rewardList.addItem(new C.CollectableItemDungeonProtectionVO(this._dungeonProtectionTime));
    }
    this._targetAreaVO = new m.EventdungeonMapobjectVO();
    this._targetAreaVO.parseAreaInfo(e.D);
    this._targetAreaVO.ownerInfo = d.CastleModel.otherPlayerData.getOwnerInfoVO(this.playerID);
    this._hasWon = this._targetAreaVO.isDefeated;
  };
  Object.defineProperty(RandomdungeonEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return RandomdungeonEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return this._hasWon;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ASpecialEventVO.prototype, "hasUserSolvedEvent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "dungeonProtectionTime", {
    get: function () {
      return this._dungeonProtectionTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "dungeonLootC2", {
    get: function () {
      return this._dungeonLootC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "targetAreaVO", {
    get: function () {
      return this._targetAreaVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  RandomdungeonEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, _.CastleRandomDungeonEventDialog, new c.CastleRandomDungeonEventDialogProperties(this));
  };
  RandomdungeonEventVO.prototype.onDestroy = function () {
    if (d.CastleModel.worldmapData && d.CastleModel.worldmapData.areaTiles && this._targetAreaVO) {
      this._targetAreaVO.isVisibleOnMap = false;
      var e = o.castAs(d.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(this._targetAreaVO.absAreaPosX, this._targetAreaVO.absAreaPosY), "EventdungeonMapobjectVO");
      if (e) {
        e.isVisibleOnMap = false;
        e.dispatchEvent(l.EventInstanceMapper.getEvent(u.VisualVOEvent, u.VisualVOEvent.VALUEOBJECT_CHANGE));
      }
    }
  };
  RandomdungeonEventVO.prototype.isOwnWmoVO = function (e) {
    return e.areaType == this.targetAreaVO.areaType;
  };
  Object.defineProperty(RandomdungeonEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RandomdungeonEventVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  RandomdungeonEventVO.__initialize_static_members = function () {
    RandomdungeonEventVO.EVENT_BUILDING_WOD = 219;
  };
  return RandomdungeonEventVO;
}(p.ASpecialEventVO);
exports.RandomdungeonEventVO = h;
var g = require("./128.js");
var C = require("./1053.js");
var _ = require("./4503.js");
var m = require("./968.js");
a.classImplementsInterfaces(h, "IEventOverviewable");
h.__initialize_static_members();