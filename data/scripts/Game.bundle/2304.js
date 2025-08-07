Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./100.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./49.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./4.js");
var p = require("./14.js");
var h = require("./284.js");
var g = require("./8.js");
var C = function (e) {
  function OptionsDialogRubyConfirmationItem(t) {
    var i = e.call(this, new (r.getDefinitionByName("CastleOptions_RubyConfirmationItem"))(), t) || this;
    i._inputBehaviours = [];
    p.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_default, new c.LocalizedTextVO("dialog_options_rubyConfirmation_title"), new a.InternalGGSTextFieldConfigVO(true));
    p.CastleComponent.textFieldManager.registerTextField(i._headerMC.mc_open.txt_selected, new c.LocalizedTextVO("dialog_options_rubyConfirmation_title"), new a.InternalGGSTextFieldConfigVO(true));
    p.CastleComponent.textFieldManager.registerTextField(i.contentMC.txt_description, new c.LocalizedTextVO("dialog_options_rubyConfirmation_desc"), new a.InternalGGSTextFieldConfigVO(true));
    p.CastleComponent.textFieldManager.registerTextField(i.contentMC.txt_default, new c.LocalizedTextVO("dialog_options_rubyConfirmation_noAmount_desc"), new a.InternalGGSTextFieldConfigVO(true));
    g.ButtonHelper.initButtons([i.contentMC.checkbox_ruby, i.contentMC.checkbox_default], l.TwoStateButton);
    i.itxt_ruby = p.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_ruby.txt_ruby, new u.LocalizedNumberVO(OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT), new a.InternalGGSTextFieldConfigVO(true));
    i.itxt_ruby.type = s.TextFieldType.INPUT;
    i.itxt_ruby.restrict = "0-9";
    i.itxt_ruby.tabIndex = 1;
    i._inputBehaviours = [];
    i._inputBehaviours.push(new h.HighlightAndClearInputTextBehaviour(i.contentMC.mc_ruby, i.itxt_ruby, false));
    var n = d.CastleModel.settingsData.confirmC2Threshold;
    i.itxt_ruby.textContentVO.numberValue = n > 0 ? n : OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT;
    i.setRubyConfirmation(n > -1, false);
    return i;
  }
  n.__extends(OptionsDialogRubyConfirmationItem, e);
  OptionsDialogRubyConfirmationItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setRubyConfirmation(d.CastleModel.settingsData.confirmC2Threshold > 0);
    this.itxt_ruby.focusOut.add(this.bindFunction(this.onFocusOutRubyInput));
    this._inputBehaviours.forEach(function (e) {
      return e.onShow();
    });
  };
  OptionsDialogRubyConfirmationItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.itxt_ruby.focusOut.remove(this.bindFunction(this.onFocusOutRubyInput));
    this._inputBehaviours.forEach(function (e) {
      return e.onHide();
    });
  };
  OptionsDialogRubyConfirmationItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.contentMC.checkbox_ruby:
          this.setRubyConfirmation(true);
          break;
        case this.contentMC.checkbox_default:
          this.setRubyConfirmation(false);
      }
    }
  };
  OptionsDialogRubyConfirmationItem.prototype.setRubyConfirmation = function (e, t = true) {
    this._rubyConfirmationActive = e;
    g.ButtonHelper.setButtonSelected(this.contentMC.checkbox_ruby, e);
    g.ButtonHelper.setButtonSelected(this.contentMC.checkbox_default, !e);
    if (t) {
      this.saveRubyConfirmation();
    }
  };
  OptionsDialogRubyConfirmationItem.prototype.onFocusOutRubyInput = function () {
    var e = parseInt(this.itxt_ruby.text.replace(".", "").replace(",", "")) || OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT;
    e = o.MathBase.clamp(e, OptionsDialogRubyConfirmationItem.MIN_AMOUNT, OptionsDialogRubyConfirmationItem.MAX_AMOUNT);
    this.itxt_ruby.textContentVO.numberValue = e;
    this.saveRubyConfirmation();
  };
  OptionsDialogRubyConfirmationItem.prototype.saveRubyConfirmation = function () {
    var e = this.itxt_ruby.textContentVO.numberValue;
    d.CastleModel.settingsData.confirmC2Threshold = this._rubyConfirmationActive ? e : -1;
  };
  OptionsDialogRubyConfirmationItem.MIN_AMOUNT = 1;
  OptionsDialogRubyConfirmationItem.DEFAULT_AMOUNT = 250;
  OptionsDialogRubyConfirmationItem.MAX_AMOUNT = 1000000;
  return OptionsDialogRubyConfirmationItem;
}(require("./382.js").AOptionsDialogCollapsibleItem);
exports.OptionsDialogRubyConfirmationItem = C;