Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./55.js");
var g = require("./1919.js");
var C = require("./172.js");
var _ = require("./137.js");
var m = require("./13.js");
var f = require("./15.js");
var O = require("./4.js");
var E = require("./76.js");
var y = require("./78.js");
var b = require("./77.js");
var D = require("./82.js");
var I = require("./47.js");
var T = require("./59.js");
var v = require("./8.js");
var S = require("./35.js");
var A = require("./4535.js");
var L = function (e) {
  function CastleTemporaryServerEventDialogOverview(t) {
    var i = this;
    i._currentPoints = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleTemporaryServerEventDialogOverview, e);
  CastleTemporaryServerEventDialogOverview.prototype.init = function () {
    v.ButtonHelper.initBasicButton(this.subLayerDisp.btn_enter);
    v.ButtonHelper.initButtons([this.subLayerDisp.btn_info], V.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("panel_action_overview")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewards, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_info.txt_text, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_moreInfo_button"))).autoFitToBounds = true;
    this._textScrollComponent = new D.ModernSliderScrollComponent(new I.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider), new T.DynamicSizeScrollStrategyVertical(true, 0));
    if (this.subLayerDisp.mc_textScroll) {
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.mc_textScroll]);
    } else {
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.txt_desc]);
    }
    var e = new b.InfiniteScrollListOptions(A.CastleTemporaryServerEventDialogOverviewRewardItem, "TempServerOverview_ListItem", P.CastleTemporaryServerEventDialog.NAME);
    e.itemPaddingY = 10;
    e.useSmoothScroll = true;
    this._rewardScrollList = new y.InfiniteScrollListComponent(new E.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), e);
  };
  CastleTemporaryServerEventDialogOverview.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this.controller.addEventListener(C.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this._textScrollComponent.show();
    this._rewardScrollList.onShow();
    this.updatePoints();
    this.updateDescription();
    this.updateEnterButton();
    this._rewardScrollList.updateWithNewData(this.getRewardData());
    this.subLayerDisp.mc_teaser_default.visible = !_.TempServerHelper.tmpServerEvent.isCrossPlay;
    this.subLayerDisp.mc_teaser_crossplay.visible = _.TempServerHelper.tmpServerEvent.isCrossPlay;
    if (this.subLayerDisp.mc_teaser_crossplay.visible) {
      this.subLayerDisp.mc_teaser_crossplay.gotoAndStop(_.TempServerHelper.getAssetFrame());
    }
    O.CastleModel.smartfoxClient.sendCommandVO(new g.C2STemporaryServerHighscoreVO());
  };
  CastleTemporaryServerEventDialogOverview.prototype.hide = function () {
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this.controller.removeEventListener(C.CastleHighscoreEvent.TEMPORARY_SERVER_HIGHSCORE, this.bindFunction(this.onPointsChanged));
    this._textScrollComponent.hide();
    this._rewardScrollList.onHide();
    e.prototype.hide.call(this);
  };
  CastleTemporaryServerEventDialogOverview.prototype.updatePoints = function () {
    var e = _.TempServerHelper.isOnTempServer;
    this.subLayerDisp.mc_pointsIcon.toolTipText = "dialog_tempServer_rankingPoints_tooltip";
    this.subLayerDisp.mc_overall_up.toolTipText = "dialog_tempServer_overallRanking_tooltip";
    this.subLayerDisp.mc_pointsIcon.visible = e;
    this.subLayerDisp.mc_overall_up.visible = e;
    this.subLayerDisp.txt_points.visible = e;
    this.subLayerDisp.txt_rewards.visible = !e;
    if (e) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_points, new u.LocalizedNumberVO(this._currentPoints));
    }
  };
  CastleTemporaryServerEventDialogOverview.prototype.updateDescription = function () {
    if (_.TempServerHelper.tmpServerEvent.isCrossPlay) {
      this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new d.LocalizedTextVO("dialog_tempServer_overview_crossServerLive_desc"));
    } else if (_.TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
      this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new d.LocalizedTextVO("dialog_tempServer_overview_castleTransport_desc"));
    } else {
      this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new d.LocalizedTextVO("dialog_tempServer_overview_desc"));
    }
    var e = p.int(h.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._tfDesc.maxScrollV, e, e);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  CastleTemporaryServerEventDialogOverview.prototype.updateEnterButton = function () {
    var e = this.castleEnv.isOnTemporaryServer ? "dialog_tempServer_returnMainCastle_button" : "dialog_tempServer_joinTempServer_button";
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_value, new c.TextVO(m.TextHelper.toUpperCaseLocaSafeTextId(e)));
  };
  CastleTemporaryServerEventDialogOverview.prototype.getRewardData = function () {
    var e = [];
    var t = _.TempServerHelper.tmpServerEvent.getRewardList();
    for (var i = p.int(t.length - 1); i >= 0; --i) {
      t[i].listIndex = t.length - 1 - i;
      e.push(t[i]);
    }
    return e;
  };
  CastleTemporaryServerEventDialogOverview.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_enter:
        if (!_.TempServerHelper.tmpServerEvent.castleBought) {
          r.BasicDialogHandler.getInstance().registerDialogs(M.CastleSpecialServerPreBuildCastleSelectionDialog, new R.CastleSpecialServerPreBuildCastleSelectionDialogProperties(R.CastleSpecialServerPreBuildCastleSelectionDialogProperties.TYPE_TEMPSERVER));
          break;
        }
        if (this.castleEnv.isOnTemporaryServer) {
          l.CommandController.instance.executeCommand(s.BasicController.COMMAND_LOGOUT);
        } else {
          l.CommandController.instance.executeCommand(f.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
        }
        break;
      case this.subLayerDisp.btn_info:
        w.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleTempServerWelcomeDialog, null, false, r.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  CastleTemporaryServerEventDialogOverview.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = a.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  CastleTemporaryServerEventDialogOverview.prototype.onPointsChanged = function (e) {
    this._currentPoints = p.int(_.TempServerHelper.tmpServerEvent.ownOverallPoints);
    this.updatePoints();
  };
  return CastleTemporaryServerEventDialogOverview;
}(S.CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogOverview = L;
o.classImplementsInterfaces(L, "ICollectableRendererList", "ISublayer");
var P = require("./1148.js");
var M = require("./752.js");
var R = require("./615.js");
var V = require("./20.js");
var x = require("./1698.js");
var w = require("./9.js");