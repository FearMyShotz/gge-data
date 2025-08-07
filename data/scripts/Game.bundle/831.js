Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LongTermPointEventClientConst() {}
  LongTermPointEventClientConst.__initialize_static_members = function () {
    var e;
    LongTermPointEventClientConst.SEASON_PREFIX = "LongTermPointEvent";
    LongTermPointEventClientConst.SEASON_SUFFIX = "SkinComponent";
    LongTermPointEventClientConst.EVENT_PREFIX = "LongtermPointEvent";
    LongTermPointEventClientConst.GENERAL_TAB_ID = 0;
    LongTermPointEventClientConst.MAX_AMOUNT_OF_TABS = 5;
    LongTermPointEventClientConst.teaserPrefix = "LongTermPointEvent_Teaser_";
    LongTermPointEventClientConst.eventAssetFilePrefix = "LongtermPointEvent";
    LongTermPointEventClientConst.iconPrefix = "ltpe_icon_";
    LongTermPointEventClientConst.tabPrefix = "ltpe_tab_";
    LongTermPointEventClientConst.tabToolTipPrefix = "dialog_longPointsEvent_tab_";
    LongTermPointEventClientConst.eventNamePrefix = "dialog_longPointsEvent_eventcamp_header";
    LongTermPointEventClientConst.eventDescriptionPrefix = "dialog_longPointsEvent_eventcamp_desc";
    LongTermPointEventClientConst.pointEventIDs = [o.EventConst.EVENTTYPE_SAMURAI_INVASION, o.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, o.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, o.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, o.EventConst.EVENTTYPE_FACTION_INVASION];
    (e = new Map()).set(o.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, "Alien");
    e.set(o.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE, "RedAlien");
    e.set(o.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, "Nomad");
    e.set(o.EventConst.EVENTTYPE_SAMURAI_INVASION, "Samurai");
    e.set(o.EventConst.EVENTTYPE_FACTION_INVASION, "Faction");
    LongTermPointEventClientConst.pointEventAssetNames = e;
  };
  return LongTermPointEventClientConst;
}();
exports.LongTermPointEventClientConst = n;
var o = require("./5.js");
n.__initialize_static_members();