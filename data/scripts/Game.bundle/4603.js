Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./90.js");
var c = require("./4.js");
var u = require("./64.js");
var d = require("./1151.js");
var p = require("./124.js");
var h = createjs.Container;
var g = function (e) {
  function FactionVillageMapobject() {
    return e.call(this) || this;
  }
  n.__extends(FactionVillageMapobject, e);
  FactionVillageMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new h();
      this.mapobjectVO.addEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  FactionVillageMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("FactionVillage_FlamesLayer", this.assetFileURL(C.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT));
  };
  Object.defineProperty(FactionVillageMapobject.prototype, "areaNameString", {
    get: function () {
      return "VILLAGE PEOPLE";
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  FactionVillageMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  FactionVillageMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  FactionVillageMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    if (this.villageVO.aliveProtectorPositions.length > 0) {
      this.showOwnerLines();
    }
  };
  FactionVillageMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.hideLines();
    var e = FactionVillageMapobject.factionEventVO.getVillageByPosition(this.villageVO.absAreaPos);
    if (e) {
      var t = FactionVillageMapobject.factionEventVO.getTowerByID(e.towerID);
      var i = FactionVillageMapobject.factionEventVO.getTowersByLane(t.laneID);
      var n = FactionVillageMapobject.factionEventVO.getVillagesByTower(t.specialCampID);
      var o = FactionVillageMapobject.factionEventVO.getCapitalByLane(t.laneID);
      d.FactionLaneRenderHelper.showLane(this.worldmapRenderer, i, o, t, n);
    }
  };
  Object.defineProperty(FactionVillageMapobject.prototype, "villageVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.villageVO.ownerInfo;
      if (e) {
        if (e.factionID == s.FactionConst.BLUE_FACTION) {
          return new r.LocalizedTextVO("blue_faction");
        } else {
          return new r.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobject.prototype, "line3Content", {
    get: function () {
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobject, "factionEventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionVillageMapobject;
}(p.InteractiveMapobject);
exports.FactionVillageMapobject = g;
var C = require("./70.js");
o.classImplementsInterfaces(g, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");