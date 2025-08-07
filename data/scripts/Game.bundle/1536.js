Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastlePrivateOfferCoinmineDoneDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferCoinmineDoneDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferCoinmineDoneDialog, e);
  CastlePrivateOfferCoinmineDoneDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("alert_coinmine_depleated_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("alert_coinmine_depleated_copy"));
  };
  CastlePrivateOfferCoinmineDoneDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferCoinmineDoneDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferCoinmineDoneDialog.__initialize_static_members = function () {
    CastlePrivateOfferCoinmineDoneDialog.NAME = "CastlePrivateOfferCoinmineDone";
  };
  return CastlePrivateOfferCoinmineDoneDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePrivateOfferCoinmineDoneDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();