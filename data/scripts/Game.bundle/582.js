Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = function (e) {
  function FactionInteractiveMapobjectVO() {
    var t = this;
    t._isDestroyed = false;
    t._specialCampID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(FactionInteractiveMapobjectVO, e);
  FactionInteractiveMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    if (t.SPC) {
      this._specialCampID = r.int(t.SPC);
    }
  };
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "hasNoCampsLeft", {
    get: function () {
      return l.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "isDestroyed", {
    get: function () {
      return this._isDestroyed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "isMyFaction", {
    get: function () {
      var e = o.castAs(l.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      return !!e && this.ownerInfo.factionID == e.ownFaction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInteractiveMapobjectVO.prototype, "specialCampID", {
    get: function () {
      return this._specialCampID;
    },
    enumerable: true,
    configurable: true
  });
  return FactionInteractiveMapobjectVO;
}(require("./205.js").ContainerBuilderMapobjectVO);
exports.FactionInteractiveMapobjectVO = c;
a.classImplementsInterfaces(c, "IDetailViewAble", "IWorldmapObjectVO");