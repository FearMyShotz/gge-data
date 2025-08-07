Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./169.js");
var c = require("./13.js");
var u = require("./40.js");
var d = require("./20.js");
var p = require("./720.js");
var h = require("./297.js");
var g = require("./8.js");
var C = require("./115.js");
var _ = require("./1798.js");
var m = function (e) {
  function AttackDialogAdvisorAttackComponent(t) {
    var i = e.call(this, t) || this;
    i._sendBattleLogToggle = new p.ToggleSwitchButton(t.btn_battlelog_toggle);
    i._sendBattleLogToggle.setValue(true);
    i._amountPicker = new h.CastleUnitAmountComponent();
    i._amountPicker.init(t.mc_selection.mc_slider, t.mc_selection.mc_picker);
    i._amountPicker.minAmount = AttackDialogAdvisorAttackComponent.MIN_ATTACK_AMOUNT;
    i._amountPicker.setNumberOfItems(AttackDialogAdvisorAttackComponent.MAX_ATTACK_AMOUNT);
    i._amountPicker.setSelectedAmount(AttackDialogAdvisorAttackComponent.MIN_ATTACK_AMOUNT);
    i._amountPicker.enableTracking(false);
    i._amountPicker.setLooping(false);
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_attackAmount, new r.LocalizedTextVO("attack_amount"));
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_description, new r.LocalizedTextVO("info_attackAdvisor"));
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_battelLog, new r.LocalizedTextVO("info_battleMessage"));
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.btn_advisorAttack.txt_label, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("button_attackAdvisor")));
    g.ButtonHelper.initButtons([i.disp.btn_advisorAttack], d.ClickFeedbackButtonHover);
    return i;
  }
  n.__extends(AttackDialogAdvisorAttackComponent, e);
  AttackDialogAdvisorAttackComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._sendBattleLogToggle.onShow();
    this._amountPicker.addEventListener(l.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onAmountPickerChange));
    this.onAmountPickerChange(null);
  };
  AttackDialogAdvisorAttackComponent.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._sendBattleLogToggle) {
      this._sendBattleLogToggle.onHide();
    }
    if (this._amountPicker) {
      this._amountPicker.removeEventListener(l.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onAmountPickerChange));
    }
  };
  AttackDialogAdvisorAttackComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this._amountPicker) {
      this._amountPicker.setSelectedAmount(2);
    }
    if (this._sendBattleLogToggle) {
      this._sendBattleLogToggle.setValue(true);
      this._sendBattleLogToggle.destroy();
    }
  };
  AttackDialogAdvisorAttackComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_advisorAttack:
        C.AttackDialogController.getInstance().attackVO.setAdvisor(this.getAttackCount(), this.getSendBattleLog());
        _.AttackDialogStartAttackCheck.onAttack();
    }
  };
  AttackDialogAdvisorAttackComponent.prototype.onAmountPickerChange = function (e) {
    this.disp.mc_selection.mc_slider.mc_line.width = this.disp.mc_selection.mc_slider.btn_slider.x - this.disp.mc_selection.mc_slider.mc_line.x;
    if (this._previousValue <= AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD && this._amountPicker.getSelectedAmount() > AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD) {
      this._sendBattleLogToggle.setValue(false);
    } else if (this._previousValue > AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD && this._amountPicker.getSelectedAmount() <= AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD) {
      this._sendBattleLogToggle.setValue(true);
    }
    this._previousValue = this._amountPicker.getSelectedAmount();
  };
  AttackDialogAdvisorAttackComponent.prototype.getAttackCount = function () {
    return this._amountPicker.getSelectedAmount();
  };
  AttackDialogAdvisorAttackComponent.prototype.getSendBattleLog = function () {
    return this._sendBattleLogToggle.value;
  };
  AttackDialogAdvisorAttackComponent.MIN_ATTACK_AMOUNT = 2;
  AttackDialogAdvisorAttackComponent.MAX_ATTACK_AMOUNT = 9999;
  AttackDialogAdvisorAttackComponent.BATTLELOG_THRESHOLD = 25;
  return AttackDialogAdvisorAttackComponent;
}(u.CastleItemRenderer);
exports.AttackDialogAdvisorAttackComponent = m;
a.classImplementsInterfaces(m, "ICollectableRendererList");