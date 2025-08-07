Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleIngameMessageDealsDayDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleIngameMessageDealsDayDialog.NAME) || this;
  }
  n.__extends(CastleIngameMessageDealsDayDialog, e);
  CastleIngameMessageDealsDayDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleIngameMessageDealsDayDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setText();
  };
  CastleIngameMessageDealsDayDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("empireDealsDays_message_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new a.LocalizedTextVO("empireDealsDays_message_copy"));
  };
  CastleIngameMessageDealsDayDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleIngameMessageDealsDayDialog.__initialize_static_members = function () {
    CastleIngameMessageDealsDayDialog.NAME = "CastleIngameMessageDealsDay";
  };
  return CastleIngameMessageDealsDayDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleIngameMessageDealsDayDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();