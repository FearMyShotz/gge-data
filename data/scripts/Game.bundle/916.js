Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./14.js");
var c = require("./20.js");
var u = require("./8.js");
var d = function (e) {
  function OptionsDialogAccountInfoItem(t, i, n = null, a = null) {
    var d = e.call(this, a || new (s.getDefinitionByName("CastleOptions_AccountDetailItem"))(), i) || this;
    d._onAction = n;
    d.actionBtnMC.visible = !!d._onAction;
    d.setActionButtonToolTipText("dialog_options_accountDetails_edit_tooltip");
    u.ButtonHelper.initButtons([d.actionBtnMC], c.ClickFeedbackButtonHover);
    l.CastleComponent.textFieldManager.registerTextField(d._headerMC.txt_name, new r.TextVO(t), new o.InternalGGSTextFieldConfigVO(true));
    return d;
  }
  n.__extends(OptionsDialogAccountInfoItem, e);
  OptionsDialogAccountInfoItem.prototype.setActionButtonToolTipText = function (e) {
    this.actionBtnMC.toolTipText = e;
  };
  OptionsDialogAccountInfoItem.prototype.setText = function (e) {
    l.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_value, new r.TextVO(e), new o.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
  };
  OptionsDialogAccountInfoItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this._headerMC.btn_action:
        if (this._onAction) {
          this._onAction();
        }
    }
  };
  OptionsDialogAccountInfoItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._onAction = null;
  };
  OptionsDialogAccountInfoItem.prototype.showActionButton = function (e, t = 1, i = null) {
    this.showButton(this.actionBtnMC, e, t, i);
  };
  Object.defineProperty(OptionsDialogAccountInfoItem.prototype, "actionBtnMC", {
    get: function () {
      return this._headerMC.btn_edit || this._headerMC.btn_action;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialogAccountInfoItem.prototype.showButton = function (e, t, i = 1, n = null) {
    e.visible = t;
    if (e.icon) {
      e.icon.gotoAndStop(i);
    }
    if (n) {
      e.toolTipText = n;
    }
  };
  return OptionsDialogAccountInfoItem;
}(require("./382.js").AOptionsDialogCollapsibleItem);
exports.OptionsDialogAccountInfoItem = d;
a.classImplementsInterfaces(d, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");