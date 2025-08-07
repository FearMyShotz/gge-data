Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./1759.js");
var h = require("./172.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = require("./34.js");
var m = require("./1760.js");
var f = require("./3698.js");
var O = function (e) {
  function CastleEilandRankingDialogPlayer(t) {
    var i = e.call(this, t) || this;
    i.initBasicButtons([i.subLayerDisp.mc_search.btn_search, i.subLayerDisp.btn_top, i.subLayerDisp.btn_up, i.subLayerDisp.btn_down]);
    return i;
  }
  n.__extends(CastleEilandRankingDialogPlayer, e);
  CastleEilandRankingDialogPlayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.setTexts();
    if (!this.rankingList) {
      this.rankingList = new s.ItemScrollList(this.subLayerDisp);
      this.rankingList.scrollItemClass = b.CastleEilandPlayerRankingItem;
      this.rankingList.hideButtons = false;
    }
    this.rankingList.clear();
    this.rankingList.addEventListener(r.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onRankingScrolled));
    this.onRankingScrolled(null);
    if (!this.searchComponent) {
      this.searchComponent = new f.CastleSearchScrollListComponent(this.subLayerDisp.mc_search, this.rankingList, this.bindFunction(this.searchByNameOrRank));
      this.searchComponent.foundCallback = this.bindFunction(this.onSucessfullSearch);
      this.searchComponent.notFoundCallback = this.bindFunction(this.onFailedSearch);
      this.searchComponent.searchStartedCallback = this.bindFunction(this.resetSearchResult);
      this.searchComponent.inputFieldName = "txt_input_search";
    }
    this.searchComponent.show();
    this.controller.addEventListener(h.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
    this.requestHighscoreData();
  };
  CastleEilandRankingDialogPlayer.prototype.onRankingScrolled = function (e) {
    C.ButtonHelper.enableButton(this.subLayerDisp.btn_top, this.rankingList.currentStartIndex != 0);
  };
  CastleEilandRankingDialogPlayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(h.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, this.bindFunction(this.onGetHighscoreData));
    if (this.searchComponent) {
      this.searchComponent.hide();
    }
  };
  CastleEilandRankingDialogPlayer.prototype.destroy = function () {
    if (this.rankingList) {
      this.rankingList.remove();
    }
  };
  CastleEilandRankingDialogPlayer.prototype.onSucessfullSearch = function (e) {
    e.highlight = true;
  };
  CastleEilandRankingDialogPlayer.prototype.onFailedSearch = function () {
    E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_watchout"), c.Localize.text("alert_playerName_notFound")));
  };
  CastleEilandRankingDialogPlayer.prototype.searchByNameOrRank = function (e, t) {
    if (t.match(/^\d+$/) != null) {
      var i = parseInt(t);
      return e.hasUnlockedEiland && e.rank == i;
    }
    return e.playerName.toLocaleLowerCase() == t.toLocaleLowerCase();
  };
  CastleEilandRankingDialogPlayer.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_rankTitle, new u.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceTitle, new u.LocalizedTextVO(a.GenericTextIds.COMMON_NAME));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_levelTitle, new u.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_membersTitle, new u.LocalizedTextVO("allianceRank")).autoFitToBounds = true;
    this.subLayerDisp.icon_alliancePoints.toolTipText = "aquamarin_points_alliance_tooltip";
    this.subLayerDisp.mc_search.btn_search.toolTipText = "dialog_highscore_search";
  };
  CastleEilandRankingDialogPlayer.prototype.requestHighscoreData = function () {
    var e = d.int(g.CastleModel.allianceData.myAllianceVO.allianceId);
    g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SAllianceMemberAquaPoints(e));
  };
  CastleEilandRankingDialogPlayer.prototype.onGetHighscoreData = function (e) {
    this.rankingList.clear();
    for (var t = this.createHighscoreList(e.params[0].APH), i = 0; i < t.length; ++i) {
      this.rankingList.pushContent(t[i]);
    }
    this.rankingList.initList(0);
  };
  CastleEilandRankingDialogPlayer.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_top:
          this.searchComponent.scrollToStart();
          this.onRankingScrolled(null);
      }
    }
  };
  CastleEilandRankingDialogPlayer.prototype.resetSearchResult = function () {
    for (var e = d.int(this.rankingList.voList.length), t = 0; t < e; t++) {
      this.rankingList.voList[t].isSearchResult = false;
    }
  };
  CastleEilandRankingDialogPlayer.prototype.createHighscoreList = function (e) {
    var t = [];
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      t[i] = new m.CastleEilandPlayerRankingItemVO(n);
    }
    t.sort(this.bindFunction(this.sort));
    i = 0;
    for (; i < t.length; i++) {
      t[i].rank = i + 1;
    }
    return t;
  };
  CastleEilandRankingDialogPlayer.prototype.sort = function (e, t) {
    if (!e.hasUnlockedEiland && t.hasUnlockedEiland) {
      return 1;
    } else if (e.hasUnlockedEiland && !t.hasUnlockedEiland) {
      return -1;
    } else if (e.hasUnlockedEiland || t.hasUnlockedEiland) {
      if (e.aquaPoints > t.aquaPoints) {
        return -1;
      } else if (e.aquaPoints < t.aquaPoints) {
        return 1;
      } else {
        return e.allianceRank - t.allianceRank;
      }
    } else {
      return e.allianceRank - t.allianceRank;
    }
  };
  return CastleEilandRankingDialogPlayer;
}(_.CastleDialogSubLayer);
exports.CastleEilandRankingDialogPlayer = O;
var E = require("./9.js");
var y = require("./38.js");
var b = require("./3699.js");
l.classImplementsInterfaces(O, "ICollectableRendererList", "ISublayer");