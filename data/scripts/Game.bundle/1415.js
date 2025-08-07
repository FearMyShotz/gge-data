Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./148.js");
var c = require("./44.js");
var u = require("./1414.js");
var d = function (e) {
  function ABGResourceTowerMapobjectVO() {
    var t = e.call(this) || this;
    t._battlelogDungeonLevel = 0;
    t.name = "ABGResourceTower";
    t.group = "Mapobject";
    t.type = "-";
    return t;
  }
  n.__extends(ABGResourceTowerMapobjectVO, e);
  ABGResourceTowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new g.CastleDisplayObjectClipContainer();
    var a = "ABGResourceTower_Mapobject_" + c.SpecialServerHelper.skinName;
    if (!c.SpecialServerHelper.useSkin || !o.BasicModel.basicLoaderData.isItemAssetVersioned(a)) {
      a = "ABGResourceTower_Mapobject_Maya";
    }
    n.addItem(this.getAsExternalClip(a));
    return n;
  };
  ABGResourceTowerMapobjectVO.prototype.parseData = function (t) {
    e.prototype.parseData.call(this, t);
    this._ownerInfo = p.CastleNPCOwnerFactory.getOwner(l.ClientConstNPCs.NPC_ID_ABG_CULTISTS);
    this._ownerInfo.playerLevel = this.allianceInvasionCampNode.level;
  };
  ABGResourceTowerMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    this._ownerInfo = p.CastleNPCOwnerFactory.getOwner(l.ClientConstNPCs.NPC_ID_ABG_CULTISTS);
    this._battlelogDungeonLevel = t.DL;
    this._ownerInfo.playerLevel = this._battlelogDungeonLevel;
    e.prototype.parseAreaInfoBattleLog.call(this, t);
  };
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      if (this._battlelogDungeonLevel > 0) {
        return this._battlelogDungeonLevel;
      } else {
        return this.allianceInvasionCampNode.level;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceInvasionCampMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return r.Localize.text("resourceTower_maya");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "eventType", {
    get: function () {
      return s.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceInvasionCampMapObjectVO.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABGResourceTowerMapobjectVO.prototype.canBeAttacked = function () {
    return !this.isCoolingDown;
  };
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceInvasionCampMapObjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AAllianceInvasionCampMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ABGResourceTowerMapobjectVO;
}(u.AAllianceInvasionCampMapObjectVO);
exports.ABGResourceTowerMapobjectVO = d;
var p = require("./387.js");
var h = require("./101.js");
var g = require("./108.js");
a.classImplementsInterfaces(d, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");