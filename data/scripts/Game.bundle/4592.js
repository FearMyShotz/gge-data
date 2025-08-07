Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./576.js");
var l = require("./44.js");
var c = require("./106.js");
var u = require("./1150.js");
var d = function (e) {
  function CapitalMapobject() {
    return e.call(this) || this;
  }
  n.__extends(CapitalMapobject, e);
  CapitalMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("Capital");
    return t || e.prototype.getFlamesClip.call(this);
  };
  CapitalMapobject.prototype.drawOutpost = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      if (!this.worldmapObjectVO.ownerInfo || this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.isOutpostOwner) {
        this.objectContainer = this.worldmapObjectVO.getDisplayObjectClipContainer(false, null, false);
      } else {
        this.objectContainer = this.capitalVO.getDisplayObjectClipContainer(true, null, false);
        this.setOccupiedMarker();
      }
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      if (this.occupiedMarker && this.disp.contains(this.occupiedMarker.disp)) {
        this.disp.setChildIndex(this.occupiedMarker.disp, this.disp.numChildren - 1);
      }
      this.addMouseListener();
      this.disp.dispatchEvent(new r.VisualMapObjectEvent(r.VisualMapObjectEvent.VE_UPDATED, [this]));
    }
  };
  Object.defineProperty(CapitalMapobject.prototype, "ignorePeaceProtection", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.OutpostMapobject.prototype, "ignorePeaceProtection").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "capitalVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "line1Content", {
    get: function () {
      var e = this.capitalVO.ownerInfo;
      if (e && !e.isOutpostOwner) {
        return new a.TextVO(c.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.capitalVO.ownerInfo));
      } else {
        return new a.TextVO(this.capitalVO.areaNameString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.OutpostMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.capitalVO.ownerInfo;
      if (e && e.isRuin) {
        return new s.LocalizedTextVO("ruin");
      } else {
        return new s.LocalizedTextVO(l.SpecialServerHelper.checkTextIDForSkinText("capital_worldmap_tooltip"));
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.OutpostMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapitalMapobject.prototype, "line3Content", {
    get: function () {
      var e = this.capitalVO.ownerInfo;
      if (e && !e.isOutpostOwner) {
        return new a.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.OutpostMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CapitalMapobject;
}(u.OutpostMapobject);
exports.CapitalMapobject = d;
o.classImplementsInterfaces(d, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");