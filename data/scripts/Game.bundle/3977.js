Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./557.js");
var c = require("./21.js");
var u = require("./4.js");
var d = require("./305.js");
var p = function (e) {
  function StatusIconActivityBonusComponent() {
    var t = this;
    t.blink = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, "Btn_Activity_Reward", "txt_value", new s.TextVO("")) || this).allowCaching = false;
    return t;
  }
  n.__extends(StatusIconActivityBonusComponent, e);
  Object.defineProperty(StatusIconActivityBonusComponent.prototype, "width", {
    get: function () {
      return 64;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ACastleLabeledStatusIcon.prototype, "width").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconActivityBonusComponent.prototype.addEventListenerForVisibility = function () {
    this.blink = false;
    u.CastleModel.activityBonusData.addEventListener(l.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onActivityStateChanged));
    this.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdate));
  };
  StatusIconActivityBonusComponent.prototype.removeEventListenerForVisibility = function () {
    this.blink = false;
    u.CastleModel.activityBonusData.removeEventListener(l.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED, this.bindFunction(this.onActivityStateChanged));
    this.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdate));
  };
  StatusIconActivityBonusComponent.prototype.onClick = function () {
    var e = this.isOutOfTutorial();
    if (u.CastleModel.activityBonusData.isReadyToCollect && e) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleActivityBonusDialog);
    }
  };
  StatusIconActivityBonusComponent.prototype.setVisibilityLoaded = function () {
    if (!this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle && u.CastleModel.activityBonusData.isActive && g.CastleLayoutManager.getInstance().currentState != g.CastleLayoutManager.STATE_KINGDOMMAP) {
      this.show();
      this.itxt_label.textContentVO.stringValue = "";
      this.itxt_label.visible = true;
      if (u.CastleModel.activityBonusData.isReadyToCollect) {
        this.onReadyForCollect(null);
      } else {
        this.iconDisp.bg.gotoAndStop(1);
        o.MovieClipHelper.stopAllMoviesGotoFrameOne(this.iconDisp.bg.mc_chest);
      }
    } else {
      this.hide();
    }
  };
  StatusIconActivityBonusComponent.prototype.onUpdate = function (e) {
    this.update();
  };
  StatusIconActivityBonusComponent.prototype.updateLoaded = function () {
    var e = r.int(u.CastleModel.activityBonusData.remainingTimeTillNextActivityBonus);
    if (e > 0) {
      this.blink = false;
      this.itxt_label.textContentVO.stringValue = a.TimeStringHelper.getShortTimeStringBySeconds(e);
      this.setTooltip("dialog_activityreward_tooltipp1");
    } else if (this.blink && this.itxt_label && this.itxt_label.model) {
      this.itxt_label.visible = !this.itxt_label.visible;
    }
  };
  StatusIconActivityBonusComponent.prototype.onActivityStateChanged = function (e) {
    this.setVisibility();
  };
  StatusIconActivityBonusComponent.prototype.onReadyForCollect = function (e) {
    o.MovieClipHelper.playAllMovies(this.iconDisp.bg.mc_chest);
    this.iconDisp.bg.gotoAndStop(2);
    this.blink = true;
    this.itxt_label.textContentVO.stringValue = a.TimeStringHelper.getHoureMinuteSecondTimeString(0);
    this.setTooltip("dialog_activityreward_tooltipp2");
  };
  return StatusIconActivityBonusComponent;
}(d.ACastleLabeledStatusIcon);
exports.StatusIconActivityBonusComponent = p;
var h = require("./9.js");
var g = require("./17.js");
var C = require("./3978.js");