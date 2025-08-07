Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./55.js");
var _ = require("./21.js");
var m = require("./53.js");
var f = require("./13.js");
var O = require("./15.js");
var E = require("./4.js");
var y = require("./681.js");
var b = require("./27.js");
var D = require("./24.js");
var I = require("./76.js");
var T = require("./77.js");
var v = require("./82.js");
var S = require("./47.js");
var A = require("./59.js");
var L = require("./8.js");
var P = function (e) {
  function CastleAllianceBattlegroundEventDialogOverview(t) {
    var i = this;
    i._useAllianceRewards = true;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogOverview, e);
  CastleAllianceBattlegroundEventDialogOverview.prototype.init = function () {
    L.ButtonHelper.initButtons([this.subLayerDisp.btn_enter, this.subLayerDisp.btn_left, this.subLayerDisp.btn_right], B.ClickFeedbackButton, 1);
    L.ButtonHelper.initButtons([this.subLayerDisp.mc_joinBlock.mc_info], F.ClickFeedbackButtonHover);
    this.subLayerDisp.btn_left.mouseChildren = false;
    this.subLayerDisp.btn_right.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new p.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_overview_title")));
    this._textScrollComponent = new v.ModernSliderScrollComponent(new S.SimpleScrollVO().initByParent(this.subLayerDisp.mc_descSlider), new A.DynamicSizeScrollStrategyVertical(true, 0));
    if (this.subLayerDisp.mc_textScroll) {
      this.subLayerDisp.mc_textScroll.mouseEnabled = true;
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.mc_textScroll, this.subLayerDisp.mc_descSlider]);
    } else {
      this.subLayerDisp.txt_desc.mouseEnabled = true;
      this._textScrollComponent.scrollVO.addMouseWheelElements([this.subLayerDisp.txt_desc, this.subLayerDisp.mc_descSlider]);
    }
    var e = new T.InfiniteScrollListOptions(R.AllianceBattleGroundEventDialogOverviewRewardItem, "AllianceBattlegroundOverview_ListItem", x.CastleAllianceBattleGroundEventDialog.NAME);
    e.itemPaddingY = 10;
    e.useSmoothScroll = true;
    this._rewardScrollList = new M.InfiniteScrollListComponent(new I.InfiniteScrollListClips(this.subLayerDisp.mc_items).addMaskMc(this.subLayerDisp.mc_mask).addSliderMc(this.subLayerDisp.mc_items.mc_slider), e);
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.updateCategory = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_category, new p.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId(this._useAllianceRewards ? "allianceContest" : "singleplayerContest")));
    this._rewardScrollList.updateWithNewData(this.getRewardData());
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    r.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_teaser);
    this.subLayerDisp.mc_teaser.addChild(new D.CastleGoodgameExternalClip("AllianceBattleGroundScoringTeaserSmall_" + y.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR, c.BasicModel.basicLoaderData.getVersionedItemAssetUrl(x.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
    this.subLayerDisp.mc_joinBlock.visible = !m.ABGHelper.isOnABGServer && !m.ABGHelper.abgEvent.castleBought;
    this.itxt_lockCopy = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinBlock.txt_copy, new h.LocalizedTextVO(""));
    this.itxt_lockTime = this.textFieldManager.registerTextField(this.subLayerDisp.mc_joinBlock.txt_time, new p.TextVO(""));
    if (!m.ABGHelper.isOnABGServer && m.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock > 0) {
      E.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    }
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.show();
    this._rewardScrollList.onShow();
    this.updateDescription();
    this.updateEnterButton();
    this.updateCategory();
    this.onTimer();
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.hide = function () {
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    E.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this._textScrollComponent.hide();
    this._rewardScrollList.onHide();
    e.prototype.hide.call(this);
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.onTimer = function (e = null) {
    if (m.ABGHelper.abgEvent) {
      if (m.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock > 0) {
        this.itxt_lockTime.textContentVO.stringValue = b.CastleTimeStringHelper.getShortTimeString(m.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock);
        this.itxt_lockCopy.textContentVO.textId = "dialog_beyondTheHorizon_main_eventParticipationBlocker_join";
        L.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, true);
        this.subLayerDisp.btn_enter.toolTipText = null;
      } else {
        this.itxt_lockTime.textContentVO.stringValue = " ";
        this.itxt_lockCopy.textContentVO.textId = "dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked";
        L.ButtonHelper.enableButton(this.subLayerDisp.btn_enter, m.ABGHelper.abgEvent.castleBought);
        this.subLayerDisp.btn_enter.toolTipText = L.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_enter) ? null : "dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked_tooltip";
      }
    } else {
      this.layoutManager.hideAllDialogsExcept([]);
    }
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.updateDescription = function () {
    this._tfDesc = this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new h.LocalizedTextVO("dialog_beyondTheHorizon_main_overview_desc_" + m.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    var e = g.int(C.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._tfDesc.maxScrollV, e, e);
    this._textScrollComponent.setVisibility(this._tfDesc.maxScrollV > 1);
    this._textScrollComponent.scrollToPercent(0);
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.updateEnterButton = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_enter.txt_value, new p.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId(this.castleEnv_0.isOnAllianceBattleGroundServer ? "btn_theGreatEmpire" : "btn_joinBeyondTheHorizon_" + m.ABGHelper.skinName)));
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.getRewardData = function () {
    var e = [];
    for (var t = this._useAllianceRewards ? m.ABGHelper.abgEvent.getAllianceRewardList() : m.ABGHelper.abgEvent.getIndividualRewardList(), i = 0; i < t.length; i++) {
      t[i].listIndex = i;
      e.push([t[i], this._useAllianceRewards]);
    }
    return e;
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (L.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_enter:
          if (!m.ABGHelper.abgEvent.castleBought) {
            s.BasicDialogHandler.getInstance().registerDialogs(V.CastleAllianceBattleGroundBuyInfoDialog);
            break;
          }
          if (m.ABGHelper.isOnABGServer) {
            d.CommandController.instance.executeCommand(a.BasicController.COMMAND_LOGOUT);
          } else {
            d.CommandController.instance.executeCommand(O.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
          }
          break;
        case this.subLayerDisp.btn_left:
        case this.subLayerDisp.btn_right:
          this._useAllianceRewards = !this._useAllianceRewards;
          this.updateCategory();
          break;
        case this.subLayerDisp.mc_joinBlock.mc_info:
          s.BasicDialogHandler.getInstance().registerDialogs(w.CastleAllianceBattlegroundJoinBlockerDialog);
      }
    }
  };
  CastleAllianceBattlegroundEventDialogOverview.prototype.onDescriptionScroll = function () {
    this._tfDesc.scrollV = l.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._tfDesc.maxScrollV);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogOverview.prototype, "castleEnv_0", {
    get: function () {
      return u.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogOverview;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogOverview = P;
o.classImplementsInterfaces(P, "ICollectableRendererList", "ISublayer");
var M = require("./78.js");
var R = require("./2523.js");
var V = require("./1392.js");
var x = require("./249.js");
var w = require("./2530.js");
var B = require("./36.js");
var F = require("./20.js");