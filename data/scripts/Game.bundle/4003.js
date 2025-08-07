Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./32.js");
var c = require("./161.js");
var u = require("./4.js");
var d = require("./305.js");
var p = createjs.TimerEvent;
var h = function (e) {
  function StatusIconAllianceTeaserComponent() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, "Icon_AllianceTeaser", "mc_mailTooltip.txt_text", new a.LocalizedTextVO("dialog_alliance_teaser_header")) || this).allowCaching = false;
    return t;
  }
  n.__extends(StatusIconAllianceTeaserComponent, e);
  StatusIconAllianceTeaserComponent.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserDataChanged));
    this.controller.addEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserDataChanged));
    this.controller.addEventListener(l.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onUserDataChanged));
  };
  StatusIconAllianceTeaserComponent.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(c.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserDataChanged));
    this.controller.removeEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserDataChanged));
    this.controller.removeEventListener(l.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onUserDataChanged));
    e.prototype.removeEventListenerForVisibility.call(this);
  };
  StatusIconAllianceTeaserComponent.prototype.setVisibilityLoaded = function () {
    var e = !this.layoutManager.isInSpectatedCastle && !this.layoutManager.isInMyOccupiedCastle;
    if (u.CastleModel.userData.userLevel >= 6 && u.CastleModel.userData.userLevel <= StatusIconAllianceTeaserComponent.MAX_LEVEL && !u.CastleModel.userData.isInAlliance && e) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAllianceTeaserComponent.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.iconDisp.mc_mailTooltip.visible = false;
    this.setTooltip("dialog_alliance_teaser_header");
    if (!this.mailRemindTimer) {
      this.mailRemindTimer = new o.Timer(StatusIconAllianceTeaserComponent.FIRST_WAIT_TIME, 1);
      this.mailRemindTimer.addEventListener(p.TIMER, this.bindFunction(this.onMailReminder));
      this.mailRemindTimer.start();
    }
  };
  StatusIconAllianceTeaserComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.mailRemindTimer) {
      this.mailRemindTimer.stop();
      this.mailRemindTimer.removeEventListener(p.TIMER, this.bindFunction(this.onMailReminder));
      this.mailRemindTimer = null;
    }
  };
  StatusIconAllianceTeaserComponent.prototype.disposeLoaded = function () {
    e.prototype.disposeLoaded.call(this);
    if (this.mailRemindTimer) {
      this.mailRemindTimer.stop();
      this.mailRemindTimer.removeEventListener(p.TIMER, this.bindFunction(this.onMailReminder));
      this.mailRemindTimer = null;
    }
  };
  StatusIconAllianceTeaserComponent.prototype.onClick = function () {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleAllianceTeaserDialog);
  };
  StatusIconAllianceTeaserComponent.prototype.onUserDataChanged = function (e) {
    this.setVisibility();
  };
  StatusIconAllianceTeaserComponent.prototype.onRemoveMailToolTip = function (e) {
    this.mailRemindTimer.removeEventListener(p.TIMER, this.bindFunction(this.onRemoveMailToolTip));
    this.mailRemindTimer = new o.Timer(StatusIconAllianceTeaserComponent.WAIT_TIME, 1);
    this.mailRemindTimer.addEventListener(p.TIMER, this.bindFunction(this.onMailReminder));
    this.mailRemindTimer.start();
    r.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleX: 0.7
    }, {
      scaleX: 0,
      ease: s.Linear.easeIn,
      onComplete: this.bindFunction(function makeInvisible() {
        if (this.iconDisp) {
          this.iconDisp.mc_mailTooltip.visible = false;
        }
      })
    });
    r.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleY: 0.7
    }, {
      scaleY: 0,
      ease: s.Linear.easeIn
    });
  };
  StatusIconAllianceTeaserComponent.prototype.onMailReminder = function (e) {
    this.mailRemindTimer.removeEventListener(p.TIMER, this.bindFunction(this.onMailReminder));
    this.iconDisp.mc_mailTooltip.visible = true;
    r.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleX: 0
    }, {
      scaleX: 0.7,
      ease: s.Linear.easeIn
    });
    r.TweenMax.fromTo(this.iconDisp.mc_mailTooltip, 0.2, {
      scaleY: 0
    }, {
      scaleY: 0.7,
      ease: s.Linear.easeIn
    });
    this.mailRemindTimer = new o.Timer(StatusIconAllianceTeaserComponent.STAY_TIME, 1);
    this.mailRemindTimer.addEventListener(p.TIMER, this.bindFunction(this.onRemoveMailToolTip));
    this.mailRemindTimer.start();
  };
  StatusIconAllianceTeaserComponent.__initialize_static_members = function () {
    StatusIconAllianceTeaserComponent.MAX_LEVEL = 25;
    StatusIconAllianceTeaserComponent.FIRST_WAIT_TIME = 35000;
    StatusIconAllianceTeaserComponent.WAIT_TIME = 70000;
    StatusIconAllianceTeaserComponent.STAY_TIME = 10000;
  };
  return StatusIconAllianceTeaserComponent;
}(d.ACastleLabeledStatusIcon);
exports.StatusIconAllianceTeaserComponent = h;
var g = require("./9.js");
var C = require("./388.js");
h.__initialize_static_members();