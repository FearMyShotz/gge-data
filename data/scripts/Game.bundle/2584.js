Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./1414.js");
var u = require("./245.js");
var d = function (e) {
  function NomadKhanCampMapObjectVO() {
    var t = e.call(this) || this;
    t.name = "NomadKhanCamp";
    t.type = "-";
    return t;
  }
  n.__extends(NomadKhanCampMapObjectVO, e);
  NomadKhanCampMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new h.CastleDisplayObjectClipContainer();
    n.addItem(this.getAsExternalClip("NomadKhanCamp_Mapobject"));
    return n;
  };
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  NomadKhanCampMapObjectVO.prototype.parseData = function (t) {
    e.prototype.parseData.call(this, t);
    this._ownerInfo = l.CastleModel.otherPlayerData.getOwnerInfoVO(a.DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID);
  };
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!NomadKhanCampMapObjectVO.nomadEventVO && this._isVisibleOnMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "areaNameString", {
    get: function () {
      return r.Localize.text("kingdom_khanCamp_castleName_0");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapObjectVO, "nomadEventVO", {
    get: function () {
      return l.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadKhanCampMapObjectVO.prototype, "eventType", {
    get: function () {
      return s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AAllianceInvasionCampMapObjectVO.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return NomadKhanCampMapObjectVO;
}(c.AAllianceInvasionCampMapObjectVO);
exports.NomadKhanCampMapObjectVO = d;
var p = require("./101.js");
var h = require("./108.js");
o.classImplementsInterfaces(d, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");