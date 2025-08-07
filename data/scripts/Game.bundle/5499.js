Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./729.js");
var l = require("./381.js");
var c = function (e) {
  function CastleFairPlayDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFairPlayDialog.NAME) || this;
  }
  n.__extends(CastleFairPlayDialog, e);
  CastleFairPlayDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_header, new s.LocalizedTextVO("dialog_fairplayMessage_header"));
    this._textLinkComponent = new l.LinkComponent(this.dialogDisp.mc_desc, "dialog_fairplayMessage_copy", r.ClientConstURL.URL_EMPIRE_FORUMS + o.EnvGlobalsHandler.globals.currentCountryLanguageCode);
  };
  CastleFairPlayDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._textLinkComponent.update();
  };
  CastleFairPlayDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleFairPlayDialog.__initialize_static_members = function () {
    CastleFairPlayDialog.NAME = "CastleFairPlay";
  };
  return CastleFairPlayDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFairPlayDialog = c;
a.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();