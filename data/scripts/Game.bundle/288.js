Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./24.js");
var s = require("./5.js");
var r = require("./4.js");
var l = function () {
  function DifficultyScalingHelper() {}
  DifficultyScalingHelper.addDifficultyIcon = function (e, t, i, s, r) {
    n.MovieClipHelper.clearMovieClip(e);
    var l = "EventDifficulty_" + t.name;
    var c = new a.CastleGoodgameExternalClip(l, DifficultyScalingHelper.assetFileURL(l), null, 0, false);
    c.clipSizeComponent = new o.ClipSizeComponent(i, s);
    c.recycleAsset = false;
    e.addChild(c);
    if (r) {
      r.mouseChildren = false;
      r.toolTipText = t.name_textID;
    }
  };
  DifficultyScalingHelper.addTeaserImage = function (e, t) {
    var i;
    n.MovieClipHelper.clearMovieClip(e);
    switch (t % 100) {
      case 1:
      case 2:
        i = 1;
        break;
      case 3:
      case 4:
        i = 2;
        break;
      case 5:
      case 6:
        i = 3;
        break;
      case 7:
      case 8:
        i = 4;
        break;
      case 9:
      case 10:
        i = 5;
        break;
      case 11:
        i = 6;
    }
    var o = "EventDifficultyTeaser_" + i;
    var s = new a.CastleGoodgameExternalClip(o, DifficultyScalingHelper.assetFileURL(o), null, 0, false);
    e.addChild(s);
  };
  DifficultyScalingHelper.assetFileURL = function (e) {
    return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  DifficultyScalingHelper.getSinglePlayerScoreEvent = function (e) {
    switch (e) {
      case s.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case s.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).singleEventVO;
      case s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
      case s.EventConst.EVENTTYPE_NOMADINVASION:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).scoreBarVO;
      case s.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
      case s.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).scoreBarVO;
      case s.EventConst.EVENTTYPE_FACTION_INVASION:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).singleEventVO(true);
      default:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e);
    }
  };
  DifficultyScalingHelper.getAllianceScoreEvent = function (e) {
    switch (e) {
      case s.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case s.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).allianceEventVO;
      case s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
      case s.EventConst.EVENTTYPE_NOMADINVASION:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).allianceBarVO;
      case s.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
      case s.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).allianceBarVO;
      case s.EventConst.EVENTTYPE_FACTION_INVASION:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e).allianceEventVO;
      default:
        return r.CastleModel.specialEventData.getActiveEventByEventId(e);
    }
  };
  return DifficultyScalingHelper;
}();
exports.DifficultyScalingHelper = l;