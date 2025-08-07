Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./90.js");
var c = require("./4.js");
var u = require("./27.js");
var d = require("./64.js");
var p = require("./124.js");
var h = createjs.Container;
var g = function (e) {
  function MonumentMapobject() {
    return e.call(this) || this;
  }
  n.__extends(MonumentMapobject, e);
  MonumentMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new h();
      this.mapobjectVO.addEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawMonument();
  };
  MonumentMapobject.prototype.drawMonument = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.monumentMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  Object.defineProperty(MonumentMapobject.prototype, "monumentMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  MonumentMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.SHOW_MENU, [this, l.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  MonumentMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  MonumentMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  MonumentMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  Object.defineProperty(MonumentMapobject.prototype, "line1Content", {
    get: function () {
      return new s.LocalizedTextVO(MonumentMapobject.MONUMENT_TYPE_TOOLTIPS[this.monumentMapObjectVO.monumentType], [this.monumentMapObjectVO.level]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobject.prototype, "line2Content", {
    get: function () {
      return new s.LocalizedTextVO("monument_worldmap_tooltip", [this.monumentMapObjectVO.landmarkBonus]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MonumentMapobject.prototype, "line3Content", {
    get: function () {
      var e;
      var t = u.CastleTimeStringHelper.getEventTimeString(c.CastleModel.monumentsData.remainingResetTime);
      var i = a.Localize.text("dialog_monument_resetTimer_tooltip", [t]);
      if (this.monumentMapObjectVO.isPlayerOwned) {
        var n = this.monumentMapObjectVO.ownerInfo.isInAlliance ? this.getAllianceString() : this.monumentMapObjectVO.ownerInfo.playerName;
        e = a.Localize.text("dialog_landmarkList_Owner") + ": " + n + "\n" + i;
      } else {
        e = i;
      }
      return new r.TextVO(e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MonumentMapobject.MONUMENT_TYPE_TOOLTIPS = ["monument_small", "monument_big"];
  return MonumentMapobject;
}(p.InteractiveMapobject);
exports.MonumentMapobject = g;
o.classImplementsInterfaces(g, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");