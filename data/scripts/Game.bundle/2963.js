Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = function (e) {
  function CancelRecruitmentDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CancelRecruitmentDialog.NAME) || this;
  }
  n.__extends(CancelRecruitmentDialog, e);
  CancelRecruitmentDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.isSoldiers ? "dialog_cancelLoop_units_desc1" : "dialog_cancelLoop_tools_desc1";
    var n = this.dialogProperties.isSoldiers ? "dialog_cancelLoop_units_desc2" : "dialog_cancelLoop_tools_desc2";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO(n));
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close]);
  };
  CancelRecruitmentDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_no:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.confirmAction();
          this.hide();
      }
    }
  };
  CancelRecruitmentDialog.prototype.confirmAction = function () {
    this.dialogProperties.onCancelRecruitmentConfirmed();
  };
  Object.defineProperty(CancelRecruitmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CancelRecruitmentDialog.__initialize_static_members = function () {
    CancelRecruitmentDialog.NAME = "CancelRecruitment";
  };
  return CancelRecruitmentDialog;
}(require("./11.js").CastleExternalDialog);
exports.CancelRecruitmentDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();