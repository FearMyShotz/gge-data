Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./90.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./64.js");
var h = require("./124.js");
var g = createjs.Container;
var C = function (e) {
  function LaboratoryMapobject() {
    return e.call(this) || this;
  }
  n.__extends(LaboratoryMapobject, e);
  LaboratoryMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new g();
      this.mapobjectVO.addEventListener(p.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawLaboratory();
  };
  LaboratoryMapobject.prototype.drawLaboratory = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      o.debug("redrawing laboratory");
      this.objectContainer = this.laboratoryMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  LaboratoryMapobject.prototype.clearObjectContainer = function () {
    o.debug("clearing laboratory");
    e.prototype.clearObjectContainer.call(this);
  };
  Object.defineProperty(LaboratoryMapobject.prototype, "laboratoryMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  LaboratoryMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.SHOW_MENU, [this, c.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  LaboratoryMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  LaboratoryMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new c.CastleWorldmapEvent(c.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  LaboratoryMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  Object.defineProperty(LaboratoryMapobject.prototype, "line1Content", {
    get: function () {
      return new r.LocalizedTextVO("laboratory_level", [this.laboratoryMapObjectVO.level]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobject.prototype, "line2Content", {
    get: function () {
      return new r.LocalizedTextVO("laboratory_worldmap_tooltip", [this.laboratoryMapObjectVO.landmarkBonus]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobject.prototype, "line3Content", {
    get: function () {
      var e;
      var t = d.CastleTimeStringHelper.getEventTimeString(u.CastleModel.laboratoryData.remainingResetTime);
      var i = s.Localize.text("dialog_laboratory_resetTimer_tooltip", [t]);
      if (this.laboratoryMapObjectVO.isPlayerOwned) {
        var n = this.laboratoryMapObjectVO.ownerInfo.isInAlliance ? this.getAllianceString() : this.laboratoryMapObjectVO.ownerInfo.playerName;
        e = s.Localize.text("dialog_landmarkList_Owner") + ": " + n + "\n" + i;
      } else {
        e = i;
      }
      return new l.TextVO(e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LaboratoryMapobject;
}(h.InteractiveMapobject);
exports.LaboratoryMapobject = C;
a.classImplementsInterfaces(C, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");