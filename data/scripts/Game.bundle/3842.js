Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./837.js");
var c = require("./21.js");
var u = require("./207.js");
var d = require("./15.js");
var p = require("./27.js");
var h = require("./9.js");
var g = require("./40.js");
var C = require("./20.js");
var _ = require("./8.js");
var m = require("./1795.js");
var f = require("./3844.js");
var O = require("./3845.js");
var E = require("./3846.js");
var y = require("./115.js");
var b = require("./4.js");
var D = function (e) {
  function AttackDialogAdvisor(t) {
    var i = e.call(this, t) || this;
    i._advisorActivationComponent = new m.AdvisorAttackActivationComponent(i.disp.mc_activation, m.AdvisorAttackActivationComponent.TEASERSUFFIX_ACTIVATE_SMALL);
    i._advisorAttackComponent = new E.AttackDialogAdvisorAttackComponent(i.disp.mc_attack);
    _.ButtonHelper.initButtons([i.disp.btn_info], C.ClickFeedbackButtonHover);
    i.itxt_time = o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_timer, new s.TextVO(""));
    return i;
  }
  n.__extends(AttackDialogAdvisor, e);
  AttackDialogAdvisor.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.updateState();
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_advisorTitle, new r.LocalizedTextVO("title_advisor_" + u.AdvisorAttackHelper.getTextIDSuffix(this.controller.attackAdvisorType)));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_remainingTime, new r.LocalizedTextVO("generic_timer"));
  };
  AttackDialogAdvisor.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._advisorActivationComponent) {
      this._advisorActivationComponent.onHide();
    }
    if (this._advisorAttackComponent) {
      this._advisorAttackComponent.onHide();
    }
  };
  AttackDialogAdvisor.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this._advisorActivationComponent) {
      this._advisorActivationComponent.destroy();
    }
    if (this._advisorAttackComponent) {
      this._advisorAttackComponent.destroy();
    }
  };
  AttackDialogAdvisor.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleBasicController.getInstance().addEventListener(l.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    b.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AttackDialogAdvisor.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    d.CastleBasicController.getInstance().removeEventListener(l.AdvisorActivationEvent.ADVISOR_ACTIVATION_CHANGED, this.bindFunction(this.onActivationChanged));
    b.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  AttackDialogAdvisor.prototype.onActivationChanged = function (e) {
    if (this.controller.attackAdvisorType == e.advisorType) {
      this.updateState();
    }
  };
  AttackDialogAdvisor.prototype.updateState = function () {
    if (this._advisorActivationComponent && this._advisorAttackComponent) {
      var e = u.AdvisorAttackHelper.getAdvisorActivationInfo(this.controller.attackAdvisorType).isAdvisorActive;
      this.disp.mc_activation.visible = !e;
      this.disp.mc_attack.visible = e;
      if (e) {
        this._advisorAttackComponent.onShow();
      } else {
        this._advisorActivationComponent.show(this.controller.attackAdvisorType);
      }
    }
  };
  AttackDialogAdvisor.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_info:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(f.AdvisorAttackInfoDialog, new O.AdvisorAttackInfoDialogProperties(this.controller.attackAdvisorType));
    }
  };
  AttackDialogAdvisor.prototype.onTimerUpdate = function (e) {
    var t = u.AdvisorAttackHelper.getEventVOByAdvisorType(this.controller.attackAdvisorType);
    this.itxt_time.textContentVO.stringValue = p.CastleTimeStringHelper.getShortTimeString(t.remainingEventTimeInSeconds);
  };
  Object.defineProperty(AttackDialogAdvisor.prototype, "controller", {
    get: function () {
      return y.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogAdvisor;
}(g.CastleItemRenderer);
exports.AttackDialogAdvisor = D;
a.classImplementsInterfaces(D, "ICollectableRendererList");