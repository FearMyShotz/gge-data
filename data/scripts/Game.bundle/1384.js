Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./1383.js");
var C = require("./2463.js");
var _ = require("./2464.js");
var m = require("./21.js");
var f = require("./172.js");
var O = require("./4.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./120.js");
var D = function (e) {
  function CastleWeeklyHighscoreRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWeeklyHighscoreRewardDialog.NAME) || this;
  }
  n.__extends(CastleWeeklyHighscoreRewardDialog, e);
  CastleWeeklyHighscoreRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_rankreward_title"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new d.LocalizedTextVO("dialog_rankreward_copy"));
    this.itxt_currentRank_label = this.textFieldManager.registerTextField(this.dialogDisp.txt_currentRank_label, new d.LocalizedTextVO("dialog_tournament_yourRank"));
    this.itxt_reward_label = this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_label, new d.LocalizedTextVO("dialog_fame_reward"));
    this.itxt_collect_label = this.textFieldManager.registerTextField(this.dialogDisp.txt_collect_label, new d.LocalizedTextVO("dialog_rankreward_collect_time"));
    this.ibtn_collect_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_label, new d.LocalizedTextVO("dialog_rankreward_collect"));
    this.itxt_noHonor = this.textFieldManager.registerTextField(this.dialogDisp.txt_noHonor, new d.LocalizedTextVO("dialog_rankreward_noHonor"));
    this.itxt_collect_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_collect_time, new p.TextVO(""));
    this.itxt_currentRank = this.textFieldManager.registerTextField(this.dialogDisp.txt_currentRank, new p.TextVO(""));
    this.itxt_noHonor.visible = false;
    this.dialogDisp.mc_reward.visible = false;
    this.dialogDisp.mc_reward.gotoAndStop(2);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_collect, this.dialogDisp.mc_reward.btn_unitinfo0, this.dialogDisp.mc_reward.btn_unitinfo1, this.dialogDisp.mc_reward.btn_toolinfo0]);
  };
  CastleWeeklyHighscoreRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    O.CastleModel.timerData.addEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
    O.CastleModel.highscoreData.addEventListener(f.CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED, this.bindFunction(this.onWeeklyRewardUpdate));
    O.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetWeeklyHonorRankVO());
    this.lockDialog();
    this.onUpdateTime();
  };
  CastleWeeklyHighscoreRewardDialog.prototype.hideLoaded = function (t = null) {
    O.CastleModel.timerData.addEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTime));
    O.CastleModel.highscoreData.removeEventListener(f.CastleHighscoreEvent.WEEKLY_HONOR_SCORE_UPDATED, this.bindFunction(this.onWeeklyRewardUpdate));
    O.CastleModel.highscoreData.removeEventListener(f.CastleHighscoreEvent.REWARD_REDEEMED, this.bindFunction(this.onRedeemedResponse));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onUpdateTime = function (e = null) {
    if (this.itxt_collect_time && this.itxt_collect_time.originalTextField) {
      if (O.CastleModel.highscoreData.isReadyToCollect) {
        this.itxt_collect_time.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(0, s.TimeStringHelper.ONE_TIME_FORMAT, c.Localize.text);
      } else {
        this.itxt_collect_time.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(O.CastleModel.highscoreData.nextRewardRemainingTime, s.TimeStringHelper.ONE_TIME_FORMAT, c.Localize.text);
        this.itxt_collect_time.verticalAlign = o.GGSVerticalAlign.MIDDLE;
      }
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onWeeklyRewardUpdate = function (e) {
    if (O.CastleModel.userData.userHonor > 0) {
      this.itxt_noHonor.visible = false;
      if (O.CastleModel.highscoreData.isReadyToCollect) {
        this.setReward(g.ClientConstHighscore.getLeagueIdByLevel(O.CastleModel.userData.userLevel), O.CastleModel.highscoreData.rankLastWeek);
        this.itxt_currentRank.textContentVO.stringValue = String(O.CastleModel.highscoreData.rankLastWeek);
        this.dialogDisp.btn_collect.basicButton.enableButton = true;
        this.dialogDisp.btn_collect.toolTipText = "";
      } else {
        this.setReward(g.ClientConstHighscore.getLeagueIdByLevel(O.CastleModel.userData.userLevel), O.CastleModel.highscoreData.rankActual);
        this.itxt_currentRank.textContentVO.stringValue = String(O.CastleModel.highscoreData.rankActual);
        this.dialogDisp.btn_collect.basicButton.enableButton = false;
        this.dialogDisp.btn_collect.toolTipText = "dialog_rankreward_collect_blocked";
      }
    } else {
      this.dialogDisp.mc_reward.visible = false;
      this.itxt_noHonor.visible = true;
      this.dialogDisp.btn_collect.basicButton.enableButton = false;
      this.itxt_currentRank.textContentVO.stringValue = String(O.CastleModel.highscoreData.rankActual);
    }
    this.setLeagueTitleById(O.CastleModel.highscoreData.leaguageId);
    this.unLockDialog();
  };
  CastleWeeklyHighscoreRewardDialog.prototype.setLeagueTitle = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_league, new d.LocalizedTextVO(e));
  };
  CastleWeeklyHighscoreRewardDialog.prototype.setLeagueTitleById = function (e) {
    switch (e) {
      case 1:
        this.setLeagueTitle("dialog_highscore_league1");
        break;
      case 2:
        this.setLeagueTitle("dialog_highscore_league2");
        break;
      case 3:
        this.setLeagueTitle("dialog_highscore_league3");
        break;
      case 4:
        this.setLeagueTitle("dialog_highscore_league4");
        break;
      case 5:
        this.setLeagueTitle("dialog_highscore_league5");
        break;
      default:
        this.setLeagueTitle("");
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onRedeemedResponse = function (e) {
    O.CastleModel.highscoreData.removeEventListener(f.CastleHighscoreEvent.REWARD_REDEEMED, this.bindFunction(this.onRedeemedResponse));
    if (e.params[0]) {
      this.lockDialog();
      O.CastleModel.smartfoxClient.sendCommandVO(new C.C2SGetWeeklyHonorRankVO());
    } else {
      this.dialogDisp.btn_collect.basicButton.enableButton = true;
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.setReward = function (e, t) {
    this.dialogDisp.mc_reward.visible = true;
    var i = O.CastleModel.highscoreData.getHighscoreBonusVOForRank(e, t);
    if (!i) {
      console.warn("MISSING REWARD");
      this.dialogDisp.mc_reward.visible = false;
      return;
    }
    if (i.c1Reward > 0) {
      this.dialogDisp.mc_reward.gotoAndStop(1);
      this.dialogDisp.mc_reward.mc_rewardC1.toolTipText = "cash";
      var n = h.int(l.HighscoreBonusConst.calcHighscoreBonusForC1(i.c1Reward, i.highestRank, t, i.minAmount, O.CastleModel.userData.userLevel));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.mc_rewardC1.txt_value, new u.LocalizedNumberVO(n), new a.InternalGGSTextFieldConfigVO(true));
    } else if (i.unitRewards.length > 0 || i.toolRewardWod > 0) {
      this.dialogDisp.mc_reward.gotoAndStop(2);
      for (var o = 0; o < CastleWeeklyHighscoreRewardDialog.NUM_UNITREWARD_SLOTS; ++o) {
        if (o < i.unitRewards.length) {
          var s = O.CastleModel.wodData.createVObyWOD(i.unitRewards[o].wodId, I.CastleWodData.TYPE_UNIT);
          var r = this.dialogDisp.mc_reward["mc_rewardUnit" + o];
          var d = this.dialogDisp.mc_reward["btn_unitinfo" + o];
          r.visible = true;
          d.visible = true;
          d.unitVO = s;
          var g = h.int(l.HighscoreBonusConst.calcHighscoreBonusForUnits(i.unitRewards[o].amount, i.highestRank, t, i.minAmount));
          this.textFieldManager.registerTextField(r.txt_value, new u.LocalizedNumberVO(g), new a.InternalGGSTextFieldConfigVO(true));
          v.WodPicHelper.addUnitPic(s, r.btn_unit, 88, 70, O.CastleModel.userData.playerCrest.colorsTwo[0], O.CastleModel.userData.playerCrest.colorsTwo[1]);
          r.toolTipText = {
            t: "generic_amount_reward",
            p: [g, c.Localize.text(s.getNameString())]
          };
        } else {
          this.dialogDisp.mc_reward["mc_rewardUnit" + o].visible = false;
          this.dialogDisp.mc_reward["btn_unitinfo" + o].visible = false;
        }
      }
      if (i.toolRewardWod > 0) {
        var C = O.CastleModel.wodData.createVObyWOD(i.toolRewardWod, I.CastleWodData.TYPE_UNIT);
        var _ = this.dialogDisp.mc_reward.mc_rewardTool0;
        var m = this.dialogDisp.mc_reward.btn_toolinfo0;
        _.visible = true;
        m.visible = true;
        m.toolVO = C;
        var f = h.int(l.HighscoreBonusConst.calcHighscoreBonusForTools(i.toolMinAmount, i.toolOffset, t));
        this.textFieldManager.registerTextField(_.txt_value, new p.TextVO(String(f)), new a.InternalGGSTextFieldConfigVO(true));
        v.WodPicHelper.addUnitPic(C, _.btn_unit, 88, 70, O.CastleModel.userData.playerCrest.colorsTwo[0], O.CastleModel.userData.playerCrest.colorsTwo[1]);
        _.toolTipText = {
          t: "generic_amount_reward",
          p: [f, c.Localize.text(C.getNameString())]
        };
      } else {
        this.dialogDisp.mc_reward.mc_rewardTool0.visible = false;
        this.dialogDisp.mc_reward.btn_toolinfo0.visible = false;
      }
    } else {
      console.warn("MISSING REWARD");
      this.dialogDisp.mc_reward.visible = false;
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_collect:
          this.collect();
          break;
        case this.dialogDisp.mc_reward.btn_unitinfo0:
        case this.dialogDisp.mc_reward.btn_unitinfo1:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleRecruitInfoDialog, new b.CastleRecruitInfoDialogProperties(t.target.unitVO));
          break;
        case this.dialogDisp.mc_reward.btn_toolinfo0:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleRecruitInfoDialog, new b.CastleRecruitInfoDialogProperties(t.target.toolVO));
      }
    }
  };
  CastleWeeklyHighscoreRewardDialog.prototype.collect = function () {
    this.dialogDisp.btn_collect.basicButton.enableButton = false;
    O.CastleModel.highscoreData.addEventListener(f.CastleHighscoreEvent.REWARD_REDEEMED, this.bindFunction(this.onRedeemedResponse));
    O.CastleModel.smartfoxClient.sendCommandVO(new _.C2SRedeemWeeklyHonorBonus());
  };
  CastleWeeklyHighscoreRewardDialog.__initialize_static_members = function () {
    CastleWeeklyHighscoreRewardDialog.NAME = "CastleWeeklyHighscoreReward";
    CastleWeeklyHighscoreRewardDialog.NUM_UNITREWARD_SLOTS = 2;
  };
  return CastleWeeklyHighscoreRewardDialog;
}(y.CastleExternalDialog);
exports.CastleWeeklyHighscoreRewardDialog = D;
var I = require("./56.js");
var T = require("./9.js");
var v = require("./63.js");
var S = require("./115.js");
r.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();