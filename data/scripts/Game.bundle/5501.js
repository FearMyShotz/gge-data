Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = function (e) {
  function CastleTermsAndConditionsChangedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTermsAndConditionsChangedDialog.NAME) || this;
  }
  n.__extends(CastleTermsAndConditionsChangedDialog, e);
  CastleTermsAndConditionsChangedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_gotoTermsAndConditions]);
    this.setText();
  };
  CastleTermsAndConditionsChangedDialog.prototype.setText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new u.LocalizedTextVO("general_tcmailing_subject")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descriptionTop, new u.LocalizedTextVO("general_tcmailing_2015_text1")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descriptionBottom, new u.LocalizedTextVO("general_tcmailing_2015_text2")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_gotoTermsAndConditions.txt_goToTermsAndConditions, new u.LocalizedTextVO("read_t_and_c")).autoFitToBounds = true;
  };
  CastleTermsAndConditionsChangedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_gotoTermsAndConditions:
        var i = new r.URLRequest(s.EnvGlobalsHandler.globals.urlAGB);
        c.navigateToURL(i, "goodgamestudios");
        a.ClientFunnelTrackingController.getInstance().trackState(o.ClientFunnelGameStates.VIEW_AGB);
    }
  };
  CastleTermsAndConditionsChangedDialog.__initialize_static_members = function () {
    CastleTermsAndConditionsChangedDialog.NAME = "CastleTermsAndConditionsChanged";
  };
  return CastleTermsAndConditionsChangedDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTermsAndConditionsChangedDialog = d;
l.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();