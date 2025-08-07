Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = require("./576.js");
var p = require("./53.js");
var h = require("./44.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./1150.js");
var m = function (e) {
  function MetropolMapobject() {
    return e.call(this) || this;
  }
  n.__extends(MetropolMapobject, e);
  MetropolMapobject.prototype.drawOutpost = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      if (!this.worldmapObjectVO.ownerInfo || this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.isOutpostOwner) {
        this.objectContainer = this.worldmapObjectVO.getDisplayObjectClipContainer(false, null, false);
      } else {
        this.objectContainer = this.metropolVO.getDisplayObjectClipContainer(true, null, false);
        this.setOccupiedMarker();
      }
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
      this.disp.dispatchEvent(new d.VisualMapObjectEvent(d.VisualMapObjectEvent.VE_UPDATED, [this]));
      if (this.occupiedMarker && this.disp.contains(this.occupiedMarker.disp)) {
        this.disp.setChildIndex(this.occupiedMarker.disp, this.disp.numChildren - 1);
      }
    }
  };
  MetropolMapobject.prototype.getFlamesClip = function () {
    var t = this.getABGFlamesClip("Metropol");
    return t || e.prototype.getFlamesClip.call(this);
  };
  Object.defineProperty(MetropolMapobject.prototype, "ignorePeaceProtection", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.OutpostMapobject.prototype, "ignorePeaceProtection").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "metropolVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "line1Content", {
    get: function () {
      var e = this.metropolVO.ownerInfo;
      if (e && !e.isOutpostOwner) {
        return new s.TextVO(f.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.metropolVO.ownerInfo));
      } else {
        return new s.TextVO(this.metropolVO.areaNameString);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.OutpostMapobject.prototype, "line1Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "line2Content", {
    get: function () {
      var e = this.metropolVO.ownerInfo;
      if (e && e.isRuin) {
        return new r.LocalizedTextVO("ruin");
      } else {
        return new r.LocalizedTextVO(h.SpecialServerHelper.checkTextIDForSkinText("metropol_worldmap_tooltip"), [this.metropolVO.abgMaxInfluencePoints]);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.OutpostMapobject.prototype, "line2Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MetropolMapobject.prototype, "line3Content", {
    get: function () {
      var e = this.metropolVO.ownerInfo;
      if (p.ABGHelper.isOnABGAndCollector) {
        if (e && !e.isOutpostOwner) {
          return new r.LocalizedTextVO("beyondTheHorizon_cityStates_countdown", [C.CastleTimeStringHelper.getFullTimeString(this.metropolVO.abgMineOutRemainingSeconds)]);
        }
        var t = g.CastleModel.mineData.getMineVOByObjectID(26);
        var i = c.int(t.maxInfluencePoints / (t.amountInfluencePerMinute * (1 / u.ClientConstTime.MINUTES_2_SEC)));
        return new r.LocalizedTextVO("beyondTheHorizon_cityStates_occupationTime", [o.TimeStringHelper.getTimeToString(i, o.TimeStringHelper.ONE_TIME_HOURS_FORMAT, l.Localize.text)]);
      }
      if (e && !e.isOutpostOwner) {
        return new s.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.OutpostMapobject.prototype, "line3Content").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MetropolMapobject;
}(_.OutpostMapobject);
exports.MetropolMapobject = m;
a.classImplementsInterfaces(m, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var f = require("./106.js");