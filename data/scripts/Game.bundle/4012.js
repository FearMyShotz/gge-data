Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./752.js");
var u = require("./34.js");
var d = require("./285.js");
var p = require("./13.js");
var h = require("./8.js");
var g = require("./20.js");
var C = require("./4013.js");
var _ = require("./5.js");
var m = function (e) {
  function CastleStormIslandsMainDialogRanking(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    h.ButtonHelper.initButtons([i.subLayerDisp.btn_search, i.subLayerDisp.btn_findme], g.ClickFeedbackButtonHover);
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_cargoPointsContestRanking_title")));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_allianceName, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    i.textFieldManager.registerTextField(i.subLayerDisp.btn_findme.txt_label, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("myAlliance"))).autoFitToBounds = true;
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_ranking.txt_empty, new s.LocalizedTextVO("dialog_island_main_cargoPointsContestRanking_noParticipants"));
    i.subLayerDisp.icon_rank.toolTipText = "rank";
    i.subLayerDisp.icon_level.toolTipText = "dialog_alliancelevel";
    i.subLayerDisp.icon_member.toolTipText = "dialog_alliance_member";
    i.subLayerDisp.icon_points.toolTipText = "cargo_points";
    i._searchField = i.textFieldManager.registerTextField(i.subLayerDisp.mc_find.txt_input, new r.TextVO(l.Localize.text("dialog_highscore_search")));
    i._searchInputBehaviour = new d.HighlightAndClearInputTextBehaviour(i.subLayerDisp.mc_find, i._searchField);
    i._highscore = new c.ModernHighscoreComponent(i.subLayerDisp.mc_ranking, CastleStormIslandsMainDialogRanking.MAX_VISIBLE_ITEMS, C.CastleStormIslandsMainDialogRankingItem, _.HighscoreConst.ALLIANCE_AQUA_POINTS, -1);
    i._highscore.setEmptyText(i.subLayerDisp.mc_ranking.txt_empty);
    return i;
  }
  n.__extends(CastleStormIslandsMainDialogRanking, e);
  CastleStormIslandsMainDialogRanking.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._searchInputBehaviour.onShow();
    this._highscore.onShow();
    this._highscore.requestOwnRankFromServer();
    this._searchField.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
  };
  CastleStormIslandsMainDialogRanking.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._searchInputBehaviour.onHide();
    this._highscore.onHide();
    this._searchField.keyUp.remove(this.bindFunction(this.onSearchFieldKeyDown));
  };
  CastleStormIslandsMainDialogRanking.prototype.onSearchFieldKeyDown = function (e) {
    if (e.key == a.Keyboard.ENTER) {
      document.activeElement.blur();
      this.onClickSearch();
    }
  };
  CastleStormIslandsMainDialogRanking.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_search:
          this.onClickSearch();
          break;
        case this.subLayerDisp.btn_findme:
          this.requestHighscoreData(this.searchName);
      }
    }
  };
  CastleStormIslandsMainDialogRanking.prototype.onClickSearch = function () {
    if (!this._searchInputBehaviour.isEmpty()) {
      this.requestHighscoreData(this._searchField.text);
    }
  };
  CastleStormIslandsMainDialogRanking.prototype.requestHighscoreData = function (e) {
    this._highscore.requestDataFromServer(-1, e);
  };
  CastleStormIslandsMainDialogRanking.MAX_VISIBLE_ITEMS = 7;
  return CastleStormIslandsMainDialogRanking;
}(u.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogRanking = m;
o.classImplementsInterfaces(m, "ICollectableRendererList", "ISublayer");