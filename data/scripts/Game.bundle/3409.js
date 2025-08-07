Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = function (e) {
  function CastleAllianceRankingComponent(t, i, n, a) {
    var s = e.call(this, t, n, a) || this;
    s.textFieldManager.registerTextField(s.disp.txt_rank, new o.LocalizedTextVO("rank")).autoFitToBounds = true;
    s.textFieldManager.registerTextField(s.disp.txt_name, new o.LocalizedTextVO("panel_multiinfo_alliance")).autoFitToBounds = true;
    s.textFieldManager.registerTextField(s.disp.txt_fameLevel, new o.LocalizedTextVO("dialog_allianceFame_level")).autoFitToBounds = true;
    s.textFieldManager.registerTextField(s.disp.txt_membercount, new o.LocalizedTextVO("dialog_alliance_member")).autoFitToBounds = true;
    s.disp.btn_search.toolTipText = "dialog_highscore_search";
    s.disp.mc_scoreIcon.toolTipText = i;
    return s;
  }
  n.__extends(CastleAllianceRankingComponent, e);
  CastleAllianceRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "dialog_highscore_search_alliance";
  };
  return CastleAllianceRankingComponent;
}(require("./805.js").CastleGenericRankingComponent);
exports.CastleAllianceRankingComponent = a;