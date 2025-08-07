Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = function (e) {
  function CastleSingleplayerRankingComponent(t, i, n, o) {
    var s = e.call(this, t, i, n) || this;
    s._scoreEventVO = o;
    s.textFieldManager.registerTextField(s.disp.txt_rank, new a.LocalizedTextVO("rank")).autoFitToBounds = true;
    s.textFieldManager.registerTextField(s.disp.txt_name, new a.LocalizedTextVO("generic_name")).autoFitToBounds = true;
    s.textFieldManager.registerTextField(s.disp.txt_alliance, new a.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    s.textFieldManager.registerTextField(s.disp.txt_level, new a.LocalizedTextVO("level")).autoFitToBounds = true;
    s.disp.btn_search.toolTipText = "panel_navigation_playername";
    s.disp.icon_distance.toolTipText = "distance";
    return s;
  }
  n.__extends(CastleSingleplayerRankingComponent, e);
  CastleSingleplayerRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "panel_navigation_playername";
  };
  CastleSingleplayerRankingComponent.prototype.onGetHighscoreData = function (t) {
    e.prototype.onGetHighscoreData.call(this, t);
    var i = s.int(this._scoreEventVO.leagueLevels(t.leagueId)[0]);
    var n = s.int(this._scoreEventVO.leagueLevels(t.leagueId)[1]);
    if (n > o.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.disp.txt_leagueRange, new a.LocalizedTextVO("dialog_ranking_legendFilter", [Math.max(i - o.PlayerConst.LEVEL_CAP, 1), n - o.PlayerConst.LEVEL_CAP])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.disp.txt_leagueRange, new a.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
  };
  return CastleSingleplayerRankingComponent;
}(require("./807.js").CastleGenericRankingComponent);
exports.CastleSingleplayerRankingComponent = r;