Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./28.js");
var p = require("./1352.js");
var h = require("./21.js");
var g = require("./30.js");
var C = require("./72.js");
var _ = require("./4.js");
var m = require("./8.js");
var f = require("./1350.js");
var O = require("./521.js");
var E = createjs.MouseEvent;
var y = function (e) {
  function TeamAttackConfiguration(t, i) {
    var n = e.call(this) || this;
    n._checkButtonSubmitState = i;
    n._disp = t;
    return n;
  }
  n.__extends(TeamAttackConfiguration, e);
  TeamAttackConfiguration.prototype.show = function (e) {
    this._date = new Date();
    this._allianceInfo = _.CastleModel.allianceData.getAllianceInfoVOByID(_.CastleModel.userData.allianceID);
    this._bookmarkAttackTimeValidator = new p.TimeRangeValidator(a.AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET, a.AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET);
    this._bookmarkAttackTimeValidator.updateCurrentTime();
    this._bookmarkVO = e;
    this._bookmarkVO.attackOrderDetails.attackDate = new Date();
    this._bookmarkVO.attackOrderDetails.attackTimeStamp = g.CachedTimer.getCachedTimer() + 3600000;
    if (this._bookmarkVO.attackOrderDetails.assignedAttackers.length == 0) {
      this._bookmarkVO.attackOrderDetails.assignedAttackers.push(_.CastleModel.userData.playerID);
    }
    this._disp.visible = true;
    this.initButtons();
    this.initTexts();
    m.ButtonHelper.setButtonSelected(this._disp.btn_sendMessage, this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers);
    _.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
    this.updateDateAndTimeDisplay();
    this._checkButtonSubmitState();
  };
  TeamAttackConfiguration.prototype.onTimerSecondTick = function (e) {
    this.updateDateAndTimeDisplay();
  };
  TeamAttackConfiguration.prototype.updateDateAndTimeDisplay = function () {
    this._bookmarkAttackTimeValidator.updateCurrentTime();
    this._bookmarkAttackTimeValidator.validateTime(this._date);
    var e = u.int(this._date.getTime() - new Date().getTime());
    this._bookmarkVO.attackOrderDetails.attackTimeStamp = e * d.ClientConstTime.MILLISEC_2_SEC;
    this._selectedDate.textContentVO.stringValue = r.Localize.datetime(this._date, s.DateTimeStyle.SHORT, s.DateTimeStyle.NONE);
    this._selectedTime.textContentVO.stringValue = r.Localize.datetime(this._date, s.DateTimeStyle.NONE, s.DateTimeStyle.SHORT);
  };
  TeamAttackConfiguration.prototype.hide = function () {
    _.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
    this.disposeButtons();
    this._disp.visible = false;
  };
  TeamAttackConfiguration.prototype.initTexts = function () {
    this.textFieldManager.registerTextField(this._disp.btn_choose_arrivaltime.txt_text, new l.LocalizedTextVO("Bookmarks_addBookmark_alliance_setTime"));
    this.textFieldManager.registerTextField(this._disp.btn_select_attackers.txt_text, new l.LocalizedTextVO("Bookmarks_addBookmark_alliance_setParticipants"));
    if (this._disp.btn_select_attackers.cacheCanvas) {
      this._disp.btn_select_attackers.updateCache();
    }
    this.textFieldManager.registerTextField(this._disp.txt_send_message_to_attackers, new l.LocalizedTextVO("Bookmarks_addBookmark_alliance_sendConfirmation"));
    this._selectedDate = this.textFieldManager.registerTextField(this._disp.mc_attack_date.txt_value, new c.TextVO(""));
    this._disp.mc_attack_date.toolTipText = "Bookmarks_alliance_setTime_attackDay_copy";
    this._disp.mc_attack_date.mouseChildren = false;
    this._selectedTime = this.textFieldManager.registerTextField(this._disp.mc_attack_time.txt_value, new c.TextVO(""));
    this._disp.mc_attack_time.toolTipText = "Bookmarks_alliance_setTime_attackTime_copy";
    this._disp.mc_attack_time.mouseChildren = false;
    var e = u.int(this.countAssignedAttackers());
    this._selectedAttackers = this.textFieldManager.registerTextField(this._disp.mc_assigned_players.txt_value, new l.LocalizedTextVO(e > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular", [e]));
    this._disp.mc_assigned_players.mouseChildren = false;
    this._disp.mc_assigned_players.toolTipText = "Bookmarks_addBookmark_alliance_participants_tooltip";
  };
  TeamAttackConfiguration.prototype.countAssignedAttackers = function () {
    return this._bookmarkVO.attackOrderDetails.assignedAttackers.length;
  };
  TeamAttackConfiguration.prototype.onClick = function (e) {
    if (m.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_choose_arrivaltime:
          this.showArrivalSelection();
          break;
        case this._disp.btn_select_attackers:
          this.showAttackerSelection();
          break;
        case this._disp.btn_sendMessage:
          this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers = !this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers;
          m.ButtonHelper.setButtonSelected(this._disp.btn_sendMessage, this._bookmarkVO.attackOrderDetails.sendMessageToAssignedAttackers);
      }
    }
  };
  TeamAttackConfiguration.prototype.showAttackerSelection = function () {
    if (_.CastleModel.userData.isInAlliance) {
      TeamAttackConfiguration.dialogHandler.registerDefaultDialogs(I.CastleBookmarkAttackerSelectionDialog, new O.CastleBookmarkPasserProperties(this._bookmarkVO, this.bindFunction(this.onAttackerSelectionChange)));
    }
  };
  TeamAttackConfiguration.prototype.onAttackerSelectionChange = function () {
    var e = u.int(this.countAssignedAttackers());
    this._selectedAttackers.textContentVO.textId = e > 1 ? "dialog_alliance_bookmarks_attackerAmount" : "dialog_alliance_bookmarks_attackerAmount_singular";
    this._selectedAttackers.textContentVO.textReplacements = [e];
    this._checkButtonSubmitState();
  };
  TeamAttackConfiguration.prototype.showArrivalSelection = function () {
    _.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
    TeamAttackConfiguration.dialogHandler.registerDefaultDialogs(D.CastleAllianceBookmarkSetTimeDialog, new f.CastleSetTimeDialogProperties(this._date.getTime(), a.AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET, a.AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET, this.bindFunction(this.onTimeSelectionComplete)));
  };
  TeamAttackConfiguration.prototype.onTimeSelectionComplete = function (e) {
    this._date.setTime(e);
    _.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerSecondTick));
  };
  TeamAttackConfiguration.prototype.initButtons = function () {
    m.ButtonHelper.initBasicButton(this._disp.btn_choose_arrivaltime);
    m.ButtonHelper.initBasicButton(this._disp.btn_select_attackers);
    m.ButtonHelper.initCheckBox(this._disp.btn_sendMessage);
    this._disp.btn_choose_arrivaltime.addEventListener(E.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_select_attackers.addEventListener(E.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_sendMessage.addEventListener(E.CLICK, this.bindFunction(this.onClick));
    var e = _.CastleModel.allianceData.hasRight(_.CastleModel.userData.allianceRank, a.AllianceConst.RIGHT_MANAGE_BOOKMARKS);
    m.ButtonHelper.enableButton(this._disp.btn_select_attackers, e);
    this._disp.btn_select_attackers.toolTipText = e ? "" : "Bookmarks_addBookmark_alliance_rankToLow_tooltip";
  };
  TeamAttackConfiguration.prototype.disposeButtons = function () {
    this._disp.btn_choose_arrivaltime.removeEventListener(E.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_select_attackers.removeEventListener(E.CLICK, this.bindFunction(this.onClick));
    this._disp.btn_sendMessage.removeEventListener(E.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(TeamAttackConfiguration.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TeamAttackConfiguration, "dialogHandler", {
    get: function () {
      return b.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return TeamAttackConfiguration;
}(C.CastleEventDispatcher);
exports.TeamAttackConfiguration = y;
var b = require("./9.js");
var D = require("./2404.js");
var I = require("./2405.js");