Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./90.js");
var u = require("./64.js");
var d = require("./124.js");
var p = createjs.Container;
var h = function (e) {
  function FactionCampMapobject() {
    return e.call(this) || this;
  }
  n.__extends(FactionCampMapobject, e);
  FactionCampMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new p();
      this.mapobjectVO.addEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap && this.worldmapObjectVO.ownerInfo) {
      this.objectContainer = this.vo.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.ownerInfo.isFactionProtected || this.worldmapObjectVO.ownerInfo.isNoobProtected) {
        if (this.worldmapObjectVO.isOwnMapobject) {
          this.objectContainer.addItem(this.getAsExternalClip("Faction_Protection_Own", this.assetFileURL(C.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
        } else {
          this.objectContainer.addItem(this.getAsExternalClip("Faction_Protection_Other", this.assetFileURL(C.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
        }
      }
      this.addMouseListener();
      this.addObjectContainer();
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0 && a.instanceOfClass(this.worldmapObjectVO, "FactionInteractiveMapobjectVO") && !this.worldmapObjectVO.isMyFaction) {
        this.showFlames();
      }
    }
  };
  FactionCampMapobject.prototype.getFlamesClip = function () {
    return this.getAsExternalClip("FactionCamp_FlamesLayer", this.assetFileURL(C.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT));
  };
  FactionCampMapobject.prototype.showRingMenu = function () {
    if (!this.vo.isDestroyed) {
      this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.SHOW_MENU, [this, c.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
      this.showOwnerLines();
    }
  };
  FactionCampMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  FactionCampMapobject.prototype.onMouseUp = function (t) {
    if (!this.vo.isDestroyed) {
      e.prototype.onMouseUp.call(this, t);
      this.showOwnerLines();
    }
  };
  FactionCampMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  FactionCampMapobject.prototype.onDoubleClick = function () {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, [this.mapobjectVO]));
  };
  FactionCampMapobject.prototype.remove = function () {
    this.mapobjectVO.removeEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    e.prototype.remove.call(this);
  };
  Object.defineProperty(FactionCampMapobject.prototype, "line1Content", {
    get: function () {
      var e = this.vo;
      var t = e.ownerInfo;
      if (t && !e.isDestroyed) {
        return new l.TextVO(g.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(t));
      } else {
        return new r.LocalizedTextVO("faction_camp");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.vo;
      var t = e.ownerInfo;
      if (t && !e.isDestroyed) {
        if (t.isRuin) {
          return new r.LocalizedTextVO("ruin");
        } else {
          return new l.TextVO(this.getLevelString());
        }
      } else if (e.isDestroyed && e.ownerInfo) {
        if (t.factionID == s.FactionConst.BLUE_FACTION) {
          return new r.LocalizedTextVO("blue_faction");
        } else {
          return new r.LocalizedTextVO("red_faction");
        }
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobject.prototype, "line3Content", {
    get: function () {
      var e = this.vo;
      if (e.ownerInfo && !e.isDestroyed) {
        if (e.ownerInfo.factionID == s.FactionConst.BLUE_FACTION) {
          return new r.LocalizedTextVO("blue_faction");
        } else {
          return new r.LocalizedTextVO("red_faction");
        }
      } else {
        return new r.LocalizedTextVO("mapobject_destroyed");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCampMapobject;
}(d.InteractiveMapobject);
exports.FactionCampMapobject = h;
var g = require("./117.js");
var C = require("./70.js");
o.classImplementsInterfaces(h, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");