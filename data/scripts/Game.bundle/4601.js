Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./90.js");
var u = require("./64.js");
var d = require("./124.js");
var p = createjs.Container;
var h = function (e) {
  function FactionInvasionCampMapObject() {
    return e.call(this) || this;
  }
  n.__extends(FactionInvasionCampMapObject, e);
  FactionInvasionCampMapObject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new p();
      this.mapobjectVO.addEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawCamp();
  };
  FactionInvasionCampMapObject.prototype.drawCamp = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.factionInvasionMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        if (this.disp.visible) {
          this.disp.visible = false;
          g.CastleLayoutManager.getInstance().hideWorldMapCastleInfoMenuWithMapObject(this);
        }
      } else {
        this.disp.visible = true;
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  FactionInvasionCampMapObject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.SHOW_MENU, [this, c.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  FactionInvasionCampMapObject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  FactionInvasionCampMapObject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "factionInvasionMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "line1Content", {
    get: function () {
      var e = this.vo;
      var t = e.ownerInfo;
      if (e.ownerInfo) {
        if (t.factionID == s.FactionConst.BLUE_FACTION) {
          return new l.LocalizedTextVO("dialog_berimondInvasion_blueCamp");
        } else {
          return new l.LocalizedTextVO("dialog_berimondInvasion_redCamp");
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "line2Content", {
    get: function () {
      return new l.LocalizedTextVO(o.GenericTextIds.VALUE_ASSIGN_COLON, [r.Localize.text("level"), this.factionInvasionMapObjectVO.dungeonLevel]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObject.prototype, "line3Content", {
    get: function () {
      var e = this.vo;
      if (e.ownerInfo) {
        if (e.ownerInfo.factionID == s.FactionConst.BLUE_FACTION) {
          return new l.LocalizedTextVO("dialog_berimondInvasion_blueFaction_name");
        } else {
          return new l.LocalizedTextVO("dialog_berimondInvasion_redFaction_name");
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionInvasionCampMapObject;
}(d.InteractiveMapobject);
exports.FactionInvasionCampMapObject = h;
var g = require("./17.js");
a.classImplementsInterfaces(h, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");