Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./13.js");
var r = require("./20.js");
var l = require("./8.js");
var c = function (e) {
  function ConfirmDeleteAllMessagesDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, ConfirmDeleteAllMessagesDialog.NAME) || this;
  }
  n.__extends(ConfirmDeleteAllMessagesDialog, e);
  ConfirmDeleteAllMessagesDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_no], r.ClickFeedbackButtonHover, 1);
  };
  ConfirmDeleteAllMessagesDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(s.TextHelper.toUpperCaseLocaSafeTextId("dialog_inbox_deleteMessageAll_popup_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.TextVO(this.dialogProperties.copy));
  };
  ConfirmDeleteAllMessagesDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  ConfirmDeleteAllMessagesDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.btn_yes:
        this.dialogProperties.functionYes();
        this.hide();
    }
  };
  Object.defineProperty(ConfirmDeleteAllMessagesDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ConfirmDeleteAllMessagesDialog.NAME = "ConfirmDeleteAllMessages";
  return ConfirmDeleteAllMessagesDialog;
}(require("./11.js").CastleExternalDialog);
exports.ConfirmDeleteAllMessagesDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");