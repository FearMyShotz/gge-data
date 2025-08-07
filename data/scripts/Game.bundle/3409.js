Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleFactionInvasionEventHighscoreAllianceSublayer(t, i, n) {
    var o = e.call(this, t) || this;
    o.initBasicButtons([o.subLayerDisp.mc_listContainer.btn_search, o.subLayerDisp.mc_listContainer.btn_top, o.subLayerDisp.mc_listContainer.btn_up, o.subLayerDisp.mc_listContainer.btn_down]);
    o._rankingList = new r.CastleAllianceRankingComponent(o.subLayerDisp.mc_listContainer, "factionHighscore_points", l.CastleAllianceRankingItem, n);
    o.textFieldManager.registerTextField(o.subLayerDisp.mc_listContainer.txt_leagueRange, new a.LocalizedTextVO("dialog_highscore_searchAlliance"));
    o.textFieldManager.registerTextField(o.subLayerDisp.txt_header, new a.LocalizedTextVO(i));
    return o;
  }
  n.__extends(CastleFactionInvasionEventHighscoreAllianceSublayer, e);
  CastleFactionInvasionEventHighscoreAllianceSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._rankingList.show(t);
  };
  CastleFactionInvasionEventHighscoreAllianceSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._rankingList.hide();
  };
  return CastleFactionInvasionEventHighscoreAllianceSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleFactionInvasionEventHighscoreAllianceSublayer = s;
var r = require("./3410.js");
var l = require("./3411.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "ISublayer");