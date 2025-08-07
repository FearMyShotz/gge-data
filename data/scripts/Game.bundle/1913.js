Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./86.js");
var l = require("./12.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./9.js");
var h = require("./17.js");
var g = require("./25.js");
var C = require("./38.js");
var _ = require("./4461.js");
var m = require("./1145.js");
var f = require("./4462.js");
var O = require("./4464.js");
var E = createjs.TimerEvent;
var y = createjs.Point;
var b = function () {
  function CastleLuckyWheelMediator(e, t) {
    this._wheelState = CastleLuckyWheelMediator.WHEEL_STOP_STATE;
    this._eventID = 0;
    this._disp = e;
    this._eventID = t;
    this.componentDisp.allJackPotWheel.visible = false;
    this._spinningWheel = new _.CastleLuckyWheelComponent(this.getWheelToUse(CastleLuckyWheelMediator.NORMAL_WHEEL));
    this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(2);
    this.componentDisp.component_inner_wheel.mc_warning.visible = false;
    this.componentDisp.component_inner_wheel.mc_warning.mouseChildren = false;
    this.componentDisp.component_inner_wheel.mc_warning.toolTipText = "dialog_equipment_storageWarning";
    this.displayShine(false);
    this.updateReward();
    this.showTooltips(true);
  }
  CastleLuckyWheelMediator.prototype.show = function () {
    this._spinningWheel.addEventListener(_.CastleLuckyWheelComponent.SPEED_REACHED, this.bindFunction(this.onSpeedReached));
  };
  CastleLuckyWheelMediator.prototype.hide = function () {
    this._spinningWheel.removeEventListener(_.CastleLuckyWheelComponent.SPEED_REACHED, this.bindFunction(this.onSpeedReached));
  };
  CastleLuckyWheelMediator.prototype.stopWheel = function () {
    if (this.luckyWheelData.winningCategory != -1) {
      this.destroyTimer();
      var e = this.luckyWheelData.winningCategory * -45 + 22.5;
      e -= Math.random() * 30 + 7.5;
      e += 360;
      this._spinningWheel.accelerateWheel(0, e);
      if (this._spinningWheel.currentSpeedInDegrees > 0) {
        this.startBreakingCallback();
      }
    } else {
      this.onServerFailed();
    }
  };
  CastleLuckyWheelMediator.prototype.spinWheel = function () {
    this.showTooltips(false);
    this.displayShine(false);
    if (this._rewardRenderer) {
      this._rewardRenderer.setVisibility(false);
      this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(2);
    }
    this._spinningWheel.launchWheelWithCountDown(CastleLuckyWheelMediator.WHEEL_MAX_SPEED, 90, 200);
    this._wheelState = CastleLuckyWheelMediator.WHEEL_MOVE_STATE;
  };
  CastleLuckyWheelMediator.prototype.onSpeedReached = function (e) {
    if (this._spinningWheel.currentSpeedInDegrees > 0) {
      this.maxSpeedReachedCallback();
      this.onMaxSpeedReached();
    } else {
      this.showReward();
      this._wheelState = CastleLuckyWheelMediator.WHEEL_STOP_STATE;
      this.wheelStoppedCallback();
      this.showTooltips(true);
    }
  };
  CastleLuckyWheelMediator.prototype.onMaxSpeedReached = function () {
    this._startBreakingTimer = new o.Timer(4000, 1);
    this._startBreakingTimer.addEventListener(E.TIMER, this.bindFunction(this.onStartBreakingTimer));
    this._startBreakingTimer.start();
  };
  CastleLuckyWheelMediator.prototype.onStartBreakingTimer = function (e) {
    this.destroyTimer();
    if (this.luckyWheelData.winningCategoryReceived) {
      this.stopWheel();
    } else {
      this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.add(this.bindFunction(this.onWCReceived));
    }
  };
  CastleLuckyWheelMediator.prototype.onWCReceived = function () {
    this.stopWheel();
    this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.remove(this.bindFunction(this.onWCReceived));
  };
  CastleLuckyWheelMediator.prototype.destroyTimer = function () {
    if (this._startBreakingTimer != null) {
      this._startBreakingTimer.removeEventListener(E.TIMER, this.bindFunction(this.onStartBreakingTimer));
      this._startBreakingTimer.reset();
      this._startBreakingTimer = null;
    }
  };
  CastleLuckyWheelMediator.prototype.showReward = function () {
    if (this.luckyWheelData.winningCategory == 0) {
      CastleLuckyWheelMediator.dialogHandler.registerDefaultDialogs(f.CastleLuckyWheelJackpotDialog, new O.CastleLuckyWheelJackpotDialogProperties(this.luckyWheelData.currentJackpotSet.clone(), this.luckyWheelData.rewardedItem, this.bindFunction(this.fillReward), this.eventVO), true);
    } else {
      this.fillReward();
    }
    this.componentDisp.component_inner_wheel.mc_warning.visible = (r.ClientConstCollectable.GROUP_LIST_EQUIPMENT.indexOf(this.luckyWheelData.rewardedItem.itemType) > -1 || this.luckyWheelData.rewardedItem.itemType == l.CollectableEnum.RELIC_EQUIPMENT) && d.CastleModel.equipData.isInventoryFull;
  };
  CastleLuckyWheelMediator.prototype.fillReward = function () {
    if (this.eventVO) {
      this.changeWheel(CastleLuckyWheelMediator.NORMAL_WHEEL);
      this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(1);
      this.displayShine(true);
      this.updateReward();
      m.CastleLuckyWheelDelayCommandHelper.stopCommandDelay();
      if (this.awardHasBeenAwardedCallback) {
        this.awardHasBeenAwardedCallback();
      }
    }
  };
  CastleLuckyWheelMediator.prototype.displayShine = function (e) {
    if (e) {
      this.componentDisp.component_inner_wheel.mc_circle.mc_animation.play();
      s.TweenMax.fromTo(this.componentDisp.component_inner_wheel.mc_circle.mc_animation, 0.25, {
        alpha: this.componentDisp.component_inner_wheel.mc_circle.mc_animation
      }, {
        alpha: 1,
        onComplete: this.bindFunction(this.stopShine)
      });
    } else {
      this.componentDisp.component_inner_wheel.mc_circle.mc_animation.stop();
      s.TweenMax.fromTo(this.componentDisp.component_inner_wheel.mc_circle.mc_animation, 0.5, {
        alpha: this.componentDisp.component_inner_wheel.mc_circle.mc_animation
      }, {
        alpha: 0
      });
    }
  };
  CastleLuckyWheelMediator.prototype.stopShine = function () {
    var e = new o.Timer(1500, 1);
    e.start();
    e.addEventListener(E.TIMER_COMPLETE, this.bindFunction(this.onTimerFinished));
  };
  CastleLuckyWheelMediator.prototype.onTimerFinished = function (e) {
    this.displayShine(false);
  };
  CastleLuckyWheelMediator.prototype.updateReward = function () {
    if (this._rewardRenderer) {
      this._rewardRenderer.destroy();
      this._rewardRenderer.setVisibility(true);
    }
    var e = this.componentDisp.component_inner_wheel.mc_reward;
    this._rewardRenderer = g.CollectableRenderHelper.displaySingleItem(new c.CollectableRenderClips(e).addIconMc(e.mc_iconHolder).addTextfield(e.mc_amount.txt_amount).addTextfieldBgMc(e.mc_amount).addInfoBtn(this.componentDisp.component_inner_wheel.btn_info), this.luckyWheelData.rewardedItem, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new y(70, 70)));
  };
  CastleLuckyWheelMediator.prototype.onServerFailed = function () {
    this.destroyTimer();
    this.wheelStoppedCallback();
    this._spinningWheel.accelerateWheel(0, 0);
    CastleLuckyWheelMediator.dialogHandler.registerDefaultDialogs(C.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties(a.Localize.text("generic_alert_information"), a.Localize.text("alert_no_serverConnection")));
  };
  CastleLuckyWheelMediator.prototype.showTooltips = function (e) {
    if (e) {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = "dialog_luckyWheel_jackpot";
      this.componentDisp.component_wheel.icon_vip_points.toolTipText = "dialog_VipScreen_premiumPoints_v2";
      this.componentDisp.component_wheel.icon_equitment.toolTipText = "dialog_equipment_title";
      this.componentDisp.component_wheel.icon_resources_1.toolTipText = "goods";
      this.componentDisp.component_wheel.icon_tickets.toolTipText = "tooltip_tickets";
      this.componentDisp.component_wheel.icon_vip_time.toolTipText = "dialog_VipScreen_vipTime";
      this.componentDisp.component_wheel.icon_tools.toolTipText = "dialog_recuit_tools";
      this.componentDisp.component_wheel.icon_resources_2.toolTipText = "goods";
    } else {
      this.componentDisp.component_wheel.icon_jackpot.toolTipText = null;
      this.componentDisp.component_wheel.icon_vip_points.toolTipText = null;
      this.componentDisp.component_wheel.icon_equitment.toolTipText = null;
      this.componentDisp.component_wheel.icon_resources_1.toolTipText = null;
      this.componentDisp.component_wheel.icon_tickets.toolTipText = null;
      this.componentDisp.component_wheel.icon_vip_time.toolTipText = null;
      this.componentDisp.component_wheel.icon_tools.toolTipText = null;
      this.componentDisp.component_wheel.icon_resources_2.toolTipText = null;
    }
  };
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "componentDisp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "wheelIsTurning", {
    get: function () {
      return this._wheelState == CastleLuckyWheelMediator.WHEEL_MOVE_STATE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "hasWonJackpot", {
    get: function () {
      return this.luckyWheelData.winningCategory == 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelMediator.prototype.destroy = function () {
    this.destroyTimer();
    if (this._spinningWheel) {
      this._spinningWheel.destroy();
    }
    m.CastleLuckyWheelDelayCommandHelper.stopCommandDelay();
  };
  CastleLuckyWheelMediator.prototype.changeWheel = function (e) {
    this._spinningWheel.changeWheel(this.getWheelToUse(e));
  };
  CastleLuckyWheelMediator.prototype.getWheelToUse = function (e) {
    this.componentDisp.allJackPotWheel.visible = false;
    this.componentDisp.component_wheel.visible = false;
    if (e == CastleLuckyWheelMediator.All_JACKPOT_WHEEL) {
      this.componentDisp.allJackPotWheel.visible = true;
      return this.componentDisp.allJackPotWheel;
    } else {
      this.componentDisp.component_wheel.visible = true;
      return this.componentDisp.component_wheel;
    }
  };
  Object.defineProperty(CastleLuckyWheelMediator, "dialogHandler", {
    get: function () {
      return p.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "eventVO", {
    get: function () {
      return d.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelMediator.prototype, "luckyWheelData", {
    get: function () {
      return this.eventVO.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelMediator.prototype.clearReward = function () {
    if (this._rewardRenderer) {
      this._rewardRenderer.setVisibility(false);
      this.componentDisp.component_inner_wheel.mc_circle.gotoAndStop(2);
    }
  };
  CastleLuckyWheelMediator.WHEEL_MOVE_STATE = 1;
  CastleLuckyWheelMediator.WHEEL_STOP_STATE = 2;
  CastleLuckyWheelMediator.WHEEL_MAX_SPEED = 1;
  CastleLuckyWheelMediator.NORMAL_WHEEL = 0;
  CastleLuckyWheelMediator.All_JACKPOT_WHEEL = 1;
  return CastleLuckyWheelMediator;
}();
exports.CastleLuckyWheelMediator = b;