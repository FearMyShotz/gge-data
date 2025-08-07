Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./288.js");
var c = require("./26.js");
var u = require("./13.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./20.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = require("./1822.js");
var f = require("./1824.js");
var O = require("./1825.js");
var E = require("./1826.js");
var y = require("./1827.js");
var b = require("./1828.js");
var D = require("./1829.js");
var I = require("./1830.js");
var T = require("./1831.js");
var v = function (e) {
  function SeasonGachaEventMainDialog() {
    var t = this;
    t._gachaComponents = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, SeasonGachaEventMainDialog.NAME) || this;
  }
  n.__extends(SeasonGachaEventMainDialog, e);
  SeasonGachaEventMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help], g.ClickFeedbackButtonHover);
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new s.TextVO(""));
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_timer.toolTipText = "dialog_tenthAnniversary_timer";
    this.addGachaComponent(f.GachaComponentBackground, this.dialogDisp.mc_bg);
    this.addGachaComponent(O.GachaComponentCurrency, this.dialogDisp.mc_currency);
    this.addGachaComponent(y.GachaComponentMerchantButton, this.dialogDisp.btn_merchant);
    this.addGachaComponent(I.GachaComponentRanking, this.dialogDisp.mc_ranking);
    this.addGachaComponent(E.GachaComponentLevelRewards, this.dialogDisp.mc_levelRewards);
    this.addGachaComponent(D.GachaComponentPull, this.dialogDisp.mc_pull, "supersale");
    this.addGachaComponent(b.GachaComponentMilestones, this.dialogDisp.mc_milestones);
    this.addGachaComponent(T.GachaComponentRewards, this.dialogDisp.mc_rewards);
    this.addGachaComponent(m.GachaComponentAnimation, this.dialogDisp.mc_animation);
  };
  SeasonGachaEventMainDialog.prototype.showLoaded = function (t) {
    var i = this;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("event_title_" + this.eventVO.eventId)));
    o.loadAsset("Rewards_Animation").then(function (e) {
      d.CastleBasicController.getInstance().dispatchEvent(new l.GachaEvent(l.GachaEvent.SHINE_ANIMATION_LOADED, null, null));
    });
    this._gachaComponents.forEach(function (e) {
      e.show([i.eventVO, 1]);
    });
    p.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    p.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  SeasonGachaEventMainDialog.prototype.addGachaComponent = function (e, t, i = null) {
    if (t) {
      if (i) {
        this._gachaComponents.push(new e(t, i));
      } else {
        this._gachaComponents.push(new e(t));
      }
    }
  };
  SeasonGachaEventMainDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._gachaComponents.forEach(function (e) {
      e.onHide();
    });
    p.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    p.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
  };
  SeasonGachaEventMainDialog.prototype.onSpecialEventRemoved = function (e) {
    if (!this.isEventActive) {
      this.hide();
    }
  };
  SeasonGachaEventMainDialog.prototype.onLockDialog = function (e) {
    this.lockDialog();
  };
  SeasonGachaEventMainDialog.prototype.onUnlockDialog = function (e) {
    this.unLockDialog();
  };
  SeasonGachaEventMainDialog.prototype.onTimerUpdate = function (e) {
    this.updateTimer();
  };
  SeasonGachaEventMainDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!this.isLocked && C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          _.CastleExternalDialog.dialogHandler.showHelper("", "helpPopup_" + this.eventVO.assetName());
      }
    }
  };
  SeasonGachaEventMainDialog.prototype.updateActiveEvent = function () {
    this.updateTimer();
  };
  SeasonGachaEventMainDialog.prototype.updateTimer = function () {
    if (this.isEventActive) {
      var e = this.eventVO.remainingEventTimeInSeconds;
      this.itxt_time.textContentVO.stringValue = h.CastleTimeStringHelper.getEventTimeString(e);
    } else {
      this.hide();
    }
  };
  Object.defineProperty(SeasonGachaEventMainDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonGachaEventMainDialog.prototype, "isEventActive", {
    get: function () {
      return !!p.CastleModel.specialEventData.getActiveEventByEventId(this.eventVO.eventId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonGachaEventMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonGachaEventMainDialog.NAME = "SeasonGachaMain";
  return SeasonGachaEventMainDialog;
}(_.CastleExternalDialog);
exports.SeasonGachaEventMainDialog = v;
a.classImplementsInterfaces(v, "ICollectableRendererList");