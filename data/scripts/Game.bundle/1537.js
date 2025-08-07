Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastlePrivateOfferRubymineDoneDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferRubymineDoneDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferRubymineDoneDialog, e);
  CastlePrivateOfferRubymineDoneDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("alert_rubymine_depleated_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO("alert_rubymine_depleated_copy"));
  };
  CastlePrivateOfferRubymineDoneDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferRubymineDoneDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferRubymineDoneDialog.__initialize_static_members = function () {
    CastlePrivateOfferRubymineDoneDialog.NAME = "CastlePrivateOfferRubymineDone";
  };
  return CastlePrivateOfferRubymineDoneDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePrivateOfferRubymineDoneDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();