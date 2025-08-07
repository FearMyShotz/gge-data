Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./4.js");
var l = require("./22.js");
var c = require("./79.js");
var u = require("./2768.js");
var d = require("./2769.js");
var p = require("./2770.js");
var h = require("./2771.js");
var g = function (e) {
  function EventSkinEventVO() {
    var t = this;
    t._theme = -1;
    t._hasIsoSkin = false;
    t._hasWorldMapSkin = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(EventSkinEventVO, e);
  EventSkinEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    this._theme = a.int(t.T);
  };
  EventSkinEventVO.prototype.parseAdditionalXmlFromRoot = function (e) {
    if (!(this._theme < 0)) {
      var t = EventSkinEventVO.getDestXmlNodeFromSkinId(e, this._theme);
      if (t) {
        var i = l.CastleXMLUtils.getValueOrDefault("kIDs", t, "0").split(",");
        this._kingdomIDs = [];
        for (var n = 0; n < i.length; n++) {
          this._kingdomIDs[n] = parseInt(i[n]);
        }
        this._skinString = l.CastleXMLUtils.getValueOrDefault("eventType", t, "");
        this._hasIsoSkin = s.ClientConstUtils.getBooleanFromString(l.CastleXMLUtils.getValueOrDefault("hasIsoSkin", t, "0"));
        this._hasWorldMapSkin = s.ClientConstUtils.getBooleanFromString(l.CastleXMLUtils.getValueOrDefault("hasWorldMapSkin", t, "0"));
        this._minLevel = 0;
        this.createEventColorScheme();
      }
    }
  };
  EventSkinEventVO.getDestXmlNodeFromSkinId = function (e, t) {
    var i = e.eventSkins;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && t == parseInt(a.eventSkinID || "")) {
          return a;
        }
      }
    }
    return null;
  };
  EventSkinEventVO.prototype.createEventColorScheme = function () {
    switch (this._skinString) {
      case EventSkinEventVO.SKIN_TYPE_WINTER:
        this.skinEventColors = new p.EventSkinColorsWinter();
        break;
      case EventSkinEventVO.SKIN_TYPE_HALLOWEEN:
        this.skinEventColors = new d.EventSkinColorsHalloween();
        break;
      case EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE:
        this.skinEventColors = new h.EventSkinColorsWinterOffensive();
        break;
      default:
        this.skinEventColors = new u.EventSkinColorsDefault();
    }
  };
  EventSkinEventVO.prototype.onDestroy = function () {
    this.refreshWorldMap();
  };
  Object.defineProperty(EventSkinEventVO.prototype, "theme", {
    get: function () {
      return this._theme;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventSkinEventVO.prototype, "skinString", {
    get: function () {
      return this._skinString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventSkinEventVO.prototype, "hasIsoSkin", {
    get: function () {
      return this._hasIsoSkin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventSkinEventVO.prototype, "hasWorldMapSkin", {
    get: function () {
      return this._hasWorldMapSkin;
    },
    enumerable: true,
    configurable: true
  });
  EventSkinEventVO.prototype.getBackgroundColor = function (e, t) {
    if (t) {
      return this.skinEventColors.getIsoBackgroundColor(e);
    } else {
      return this.skinEventColors.getWorldmapBackgroundColor(e);
    }
  };
  EventSkinEventVO.prototype.canUseIsoSkin = function () {
    return !!C.Iso.data && !!C.Iso.data.areaData && this.kingdomIDs.indexOf(C.Iso.data.areaData.areaInfo.kingdomID) >= 0 && this.hasIsoSkin && r.CastleModel.userData.userLevel >= this.minLevel && r.CastleModel.userData.userLevel <= this.maxLevel;
  };
  EventSkinEventVO.SKIN_TYPE_WINTER = "Winter";
  EventSkinEventVO.SKIN_TYPE_HALLOWEEN = "Halloween";
  EventSkinEventVO.SKIN_TYPE_CHRISTMAS = "Christmas";
  EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE = "WinterOffensive";
  return EventSkinEventVO;
}(c.ASpecialEventVO);
exports.EventSkinEventVO = g;
o.classImplementsInterfaces(g, "IEventOverviewable");
var C = require("./34.js");