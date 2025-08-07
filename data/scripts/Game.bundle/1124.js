Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./3969.js");
var d = require("./1832.js");
var p = require("./32.js");
var h = require("./527.js");
var g = require("./15.js");
var C = require("./4.js");
var _ = function (e) {
  function CastleDailyLoginBonusDialog() {
    var t = this;
    t._dailyAllicanceSpecialBonusFlagXStartPos = 0;
    t._currentDay = 0;
    t._selectedDay = 0;
    t._todayModulo = 0;
    t._today = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleDailyLoginBonusDialog.NAME) || this;
  }
  n.__extends(CastleDailyLoginBonusDialog, e);
  CastleDailyLoginBonusDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initDialogButtons();
    this.initDialogTexts();
  };
  CastleDailyLoginBonusDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this._updateDialogModelListeners = [[C.CastleModel.loginBonusData, d.LoginBonusDataUpdateEvent.LOGIN_BONUS_UPDATED], [C.CastleModel.vipData, h.CastleVIPDataEvent.VIP_DATA_UPDATED], [g.CastleBasicController.getInstance(), p.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED]];
    if (this._updateDialogModelListeners != null) {
      for (var t = 0, i = this._updateDialogModelListeners; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n[0].addEventListener(String(n[1]), this.bindFunction(this.onModelUpdate));
        }
      }
    }
  };
  CastleDailyLoginBonusDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    if (this._updateDialogModelListeners) {
      if (this._updateDialogModelListeners != null) {
        for (var t = 0, i = this._updateDialogModelListeners; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n[0].removeEventListener(String(n[1]), this.bindFunction(this.onModelUpdate));
          }
        }
      }
      this._updateDialogModelListeners.length = 0;
      this._updateDialogModelListeners = null;
    }
  };
  CastleDailyLoginBonusDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateDialogData();
  };
  CastleDailyLoginBonusDialog.prototype.onClick = function (t) {
    if (a.currentBrowserInfo.isTouchEvent(t)) {
      e.prototype.onClick.call(this, t);
    }
    switch (t.target) {
      case this._dialogCloseButton.disp:
        this.hide();
        break;
      case this._dialogHelpButton.disp:
        O.CastleDialogHandler.getInstance().showHelper(r.Localize.text("dialog_loginBonus_title"), r.Localize.text("help_loginBonus"));
        break;
      default:
        this.checkWrapper(t.target);
    }
  };
  CastleDailyLoginBonusDialog.prototype.onModelUpdate = function (e) {
    this.updateDialogData();
  };
  CastleDailyLoginBonusDialog.prototype.updateDialogData = function () {
    this._rewardList = C.CastleModel.loginBonusData.rewardList;
    if (this._rewardList) {
      this._today = C.CastleModel.loginBonusData.rewardDay;
      this._todayModulo = this._today % 7;
      this.updateCurrentDay();
      this.updateCurrentDailyRewards();
      this.waitingForServer = false;
    }
  };
  CastleDailyLoginBonusDialog.prototype.updateCurrentDay = function (e = -1) {
    this._currentDay = this._selectedDay = e > -1 ? e : this._todayModulo;
    var t = Math.floor(this._today / 7) * 7;
    if (this._dailyGoldButtons != null) {
      for (var i = 0, n = this._dailyGoldButtons; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.selected = this._currentDay == o.day;
          o.isGoldDays = this._today > 6 || o.day > 5;
          o.currentRewardDay = t++;
        }
      }
    }
    if (this._dailyTabButtons != null) {
      for (var a = 0, s = this._dailyTabButtons; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          r.selected = this._currentDay == r.day;
          r.isGoldDays = this._today > 6;
          r.currentRewardDay = this._currentDay;
        }
      }
    }
  };
  CastleDailyLoginBonusDialog.prototype.updateCurrentDailyRewards = function (e = -1) {
    this._selectedDay = e > -1 ? e : this._todayModulo;
    var t;
    var i;
    var n = this._rewardList[this._selectedDay];
    var o = n.mainRewards;
    var a = o.length;
    for (var s = this._dailyRewards.length, r = 0; r < s; r++) {
      i = this._dailyRewards[r];
      if (r < a) {
        t = o.getItemByIndex(r);
        i.collectableItem = n.mainRewardPicked && t.itemType == n.mainRewardPicked.itemType && f.CollectableHelper.haveSameId(t, n.mainRewardPicked) ? n.mainRewardPicked : t;
        if (n.mainRewardPicked) {
          i.enableButton = i.collectableItem.itemType.serverKey == n.mainRewardPicked.itemType.serverKey && f.CollectableHelper.haveSameId(i.collectableItem, n.mainRewardPicked);
        } else {
          i.enableButton = true;
        }
        if (!n.mainRewardPicked && this._selectedDay != this._todayModulo) {
          i.enableButton = false;
        }
        i.clickable = !n.mainRewardPicked && this._selectedDay == this._todayModulo;
      } else {
        i.changeToDefaultState();
        i.enableButton = false;
      }
    }
    this._dailyAllicanceSpecialBonus.changeToDefaultState();
    this._dailyVipSpecialBonus.changeToDefaultState();
    this.performDailySpecialBonusButtonSelection(this._dailyAllicanceSpecialBonus, false);
    this.performDailySpecialBonusButtonSelection(this._dailyVipSpecialBonus, false);
    this.updateFootnoteMessage();
  };
  CastleDailyLoginBonusDialog.prototype.updateFootnoteMessage = function () {
    var e = this._rewardList[this._selectedDay];
    var t = this._footnoteMessageGGSTextField.textContentVO;
    if (this._selectedDay == this._todayModulo) {
      if (e.mainRewardPicked) {
        if (C.CastleModel.userData.isInAlliance && !this._rewardList[this._selectedDay].alliReward || C.CastleModel.vipData.vipModeActive && !this._rewardList[this._selectedDay].vipReward) {
          t.textId = "dialog_loginBonus_pickReward";
        } else {
          t.textId = "dialog_loginBonus_collectedReward";
        }
      } else {
        t.textId = "dialog_loginBonus_pickReward";
      }
    } else if (this._selectedDay < this._todayModulo) {
      if (e.mainRewardPicked) {
        t.textId = "dialog_loginBonus_collectedReward";
      } else {
        t.textId = "dialog_loginBonus_cannotCollectReward";
      }
    } else if (this._selectedDay > this._todayModulo) {
      t.textId = "dialog_loginBonus_futureRewards";
    } else {
      t.textId = "";
    }
  };
  CastleDailyLoginBonusDialog.prototype.checkWrapper = function (e) {
    if (e && e.hasOwnProperty(y.DailyLoginBonusStateButton.WRAPPER_PROPERTY)) {
      var t = e[y.DailyLoginBonusStateButton.WRAPPER_PROPERTY];
      if (t) {
        if (s.instanceOfClass(t, "DailyTabButton")) {
          this.performDailyTabButtonSelection(t);
        } else if (s.instanceOfClass(t, "DailyRewardButton")) {
          this.performDailyRewardButtonSelection(t);
        } else if (s.instanceOfClass(t, "DailySpecialBonusButton")) {
          this.performDailySpecialBonusButtonSelection(t);
        }
      }
    }
  };
  CastleDailyLoginBonusDialog.prototype.performDailyTabButtonSelection = function (e) {
    if (this._dailyTabButtons != null) {
      for (var t = 0, i = this._dailyTabButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.selected = false;
        }
      }
    }
    e.selected = true;
    this.updateCurrentDailyRewards(e.day);
  };
  CastleDailyLoginBonusDialog.prototype.performDailyRewardButtonSelection = function (e) {
    if (e.enableButton && e.clickable && this._selectedDay == this._todayModulo && !this.waitingForServer) {
      C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCatchLoginBonusVO(f.CollectableHelper.getServerKeyByCollectable(e.collectableItem), c.int(e.collectableItem.itemType == m.CollectableEnum.UNITS ? e.collectableItem.id : -1)));
      this.waitingForServer = true;
    }
  };
  CastleDailyLoginBonusDialog.prototype.performDailySpecialBonusButtonSelection = function (e, t) {
    var i;
    if (t === undefined) {
      t = true;
    }
    switch (e) {
      case this._dailyAllicanceSpecialBonus:
        i = "ALLI";
        var n = this._rewardList[this._selectedDay].alliReward;
        var o = C.CastleModel.userData.isInAlliance;
        if (n) {
          e.changeTo(D.DailySpecialBonusButton.STATE_REWARD_COLLECTED);
          this._dailyAllicanceSpecialBonus.enableButton = true;
          this._dailyAllicanceSpecialBonus.collectableItem = n;
          this._dailyAllicanceSpecialBonus.clickable = false;
        } else if (this._selectedDay == this._todayModulo) {
          this._dailyAllicanceSpecialBonus.enableButton = o;
          this._dailyAllicanceSpecialBonus.clickable = o;
          this._dailyAllicanceSpecialBonus.toolTipText = o ? "dialog_loginBonus_allianceReward_tooltip" : "dialog_loginBonus_joinAlliance_tooltip";
        } else {
          this._dailyAllicanceSpecialBonus.clickable = false;
          this._dailyAllicanceSpecialBonus.enableButton = false;
          this._dailyAllicanceSpecialBonus.toolTipText = o ? "dialog_loginBonus_futureReward_tooltip" : "dialog_loginBonus_joinAlliance_tooltip";
        }
        break;
      case this._dailyVipSpecialBonus:
        i = "VIP";
        var a = this._rewardList[this._selectedDay].vipReward;
        this._dailyVipSpecialBonus.button.visible = !!a || C.CastleModel.vipData.vipModeActive;
        if (this._dailyVipSpecialBonus.button.visible) {
          this._dailyAllicanceSpecialBonus.button.x = this._dailyAllicanceSpecialBonusFlagXStartPos;
          if (this._dailyVipSpecialBonus.button.vip_text) {
            this._dailyVipSpecialBonus.button.vip_text.text = C.CastleModel.vipData.currentVIPLevel;
          }
          if (a) {
            e.changeTo(D.DailySpecialBonusButton.STATE_REWARD_COLLECTED);
            this._dailyVipSpecialBonus.enableButton = true;
            this._dailyVipSpecialBonus.collectableItem = a;
            this._dailyVipSpecialBonus.clickable = false;
          } else if (this._selectedDay == this._todayModulo) {
            this._dailyVipSpecialBonus.enableButton = true;
            this._dailyVipSpecialBonus.toolTipText = "dialog_loginBonus_vipReward_tooltip";
            this._dailyVipSpecialBonus.clickable = true;
          } else {
            this._dailyVipSpecialBonus.enableButton = false;
            this._dailyVipSpecialBonus.toolTipText = "dialog_loginBonus_futureReward_tooltip";
            this._dailyVipSpecialBonus.clickable = false;
          }
        } else {
          this._dailyAllicanceSpecialBonus.button.x = this._dailyAllicanceSpecialBonusFlagXStartPos + (this._dailyVipSpecialBonus.button.x - this._dailyAllicanceSpecialBonusFlagXStartPos) / 2;
        }
    }
    if (t && e.enableButton && e.clickable && this._selectedDay == this._todayModulo && i && i.length > 0 && !this.waitingForServer) {
      C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCatchLoginBonusVO(null, -1, i));
      this.waitingForServer = true;
    }
  };
  CastleDailyLoginBonusDialog.prototype.initDialogTexts = function () {
    this._titleGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_title, new l.LocalizedTextVO("dialog_loginBonus_title"));
    this._messageGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_msg, new l.LocalizedTextVO("dialog_loginBonus_copy"));
    this._mainRewardsTitleGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_rewards, new l.LocalizedTextVO("dialog_loginBonus_rewards"));
    this._specialRewardsTitleGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_specialbonus, new l.LocalizedTextVO("dialog_loginBonus_specialRewards"));
    this._footnoteMessageGGSTextField = this.textFieldManager.registerTextField(this.dialogDisp.dialog_dailyloginbonus_footnote, new l.LocalizedTextVO("dialog_loginBonus_pickReward"));
  };
  CastleDailyLoginBonusDialog.prototype.initDialogButtons = function () {
    this._dialogCloseButton = new o.BasicButton(this.dialogDisp.dialog_close_button, true);
    this._dialogHelpButton = new o.BasicButton(this.dialogDisp.dialog_help_button, true);
    this._dialogHelpButton.toolTipText = "generic_help";
    this._dailyGoldButtons = [new E.DailyGoldButton(0, this.dialogDisp.dialog_day1_gold_button), new E.DailyGoldButton(1, this.dialogDisp.dialog_day2_gold_button), new E.DailyGoldButton(2, this.dialogDisp.dialog_day3_gold_button), new E.DailyGoldButton(3, this.dialogDisp.dialog_day4_gold_button), new E.DailyGoldButton(4, this.dialogDisp.dialog_day5_gold_button), new E.DailyGoldButton(5, this.dialogDisp.dialog_day6_gold_button), new E.DailyGoldButton(6, this.dialogDisp.dialog_day7_gold_button)];
    this._dailyTabButtons = [new I.DailyTabButton(0, this.dialogDisp.dialog_day1_tab_button), new I.DailyTabButton(1, this.dialogDisp.dialog_day2_tab_button), new I.DailyTabButton(2, this.dialogDisp.dialog_day3_tab_button), new I.DailyTabButton(3, this.dialogDisp.dialog_day4_tab_button), new I.DailyTabButton(4, this.dialogDisp.dialog_day5_tab_button), new I.DailyTabButton(5, this.dialogDisp.dialog_day6_tab_button), new I.DailyTabButton(6, this.dialogDisp.dialog_day7_tab_button)];
    this._dailyRewards = [new b.DailyRewardButton(this.dialogDisp.dialog_daily_reward1_button), new b.DailyRewardButton(this.dialogDisp.dialog_daily_reward2_button), new b.DailyRewardButton(this.dialogDisp.dialog_daily_reward3_button)];
    this._dailyAllicanceSpecialBonus = new D.DailySpecialBonusButton(D.DailySpecialBonusButton.TYPE_ALLIANCE, this.dialogDisp.dialog_daily_reward_alliance_button);
    this._dailyVipSpecialBonus = new D.DailySpecialBonusButton(D.DailySpecialBonusButton.TYPE_VIP, this.dialogDisp.dialog_daily_reward_vip_button);
    this._dailyAllicanceSpecialBonusFlagXStartPos = c.int(this._dailyAllicanceSpecialBonus.button.x);
    this.initBasicButtons(this.buttons());
  };
  CastleDailyLoginBonusDialog.prototype.buttons = function () {
    return [this.dialogDisp.dialog_close_button, this.dialogDisp.dialog_help_button, this.dialogDisp.dialog_day1_tab_button, this.dialogDisp.dialog_day2_tab_button, this.dialogDisp.dialog_day3_tab_button, this.dialogDisp.dialog_day4_tab_button, this.dialogDisp.dialog_day5_tab_button, this.dialogDisp.dialog_day6_tab_button, this.dialogDisp.dialog_day7_tab_button, this.dialogDisp.dialog_day1_tab_button, this.dialogDisp.dialog_day2_tab_button, this.dialogDisp.dialog_day3_tab_button, this.dialogDisp.dialog_day4_tab_button, this.dialogDisp.dialog_day5_tab_button, this.dialogDisp.dialog_day6_tab_button, this.dialogDisp.dialog_day7_tab_button, this.dialogDisp.dialog_daily_reward1_button, this.dialogDisp.dialog_daily_reward2_button, this.dialogDisp.dialog_daily_reward3_button, this.dialogDisp.dialog_daily_reward_alliance_button, this.dialogDisp.dialog_daily_reward_vip_button];
  };
  CastleDailyLoginBonusDialog.NAME = "CastleDailyLoginBonusDialog";
  return CastleDailyLoginBonusDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDailyLoginBonusDialog = _;
var m = require("./12.js");
var f = require("./45.js");
var O = require("./9.js");
var E = require("./3970.js");
var y = require("./672.js");
var b = require("./3971.js");
var D = require("./3972.js");
var I = require("./3973.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");