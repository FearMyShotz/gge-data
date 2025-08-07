Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./34.js");
var l = require("./78.js");
var c = require("./743.js");
var u = require("./8.js");
var d = require("./20.js");
var p = require("./47.js");
var h = require("./77.js");
var g = require("./473.js");
var C = require("./4007.js");
var _ = require("./76.js");
var m = require("./13.js");
var f = require("./4.js");
var O = require("./5.js");
var E = require("./4008.js");
var y = require("./750.js");
var b = require("./614.js");
var D = require("./9.js");
var I = require("./4011.js");
var T = require("./2.js");
var v = require("./29.js");
var S = require("./159.js");
var A = require("./17.js");
var L = function (e) {
  function CastleStormIslandsMainDialogOverview(t) {
    var i = this;
    i.infoCategory = 0;
    i.rewardCategory = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleStormIslandsMainDialogOverview, e);
  CastleStormIslandsMainDialogOverview.prototype.init = function () {
    u.ButtonHelper.initButtons([this.subLayerDisp.btn_info, this.subLayerDisp.btn_enter, this.subLayerDisp.btn_right, this.subLayerDisp.btn_left, this.subLayerDisp.btn_enter, this.subLayerDisp.mc_rewardCategory.btn_right, this.subLayerDisp.mc_rewardCategory.btn_left], d.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_overview_title")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewardCategory.txt_rewardCategory, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_allianceContest_rewards")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_info.txt_label, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("button_moreInfo")));
    var e = new p.SimpleScrollVO().initByParent(this.subLayerDisp.mc_desc).addMouseWheelElements([this.subLayerDisp.mc_desc]).addSliderBackground(this.subLayerDisp.mc_desc.bg_cached);
    this._textScrollComponent = new c.ModernTextScrollComponent(e, this.subLayerDisp.mc_desc.txt_desc);
    var t = new h.InfiniteScrollListOptions(C.CastleStormIslandsMainDialogOverviewRewardItem, "CastleStormIslandsMainOverview_ListItem", g.CastleStormIslandsMainDialog.NAME);
    t.itemPaddingY = 10;
    t.useSmoothScroll = true;
    this.subLayerDisp.mc_items.mask = this.subLayerDisp.mc_mask;
    this._rewardScrollList = new l.InfiniteScrollListComponent(new _.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), t);
    this._supportControls = new I.CastleSupportKingdomControls(this.subLayerDisp.mc_send, this.kingdomVO);
  };
  CastleStormIslandsMainDialogOverview.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (f.CastleModel.userData.isInAlliance) {
      this._textScrollComponent.setText(o.Localize.text("dialog_island_main_overview_desc"));
    } else {
      this._textScrollComponent.setText(o.Localize.text("dialog_island_main_overview_noAlliance_desc"));
    }
    u.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, true);
    if (this.kingdomVO.isPaid) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_label, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("Btn_island_travel")));
      if (f.CastleModel.kingdomData.activeKingdomID == this.kingdomVO.kID && !A.CastleLayoutManager.getInstance().isInState(A.CastleLayoutManager.STATE_KINGDOMMAP)) {
        u.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, false);
      }
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_label, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_introduction_joinButton"))).autoFitToBounds = true;
    }
    this.changeInfoCategory(this.kingdomVO.isPaid ? CastleStormIslandsMainDialogOverview.INFO_SEND : CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION);
    this.subLayerDisp.btn_left.visible = this.kingdomVO.isPaid;
    this.subLayerDisp.btn_right.visible = this.kingdomVO.isPaid;
    this._rewardScrollList.onShow();
    this._rewardScrollList.updateWithNewData(this.getRewardData());
    this._supportControls.onShow();
  };
  CastleStormIslandsMainDialogOverview.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._rewardScrollList.onHide();
    this._supportControls.onHide();
  };
  CastleStormIslandsMainDialogOverview.prototype.getRewardData = function () {
    var e = this.rewardCategory == CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE ? f.CastleModel.kingdomData.eilandRewards.getActiveRewardItems() : f.CastleModel.kingdomData.eilandRewards.getActivePlayerRewardItems();
    var t = [];
    for (var i = e.length - 1; i >= 0; i--) {
      t.push([e[i], e.length - 1 - i]);
    }
    return t;
  };
  CastleStormIslandsMainDialogOverview.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_info:
          D.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleStormIslandsRulesDialog);
          break;
        case this.subLayerDisp.btn_enter:
          this.onClickEnter();
          break;
        case this.subLayerDisp.btn_left:
        case this.subLayerDisp.btn_right:
          this.changeInfoCategory(this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION ? CastleStormIslandsMainDialogOverview.INFO_SEND : CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION);
          break;
        case this.subLayerDisp.mc_rewardCategory.btn_left:
        case this.subLayerDisp.mc_rewardCategory.btn_right:
          this.changeRewardCategory(this.rewardCategory == CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE ? CastleStormIslandsMainDialogOverview.REWARD_PLAYER : CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE);
      }
    }
  };
  CastleStormIslandsMainDialogOverview.prototype.onClickEnter = function () {
    if (this.kingdomVO.isPaid) {
      var e = f.CastleModel.userData.castleList.getMainCastleByKingdomID(this.kingdomVO.kID);
      if (e) {
        T.CommandController.instance.executeCommand(v.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, e);
      } else {
        if (f.CastleModel.worldmapData) {
          f.CastleModel.worldmapData.allowGAARequests = false;
        }
        f.CastleModel.smartfoxClient.sendCommandVO(new S.C2SJoinCastleVO(0, this.kingdomVO.kID));
      }
    } else {
      D.CastleDialogHandler.getInstance().registerDialogs(y.CastleSpecialServerPreBuildCastleSelectionDialog, new b.CastleSpecialServerPreBuildCastleSelectionDialogProperties(b.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_STORMISLANDS));
    }
  };
  Object.defineProperty(CastleStormIslandsMainDialogOverview.prototype, "kingdomVO", {
    get: function () {
      return f.CastleModel.kingdomData.getKingdomVOByID(O.WorldIsland.KINGDOM_ID);
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsMainDialogOverview.prototype.changeInfoCategory = function (e) {
    this.infoCategory = e;
    this.subLayerDisp.mc_desc.visible = this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION;
    this.subLayerDisp.mc_send.visible = this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_SEND;
    if (this.infoCategory == CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtitle, new s.LocalizedTextVO("dialog_island_main_overview_displayCarousel_description"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_subtitle, new s.LocalizedTextVO("dialog_island_main_overview_displayCarousel_transferControls"));
    }
  };
  CastleStormIslandsMainDialogOverview.prototype.changeRewardCategory = function (e) {
    this.rewardCategory = e;
    this._rewardScrollList.updateWithNewData(this.getRewardData());
    if (this.rewardCategory == CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewardCategory.txt_rewardCategory, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_allianceContest_rewards")));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_rewardCategory.txt_rewardCategory, new a.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_main_playerContest_rewards")));
    }
  };
  CastleStormIslandsMainDialogOverview.INFO_DESCRIPTION = 0;
  CastleStormIslandsMainDialogOverview.INFO_SEND = 1;
  CastleStormIslandsMainDialogOverview.REWARD_ALLIANCE = 0;
  CastleStormIslandsMainDialogOverview.REWARD_PLAYER = 1;
  return CastleStormIslandsMainDialogOverview;
}(r.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogOverview = L;