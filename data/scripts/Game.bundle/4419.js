Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./23.js");
var d = require("./57.js");
var p = require("./4420.js");
var h = require("./1888.js");
var g = require("./48.js");
var C = require("./31.js");
var _ = require("./67.js");
var m = require("./19.js");
var f = require("./13.js");
var O = require("./4.js");
var E = require("./1887.js");
var y = require("./9.js");
var b = require("./20.js");
var D = require("./82.js");
var I = require("./47.js");
var T = require("./59.js");
var v = require("./8.js");
var S = require("./25.js");
var A = require("./1455.js");
var L = require("./35.js");
var P = require("./493.js");
var M = require("./1903.js");
var R = require("./4421.js");
var V = require("./4422.js");
var x = createjs.Point;
var w = function (e) {
  function DonationEventDialogDonate(t) {
    var i = e.call(this, t) || this;
    i._scrollY = 0;
    i._scrollHeight = 0;
    i._originalMaskHeight = 0;
    i.selectionChanged = new d.Signal();
    i.donateConfirmed = false;
    v.ButtonHelper.initButtons([i.subLayerDisp.btn_donate, i.subLayerDisp.btn_reset, i.subLayerDisp.btn_title_info], b.ClickFeedbackButtonHover);
    var n = new I.SimpleScrollVO().initByParent(i.subLayerDisp.mc_list.mc_slider).addMouseWheelElements([i.subLayerDisp.parent]).addSliderLine(i.subLayerDisp.mc_list.mc_slider.sliderBar).addSliderBackground(i.subLayerDisp.mc_list.mc_slider.sliderBG);
    var a = new T.DynamicSizeScrollStrategyVertical(true, i.subLayerDisp.mc_list.mc_mask.height, true);
    i._scrollComponent = new D.ModernSliderScrollComponent(n, a, true);
    i._scrollY = i.subLayerDisp.mc_list.mc_items.y;
    i.subLayerDisp.btn_title_info.toolTipText = "dialog_mainDonationEvent_eventType_help";
    i.textFieldManager.registerTextField(i.subLayerDisp.btn_donate.txt_copy, new c.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("tut_donateC1_title")));
    i.textFieldManager.registerTextField(i.subLayerDisp.btn_reset.txt_copy, new c.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("reset")));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_end.txt_copy, new c.LocalizedTextVO("dialog_mainDonationEvent_reward_maxLevelDesc"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.txt_currentPointTitle, new c.LocalizedTextVO("points_noValue"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_start.txt_currentPointTitle, new c.LocalizedTextVO("points_noValue"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_end.txt_currentPointTitle, new c.LocalizedTextVO("points_noValue"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.txt_nextPointTitle, new c.LocalizedTextVO("dialog_mainDonationEvent_nextLevelPoints"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_start.txt_nextPointTitle, new c.LocalizedTextVO("dialog_mainDonationEvent_nextLevelPoints"));
    i.itxt_progress_level_max = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_end.mc_item.txt_level_title, new c.LocalizedTextVO("levelX_colon"));
    i.itxt_progress_level_progress_next = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.mc_item0.txt_level_title, new c.LocalizedTextVO("levelX_colon"));
    i.itxt_progress_level_number = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.mc_item0.txt_level, new c.LocalizedNumberVO(0));
    i.itxt_progress_level_number.visible = false;
    i.itxt_progress_level_progress_current = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.mc_item1.txt_level_title, new c.LocalizedTextVO("levelX_colon"));
    i.itxt_progress_level_start = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_start.mc_nextReward.txt_level_title, new c.LocalizedTextVO("levelX_colon"));
    i.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated.alpha = 0;
    i._currentPointsTextVO = new l.HTMLTextCustomVO();
    i._currentPointsTextVO.addLocalizedTextVO(new c.LocalizedTextVO(o.GenericTextIds.VALUE_SIMPLE_COMP, [0, ""]));
    i.itxt_start_currentPoints = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_start.txt_currentPoints, i._currentPointsTextVO);
    i.itxt_progress_currentPoints = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.txt_currentPoints, i._currentPointsTextVO);
    i.itxt_end_currentPoints = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_end.txt_currentPoints, i._currentPointsTextVO);
    i.itxt_start_nextPoints = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_start.txt_nextPoints, new c.LocalizedNumberVO(0));
    i.itxt_progress_nextPoints = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.txt_nextPoints, new c.LocalizedNumberVO(0));
    i.itxt_skipLevel = i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_skipLevel.txt_copy, new c.LocalizedTextVO("value_nominal_add", [0]));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_banner.txt_copy, new c.LocalizedTextVO("eyecatcher_valuable"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_right.mc_progress.mc_item0.mc_banner.txt_copy, new c.LocalizedTextVO("eyecatcher_valuable"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_info.txt_desc, new c.LocalizedTextVO("capReachedRanking_DonationEvent", [""]));
    i._originalMaskHeight = i.subLayerDisp.mc_list.mc_mask.height;
    return i;
  }
  n.__extends(DonationEventDialogDonate, e);
  DonationEventDialogDonate.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.donateConfirmed = false;
    this._typeVO = t[0];
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new c.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("dialog_mainDonationEvent_title_" + this._typeVO.name.toLowerCase())));
    this.buildItems();
    this._scrollComponent.init(0, Math.max(0, this._scrollHeight - this.subLayerDisp.mc_list.mc_mask.height), 30, 30);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    O.CastleModel.donationEventData.addEventListener(h.CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED, this.bindFunction(this.onPointsUpdated));
    this.selectionChanged.add(this.bindFunction(this.onSelectionChanged));
    this.subLayerDisp.mc_right.rewardBar.mc_yellow.scaleY = 0;
    this.showRewards(false);
    this.updateGreenRewardBar(false);
    this.updateYellowRewardBar();
    this.onSelectionChanged();
    this.updateDonationWarning();
    this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated.alpha = 0;
    this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated2.alpha = 0;
    this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated2.alpha = 0;
    this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_animated.alpha = 0;
    this.subLayerDisp.mc_right.mc_end.mc_item.mc_animated.alpha = 0;
  };
  DonationEventDialogDonate.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.resetItems();
    if (this._scrollComponent) {
      this._scrollComponent.scrollToValue(0);
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
    O.CastleModel.donationEventData.removeEventListener(h.CastleDonationEventDataEvent.ON_CURRENT_SPENT_POINTS_UPDATED, this.bindFunction(this.onPointsUpdated));
    this.selectionChanged.remove(this.bindFunction(this.onSelectionChanged));
    if (this._originalMaskHeight > 0) {
      this.subLayerDisp.mc_list.mc_mask.height = this._originalMaskHeight;
    }
  };
  DonationEventDialogDonate.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (v.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_donate:
          this.onDonate();
          break;
        case this.subLayerDisp.btn_reset:
          this.buildItems();
          this.updateYellowRewardBar();
          break;
        case this.subLayerDisp.btn_title_info:
          y.CastleDialogHandler.getInstance().registerDialogs(V.DonationEventStartDialog);
      }
    }
  };
  DonationEventDialogDonate.prototype.showRewards = function (e) {
    var t = this.subLayerDisp.mc_right.mc_start.visible;
    this.updateRewards();
    if (e && this.nextRewardVO && this.currentRewardVO && this.currentShownReward != this.currentRewardVO && t) {
      this.subLayerDisp.mc_right.mc_start.visible = true;
      this.subLayerDisp.mc_right.mc_progress.visible = false;
      this.animationStepOne2TwoRewards1();
      this.currentShownReward = this.currentRewardVO;
    } else if (e && this.currentRewardVO && this.currentShownReward != this.currentRewardVO) {
      this.animationStep1();
      this.currentShownReward = this.currentRewardVO;
    }
  };
  DonationEventDialogDonate.prototype.updateRewards = function () {
    this.donateConfirmed = false;
    var e = this.currentRewardVO ? O.CastleModel.rewardData.getListById(this.currentRewardVO.rewardID) : null;
    var t = this.nextRewardVO ? O.CastleModel.rewardData.getListById(this.nextRewardVO.rewardID) : null;
    var i = new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_DEFAULT, new x(184, 106));
    if (e && t) {
      this.subLayerDisp.mc_right.mc_progress.visible = true;
      this.subLayerDisp.mc_right.mc_start.visible = false;
      this.subLayerDisp.mc_right.mc_end.visible = false;
      a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_icon);
      a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_icon);
      this.itxt_progress_level_number.textContentVO.numberValue = O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.nextRewardVO.donationRewardID);
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_right.mc_progress.mc_item1.txt_level, new c.LocalizedNumberVO(O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.currentRewardVO.donationRewardID))).visible = false;
      this.itxt_progress_level_progress_next.textContentVO.textReplacements = [O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.nextRewardVO.donationRewardID)];
      this.itxt_progress_level_progress_current.textContentVO.textReplacements = [O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.currentRewardVO.donationRewardID)];
      var n = new g.CollectableList();
      n.addItem(t.getItemByIndex(0));
      n.addItem(e.getItemByIndex(0));
      S.CollectableRenderHelper.displayMultipleItemsComplete(this, new _.CollectableRenderClipsList(this.subLayerDisp.mc_right.mc_progress, "mc_item").addInfoBtns("parent.btn_info", null, true), n, i);
    } else {
      this.subLayerDisp.mc_right.mc_progress.visible = false;
      this.subLayerDisp.mc_right.mc_start.visible = !e;
      this.subLayerDisp.mc_right.mc_end.visible = !t;
      a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_icon);
      a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_right.mc_end.mc_item.mc_icon);
      var o = t ? this.subLayerDisp.mc_right.mc_start.mc_nextReward : this.subLayerDisp.mc_right.mc_end.mc_item;
      if (t) {
        this.itxt_progress_level_start.textContentVO.textReplacements = [O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.nextRewardVO.donationRewardID)];
      } else {
        this.itxt_progress_level_max.textContentVO.textReplacements = [O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.currentRewardVO.donationRewardID)];
      }
      this.textFieldManager.registerTextField(o.txt_level, new c.LocalizedNumberVO(O.CastleModel.donationEventData.getRewardLevelByDonationRewardID(e ? this.currentRewardVO.donationRewardID : this.nextRewardVO.donationRewardID))).visible = false;
      S.CollectableRenderHelper.displaySingleItemComplete(this, new C.CollectableRenderClips(o.mc_icon).addInfoBtn((t ? this.subLayerDisp.mc_right.mc_start : this.subLayerDisp.mc_right.mc_end).btn_info).addIconMc(o.mc_icon), (t || e).getItemByIndex(0), i);
    }
  };
  DonationEventDialogDonate.prototype.animationStepOne2TwoRewards1 = function () {
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: u.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStepOne2TwoRewards2)
    });
  };
  DonationEventDialogDonate.prototype.animationStepOne2TwoRewards2 = function () {
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_start.mc_nextReward.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: u.Linear.easeOut
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_start, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: u.Linear.easeOut,
      onComplete: this.bindFunction(this.animationStepOne2TwoRewards3)
    });
  };
  DonationEventDialogDonate.prototype.animationStepOne2TwoRewards3 = function () {
    this.subLayerDisp.mc_right.mc_start.visible = false;
    this.subLayerDisp.mc_right.mc_start.alpha = 1;
    this.subLayerDisp.mc_right.mc_progress.visible = true;
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: u.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStep3)
    });
  };
  DonationEventDialogDonate.prototype.animationStep1 = function () {
    this.itxt_progress_level_progress_next.color = "#F3C24A";
    this.itxt_progress_level_number.color = "#F3C24A";
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: u.Linear.easeIn
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_icon, 0.5, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: u.Linear.easeIn
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: u.Linear.easeIn
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated2, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: u.Linear.easeIn
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_icon, 0.5, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: u.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStep2)
    });
  };
  DonationEventDialogDonate.prototype.animationStep2 = function () {
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: u.Linear.easeOut
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_end.mc_item.mc_icon, 0.5, {
      scaleX: 1.1,
      scaleY: 1.1
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: u.Linear.easeOut
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: u.Linear.easeOut
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_animated2, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: u.Linear.easeOut
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item0.mc_icon, 0.5, {
      scaleX: 1.1,
      scaleY: 1.1
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: u.Linear.easeOut,
      onComplete: this.bindFunction(this.animationStep3)
    });
  };
  DonationEventDialogDonate.prototype.animationStep3 = function () {
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_animated, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: u.Linear.easeIn
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_icon, 0.5, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      ease: u.Linear.easeIn,
      onComplete: this.bindFunction(this.animationStep4)
    });
  };
  DonationEventDialogDonate.prototype.animationStep4 = function () {
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_animated, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: u.Linear.easeOut
    });
    u.TweenMax.fromTo(this.subLayerDisp.mc_right.mc_progress.mc_item1.mc_icon, 0.5, {
      scaleX: 1.1,
      scaleY: 1.1
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: u.Linear.easeOut
    });
    this.itxt_progress_level_progress_next.color = "#EAD0B2";
    this.itxt_progress_level_number.color = "#EAD0B2";
  };
  DonationEventDialogDonate.prototype.onDonate = function () {
    var e = [];
    this.itemVEs.forEach(function (t) {
      if (t.selectedAmount > 0) {
        e.push({
          DII: t.donationItemVO.donationItemID,
          DIA: t.selectedAmount
        });
      }
    });
    if (this.nextRewardVO && this.getCurrentRewardPoints() + this.selectedPoints() > this.maxRewardVO.minPoints) {
      y.CastleDialogHandler.getInstance().registerDialogs(M.ModernYesNoBlueDialog, new P.CastleStandardYesNoDialogProperties(c.Localize.text("attention"), c.Localize.text("dialog_donationEvent_exceedingWarning"), function () {
        a.BasicModel.smartfoxClient.sendCommandVO(new p.C2SDonatePointTypeVO(e));
      }));
    } else {
      a.BasicModel.smartfoxClient.sendCommandVO(new p.C2SDonatePointTypeVO(e));
    }
    this.donateConfirmed = true;
  };
  DonationEventDialogDonate.prototype.resetItems = function () {
    if (this.itemVEs) {
      this.itemVEs.forEach(function (e) {
        e.hide();
      });
    }
  };
  DonationEventDialogDonate.prototype.onScroll = function () {
    this.subLayerDisp.mc_list.mc_items.y = this._scrollY - this._scrollComponent.currentValue;
  };
  DonationEventDialogDonate.prototype.buildItems = function () {
    var e = this;
    var t = 0;
    var i = this.eventVO.settingVO.getDonateItemVOsByType(this._typeVO.donationTypeID);
    this.resetItems();
    this.itemVEs = [];
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_list.mc_items);
    i.forEach(function (i) {
      var n = new R.DonationEventDialogDonateItem(i, e.selectionChanged);
      e.subLayerDisp.mc_list.mc_items.addChild(n.clip);
      e.itemVEs.push(n);
      n.clip.y = t;
      t += n.clip.height + 2;
      n.show();
    });
    this._scrollHeight = t - 2;
    this._currentPointsTextVO.localizedTextVO.textReplacements = this.getPointsTextReplacements();
    this.itxt_start_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_progress_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_end_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_start_nextPoints.textContentVO.numberValue = this.nextMaxRewardLevelPoints();
    this.itxt_progress_nextPoints.textContentVO.numberValue = this.nextMaxRewardLevelPoints();
    this.updateYellowRewardBar();
    this.onSelectionChanged();
  };
  DonationEventDialogDonate.prototype.getPointsTextReplacements = function () {
    var e = "";
    if (this.selectedPoints() > 0) {
      e = new A.ColoredHTMLTextReplacementVO(new c.LocalizedTextVO("value_brackets_add", [this.selectedPoints()]), "#F3C24A");
    }
    return [this.currentRewardLevelPoints(), e];
  };
  DonationEventDialogDonate.prototype.onPointsUpdated = function (e = null) {
    this.buildItems();
    this.updateGreenRewardBar(true);
    this.showRewards(this.donateConfirmed);
    this.updateDonationWarning();
  };
  DonationEventDialogDonate.prototype.onSelectionChanged = function (e = null) {
    this.updateYellowRewardBar();
    this._currentPointsTextVO.localizedTextVO.textReplacements = this.getPointsTextReplacements();
    this.itxt_start_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_progress_currentPoints.textContentVO = this._currentPointsTextVO;
    this.itxt_end_currentPoints.textContentVO = this._currentPointsTextVO;
    v.ButtonHelper.enableButton(this.subLayerDisp.btn_donate, this.selectedPoints() > 0);
    v.ButtonHelper.enableButton(this.subLayerDisp.btn_reset, this.selectedPoints() > 0);
    this.subLayerDisp.mc_right.mc_skipLevel.visible = this.numOfLevelsGaining > 0;
    this.itxt_skipLevel.textContentVO.textReplacements = [this.numOfLevelsGaining];
  };
  DonationEventDialogDonate.prototype.updateYellowRewardBar = function () {
    var e = 1;
    if (this.nextMaxRewardLevelPoints() > 0) {
      e = Math.min(1, (this.currentRewardLevelPoints() + this.selectedPoints()) / this.nextMaxRewardLevelPoints());
    }
    u.TweenLite.to(this.subLayerDisp.mc_right.rewardBar.mc_yellow, 0.1, {
      scaleY: e,
      ease: u.Power1.easeOut
    });
  };
  DonationEventDialogDonate.prototype.updateGreenRewardBar = function (e) {
    var t = 1;
    if (this.nextMaxRewardLevelPoints() > 0) {
      t = Math.min(1, this.currentRewardLevelPoints() / this.nextMaxRewardLevelPoints());
    }
    this.subLayerDisp.mc_right.rewardBar.height;
    if (e) {
      u.TweenLite.to(this.subLayerDisp.mc_right.rewardBar.mc_green, 0.3, {
        scaleY: t,
        ease: u.Power1.easeOut
      });
    } else {
      this.subLayerDisp.mc_right.rewardBar.mc_green.scaleY = t;
    }
  };
  DonationEventDialogDonate.prototype.updateDonationWarning = function () {
    var e = this._typeVO.donationTypeID == E.CastleDonationEventData.LEADERBOARD_DONATIONTYPE_ID;
    var t = this.getCurrentRewardPoints() >= this.maxRewardVO.minPoints;
    var i = e && t;
    var n = this._originalMaskHeight - this.subLayerDisp.mc_info.height;
    this.subLayerDisp.mc_info.visible = i;
    this.subLayerDisp.mc_list.mc_mask.height = i ? n : this._originalMaskHeight;
    this.subLayerDisp.mc_list.y = i ? this.subLayerDisp.mc_info.height : 0;
    this.subLayerDisp.mc_list.mc_slider.sliderBG.height = i ? n : this._originalMaskHeight;
    this.subLayerDisp.mc_list.mc_slider.sliderBar.height = i ? n - 4 : this._originalMaskHeight - 4;
    this.subLayerDisp.mc_list.mc_slider.sliderBar.y = this.subLayerDisp.mc_list.mc_slider.sliderBar.height / 2;
    var o = this._scrollComponent.currentValue;
    this._scrollComponent.strategy.visibleValue = this.subLayerDisp.mc_list.mc_mask.height;
    this._scrollComponent.init(0, Math.max(0, this._scrollHeight - this.subLayerDisp.mc_list.mc_mask.height), 30, 30);
    this._scrollComponent.scrollToValue(o, false);
  };
  Object.defineProperty(DonationEventDialogDonate.prototype, "numOfLevelsGaining", {
    get: function () {
      var e = this;
      var t = 0;
      var i = this.nextRewardVO;
      this.allRewards.forEach(function (n) {
        if (e.getCurrentRewardPoints() + e.selectedPoints() >= n.minPoints && i && i.minPoints <= n.minPoints) {
          t++;
        }
      });
      return t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonate.prototype, "maxRewardVO", {
    get: function () {
      var e;
      this.allRewards.forEach(function (t) {
        if (!e || t.minPoints > e.minPoints) {
          e = t;
        }
      });
      return e;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventDialogDonate.prototype.currentRewardLevelPoints = function () {
    return this.getCurrentRewardPoints() - (this.currentRewardVO ? this.currentRewardVO.minPoints : 0);
  };
  DonationEventDialogDonate.prototype.nextMaxRewardLevelPoints = function () {
    if (this.currentRewardVO) {
      if (this.nextRewardVO) {
        return this.nextRewardVO.minPoints - this.currentRewardVO.minPoints;
      } else {
        return 0;
      }
    } else {
      return this.nextRewardVO.minPoints;
    }
  };
  Object.defineProperty(DonationEventDialogDonate.prototype, "nextRewardVO", {
    get: function () {
      var e = this;
      var t = this.currentRewardVO;
      var i = null;
      this.allRewards.forEach(function (n) {
        if (i) {
          if (!t && e.getCurrentRewardPoints() < n.minPoints && i.minPoints > n.minPoints || t && e.getCurrentRewardPoints() < n.minPoints && i.minPoints > n.minPoints && n.minPoints > t.minPoints) {
            i = n;
          }
        } else if (!t && e.getCurrentRewardPoints() < n.minPoints || t && t.minPoints < n.minPoints) {
          i = n;
        }
      });
      return i;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonate.prototype, "currentRewardVO", {
    get: function () {
      var e = this;
      var t = null;
      this.allRewards.forEach(function (i) {
        if (t) {
          if (e.getCurrentRewardPoints() >= i.minPoints && i.minPoints > t.minPoints) {
            t = i;
          }
        } else if (e.getCurrentRewardPoints() >= i.minPoints) {
          t = i;
        }
      });
      return t;
    },
    enumerable: true,
    configurable: true
  });
  DonationEventDialogDonate.prototype.selectedPoints = function () {
    var e = 0;
    this.itemVEs.forEach(function (t) {
      e += t.selectedPoints;
    });
    return e;
  };
  DonationEventDialogDonate.prototype.getCurrentRewardPoints = function () {
    return O.CastleModel.donationEventData.getCurrentRewardPointsForType(this._typeVO.donationTypeID, this.eventVO.settingVO.donationItemSetID);
  };
  Object.defineProperty(DonationEventDialogDonate.prototype, "allRewards", {
    get: function () {
      return O.CastleModel.donationEventData.getRewardVOs_By_RewardSetID_And_PointTypeID(this.eventVO.settingVO.rewardSetID, this._typeVO.donationTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialogDonate.prototype, "eventVO", {
    get: function () {
      return O.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_DONATION);
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventDialogDonate;
}(L.CastleDialogSubLayer);
exports.DonationEventDialogDonate = w;
s.classImplementsInterfaces(w, "ICollectableRendererList", "ISublayer");