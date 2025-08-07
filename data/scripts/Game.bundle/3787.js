Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./21.js");
var g = require("./210.js");
var C = require("./26.js");
var _ = require("./12.js");
var m = require("./15.js");
var f = require("./4.js");
var O = require("./27.js");
var E = require("./251.js");
var y = require("./42.js");
var b = require("./8.js");
var D = require("./11.js");
var I = require("./166.js");
var T = require("./3788.js");
var v = require("./1783.js");
var S = require("./831.js");
var A = require("./3803.js");
var L = require("./3804.js");
var P = require("./548.js");
var M = function (e) {
  function LongTermPointEventDialog() {
    var t = this;
    t.DESCRIPTION_POSITION_WHEN_BOOSTER_ACTIVE = -138;
    t.DESCRIPTION_POSITION_WHEN_BOOSTER_INACTIVE = -92;
    CONSTRUCTOR_HACK;
    return t = e.call(this, LongTermPointEventDialog.NAME) || this;
  }
  n.__extends(LongTermPointEventDialog, e);
  LongTermPointEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new d.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.mc_eventTime.mouseChildren = false;
    this.dialogDisp.hard_mode_medal.mouseChildren = false;
    this.dialogDisp.hard_mode_medal.visible = false;
    this.dialogDisp.hard_mode_medal.toolTipText = "dialog_longPointsEvent_hardModeBadge_tooltip";
    this.dialogDisp.booster.mouseChildren = false;
    this.dialogDisp.booster.toolTipText = "pointsEvent_booster_tooltip";
    this.dialogDisp.booster.mc_percent.visible = false;
  };
  LongTermPointEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.eventInfoComponent ||= new A.LongTermPointEventEventInfoComponent(this.disp, this.dialogProperties);
    if (p.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.setSkin();
      this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_highscore]);
      this.dialogDisp.btn_highscore.toolTipText = "dialog_longPointsEvent_pointRanking_tooltip";
      this.dialogDisp.btn_help.toolTipText = "generic_help";
      var i = new (s.getDefinitionByName("LongTermPointEvent_Icon_Score"))();
      i.toolTipText = "dialog_longPointsEvent_seasonalPoints";
      var n = new (s.getDefinitionByName("LongTermPointEvent_Background_" + this.eventVO.skin.assetName))();
      var o = new V.RewardsDialogScoreBarProperties(this.getRewardLists(), "longPointsEvent", this.tooltipValues, this.levelLabels, null);
      if (this.eventVO.skin == P.LongTermPointEventSkin.XMAS) {
        o.nextRewardTextColor = 15921906;
      }
      if (this.scoreBar) {
        this.scoreBar.destroy();
      }
      this.scoreBar = new w.RewardsDialogScoreBarComponentExternal();
      this.scoreBar.load(this.dialogDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Player", i, n, this.bindFunction(this.openRewardsDialog), o);
      f.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
      f.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventRefreshed));
      f.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      m.CastleBasicController.getInstance().addEventListener(B.DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X, this.bindFunction(this.onTopXUpdated));
      this.onUpdateEventTime();
      this.updateTabs();
      this.eventInfoComponent.showEvent();
    }
  };
  LongTermPointEventDialog.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    m.CastleBasicController.getInstance().addEventListener(g.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  LongTermPointEventDialog.prototype.onEventRefreshed = function (e) {
    this.updateTabs();
    this.updateProgressBar();
  };
  LongTermPointEventDialog.prototype.onTopXUpdated = function (e) {
    this.scoreBar.properties.setLabels(this.levelLabels);
    this.updateProgressBar();
  };
  LongTermPointEventDialog.prototype.onUpdateEventTime = function (e = null) {
    if (p.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.updateTimer();
      this.updateBooster();
      this.eventInfoComponent.updateEventTimer();
    }
  };
  LongTermPointEventDialog.prototype.updateBooster = function () {
    var e = o.castAs(f.CastleModel.boostData.getBoosterByID(r.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID), "LongTermPointEventShopVO");
    if ((this.dialogProperties.isActiveEvent() || this.dialogProperties.selectedEvent == S.LongTermPointEventClientConst.GENERAL_TAB_ID) && e && e.remainingTimeInSeconds > 0) {
      if (e.bonusPercentage > 0) {
        this.dialogDisp.booster.mc_percent.visible = true;
        var t = new u.LocalizedTextVO("value_percentage_add", [String(e.bonusPercentage)]);
        this.textFieldManager.registerTextField(this.dialogDisp.booster.mc_percent.txt_percentage, t);
      }
      var i = O.CastleTimeStringHelper.getEventTimeString(e.remainingTimeInSeconds);
      this.dialogDisp.booster.visible = true;
      this.eventInfoComponent.updateTextPlacement(true);
      this.textFieldManager.registerTextField(this.dialogDisp.booster.txt_booster_duration, new d.TextVO(i)).autoFitToBounds = true;
    } else {
      this.dialogDisp.booster.visible = false;
      this.eventInfoComponent.updateTextPlacement(false);
    }
  };
  LongTermPointEventDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    } else {
      this.updateTabs();
    }
  };
  LongTermPointEventDialog.prototype.updateProgressBar = function () {
    this.scoreBar.update(new E.CastleScoreBarProgressVO(this.eventVO.ownPoints, this.eventVO.ownRank, this.getPointThresholds(), this.eventVO.topX, this.getRewardsReceived()));
  };
  LongTermPointEventDialog.prototype.onUpdatePoints = function (e = null) {
    this.updateProgressBar();
    this.updateHardMode();
  };
  LongTermPointEventDialog.prototype.updateHardMode = function () {
    this.dialogDisp.hard_mode_medal.visible = this.dialogProperties.eventVO.isHardMode;
  };
  LongTermPointEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          return;
        case this.dialogDisp.btn_help:
          this.showHelp();
          return;
        case this.dialogDisp.btn_highscore:
          R.CastleDialogHandler.getInstance().registerDialogs(T.LongtermPointEventGlobalLeaderBoardDialog);
          return;
        case this.dialogDisp.btn_showMe:
          R.CastleDialogHandler.getInstance().registerDialogs(v.ApprenticeSmithEventDialog, new I.CastleGenericMerchantDialogProperties(f.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR), this.getPackageIDForShowMeButton()));
          return;
      }
      if (!this.eventInfoComponent.handleClickedTab(t.target)) {
        this.eventInfoComponent.handleEventButtonClick(t.target);
      }
      this.updateBooster();
    }
  };
  LongTermPointEventDialog.prototype.openRewardsDialog = function () {
    R.CastleDialogHandler.getInstance().registerDefaultDialogs(x.LongTermPointEventRewardListDialog, new L.LongTermPointEventRewardListProperties(this.getRewardLists(), this.getPointThresholds(), this.getRewardsReceived(), this.eventVO.skin));
  };
  LongTermPointEventDialog.prototype.getPackageIDForShowMeButton = function () {
    var e = this.eventVO.rewardLists[0].getItemByIndex(0);
    var t = f.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    if (!t) {
      return -1;
    }
    if (!o.instanceOfClass(e, "CollectableItemGenericCurrencyVO")) {
      return -1;
    }
    for (var i = 0; i < t.eventPackages.length; i++) {
      if (t.eventPackages[i].getCostList().getItemByIndex(0) && t.eventPackages[i].getCostList().getItemByIndex(0).itemType == _.CollectableEnum.GENERIC_CURRENCY && t.eventPackages[i].getCostList().getItemByIndex(0).id == e.id) {
        return t.eventPackages[i].packageID;
      }
    }
    return -1;
  };
  LongTermPointEventDialog.prototype.getRewardsReceived = function () {
    return p.int(this.eventVO.isHardMode ? this.eventVO.rewardsReceivedRaw : this.eventVO.rewardsReceived);
  };
  LongTermPointEventDialog.prototype.getPointThresholds = function () {
    if (this.eventVO.isHardMode) {
      return this.eventVO.pointThreshholdsRaw;
    } else {
      return this.eventVO.pointThresholds;
    }
  };
  LongTermPointEventDialog.prototype.getRewardLists = function () {
    if (this.eventVO.isHardMode) {
      return this.eventVO.rewardListsRaw;
    } else {
      return this.eventVO.rewardLists;
    }
  };
  LongTermPointEventDialog.prototype.showHelp = function () {
    R.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_longPointsEvent"));
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.getPointThresholds().length && this.getPointThresholds()[t] != 0; t++) {
        e.push(this.getPointThresholds()[t]);
      }
      for (t = 0; t < this.eventVO.topX.length; t++) {
        e.push(c.Localize.text("Ranking_TopX", [this.eventVO.topX[t]]));
      }
      if (this.eventVO.topX.length < 3) {
        e.push(c.Localize.text("Ranking_Winner"));
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventDialog.prototype, "tooltipValues", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.getPointThresholds().length && this.getPointThresholds()[t] != 0; t++) {
        e.push(this.getPointThresholds()[t]);
      }
      for (var i = 0; i < this.eventVO.topX.length; i++) {
        e.push(this.eventVO.topX[i]);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.prototype.setSkin = function () {
    this.setSkinText();
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "skin", {
    get: function () {
      return this.dialogProperties.eventVO.skin;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.prototype.updatePosition = function () {
    e.prototype.updatePosition.call(this);
    if (o.MobileHelper.isScreenTooSmall()) {
      var t = this.disp;
      t.scaleX = t.scaleY = t.scaleX * 0.9;
      t.x += t.width * 0.05;
      t.y -= t.height * 0.04;
    }
  };
  LongTermPointEventDialog.prototype.setSkinText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechbubble, new u.LocalizedTextVO("dialog_longPointsEvent_eventcamp_message" + this.dialogProperties.eventVO.skin.textSuffix)).verticalAlign = y.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  LongTermPointEventDialog.prototype.updateTimer = function () {
    var e = p.int(this.eventVO.remainingEventTimeInSeconds);
    this.itxt_time.textContentVO.stringValue = O.CastleTimeStringHelper.getEventTimeString(e);
    this.dialogDisp.mc_time.toolTipText = O.CastleTimeStringHelper.getEventToolTipString(e);
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    m.CastleBasicController.getInstance().removeEventListener(g.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
    f.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    f.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onEventRefreshed));
    f.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    m.CastleBasicController.getInstance().removeEventListener(B.DynamicTopXEvent.UPDATE_DYNAMIC_TOP_X, this.bindFunction(this.onTopXUpdated));
  };
  LongTermPointEventDialog.prototype.updateTabs = function () {
    this.dialogProperties.updateEventIDs();
    this.eventInfoComponent.properties = this.dialogProperties;
  };
  Object.defineProperty(LongTermPointEventDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventDialog.__initialize_static_members = function () {
    LongTermPointEventDialog.TAB_ICONS_IDS = [S.LongTermPointEventClientConst.GENERAL_TAB_ID, l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, l.EventConst.EVENTTYPE_SAMURAI_INVASION, l.EventConst.EVENTTYPE_FACTION_INVASION, l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
  };
  LongTermPointEventDialog.NAME = "LongTermPointEvent_Jan25";
  return LongTermPointEventDialog;
}(D.CastleExternalDialog);
exports.LongTermPointEventDialog = M;
var R = require("./9.js");
var V = require("./464.js");
var x = require("./3805.js");
var w = require("./465.js");
var B = require("./1785.js");
a.classImplementsInterfaces(M, "ICollectableRendererList");
M.__initialize_static_members();