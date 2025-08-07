Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./90.js");
var r = require("./64.js");
var l = require("./124.js");
var c = createjs.Container;
var u = function (e) {
  function KingstowerMapobject() {
    return e.call(this) || this;
  }
  n.__extends(KingstowerMapobject, e);
  KingstowerMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new c();
      this.mapobjectVO.addEventListener(r.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawKingstower();
  };
  KingstowerMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("Kingstower");
    return t || e.prototype.getFlamesClip.call(this);
  };
  KingstowerMapobject.prototype.drawKingstower = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.kingsTowerMapObjectVO.getDisplayObjectClipContainer(true, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  KingstowerMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new s.CastleWorldmapEvent(s.CastleWorldmapEvent.SHOW_MENU, [this, s.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  KingstowerMapobject.prototype.onRollOver = function (t) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new s.CastleWorldmapEvent(s.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      e.prototype.onRollOver.call(this, t);
    }
  };
  KingstowerMapobject.prototype.onRollOut = function (t) {
    this.worldmapRenderer.dispatchEvent(new s.CastleWorldmapEvent(s.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    e.prototype.onRollOut.call(this, t);
  };
  KingstowerMapobject.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    this.showOwnerLines();
  };
  Object.defineProperty(KingstowerMapobject.prototype, "kingsTowerMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobject.prototype, "line1Content", {
    get: function () {
      if (this.kingsTowerMapObjectVO.isPlayerOwned) {
        return new a.TextVO(d.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.kingsTowerMapObjectVO.ownerInfo));
      } else {
        return new a.TextVO(this.kingsTowerMapObjectVO.areaNameString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.InteractiveMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobject.prototype, "line2Content", {
    get: function () {
      return new a.TextVO(this.kingsTowerMapObjectVO.worldmapToolTipDescription);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.InteractiveMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingstowerMapobject.prototype, "line3Content", {
    get: function () {
      if (this.kingsTowerMapObjectVO.isPlayerOwned) {
        return new a.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.InteractiveMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return KingstowerMapobject;
}(l.InteractiveMapobject);
exports.KingstowerMapobject = u;
o.classImplementsInterfaces(u, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var d = require("./117.js");