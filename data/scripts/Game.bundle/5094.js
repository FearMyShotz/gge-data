Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = function (e) {
  function CastlePlayerGiftSentDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlayerGiftSentDialog.NAME) || this;
  }
  n.__extends(CastlePlayerGiftSentDialog, e);
  CastlePlayerGiftSentDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_giftTrader_sendGift_title"));
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastlePlayerGiftSentDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO(a.Localize.text("dialog_giftSent_desc", [this.dialogProperties.playerName])));
  };
  CastlePlayerGiftSentDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePlayerGiftSentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSentDialog.__initialize_static_members = function () {
    CastlePlayerGiftSentDialog.NAME = "CastlePlayerGiftSent";
  };
  return CastlePlayerGiftSentDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePlayerGiftSentDialog = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();