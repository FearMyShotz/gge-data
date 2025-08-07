Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./90.js");
var s = require("./64.js");
var r = require("./124.js");
var l = createjs.Container;
var c = function (e) {
  function WolfkingCastleMapobject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WolfkingCastleMapobject, e);
  WolfkingCastleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new l();
      this.mapobjectVO.addEventListener(s.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawWolfkingCastle();
  };
  WolfkingCastleMapobject.prototype.drawWolfkingCastle = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.wolfkingCastleMapobjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.wolfkingCastleMapobjectVO.isDefeated) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  WolfkingCastleMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new a.CastleWorldmapEvent(a.CastleWorldmapEvent.SHOW_MENU, [this, a.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  WolfkingCastleMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new a.CastleWorldmapEvent(a.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  WolfkingCastleMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new a.CastleWorldmapEvent(a.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(WolfkingCastleMapobject.prototype, "wolfkingCastleMapobjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return WolfkingCastleMapobject;
}(r.InteractiveMapobject);
exports.WolfkingCastleMapobject = c;
o.classImplementsInterfaces(c, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");