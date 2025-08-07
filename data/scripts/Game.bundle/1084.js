Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./60.js");
var d = require("./67.js");
var p = require("./19.js");
var h = require("./4.js");
var g = require("./130.js");
var C = require("./27.js");
var _ = require("./11.js");
var m = createjs.Point;
var f = function (e) {
  function CastlePrivateOfferTimeChallengeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferTimeChallengeDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferTimeChallengeDialog, e);
  CastlePrivateOfferTimeChallengeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.topBar.gotoAndStop(CastlePrivateOfferTimeChallengeDialog.REGULAR_FRAME);
    if (this.dialogProperties.offerVO.hasInfiniteTime) {
      this.dialogDisp.topBar.gotoAndStop(CastlePrivateOfferTimeChallengeDialog.INFINITE_FRAME);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_description.txt_description, new l.LocalizedTextVO("dialog_timeOffer_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.topBar.txt_reach_level, new l.LocalizedTextVO("dialog_timeOffer_condition", [this.getReachLevel()], false));
    this.updateTimeText();
    this.updateRewards();
    h.CastleModel.privateOfferData.addEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.hideLoaded = function (t = null) {
    h.CastleModel.privateOfferData.removeEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    e.prototype.hideLoaded.call(this, t);
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.updateRewards = function () {
    E.CollectableRenderHelper.displayMultipleItemsComplete(this, new d.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.offerVO.getTotalRewardListFromOfferVO(), new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_TIME_CHALLENGE, new m(CastlePrivateOfferTimeChallengeDialog.ICON_WIDTH, CastlePrivateOfferTimeChallengeDialog.ICON_HEIGHT)), function preRenderFunc(e) {
      if (e.itemVO && e.itemVO.itemType == O.CollectableEnum.VIP_TIME) {
        e.getRenderer(p.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 7;
      }
    });
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.updateTimeText = function () {
    if (!this.dialogProperties.offerVO.hasInfiniteTime) {
      var e = new Date();
      e.setSeconds(e.getSeconds() + this.dialogProperties.offerVO.remainingSeconds);
      e.getFullYear().toString();
      var t = C.CastleTimeStringHelper.getDateStringFromDate(e);
      var i = a.TimeStringHelper.getTimeStringFromDate(e, r.Localize.text, a.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT);
      this.textFieldManager.registerTextField(this.dialogDisp.topBar.txt_time, new l.LocalizedTextVO("dialog_timeOffer_timer", [t, i], false), new o.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.getReachLevel = function () {
    var e = this.dialogProperties.offerVO.getQuestConditionByName(u.ClientConstOffer.QUEST_CONDITION_INTEGER_PLAYER_LEVEL + u.ClientConstOffer.TYPE_MIN);
    if (e) {
      return c.int(e.conditionTextReplacements[0]);
    } else {
      return 0;
    }
  };
  CastlePrivateOfferTimeChallengeDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferTimeChallengeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferTimeChallengeDialog.__initialize_static_members = function () {
    CastlePrivateOfferTimeChallengeDialog.NAME = "CastlePrivateOfferTimeChallenge";
    CastlePrivateOfferTimeChallengeDialog.REGULAR_FRAME = "regular";
    CastlePrivateOfferTimeChallengeDialog.INFINITE_FRAME = "infinite";
    CastlePrivateOfferTimeChallengeDialog.ICON_WIDTH = 40;
    CastlePrivateOfferTimeChallengeDialog.ICON_HEIGHT = 55;
  };
  return CastlePrivateOfferTimeChallengeDialog;
}(_.CastleExternalDialog);
exports.CastlePrivateOfferTimeChallengeDialog = f;
var O = require("./12.js");
var E = require("./25.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();