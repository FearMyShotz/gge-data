Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./90.js");
var c = require("./4.js");
var u = require("./64.js");
var d = require("./124.js");
var p = createjs.Container;
var h = function (e) {
  function ABGResourceTowerMapobject() {
    return e.call(this) || this;
  }
  n.__extends(ABGResourceTowerMapobject, e);
  ABGResourceTowerMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("ResourceTower");
    return t || e.prototype.getFlamesClip.call(this);
  };
  ABGResourceTowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new p();
      this.mapobjectVO.addEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawResourceTower();
  };
  ABGResourceTowerMapobject.prototype.drawResourceTower = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.abgResourceTowerMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  ABGResourceTowerMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  ABGResourceTowerMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  ABGResourceTowerMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "abgResourceTowerMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "line2Content", {
    get: function () {
      return new s.LocalizedTextVO("level_placeholder", [this.abgResourceTowerMapObjectVO.dungeonLevel]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "line3Content", {
    get: function () {
      if (this.abgAlliCampCamp.isMaxLevel) {
        return new s.LocalizedTextVO("dialog_alliance_maxUpgradeLevel");
      }
      var e = c.CastleModel.allianceInvasionCampData.getAllianceCampByLevel(a.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND, this.abgAlliCampCamp.level + 1);
      if (!e) {
        return new s.LocalizedTextVO("dialog_alliance_maxUpgradeLevel");
      }
      var t = r.int(e.countVictory - this.abgResourceTowerMapObjectVO.victoryCount);
      if (t > 1) {
        return new s.LocalizedTextVO("dungeonToolTip_LevelUp_Plural", [t, e.dungeonlevel]);
      } else {
        return new s.LocalizedTextVO("dungeonToolTip_LevelUp_Singular", [t, e.dungeonlevel]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGResourceTowerMapobject.prototype, "abgAlliCampCamp", {
    get: function () {
      return this.abgResourceTowerMapObjectVO.allianceInvasionCampNode;
    },
    enumerable: true,
    configurable: true
  });
  return ABGResourceTowerMapobject;
}(d.InteractiveMapobject);
exports.ABGResourceTowerMapobject = h;
o.classImplementsInterfaces(h, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");