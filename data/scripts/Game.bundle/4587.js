Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./32.js");
var c = require("./90.js");
var u = require("./15.js");
var d = require("./64.js");
var p = require("./124.js");
var h = createjs.Container;
var g = function (e) {
  function ABGAllianceTowerMapobject() {
    return e.call(this) || this;
  }
  n.__extends(ABGAllianceTowerMapobject, e);
  ABGAllianceTowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new h();
      this.mapobjectVO.addEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawABGAllianceTower();
  };
  ABGAllianceTowerMapobject.prototype.drawABGAllianceTower = function () {
    this.clearObjectContainer();
    this.objectContainer = this.abgAllianceTowerVO.getDisplayObjectClipContainer(false, null, false);
    this.addObjectContainer();
    this.addMouseListener();
  };
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "abgAllianceTowerVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  ABGAllianceTowerMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.SHOW_MENU, [this, c.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
    this.showOwnerLines();
  };
  ABGAllianceTowerMapobject.prototype.showOwnerLines = function () {
    this.worldmapRenderer.showLines(this.abgAllianceTowerVO.absAreaPos, this.abgAllianceTowerVO.connections, 0);
  };
  ABGAllianceTowerMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  ABGAllianceTowerMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  ABGAllianceTowerMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  ABGAllianceTowerMapobject.prototype.remove = function () {
    u.CastleBasicController.getInstance().removeEventListener(l.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    this.mapobjectVO.removeEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    e.prototype.remove.call(this);
  };
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "line1Content", {
    get: function () {
      return new a.TextVO(this.abgAllianceTowerVO.areaNameString);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "line2Content", {
    get: function () {
      return new a.TextVO(this.abgAllianceTowerVO.allianceName);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerMapobject.prototype, "line3Content", {
    get: function () {
      return new s.LocalizedTextVO("allianceTower_worldmap_tooltip_Maya", [r.Localize.number(this.abgAllianceTowerVO.currentTowerPoints)]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ABGAllianceTowerMapobject;
}(p.InteractiveMapobject);
exports.ABGAllianceTowerMapobject = g;
o.classImplementsInterfaces(g, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");