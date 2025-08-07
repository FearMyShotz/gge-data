Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FactionLaneRenderHelper() {}
  FactionLaneRenderHelper.showLane = function (e, t, i, n, o) {
    var s;
    if (n === undefined) {
      n = null;
    }
    if (o === undefined) {
      o = null;
    }
    var r = a.int(Number.MAX_VALUE);
    var l = a.int(t.length - 1);
    (s = []).push(t[l]);
    e.showLines(i.absAreaPos, s, FactionLaneRenderHelper.getCapitalConnectionColor(i), false, true);
    l = 0;
    for (; l < t.length - 1; l++) {
      s = [];
      var c = t[l];
      var u = t[l + 1];
      s.push(u);
      if (l == 0 && FactionLaneRenderHelper.factionEventVO.attackableCamps.indexOf(c.specialCampID) > -1) {
        r = c.specialCampID;
      } else if (FactionLaneRenderHelper.factionEventVO.attackableCamps.indexOf(u.specialCampID) > -1) {
        r = u.specialCampID;
      }
      e.showLines(c.absAreaPos, s, FactionLaneRenderHelper.getTowerConnectionColor(c, u, r), false, false);
    }
    if (n && o) {
      for (var d = 0; d < o.length; d++) {
        s = [];
        var p = o[d];
        s.push(p);
        e.showLines(n.absAreaPos, s, FactionLaneRenderHelper.getVillageConnectionColor(r, p), false, false);
      }
    }
  };
  FactionLaneRenderHelper.getTowerConnectionColor = function (e, t, i) {
    if (e.specialCampID >= i) {
      return s.ClientConstColor.GENERIC_WHITE;
    } else if (t.specialCampID == i) {
      return s.ClientConstColor.GENERIC_BLACK;
    } else {
      return s.ClientConstColor.GENERIC_BRIGHT_YELLOW;
    }
  };
  FactionLaneRenderHelper.getCapitalConnectionColor = function (e) {
    if (FactionLaneRenderHelper.factionEventVO.attackableCamps.indexOf(e) > -1) {
      return s.ClientConstColor.GENERIC_BLACK;
    }
    var t = false;
    for (var i = 0, n = FactionLaneRenderHelper.factionEventVO.attackableCamps; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined && !FactionLaneRenderHelper.factionEventVO.getCapitalByID(o) && e.belongsToLane(FactionLaneRenderHelper.factionEventVO.getTowerByID(o).laneID)) {
        t = true;
        break;
      }
    }
    if (t) {
      return s.ClientConstColor.GENERIC_WHITE;
    } else {
      return s.ClientConstColor.GENERIC_BRIGHT_YELLOW;
    }
  };
  FactionLaneRenderHelper.getVillageConnectionColor = function (e, t) {
    if (t.canBeAttacked) {
      return s.ClientConstColor.GENERIC_BLACK;
    } else if (t.towerID < e) {
      return s.ClientConstColor.GENERIC_BRIGHT_YELLOW;
    } else {
      return s.ClientConstColor.GENERIC_WHITE;
    }
  };
  Object.defineProperty(FactionLaneRenderHelper, "factionEventVO", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  return FactionLaneRenderHelper;
}();
exports.FactionLaneRenderHelper = n;
var o = require("./5.js");
var a = require("./6.js");
var s = require("./16.js");
var r = require("./4.js");