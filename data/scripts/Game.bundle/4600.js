Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./26.js");
var d = require("./90.js");
var p = require("./4.js");
var h = require("./64.js");
var g = require("./1151.js");
var C = require("./124.js");
var _ = createjs.Container;
var m = function (e) {
  function FactionTowerMapobject() {
    return e.call(this) || this;
  }
  n.__extends(FactionTowerMapobject, e);
  FactionTowerMapobject.prototype.initialize = function (t, i) {
    e.prototype.initialize.call(this, t, i);
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
  };
  FactionTowerMapobject.prototype.onAttackableDataUpdate = function (e) {
    if (this.hasRingMenu) {
      this.showRingMenu();
    }
  };
  FactionTowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new _();
      this.mapobjectVO.addEventListener(h.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
    }
  };
  Object.defineProperty(FactionTowerMapobject.prototype, "areaNameString", {
    get: function () {
      return r.Localize.text("faction_tower");
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerMapobject.prototype.showRingMenu = function () {
    if (!this.towerVO.isDestroyed) {
      this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.SHOW_MENU, [this, d.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
    }
    this.showOwnerLines();
  };
  FactionTowerMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  FactionTowerMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  FactionTowerMapobject.prototype.remove = function () {
    this.mapobjectVO.removeEventListener(h.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.FACTION_ATTACKABLE_DATA_UPDATED, this.bindFunction(this.onAttackableDataUpdate));
    e.prototype.remove.call(this);
  };
  FactionTowerMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.hideLines();
    var e = FactionTowerMapobject.factionEventVO.getTowerByID(this.towerVO.specialCampID);
    var t = FactionTowerMapobject.factionEventVO.getTowersByLane(e.laneID);
    var i = FactionTowerMapobject.factionEventVO.getVillagesByTower(e.specialCampID);
    var n = FactionTowerMapobject.factionEventVO.getCapitalByLane(e.laneID);
    g.FactionLaneRenderHelper.showLane(this.worldmapRenderer, t, n, e, i);
  };
  Object.defineProperty(FactionTowerMapobject.prototype, "towerVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.towerVO.ownerInfo;
      if (e) {
        if (e.factionID == s.FactionConst.BLUE_FACTION) {
          return new l.LocalizedTextVO("blue_faction");
        } else {
          return new l.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobject.prototype, "line3Content", {
    get: function () {
      var e = c.int(this.towerVO.attacksLeft);
      if (e > 0 && !this.towerVO.isDestroyed) {
        return new l.LocalizedTextVO("factiontower_attacksLeft_tooltip", [e]);
      } else {
        return new l.LocalizedTextVO("mapobject_destroyed");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobject, "factionEventVO", {
    get: function () {
      return p.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionTowerMapobject;
}(C.InteractiveMapobject);
exports.FactionTowerMapobject = m;
o.classImplementsInterfaces(m, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");