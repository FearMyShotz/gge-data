Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./90.js");
var c = require("./4.js");
var u = require("./64.js");
var d = require("./124.js");
var p = createjs.Container;
var h = function (e) {
  function NomadKhanCampMapobject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(NomadKhanCampMapobject, e);
  NomadKhanCampMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new p();
      this.mapobjectVO.addEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawNomad();
  };
  NomadKhanCampMapobject.prototype.drawNomad = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.nomadKhanCampMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  NomadKhanCampMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  NomadKhanCampMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  NomadKhanCampMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  Object.defineProperty(NomadKhanCampMapobject.prototype, "nomadKhanCampMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapobject.prototype, "line2Content", {
    get: function () {
      return new r.LocalizedTextVO("level_placeholder", [this.nomadKhanCampMapObjectVO.dungeonLevel]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapobject.prototype, "line3Content", {
    get: function () {
      var e = o.castAs(c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE), "AllianceNomadInvasionEventVO");
      if (e) {
        if (this.nomadKhanCampMapObjectVO.allianceInvasionCampNode.rageNeededForLevelUp < 1) {
          return new r.LocalizedTextVO("levelCapReached");
        } else {
          return new r.LocalizedTextVO("khanCamp_rageLevelUp_tooltip", [e.allianceRage, this.nomadKhanCampMapObjectVO.allianceInvasionCampNode.rageNeededForLevelUp]);
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
  return NomadKhanCampMapobject;
}(d.InteractiveMapobject);
exports.NomadKhanCampMapobject = h;
a.classImplementsInterfaces(h, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");