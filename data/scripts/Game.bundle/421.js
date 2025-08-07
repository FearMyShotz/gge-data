Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./153.js");
var s = require("./44.js");
var r = require("./4.js");
var l = require("./16.js");
var c = function () {
  function ClientConstIsoChangeEventSkin() {}
  ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom = function (e, t = true) {
    var i = "";
    if (s.SpecialServerHelper.useSkin && r.CastleModel.kingdomData.activeKingdomID == a.KingdomEnum.CLASSIC.id) {
      return (t ? "_" : "") + s.SpecialServerHelper.skinName;
    }
    if (r.CastleModel.specialEventData.isEventActive(n.EventConst.EVENTTYPE_EVENT_SKIN)) {
      var l = r.CastleModel.specialEventData.getActiveEventByEventId(n.EventConst.EVENTTYPE_EVENT_SKIN);
      var c = o.int(r.CastleModel.kingdomData.activeKingdomID);
      if (l.kingdomIDs.indexOf(c) > -1 && r.CastleModel.userData.userLevel >= l.minLevel && (e && l.hasIsoSkin || !e && l.hasWorldMapSkin)) {
        i = (t ? "_" : "") + l.skinString;
      }
    }
    return i;
  };
  ClientConstIsoChangeEventSkin.getSkinnedBackgroundColor = function (e) {
    if (r.CastleModel.specialEventData.isEventActive(n.EventConst.EVENTTYPE_EVENT_SKIN)) {
      var t = r.CastleModel.specialEventData.getActiveEventByEventId(n.EventConst.EVENTTYPE_EVENT_SKIN);
      var i = o.int(r.CastleModel.kingdomData.activeKingdomID);
      if (t.kingdomIDs.indexOf(i) > -1 && r.CastleModel.userData.userLevel >= t.minLevel && (e && t.hasIsoSkin || !e && t.hasWorldMapSkin)) {
        return t.getBackgroundColor(i, e);
      }
    }
    return l.ClientConstColor.USE_DEFAULT_COLOR;
  };
  return ClientConstIsoChangeEventSkin;
}();
exports.ClientConstIsoChangeEventSkin = c;