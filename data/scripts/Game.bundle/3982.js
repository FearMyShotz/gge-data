Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./837.js");
var l = require("./21.js");
var c = require("./139.js");
var u = require("./26.js");
var d = require("./207.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./9.js");
var C = require("./3983.js");
var _ = require("./3987.js");
var m = require("./1837.js");
var f = require("./1840.js");
var O = require("./305.js");
var E = require("./109.js");
var y = function (e) {
  function StatusIconAdvisorAttack() {
    return e.call(this, "Btn_AttackAdvisor", "txt_time", new s.TextVO(""), E.ACastleStatusIcon.PRIORITY_MIDDLE) || this;
  }
  n.__extends(StatusIconAdvisorAttack, e);
  StatusIconAdvisorAttack.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_label.autoFitToBounds = true;
  };
  StatusIconAdvisorAttack.prototype.setVisibilityLoaded = function () {
    if (this.isAdvisorAvailable()) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAdvisorAttack.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateIndicators();
    this.setTooltip("title_advisor_" + d.AdvisorAttackHelper.getTextIDSuffix(this.advisorType));
  };
  StatusIconAdvisorAttack.prototype.updateIndicators = function () {
    var e = this.advisorActivationInfoVO;
    this.iconDisp.icon_sleeping.visible = e.isAdvisorActive && this.numAdvisorMovements == 0;
    this.iconDisp.icon_inactive.visible = !e.isAdvisorActive;
    this.iconDisp.bg_text.gotoAndStop(e.isAdvisorActive ? 1 : 2);
  };
  StatusIconAdvisorAttack.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconAdvisorAttack.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconAdvisorAttack.prototype.onChangePosibilityToShowMe = function (e) {
    this.setVisibility();
  };
  StatusIconAdvisorAttack.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.addEventListener(r.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    this.controller.addEventListener(c.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
  };
  StatusIconAdvisorAttack.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.controller.removeEventListener(r.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    this.controller.removeEventListener(c.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsUpdated));
  };
  StatusIconAdvisorAttack.prototype.onTimerUpdate = function (e) {
    if (this.eventVO) {
      this.itxt_label.textContentVO.stringValue = h.CastleTimeStringHelper.getShortTimeString(this.eventVO.remainingEventTimeInSeconds);
    }
  };
  StatusIconAdvisorAttack.prototype.onActivationChanged = function (e) {
    if (this.isAdvisorAvailable() && e.advisorType == this.advisorType) {
      this.updateIndicators();
    }
  };
  StatusIconAdvisorAttack.prototype.onMovementsUpdated = function (e) {
    if (this.isAdvisorAvailable()) {
      this.updateIndicators();
    }
  };
  StatusIconAdvisorAttack.prototype.isAdvisorAvailable = function () {
    var e = this.availableEventAdvisorType;
    return e > 0 && d.AdvisorAttackHelper.getAdvisorActivationInfo(e).advisorActivationCurrencyId > 0;
  };
  Object.defineProperty(StatusIconAdvisorAttack.prototype, "advisorActivationInfoVO", {
    get: function () {
      return d.AdvisorAttackHelper.getAdvisorActivationInfo(this.advisorType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack.prototype, "availableEventAdvisorType", {
    get: function () {
      if (p.CastleModel.specialEventData.isEventActive(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
        return d.AdvisorAttackHelper.getAdvisorTypeByEventID(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack.prototype, "eventVO", {
    get: function () {
      if (p.CastleModel.specialEventData.isEventActive(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE)) {
        return p.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack.prototype, "numAdvisorMovements", {
    get: function () {
      return p.CastleModel.armyData.getAdvisorMovements(this.advisorType).length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconAdvisorAttack.prototype, "advisorType", {
    get: function () {
      return o.AttackAdvisorConst.ADVISOR_TYPE_NOMAD;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAdvisorAttack.prototype.onClick = function () {
    if (this.isAdvisorAvailable()) {
      if (this.advisorActivationInfoVO.isAdvisorActive) {
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(m.AdvisorAttackOverviewDialog, new f.AdvisorAttackOverviewDialogProperties(this.advisorType));
      } else {
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.AdvisorAttackActivationDialog, new _.AdvisorAttackActivationDialogProperties(this.advisorType));
      }
    }
  };
  return StatusIconAdvisorAttack;
}(O.ACastleLabeledStatusIcon);
exports.StatusIconAdvisorAttack = y;