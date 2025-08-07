Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./16.js");
var C = require("./776.js");
var _ = require("./3180.js");
var m = require("./21.js");
var f = require("./15.js");
var O = require("./4.js");
var E = require("./259.js");
var y = require("./8.js");
var b = require("./3181.js");
var D = require("./3182.js");
var I = createjs.MouseEvent;
var T = createjs.Point;
var v = function (e) {
  function CastleMercenaryMissionItem(t) {
    var i = e.call(this, t) || this;
    i.initButtons([t.btn_start, t.btn_refresh, t.btn_collect, t.mc_rewards.item0.btn_info, t.mc_rewards.item1.btn_info, t.mc_rewards.item2.btn_info]);
    i.rewardsComponent = new P.CastleCenteredRewardRendererListComponent(t.mc_rewards, new T(37, 37));
    i.itxt_missionType = i.textFieldManager.registerTextField(t.mc_missionInfo.txt_missionType, new p.LocalizedTextVO(""));
    i.itxt_cost = i.textFieldManager.registerTextField(t.mc_missionInfo.mc_info.mc_cost.txt_cost, new d.LocalizedNumberVO(0));
    i.itxt_time = i.textFieldManager.registerTextField(t.mc_missionInfo.mc_info.mc_time.txt_time, new h.TextVO(""));
    i.itxt_progress = i.textFieldManager.registerTextField(t.mc_missionInfo.mc_progress.txt_progress, new h.TextVO(""));
    i.itxt_start = i.textFieldManager.registerTextField(t.btn_start.txt_label, new p.LocalizedTextVO("dialog_mission_start"));
    i.itxt_collect = i.textFieldManager.registerTextField(t.btn_collect.txt_label, new p.LocalizedTextVO(""));
    i.itxt_start.verticalAlign = a.GGSVerticalAlign.MIDDLE;
    i.itxt_collect.verticalAlign = a.GGSVerticalAlign.MIDDLE;
    t.mc_missionInfo.mc_info.mc_cost.mouseChildren = false;
    t.mc_missionInfo.mc_info.mc_cost.toolTipText = "cash";
    t.mc_missionInfo.mc_info.mc_time.mouseChildren = false;
    t.mc_missionInfo.mc_info.mc_time.toolTipText = "dialog_moveOverview_waitTime";
    t.mc_missionInfo.mc_progress.mouseChildren = false;
    t.mc_missionInfo.mc_progress.toolTipText = "resttime";
    i.progressBar = new o.BasicProgressBar(t.mc_missionInfo.mc_progress.mc_bar);
    i.timerComponent = new E.CastleTimerComponent(i.itxt_progress, i.bindFunction(i.getRemainingTimeString));
    t.btn_refresh.toolTipText = "dialog_mission_swap";
    return i;
  }
  n.__extends(CastleMercenaryMissionItem, e);
  CastleMercenaryMissionItem.prototype.initButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          y.ButtonHelper.initBasicButton(n);
        }
      }
    }
  };
  CastleMercenaryMissionItem.prototype.customFillItem = function () {
    this.disp.mc_background.gotoAndStop(this.missionItemVO.quality + 1);
    this.rewardsComponent.showRewards(this.missionItemVO.rewards);
    this.fillMissionInfo();
    this.updateButtons();
  };
  CastleMercenaryMissionItem.prototype.show = function () {
    e.prototype.show.call(this);
    this.disp.addEventListener(I.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  CastleMercenaryMissionItem.prototype.fillMissionInfo = function () {
    this.disp.mc_missionInfo.mc_info.visible = false;
    this.disp.mc_missionInfo.mc_progress.visible = false;
    this.itxt_missionType.textContentVO.textId = this.missionItemVO.getMissionTypeTextID();
    switch (this.missionItemVO.state) {
      case S.CastleMercenaryData.MISSION_STATE_DEFAULT:
        this.showTimeAndCosts();
        break;
      case S.CastleMercenaryData.MISSION_STATE_STARTED:
        this.showMissionProgress();
        break;
      case S.CastleMercenaryData.MISSION_STATE_COLLECTABLE:
        this.showFinishText();
    }
  };
  CastleMercenaryMissionItem.prototype.showTimeAndCosts = function () {
    this.disp.mc_missionInfo.mc_info.visible = true;
    this.itxt_cost.textContentVO.numberValue = this.missionItemVO.price;
    if (this.missionItemVO.price > O.CastleModel.currencyData.c1Amount) {
      this.itxt_cost.color = g.ClientConstColor.GENERIC_RED;
    } else {
      this.itxt_cost.color = g.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    this.itxt_time.textContentVO.stringValue = l.TimeStringHelper.getHoureMinuteSecondTimeString(this.missionItemVO.duration);
    this.timerComponent.stop();
  };
  CastleMercenaryMissionItem.prototype.showMissionProgress = function () {
    this.disp.mc_missionInfo.mc_progress.visible = true;
    this.disp.mc_missionInfo.mc_progress.mc_bar.gotoAndStop(1);
    this.timerComponent.start(this.missionItemVO.remainingTime);
    O.CastleModel.timerData.addEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
    this.updateProgress(null);
  };
  CastleMercenaryMissionItem.prototype.updateProgress = function (e) {
    this.progressBar.scaleX = this.missionItemVO.missionProgress;
  };
  CastleMercenaryMissionItem.prototype.getRemainingTimeString = function (e) {
    return l.TimeStringHelper.getTimeToString(this.missionItemVO.remainingTime, l.TimeStringHelper.TWO_TIME_FORMAT, u.Localize.text);
  };
  CastleMercenaryMissionItem.prototype.showFinishText = function () {
    this.disp.mc_missionInfo.mc_progress.visible = true;
    this.disp.mc_missionInfo.mc_progress.mc_bar.gotoAndStop(2);
    this.timerComponent.stop();
    this.itxt_progress.textContentVO.stringValue = u.Localize.text("dialog_mission_finish");
    this.progressBar.scaleX = 1;
  };
  CastleMercenaryMissionItem.prototype.updateButtons = function () {
    this.disp.btn_start.visible = this.missionItemVO.state == S.CastleMercenaryData.MISSION_STATE_DEFAULT;
    this.disp.btn_refresh.visible = this.missionItemVO.state == S.CastleMercenaryData.MISSION_STATE_DEFAULT;
    this.disp.btn_collect.visible = this.missionItemVO.state == S.CastleMercenaryData.MISSION_STATE_STARTED || this.missionItemVO.state == S.CastleMercenaryData.MISSION_STATE_COLLECTABLE;
    switch (this.missionItemVO.state) {
      case S.CastleMercenaryData.MISSION_STATE_DEFAULT:
        this.showStartAndRefreshButton();
        break;
      case S.CastleMercenaryData.MISSION_STATE_STARTED:
        this.showSkipButton();
        break;
      case S.CastleMercenaryData.MISSION_STATE_COLLECTABLE:
        this.showCollectButton();
    }
  };
  CastleMercenaryMissionItem.prototype.showStartAndRefreshButton = function () {
    var e = O.CastleModel.mercenaryData.currentMissionState < S.CastleMercenaryData.MISSION_STATE_COLLECTABLE;
    if (this.mercenaryData.waitingForServer && e) {
      y.ButtonHelper.enableButton(this.disp.btn_start, true);
    } else if (e) {
      if (!this.disp.btn_start.basicButton.enablingIsDelayed) {
        y.ButtonHelper.enableButton(this.disp.btn_start, true);
      }
    } else {
      y.ButtonHelper.enableButton(this.disp.btn_start, false);
    }
    this.disp.btn_start.toolTipText = e ? null : "dialog_mission_start_disabled";
  };
  CastleMercenaryMissionItem.prototype.showSkipButton = function () {
    if (this.mercenaryData.waitingForServer) {
      y.ButtonHelper.delayEnableButton(this.disp.btn_collect, true);
    }
    this.disp.btn_collect.background.gotoAndStop(1);
    this.disp.btn_collect.toolTipText = {
      t: "dialog_mission_reward_desc",
      p: [this.missionItemVO.skipCost]
    };
    this.itxt_collect.textContentVO.textId = "dialog_mission_skip";
  };
  CastleMercenaryMissionItem.prototype.showCollectButton = function () {
    y.ButtonHelper.enableButton(this.disp.btn_collect, true);
    this.disp.btn_collect.background.gotoAndStop(2);
    this.disp.btn_collect.toolTipText = null;
    this.itxt_collect.textContentVO.textId = "dialog_dailyQuests_activityGift";
  };
  CastleMercenaryMissionItem.prototype.onMouseOver = function (e) {
    if (e.target == this.disp.btn_collect && this.missionItemVO.state == S.CastleMercenaryData.MISSION_STATE_STARTED) {
      this.disp.btn_collect.toolTipText = {
        t: "dialog_mission_reward_desc",
        p: [this.missionItemVO.skipCost]
      };
    } else if (e.target == this.disp.btn_start) {
      var t = O.CastleModel.mercenaryData.currentMissionState < S.CastleMercenaryData.MISSION_STATE_COLLECTABLE;
      this.disp.btn_start.toolTipText = t ? null : "dialog_mission_start_disabled";
    }
  };
  CastleMercenaryMissionItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (y.ButtonHelper.isButtonEnabled(t.target) && !this.mercenaryData.waitingForServer) {
      switch (t.target) {
        case this.disp.btn_start:
          this.startMission();
          break;
        case this.disp.btn_refresh:
          this.refreshMission();
          break;
        case this.disp.btn_collect:
          this.collectMissionRewards();
      }
    }
  };
  CastleMercenaryMissionItem.prototype.startMission = function () {
    if (O.CastleModel.mercenaryData.currentMissionState == S.CastleMercenaryData.MISSION_STATE_STARTED) {
      A.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleMercenarySkipMissionDialog, new D.CastleMercenarySkipMissionDialogProperties(O.CastleModel.mercenaryData.activeMission, this.bindFunction(this.startMissionCallback)));
    } else {
      this.startMissionCallback();
    }
  };
  CastleMercenaryMissionItem.prototype.remove = function () {
    this.rewardsComponent.destroy();
    e.prototype.remove.call(this);
  };
  CastleMercenaryMissionItem.prototype.startMissionCallback = function () {
    this.mercenaryData.waitingForServer = true;
    O.CastleModel.smartfoxClient.sendCommandVO(new C.C2SMercenaryPackageVO(this.missionItemVO.missionID));
  };
  CastleMercenaryMissionItem.prototype.refreshMission = function () {
    A.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleMercenaryRefreshMissionDialog, new b.CastleMercenaryRefreshMissionDialogProperties(this.missionItemVO, this.bindFunction(this.refreshMissionCallback)));
  };
  CastleMercenaryMissionItem.prototype.refreshMissionCallback = function () {
    this.mercenaryData.waitingForServer = true;
    O.CastleModel.smartfoxClient.sendCommandVO(new _.C2SRefreshMercenaryMissionVO(this.missionItemVO.missionID));
  };
  CastleMercenaryMissionItem.prototype.collectMissionRewards = function () {
    this.mercenaryData.waitingForServer = true;
    O.CastleModel.smartfoxClient.sendCommandVO(new C.C2SMercenaryPackageVO(this.missionItemVO.missionID));
  };
  CastleMercenaryMissionItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.progressBar.removeMaskMC();
    this.timerComponent.stop();
    this.disp.removeEventListener(I.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    O.CastleModel.timerData.removeEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateProgress));
  };
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "missionItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "mercenaryData", {
    get: function () {
      return O.CastleModel.mercenaryData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem, "controller", {
    get: function () {
      return f.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItem.prototype, "layoutManager", {
    get: function () {
      return L.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleMercenaryMissionItem;
}(r.ScrollItem);
exports.CastleMercenaryMissionItem = v;
var S = require("./775.js");
var A = require("./9.js");
var L = require("./17.js");
var P = require("./400.js");
var M = require("./3183.js");
var R = require("./3184.js");
c.classImplementsInterfaces(v, "MovieClip");