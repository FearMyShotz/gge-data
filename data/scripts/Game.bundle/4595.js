Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./90.js");
var p = require("./64.js");
var h = require("./124.js");
var g = createjs.Container;
var C = function (e) {
  function DungeonIsleMapobject() {
    return e.call(this) || this;
  }
  n.__extends(DungeonIsleMapobject, e);
  DungeonIsleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new g();
      this.mapobjectVO.addEventListener(p.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDungeonIsle();
  };
  DungeonIsleMapobject.prototype.drawDungeonIsle = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.dungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  DungeonIsleMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.SHOW_MENU, [this, d.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  DungeonIsleMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  DungeonIsleMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(DungeonIsleMapobject.prototype, "dungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobject.prototype, "line2Content", {
    get: function () {
      return new l.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, [r.Localize.text("level"), this.dungeonMapObjectVO.dungeonLevel]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobject.prototype, "line3Content", {
    get: function () {
      if (this.dungeonMapObjectVO.remainingCooldownTimeInSeconds > 0) {
        var e = a.TimeStringHelper.getShortTimeString(this.dungeonMapObjectVO.remainingCooldownTimeInSeconds * u.ClientConstTime.SEC_2_MILLISEC, a.TimeStringHelper.ONE_TIME_FORMAT);
        return new l.LocalizedTextVO("eiland_dungeon_cooldownLocal", [e]);
      }
      var t = c.int(this.dungeonMapObjectVO.remainingVictories);
      if (t > 1) {
        return new l.LocalizedTextVO("eiland_dungeon_cooldownCountdown", [t]);
      } else {
        return new l.LocalizedTextVO("eiland_dungeon_cooldownCountdown_singular", [t]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonIsleMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return this.dungeonMapObjectVO.remainingCooldownTimeInSeconds > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DungeonIsleMapobject;
}(h.InteractiveMapobject);
exports.DungeonIsleMapobject = C;
s.classImplementsInterfaces(C, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");