Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./1720.js");
var u = require("./4.js");
var d = require("./807.js");
var p = require("./466.js");
var h = function (e) {
  function FactionRankingComponent(t) {
    var i = this;
    i._previousLeagueID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t, g.FactionRankingItem, FactionRankingComponent.generateProperties()) || this).textFieldManager.registerTextField(i.disp.txt_rank, new r.LocalizedTextVO("rank"));
    i.textFieldManager.registerTextField(i.disp.txt_name, new r.LocalizedTextVO("generic_name"));
    i.textFieldManager.registerTextField(i.disp.txt_title, new r.LocalizedTextVO("dialog_factionhighscore_berimondTitle"));
    i.itxt_league = i.textFieldManager.registerTextField(i.disp.txt_header, new r.LocalizedTextVO(i.leagueTextID));
    i.disp.icon_level.toolTipText = "level";
    i.disp.icon_points.toolTipText = "factionHighscore_points";
    i.disp.btn_search.toolTipText = "dialog_highscore_search";
    i._previousLeagueID = l.int(i._currentLeagueId);
    return i;
  }
  n.__extends(FactionRankingComponent, e);
  FactionRankingComponent.prototype.reset = function () {
    this.show(FactionRankingComponent.generateProperties());
    this._previousLeagueID = l.int(this._currentLeagueId);
  };
  FactionRankingComponent.generateProperties = function () {
    return new p.CastleGenericHighscoreDialogProperties(s.HighscoreConst.FACTION_TOURNAMENT, o.DictionaryUtil.getDictionaryLength(FactionRankingComponent.factionEventVO.leaguetypes), FactionRankingComponent.factionEventVO.isLocked ? 1 : FactionRankingComponent.factionEventVO.ownLeagueID, FactionRankingComponent.factionEventVO.isLocked ? 1 : -1, FactionRankingComponent.factionEventVO.ownLeagueID);
  };
  FactionRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "panel_navigation_playername";
  };
  FactionRankingComponent.prototype.onGetHighscoreData = function (t) {
    if (this.searchName == "") {
      this.searchName = u.CastleModel.userData.userName;
    }
    e.prototype.onGetHighscoreData.call(this, t);
    if (this.itxt_league && this.itxt_league.textContentVO) {
      this.itxt_league.textContentVO.textId = this.leagueTextID;
    }
    if (this._previousLeagueID != this._currentLeagueId) {
      this.dispatchEvent(new c.CastleGenericRankingComponentEvent(c.CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED));
      if (this.itxt_league && this.itxt_league.textContentVO) {
        this.itxt_league.textContentVO.textId = this.leagueTextID;
      }
    }
    this._previousLeagueID = l.int(this._currentLeagueId);
  };
  Object.defineProperty(FactionRankingComponent.prototype, "leagueTextID", {
    get: function () {
      return FactionRankingComponent.LEAGUE_HEADER_IDS[this.currentLeagueId - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingComponent.prototype, "currentLeagueId", {
    get: function () {
      return this._currentLeagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingComponent, "factionEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  FactionRankingComponent.LEAGUE_HEADER_IDS = ["dialog_factionhighscore_blueList", "dialog_factionhighscore_redList", "dialog_factionhighscore_blueList_legendary", "dialog_factionhighscore_redList_legendary"];
  return FactionRankingComponent;
}(d.CastleGenericRankingComponent);
exports.FactionRankingComponent = h;
var g = require("./3561.js");