Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./90.js");
var l = require("./64.js");
var c = require("./124.js");
var u = createjs.Container;
var d = function (e) {
  function EventdungeonMapobject() {
    return e.call(this) || this;
  }
  n.__extends(EventdungeonMapobject, e);
  EventdungeonMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new u();
      this.mapobjectVO.addEventListener(l.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDungeon();
  };
  EventdungeonMapobject.prototype.drawDungeon = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.eventdungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.eventdungeonMapObjectVO.isDefeated) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  EventdungeonMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("Eventdungeon_FlamesLayer");
  };
  EventdungeonMapobject.prototype.showRingMenu = function () {
    if (!this.eventdungeonMapObjectVO.isDefeated) {
      this.worldmapRenderer.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.SHOW_MENU, [this, r.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
    }
  };
  EventdungeonMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  EventdungeonMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new r.CastleWorldmapEvent(r.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(EventdungeonMapobject.prototype, "eventdungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobject.prototype, "line2Content", {
    get: function () {
      return new s.TextVO(this.eventdungeonMapObjectVO.ownerInfo.playerName);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventdungeonMapobject.prototype, "line3Content", {
    get: function () {
      if (this.eventdungeonMapObjectVO.isDefeated) {
        return new a.LocalizedTextVO("dialog_treasureMap_DefeatedTooltipp");
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return EventdungeonMapobject;
}(c.InteractiveMapobject);
exports.EventdungeonMapobject = d;
o.classImplementsInterfaces(d, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");