Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./23.js");
var d = require("./261.js");
var p = require("./32.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./305.js");
var _ = createjs.MouseEvent;
var m = function (e) {
  function StatusIconDailyQuest() {
    var t = this;
    t._initLevel = 0;
    t.hasEverClickedIcon = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, "Btn_DailyActivity", "mc_icon.mc_count.txt_label", new r.NumberVO(0)) || this).allowCaching = false;
    return t;
  }
  n.__extends(StatusIconDailyQuest, e);
  StatusIconDailyQuest.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.icon.basicButton.removeMouseEventListener();
    this.icon.basicButton = null;
    this.icon.mouseChildren = true;
    g.ButtonHelper.initBasicButtons([this.icon.mc_bubble, this.icon.mc_icon]);
    this.icon.mc_icon.toolTipText = "dialog_dailyQuests_hudName";
    this.initElements();
    if (this._initLevel == a.DailyQuestConst.MIN_LEVEL) {
      this.showSpeechbubble();
    } else {
      this.hideSpeechbubble();
    }
  };
  StatusIconDailyQuest.prototype.initElements = function () {
    if (this.icon) {
      this._initLevel = l.int(h.CastleModel.userData.userLevel);
      if (this._initLevel == a.DailyQuestConst.MIN_LEVEL) {
        this.itxt_bubbleText = this.textFieldManager.registerTextField(this.icon.mc_bubble.txt_title, new s.LocalizedTextVO("dialog_dailyQuests_hudIntro"));
      } else {
        this.itxt_bubbleText = this.textFieldManager.registerTextField(this.icon.mc_bubble.txt_title, new s.LocalizedTextVO("dialog_dailyQuests_hudCompleted"));
      }
      this.itxt_bubbleText.autoFitToBounds = true;
      this.itxt_bubbleText.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    }
  };
  StatusIconDailyQuest.prototype.setVisibilityLoaded = function () {
    if (this.isVisible()) {
      this.setIndicator();
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconDailyQuest.prototype.isVisible = function () {
    return h.CastleModel.userData.userLevel >= a.DailyQuestConst.MIN_LEVEL && h.CastleModel.dailyQuestData.getRunningQuestCount() > 0;
  };
  StatusIconDailyQuest.prototype.setIndicator = function () {
    if (this.itxt_label) {
      if (this.itxt_label.textContentVO.numberValue > 0 && this.itxt_label.textContentVO.numberValue > h.CastleModel.dailyQuestData.getRunningQuestCount()) {
        this.showSpeechbubble();
      }
      this.itxt_label.textContentVO.numberValue = h.CastleModel.dailyQuestData.getRunningQuestCount();
    }
  };
  StatusIconDailyQuest.prototype.onClick = function () {
    this.hideSpeechbubble();
    f.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleDailyQuestDialog);
    if (!this.hasEverClickedIcon) {
      this.hasEverClickedIcon = true;
      this.itxt_bubbleText.textContentVO.textId = "dialog_dailyQuests_hudCompleted";
    }
  };
  StatusIconDailyQuest.prototype.showSpeechbubble = function () {
    var e = h.CastleModel.tutorialData.isTutorialActive;
    var t = {
      autoAlpha: 1,
      ease: c.Linear.easeIn
    };
    if (!e) {
      t.onComplete = this.bindFunction(this.hideTweenSpeechbubble);
      t.onCompleteParams = [true];
    }
    u.TweenMax.killTweensOf(this.icon.mc_bubble);
    u.TweenMax.to(this.icon.mc_bubble, StatusIconDailyQuest.QUEST_BUBBLE_ANIMATION_TIME, t);
  };
  StatusIconDailyQuest.prototype.hideTweenSpeechbubble = function (e = false) {
    u.TweenMax.killTweensOf(this.icon.mc_bubble);
    if (!h.CastleModel.tutorialData.isTutorialActive && e) {
      u.TweenMax.to(this.icon.mc_bubble, StatusIconDailyQuest.QUEST_BUBBLE_ANIMATION_TIME, {
        delay: 4,
        autoAlpha: 0,
        ease: c.Linear.easeOut
      });
    } else {
      this.icon.mc_bubble.visible = false;
    }
  };
  StatusIconDailyQuest.prototype.hideSpeechbubble = function () {
    this.hideTweenSpeechbubble();
  };
  StatusIconDailyQuest.prototype.onRefresh = function (e) {
    this.setVisibility();
  };
  StatusIconDailyQuest.prototype.onLevelUp = function (e) {
    this.checkElements();
    if (this._initLevel < a.DailyQuestConst.MIN_LEVEL && h.CastleModel.userData.userLevel >= a.DailyQuestConst.MIN_LEVEL && !this.hasEverClickedIcon && this.itxt_bubbleText.textContentVO) {
      this.itxt_bubbleText.textContentVO.textId = "dialog_dailyQuests_hudIntro";
      this.itxt_bubbleText.autoFitToBounds = true;
      this.itxt_bubbleText.verticalAlign = o.GGSVerticalAlign.MIDDLE;
      this.showSpeechbubble();
      this.setVisibility();
    }
  };
  StatusIconDailyQuest.prototype.checkElements = function () {
    if (!this._initLevel || !this.itxt_bubbleText) {
      this.initElements();
    }
  };
  StatusIconDailyQuest.prototype.onClickInnerMC = function (e) {
    this.onClick();
  };
  StatusIconDailyQuest.prototype.addEventListenerForVisibility = function () {
    h.CastleModel.dailyQuestData.addEventListener(d.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onRefresh));
    this.controller.addEventListener(p.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.icon.mc_bubble.addEventListener(_.CLICK, this.bindFunction(this.onClickInnerMC));
    this.icon.mc_icon.addEventListener(_.CLICK, this.bindFunction(this.onClickInnerMC));
  };
  StatusIconDailyQuest.prototype.removeEventListenerForVisibility = function () {
    h.CastleModel.dailyQuestData.removeEventListener(d.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onRefresh));
    this.controller.removeEventListener(p.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.icon.mc_bubble.removeEventListener(_.CLICK, this.bindFunction(this.onClickInnerMC));
    this.icon.mc_icon.removeEventListener(_.CLICK, this.bindFunction(this.onClickInnerMC));
  };
  StatusIconDailyQuest.__initialize_static_members = function () {
    StatusIconDailyQuest.QUEST_BUBBLE_ANIMATION_TIME = 0.8;
  };
  return StatusIconDailyQuest;
}(C.ACastleLabeledStatusIcon);
exports.StatusIconDailyQuest = m;
var f = require("./9.js");
var O = require("./3942.js");
m.__initialize_static_members();