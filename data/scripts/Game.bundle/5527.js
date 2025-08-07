Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1087.js");
var r = require("./4.js");
var l = function (e) {
  function CastlePlagueMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePlagueMessageDialog.NAME) || this;
  }
  n.__extends(CastlePlagueMessageDialog, e);
  CastlePlagueMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_plagueMessage_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO("dialog_plagueMessage_desc"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_repairAll]);
    this.repairAllButton = new c.ButtonRepairAllComponentExternal(this.dialogDisp.btn_repairAll);
  };
  CastlePlagueMessageDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.repairAllButton.initRepairAllButton(this.dialogProperties.castleID, this.dialogDisp.mc_premiumToolTip);
    this.dialogDisp.mc_buttonBg.visible = this.dialogDisp.btn_repairAll.visible;
  };
  CastlePlagueMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_repairAll:
        r.CastleModel.smartfoxClient.sendCommandVO(new s.C2SIsoRepairAllVO());
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastlePlagueMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlagueMessageDialog.__initialize_static_members = function () {
    CastlePlagueMessageDialog.NAME = "CastlePlagueMessage";
  };
  return CastlePlagueMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePlagueMessageDialog = l;
var c = require("./5528.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();