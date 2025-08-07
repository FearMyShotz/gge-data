Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./18.js");
var r = require("./393.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./1893.js");
var p = createjs.Point;
var h = function (e) {
  function CastleTournamentEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTournamentEventDialog.NAME) || this;
  }
  n.__extends(CastleTournamentEventDialog, e);
  CastleTournamentEventDialog.prototype.initRankListComponent = function () {
    e.prototype.initRankListComponent.call(this);
    this._rankList = new m.CastleTournamentRankListComponent(this.dialogDisp.mc_rankList, f.CastleTournamentRankListItem, "dialog_highscore_search", "panel_navigation_playername");
  };
  CastleTournamentEventDialog.prototype.updateStaticText = function () {
    e.prototype.updateStaticText.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speachBubble, new a.LocalizedTextVO("dialog_tournament_speachBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copyBold, new a.LocalizedTextVO("dialog_tournament_boldText")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_tournament_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourFameTitle, new a.LocalizedTextVO("dialog_allianceFame_yourPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourRankTitle, new a.LocalizedTextVO("dialog_tournament_yourCurrentRank"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_priceTop3, new a.LocalizedTextVO("dialog_tournament_priceTop", [3]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_priceTop100, new a.LocalizedTextVO("dialog_tournament_priceTop", [100]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boobyprice, new a.LocalizedTextVO("dialog_tournament_boobyprice"));
  };
  CastleTournamentEventDialog.prototype.requestHighscoreData = function (e) {
    if (!this.isWaitingForServerMessage) {
      this.isWaitingForServerMessage = true;
      u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SGetHighscoreVO(e, s.ClientConstCastle.CATEGORY_TOURNAMENT_FAME));
    }
  };
  CastleTournamentEventDialog.prototype.setOwnRankTexts = function (t, i) {
    e.prototype.setOwnRankTexts.call(this, t, i);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_boobypriceDescription, new a.LocalizedTextVO("dialog_tournament_boobypriceDescription", [this.eventVO.minimumFamepointsForBoobyprice]));
  };
  CastleTournamentEventDialog.prototype.updateDialog = function () {
    e.prototype.updateDialog.call(this);
    this.setOwnRankTexts(this.eventVO.ownRank, this.eventVO.ownEarnedFamePoints);
  };
  CastleTournamentEventDialog.prototype.updateRewards = function () {
    e.prototype.updateRewards.call(this);
    this.setRewardsTop3(this.eventVO.boobyRewardList);
    this.setRewardsTop2(this.eventVO.topXRewardList);
    this.setRewardsTop1(this.eventVO.winnerRewardList);
  };
  CastleTournamentEventDialog.prototype.setRewardsTop1 = function (e) {
    var t;
    var i = this.dialogDisp.mc_equipment;
    var n = new p(0, 0);
    var o = 1;
    if (e.containsAnyTypeOf(g.ClientConstCollectable.GROUP_LIST_EQUIPMENT)) {
      n = CastleTournamentEventDialog.ICON_EQUIPMENT_DIMENSION;
      t = e.getFirstItemOfTypes(g.ClientConstCollectable.GROUP_LIST_EQUIPMENT);
      o = 5;
    } else if (e.containsType(C.CollectableEnum.BUILDING)) {
      n = CastleTournamentEventDialog.ICON_DECO_DIMENSION;
      t = e.getItemByType(C.CollectableEnum.BUILDING);
      o = 6;
    }
    i.gotoAndStop(o);
    _.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new l.CollectableRenderClips(i).addIconMc(i.mc_equipmentHolder), t, new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT, n));
  };
  CastleTournamentEventDialog.prototype.setRewardsTop2 = function (e) {
    this.setRewardsBySimpleRewardListWithInfoButton("mc_reward_top2", "mc_reward_top2_", e);
  };
  CastleTournamentEventDialog.prototype.setRewardsTop3 = function (e) {
    this.setRewardsBySimpleRewardListWithInfoButton("mc_reward_top3", "mc_reward_top3_", e);
  };
  CastleTournamentEventDialog.prototype.setRewardsBySimpleRewardListWithInfoButton = function (e, t, i) {
    for (var n, o, a = 0; a < i.length && (n = this.dialogDisp[e][t + a], o = this.dialogDisp[e]["btn_info_" + a], n); ++a) {
      _.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new l.CollectableRenderClips(n).addIconMc(n.mc_icon).addColorBgMc(n.mc_background).addInfoBtn(o), i.getItemByIndexSave(a), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_TOURNAMENT_DEFAULT, this.defaultRewardIconDimension));
    }
    this.dialogDisp[e].mouseChildren = true;
  };
  Object.defineProperty(CastleTournamentEventDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentEventDialog.__initialize_static_members = function () {
    CastleTournamentEventDialog.NAME = "CastleTournamentEvent";
    CastleTournamentEventDialog.REWARD_FILTER_LIST = g.ClientConstCollectable.GROUP_LIST_GOODS.concat([C.CollectableEnum.VIP_POINTS, C.CollectableEnum.VIP_TIME]);
    CastleTournamentEventDialog.ICON_DECO_DIMENSION = new p(65, 65);
    CastleTournamentEventDialog.ICON_EQUIPMENT_DIMENSION = new p(50, 50);
  };
  return CastleTournamentEventDialog;
}(d.ACastleTournamentEventDialog);
exports.CastleTournamentEventDialog = h;
var g = require("./86.js");
var C = require("./12.js");
var _ = require("./25.js");
var m = require("./1894.js");
var f = require("./4551.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();