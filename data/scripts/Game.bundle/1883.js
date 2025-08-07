Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./146.js");
var c = require("./21.js");
var u = require("./26.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./11.js");
var g = require("./4213.js");
var C = function (e) {
  function CastleTieredPrimeDayDialog() {
    var t = this;
    t._subTitleGGSTF = null;
    t._timesLeftGGSTF = null;
    t.startingPositionX = 0;
    t.BOX_POSITION_Y = -10;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTieredPrimeDayDialog.NAME) || this;
  }
  n.__extends(CastleTieredPrimeDayDialog, e);
  CastleTieredPrimeDayDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.setupStaticTexts();
    this.initBasicButtons(this.dialogButtons);
  };
  CastleTieredPrimeDayDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setupBoxes();
    this.setupProgressBar();
    this.updateTimerText();
    this.updateProgress();
  };
  CastleTieredPrimeDayDialog.prototype.hideLoaded = function (t = null) {
    this.removeBoxes();
    this.removeProgressBar();
    this.destroyBoxes();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleTieredPrimeDayDialog.prototype.destroyBoxes = function () {
    for (var e = 0; e < this._rewardBoxes.length; e++) {
      this._rewardBoxes[e].destroyCollectableRenderList();
    }
  };
  CastleTieredPrimeDayDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    d.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    d.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoval));
    d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleTieredPrimeDayDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    d.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    d.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoval));
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleTieredPrimeDayDialog.prototype.onEventRemoval = function (e) {
    if (e.specialEventVO == this.props.eventVO) {
      this.hide();
    }
  };
  CastleTieredPrimeDayDialog.prototype.onEventUpdate = function (e) {
    if (e.specialEventVO == this.props.eventVO) {
      this.updateProgress();
    }
  };
  CastleTieredPrimeDayDialog.prototype.updateProgress = function () {
    this._tieredProgressBar.updateProgress();
    this.updateRewardBoxes();
    this.updateBoughtRewardsText();
  };
  CastleTieredPrimeDayDialog.prototype.updateBoughtRewardsText = function () {
    var e = r.int(this.props.eventVO.maxBuyCount - this.props.eventVO.boughtAllRewardsCount);
    if (e > 1) {
      this._timesLeftGGSTF.textContentVO.textId = "dialog_primeday_paymentTier_charges";
      this._timesLeftGGSTF.textContentVO.textReplacements = [e];
    } else if (e == 1) {
      this._timesLeftGGSTF.textContentVO.textId = "dialog_primeday_paymentTier_charges_singular";
    } else {
      this.hide();
    }
  };
  CastleTieredPrimeDayDialog.prototype.updateRewardBoxes = function () {
    for (var e = 0; e < this._rewardBoxes.length; e++) {
      this._rewardBoxes[e].isCollected = this.props.eventVO.isBoughtInCurrentCycle(e);
    }
  };
  CastleTieredPrimeDayDialog.prototype.removeBoxes = function () {
    if (this._rewardBoxes != null) {
      for (var e = 0, t = this._rewardBoxes; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.dialogDisp.mc_bg.removeChild(i.disp);
        }
      }
    }
    this._rewardBoxes = [];
  };
  CastleTieredPrimeDayDialog.prototype.removeProgressBar = function () {
    this._tieredProgressBar = null;
  };
  CastleTieredPrimeDayDialog.prototype.setupBoxes = function () {
    this.setupRewardBoxes();
    this.setStartingXPositionOfBoxes();
    this.setBoxesIndex();
  };
  CastleTieredPrimeDayDialog.prototype.setupProgressBar = function () {
    var e = [];
    if (this._rewardBoxes != null) {
      for (var t = 0, i = this._rewardBoxes; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n.activeBoxMC);
        }
      }
    }
    this._tieredProgressBar = new g.CastleTieredPrimeDayProgressBar(this.dialogDisp.mc_barDispComponent, e, this.props.eventVO);
  };
  CastleTieredPrimeDayDialog.prototype.setupRewardBoxes = function () {
    this._rewardBoxes = [];
    for (var e = 0; e < CastleTieredPrimeDayDialog.TIERS_COUNT;) {
      var t = new (a.getDefinitionByName("CastleTieredPrimeDayRewardBox"))();
      var i = new m.CastleTieredPrimeDayRewardBoxVE(t, e + 1, this.props.eventVO.rewards[e]);
      this._rewardBoxes.push(i);
      this.dialogDisp.mc_bg.addChild(i.disp);
      i.disp.y = this.BOX_POSITION_Y;
      e++;
    }
  };
  CastleTieredPrimeDayDialog.prototype.setupStaticTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new s.LocalizedTextVO("dialog_primeday_paymentTier_subtitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_primeday_paymentTier_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_buy, new s.LocalizedTextVO("add_Gold"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_primeday_paymentTier_header"));
    this._subTitleGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_subTitle, new s.LocalizedTextVO(""));
    this._timesLeftGGSTF = this.textFieldManager.registerTextField(this.dialogDisp.txt_timesLeft, new s.LocalizedTextVO(""));
  };
  CastleTieredPrimeDayDialog.prototype.onTimerUpdate = function (e) {
    if (this.props.eventVO.remainingEventTimeInSeconds <= 0) {
      this.hide();
    } else {
      this.updateTimerText();
    }
  };
  CastleTieredPrimeDayDialog.prototype.updateTimerText = function () {
    var e = r.int(this.props.eventVO.remainingEventTimeInSeconds);
    if (!this.props.eventVO.isTimeless || e <= _.PaymentrewardEventVO.REMAINING_TIME_ALERT) {
      this._subTitleGGSTF.textContentVO.textId = "dialog_primeday_paymentTier_endTimer";
      this._subTitleGGSTF.textContentVO.textReplacements = [p.CastleTimeStringHelper.getEventTimeString(e)];
    } else {
      this._subTitleGGSTF.textContentVO.textId = "limitedOffer";
    }
  };
  CastleTieredPrimeDayDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_exit:
        this.hide();
        return;
      case this.dialogDisp.btn_buy:
        l.CastleOpenShopExecutor.open(r.int(l.CastleOpenShopExecutor.SOURCE_UNKNOWN), f.CXFSourceTrackingConstants.SOURCE_TIERED_PRIME_DAY_DIALOG);
        return;
    }
  };
  CastleTieredPrimeDayDialog.prototype.setStartingXPositionOfBoxes = function () {
    switch (this.amountOfBigBoxesByRewards) {
      case 0:
        this.startingPositionX = CastleTieredPrimeDayDialog.START_X_POS_NO_BIG_BOXES;
        break;
      case 1:
        this.startingPositionX = CastleTieredPrimeDayDialog.START_X_POS_ONE_BIG_BOX;
        break;
      case 2:
        this.startingPositionX = CastleTieredPrimeDayDialog.START_X_POS_TWO_BIG_BOXES;
        break;
      default:
        throw new Error("TieredPrimeDayDialog.placeBoxes -> this dialog cannot handle more than 3 Big RewardBoxes!");
    }
    for (var e = 0; e < this._rewardBoxes.length; e++) {
      var t = this._rewardBoxes[e];
      var i = e > 0 ? this._rewardBoxes[e - 1].width - CastleTieredPrimeDayDialog.BOX_SHADOW_LENGTH + this._rewardBoxes[e - 1].disp.x : this.startingPositionX;
      t.disp.x = i;
    }
  };
  CastleTieredPrimeDayDialog.prototype.setBoxesIndex = function () {
    for (var e = 0; e < this._rewardBoxes.length; e++) {
      this.dialogDisp.mc_bg.setChildIndex(this._rewardBoxes[e].disp, this.dialogDisp.mc_bg.numChildren - (e + 1));
    }
  };
  Object.defineProperty(CastleTieredPrimeDayDialog.prototype, "amountOfBigBoxesByRewards", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this.props.eventVO.rewards.length; ++t) {
        if (this.props.eventVO.rewards[t].rewardList.length > CastleTieredPrimeDayDialog.BORDER_REWARD_AMOUNT_FOR_BIG_BOX) {
          e++;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayDialog.prototype, "dialogButtons", {
    get: function () {
      return [this.dialogDisp.btn_exit, this.dialogDisp.btn_buy];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayDialog.prototype, "props", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayDialog.__initialize_static_members = function () {
    CastleTieredPrimeDayDialog.BOX_SHADOW_LENGTH = 3;
    CastleTieredPrimeDayDialog.TIERS_COUNT = 3;
    CastleTieredPrimeDayDialog.BORDER_REWARD_AMOUNT_FOR_BIG_BOX = 4;
    CastleTieredPrimeDayDialog.NAME = "CastleTieredPrimeDay";
  };
  CastleTieredPrimeDayDialog.START_X_POS_NO_BIG_BOXES = -277;
  CastleTieredPrimeDayDialog.START_X_POS_ONE_BIG_BOX = -315;
  CastleTieredPrimeDayDialog.START_X_POS_TWO_BIG_BOXES = -353;
  return CastleTieredPrimeDayDialog;
}(h.CastleExternalDialog);
exports.CastleTieredPrimeDayDialog = C;
var _ = require("./818.js");
var m = require("./4214.js");
var f = require("./107.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();