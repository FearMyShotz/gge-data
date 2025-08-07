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
  function SamuraiCampMapobject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SamuraiCampMapobject, e);
  SamuraiCampMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new d();
      this.mapobjectVO.addEventListener(c.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawSamurai();
  };
  SamuraiCampMapobject.prototype.drawSamurai = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.samuraiMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  SamuraiCampMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  SamuraiCampMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  SamuraiCampMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(SamuraiCampMapobject.prototype, "samuraiMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiCampMapobject.prototype, "line2Content", {
    get: function () {
      return new r.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, [s.Localize.text("level"), this.samuraiMapObjectVO.dungeonLevel]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiCampMapobject;
}(u.InteractiveMapobject);
exports.SamuraiCampMapobject = p;
a.classImplementsInterfaces(p, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");