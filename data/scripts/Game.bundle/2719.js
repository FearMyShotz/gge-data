Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./49.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./1472.js");
var c = require("./37.js");
var u = require("./21.js");
var d = require("./531.js");
var p = require("./15.js");
var h = require("./4.js");
var g = require("./33.js");
var C = require("./27.js");
var _ = require("./20.js");
var m = require("./8.js");
var f = require("./185.js");
var O = createjs.MouseEvent;
var E = createjs.Point;
var y = function () {
  function ResearchProgressInfo(e) {
    this._disp = e;
    this._disp.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    this.researchProgressBar = new n.BasicProgressBar(e.mc_bar);
    this.itxt_timeProgress = o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_time, new s.TextVO(""));
    m.ButtonHelper.initButtons([e.btn_buyInstant, e.btn_minuteSkip], _.ClickFeedbackButtonHover);
  }
  ResearchProgressInfo.prototype.show = function () {
    this._disp.addEventListener(O.CLICK, this.bindFunction(this.onClick));
    h.CastleModel.researchData.addEventListener(d.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.updateResearch));
    p.CastleBasicController.getInstance().addEventListener(c.CastleServerMessageArrivedEvent.RFI_ARRIVED, this.bindFunction(this.updateResearch));
    this.updateResearch();
  };
  ResearchProgressInfo.prototype.hide = function () {
    this._disp.removeEventListener(O.CLICK, this.bindFunction(this.onClick));
    h.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    h.CastleModel.researchData.removeEventListener(d.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.updateResearch));
    p.CastleBasicController.getInstance().removeEventListener(c.CastleServerMessageArrivedEvent.RFI_ARRIVED, this.bindFunction(this.updateResearch));
  };
  ResearchProgressInfo.prototype.onClick = function (e) {
    switch (e.target) {
      case this._disp.btn_buyInstant:
        this.buyResearchInstant();
        break;
      case this._disp.btn_minuteSkip:
        ResearchProgressInfo.spendMinuteSkip();
    }
  };
  ResearchProgressInfo.spendMinuteSkip = function () {
    b.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleMinuteSkipDialog, new T.ResearchMinuteSkipProperties());
  };
  ResearchProgressInfo.prototype.buyResearchInstant = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new l.C2SResearchFinishInstantVO());
    m.ButtonHelper.enableButton(this._disp.btn_buyInstant, false);
    m.ButtonHelper.enableButton(this._disp.btn_minuteSkip, false);
  };
  ResearchProgressInfo.prototype.updateProgress = function (e = null) {
    if (h.CastleModel.researchData.isSomeResearchActive) {
      var t = h.CastleModel.researchData.currentResearchVO;
      var i = r.int(h.CastleModel.researchData.remainingResearchTimeInSeconds());
      var n = C.CastleTimeStringHelper.getShortTimeString(i);
      this.itxt_timeProgress.textContentVO.stringValue = s.Localize.digitalClock(n);
      f.SubscriptionHelper.showSubscriptionStarToTextField(this.itxt_timeProgress, h.CastleModel.subscriptionData.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_RESEARCH_BOOST) > 0, 15, new E(-3, 0), false);
      this.researchProgressBar.scaleX = 1 - i / t.researchDuration;
      var o = r.int(a.ResearchConst.getFastCompleteCostC2(i, h.CastleModel.userData.userLevel));
      var l = r.int(h.CastleModel.costsData.getFinalCostsC2(o));
      this._disp.btn_buyInstant.toolTipText = {
        t: "research_skip",
        p: [l]
      };
    }
  };
  ResearchProgressInfo.prototype.updateResearch = function (e = null) {
    this._disp.visible = h.CastleModel.researchData.isSomeResearchActive;
    if (h.CastleModel.researchData.isSomeResearchActive) {
      m.ButtonHelper.enableButton(this._disp.btn_buyInstant, true);
      m.ButtonHelper.enableButton(this._disp.btn_minuteSkip, true);
      var t = h.CastleModel.researchData.currentResearchVO;
      var i = this._disp.mc_iconHolder;
      D.ResearchIconHelper.addResearchIcon(t.groupVO, i, ResearchProgressInfo.ICON_SIZE);
      i.toolTipText = t.fullNameText;
      this.updateProgress();
      h.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    }
  };
  ResearchProgressInfo.ICON_SIZE = 65;
  return ResearchProgressInfo;
}();
exports.ResearchProgressInfo = y;
var b = require("./9.js");
var D = require("./631.js");
var I = require("./208.js");
var T = require("./2720.js");