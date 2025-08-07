Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./915.js");
var a = require("./3.js");
var s = require("./14.js");
var r = require("./100.js");
var l = function (e) {
  function OptionsDialogAccountIdInfoItem(t, i, n = null, o) {
    var a = e.call(this, t, i, n) || this;
    a._hasVerifiedAccount = o;
    return a;
  }
  n.__extends(OptionsDialogAccountIdInfoItem, e);
  OptionsDialogAccountIdInfoItem.prototype.setText = function (e) {
    this._iAccountIdTextfield = s.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_value, new a.TextVO(e), new r.InternalGGSTextFieldConfigVO(true));
    this._iAccountIdTextfield.selectable = this._hasVerifiedAccount;
  };
  OptionsDialogAccountIdInfoItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this._headerMC.txt_value:
        this.selectAccountId();
    }
  };
  OptionsDialogAccountIdInfoItem.prototype.selectAccountId = function () {
    this._iAccountIdTextfield.setFocus();
    this._iAccountIdTextfield.setSelection(0, this._iAccountIdTextfield.text.length);
  };
  return OptionsDialogAccountIdInfoItem;
}(o.OptionsDialogAccountInfoItem);
exports.OptionsDialogAccountIdInfoItem = l;