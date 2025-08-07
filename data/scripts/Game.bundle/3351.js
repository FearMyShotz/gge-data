Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./28.js");
var l = require("./30.js");
var c = require("./4.js");
var u = require("./79.js");
var d = function (e) {
  function FakeIslandKingdomEvent() {
    var t = e.call(this) || this;
    t._eventId = a.EventConst.EVENTTYPE_ISLAND_KINGDOM;
    t._endTimestamp = l.CachedTimer.getCachedTimer() + c.CastleModel.kingdomData.getKingdomVOByID(s.WorldIsland.KINGDOM_ID).resetTime * r.ClientConstTime.SEC_2_MILLISEC;
    return t;
  }
  n.__extends(FakeIslandKingdomEvent, e);
  Object.defineProperty(FakeIslandKingdomEvent.prototype, "isActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FakeIslandKingdomEvent.prototype, "eventBuildingNameId", {
    get: function () {
      return "event_title_102";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FakeIslandKingdomEvent;
}(u.ASpecialEventVO);
exports.FakeIslandKingdomEvent = d;
o.classImplementsInterfaces(d, "IEventOverviewable");