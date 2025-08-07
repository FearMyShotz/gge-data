Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./32.js");
var c = require("./90.js");
var u = require("./15.js");
var d = require("./64.js");
var p = require("./124.js");
var h = createjs.Container;
var g = function (e) {
  function DaimyoTownshipMapobject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DaimyoTownshipMapobject, e);
  DaimyoTownshipMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new h();
      this.mapobjectVO.addEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawDaimyoTownship();
    if (this.isOwnMapobject) {
      u.CastleBasicController.getInstance().addEventListener(l.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  DaimyoTownshipMapobject.prototype.drawDaimyoTownship = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.daimyoTownshipMapobjectVO.getDisplayObjectClipContainer(true, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  DaimyoTownshipMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("DaimyoTownship_Cooldown");
  };
  DaimyoTownshipMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.SHOW_MENU, [this, c.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  DaimyoTownshipMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  DaimyoTownshipMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(DaimyoTownshipMapobject.prototype, "line1Content", {
    get: function () {
      return new r.LocalizedTextVO("township");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapobject.prototype, "line2Content", {
    get: function () {
      return new r.LocalizedTextVO("rank_value", [this.daimyoTownshipMapobjectVO.daimyoXmlVO.rank]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapobject.prototype, "line3Content", {
    get: function () {
      return new r.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, [s.Localize.text("level"), this.daimyoTownshipMapobjectVO.daimyoXmlVO.level]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipMapobject.prototype, "daimyoTownshipMapobjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoTownshipMapobject;
}(p.InteractiveMapobject);
exports.DaimyoTownshipMapobject = g;
a.classImplementsInterfaces(g, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");