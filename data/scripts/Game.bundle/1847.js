Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleFactionEventLMSDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionEventLMSDialog.NAME) || this;
  }
  n.__extends(CastleFactionEventLMSDialog, e);
  CastleFactionEventLMSDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_lms_title"));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(""));
  };
  CastleFactionEventLMSDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.dialogDisp.mc_image.gotoAndStop(this.dialogProperties.lmsFaction + 1);
    if (this.dialogProperties.ownFaction == this.dialogProperties.lmsFaction) {
      this.itxt_copy.textContentVO.textId = "faction_lms_own";
    } else {
      this.itxt_copy.textContentVO.textId = "faction_lms_enemy";
    }
  };
  CastleFactionEventLMSDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleFactionEventLMSDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionEventLMSDialog.__initialize_static_members = function () {
    CastleFactionEventLMSDialog.NAME = "CastleFactionEventLMS";
  };
  return CastleFactionEventLMSDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleFactionEventLMSDialog = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();