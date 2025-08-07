Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./51.js");
var p = require("./28.js");
var h = require("./271.js");
var g = require("./3399.js");
var C = require("./418.js");
var _ = require("./21.js");
var m = require("./4.js");
var f = require("./1650.js");
var O = require("./27.js");
var E = require("./24.js");
var y = require("./8.js");
var b = function (e) {
  function CastleEventTeaserDialog() {
    var t = this;
    t.timeOfOpening = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleEventTeaserDialog, e);
  CastleEventTeaserDialog.prototype.addEventListenerOnShow = function () {
    m.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.timerSecondTick));
    m.CastleModel.eventAnnouncementData.addEventListener(f.EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED, this.bindFunction(this.onRewardCollected));
  };
  CastleEventTeaserDialog.prototype.removeEventListenerOnHide = function () {
    m.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.timerSecondTick));
    m.CastleModel.eventAnnouncementData.removeEventListener(f.EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED, this.bindFunction(this.onRewardCollected));
  };
  CastleEventTeaserDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.eventRewardComp) {
      this.eventRewardComp.destroy();
    }
    if (this.claimableRewardComp) {
      this.claimableRewardComp.destroy();
    }
    var i = new Date().time;
    i *= p.ClientConstTime.MILLISEC_2_SEC;
    i = Math.round(i);
    if (this.timeOfOpening > 0) {
      m.CastleModel.smartfoxClient.sendCommandVO(new C.C2SClientSideTrackingVO(h.ClientConstTracking.EVENT_ANNOUNCEMENT_MESSAGE, i - this.timeOfOpening));
    }
    this.timeOfOpening = 0;
  };
  CastleEventTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.timeOfOpening = new Date().time;
    this.timeOfOpening = this.timeOfOpening * p.ClientConstTime.MILLISEC_2_SEC;
    this.timeOfOpening = Math.round(this.timeOfOpening);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.okBtn, this.dialogDisp.claimRewardsBtn, this.dialogDisp.arrowLeftBtn, this.dialogDisp.arrowRightBtn]);
    y.ButtonHelper.enableButton(this.dialogDisp.claimRewardsBtn, !this.dialogProperties.alreadyClaimed);
    this._durationText = this.textFieldManager.registerTextField(this.dialogDisp.eventDurationTxt, new c.TextVO(""));
    this.fillBackground();
    this.fillEventRewards();
    this.fillClaimableRewards();
    this.fillTexts();
    this.createCharacter();
    this.timerSecondTick();
  };
  CastleEventTeaserDialog.prototype.timerSecondTick = function (e = null) {
    var t = "";
    var i = new Date().time;
    i *= p.ClientConstTime.MILLISEC_2_SEC;
    if ((i = Math.round(i)) < this.dialogProperties.durationTS) {
      t = O.CastleTimeStringHelper.getLongEventTimeString(this.dialogProperties.durationTS - i);
    } else {
      this.hide();
    }
    this._durationText.textContentVO.stringValue = t;
  };
  CastleEventTeaserDialog.prototype.onClick = function (e) {
    if (y.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.okBtn:
          this.hide();
          break;
        case this.dialogDisp.claimRewardsBtn:
          this.claimRewards();
      }
    }
  };
  CastleEventTeaserDialog.prototype.claimRewards = function () {
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SEventAnnouncementClaimRewardVO());
  };
  CastleEventTeaserDialog.prototype.onRewardCollected = function (e) {
    y.ButtonHelper.enableButton(this.dialogDisp.claimRewardsBtn, !this.dialogProperties.alreadyClaimed);
    this.textFieldManager.registerTextField(this.dialogDisp.claimRewardsBtn.labelTxt, new l.LocalizedTextVO(this.dialogProperties.claimButtonLabel));
  };
  CastleEventTeaserDialog.prototype.fillBackground = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.backgroundContainer);
    var e = new E.CastleGoodgameExternalClip(this.dialogProperties.backgroundName, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.dialogProperties.backgroundName), null, 0, false);
    this.dialogDisp.backgroundContainer.addChild(e.asDisplayObject());
  };
  CastleEventTeaserDialog.prototype.createCharacter = function () {
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.characterContainer);
    var e = d.ClientConstCharacter.getFullSizeAssetName(this.dialogProperties.characterId);
    var t = new E.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    this.dialogDisp.characterContainer.addChild(t.asDisplayObject());
  };
  CastleEventTeaserDialog.prototype.fillTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.dialogTitleTxt, new l.LocalizedTextVO(this.dialogProperties.dialogTitleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.eventTitleTxt, new l.LocalizedTextVO(this.dialogProperties.eventTitleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.possibleRewardsTxt, new l.LocalizedTextVO(this.dialogProperties.possibleEventRewardsDescription));
    this.textFieldManager.registerTextField(this.dialogDisp.descriptionTxt, new l.LocalizedTextVO(this.dialogProperties.announcementDescription)).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.claimRewardsBtn.labelTxt, new l.LocalizedTextVO(this.dialogProperties.claimButtonLabel));
  };
  CastleEventTeaserDialog.prototype.fillEventRewards = function () {
    this.dialogDisp.possibleEventRewards.gotoAndStop(1);
    this.eventRewardComp = this.createScrollableCollectableComponent(this.dialogDisp.possibleEventRewards, 3, this.dialogProperties.possibleRewards, this.collectableRenderList, "possibleReward_", this.dialogDisp.arrowLeftBtn, this.dialogDisp.arrowRightBtn);
  };
  CastleEventTeaserDialog.prototype.fillClaimableRewards = function () {
    this.claimableRewardCollectableList = [];
    this.claimableRewardComp = this.createScrollableCollectableComponent(this.dialogDisp.claimableRewardSets, 4, this.dialogProperties.claimableRewards, this.claimableRewardCollectableList, "claimableReward_", null, null);
  };
  CastleEventTeaserDialog.prototype.createScrollableCollectableComponent = function (e, t, i, n, o, a, s) {
    var r = i.length;
    var l = u.int(r < t ? r : t);
    e.gotoAndStop(l);
    return new D.PaginatedCollectableRenderListWrapper(e, i, n, l < t ? l : t, a, s, o, "mc_item", "parent.btn_info", "mc_icon");
  };
  CastleEventTeaserDialog.prototype.destroyCollectableRenderList = function () {
    e.prototype.destroyCollectableRenderList.call(this);
    this.destroyRenderList(this.claimableRewardCollectableList);
  };
  Object.defineProperty(CastleEventTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEventTeaserDialog.__initialize_static_members = function () {
    CastleEventTeaserDialog.NAME = "EventAnnouncementTeaser";
  };
  return CastleEventTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleEventTeaserDialog = b;
var D = require("./1060.js");
r.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();