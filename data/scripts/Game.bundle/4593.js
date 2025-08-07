Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./90.js");
var c = require("./64.js");
var u = require("./124.js");
var d = createjs.Container;
var p = function (e) {
  function BossdungeonMapobject() {
    return e.call(this) || this;
  }
  n.__extends(BossdungeonMapobject, e);
  BossdungeonMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new d();
      this.mapobjectVO.addEventListener(c.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDungeon();
  };
  BossdungeonMapobject.prototype.drawDungeon = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.bossDungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  BossdungeonMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  BossdungeonMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  BossdungeonMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(BossdungeonMapobject.prototype, "bossDungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobject.prototype, "line2Content", {
    get: function () {
      if (this.bossDungeonMapObjectVO.isCoolingDown) {
        var e = this.bossDungeonMapObjectVO.defeaterInfo;
        if (e) {
          return new s.LocalizedTextVO("bossDungeon_defeated_by", [e.playerName]);
        } else {
          return new r.TextVO("");
        }
      }
      return new s.LocalizedTextVO("bossDungeon_attackable");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobject.prototype, "line3Content", {
    get: function () {
      if (this.bossDungeonMapObjectVO.isCoolingDown) {
        var e = o.TimeStringHelper.getShortTimeString(this.bossDungeonMapObjectVO.remainingCooldownTimeInSeconds * 1000, o.TimeStringHelper.ONE_TIME_FORMAT);
        return new s.LocalizedTextVO("bossDungeon_attackable_in", [e]);
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BossdungeonMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return this.bossDungeonMapObjectVO.isCoolingDown;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return BossdungeonMapobject;
}(u.InteractiveMapobject);
exports.BossdungeonMapobject = p;
a.classImplementsInterfaces(p, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");