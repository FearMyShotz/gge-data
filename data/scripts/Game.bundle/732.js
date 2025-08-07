Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./153.js");
var l = require("./273.js");
var c = require("./109.js");
var u = require("./345.js");
var d = require("./245.js");
var p = require("./205.js");
var h = function (e) {
  function EventCampMapobjectVO() {
    var t = e.call(this) || this;
    t._objectId = -24;
    t._areaType = a.WorldConst.AREA_TYPE_TREASURE_CAMP;
    return t;
  }
  n.__extends(EventCampMapobjectVO, e);
  EventCampMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new c.CastleDisplayObjectClipContainer();
    this.mapID = l.TMapHelper.getMapIDForGraphics(this.mapID);
    var o = "SeasonCamp_Mapobject_" + this.mapID;
    var a = this.getAsExternalClip(o, this.assetFileURL("SeasonEvent_" + this.mapID), this.getClipColor(this.ownerInfo));
    n.addItem(a);
    return n;
  };
  Object.defineProperty(EventCampMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return s.Localize.text("dialog_seasonEvent_2_Camp");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventCampMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._mapID = e[1] ? e[1] : 22;
  };
  Object.defineProperty(EventCampMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return u.UnitBaseLocationEnum.HOME_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventCampMapobjectVO.prototype, "mapID", {
    get: function () {
      return Object.getOwnPropertyDescriptor(d.BasicMapobjectVO.prototype, "mapID").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicMapobjectVO.prototype, "mapID").set.call(this, e);
      var t = r.KingdomEnum.getTypeById(this.mapID);
      if (t) {
        this._kingdomID = t.id;
      }
    },
    enumerable: true,
    configurable: true
  });
  return EventCampMapobjectVO;
}(p.ContainerBuilderMapobjectVO);
exports.EventCampMapobjectVO = h;
var g = require("./101.js");
o.classImplementsInterfaces(h, "IDetailViewAble", "IWorldmapObjectVO");