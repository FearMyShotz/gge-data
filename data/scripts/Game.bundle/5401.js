Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./11.js");
var d = createjs.Point;
var p = function (e) {
  function CastlePremiumAboReceivedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePremiumAboReceivedDialog.NAME) || this;
  }
  n.__extends(CastlePremiumAboReceivedDialog, e);
  CastlePremiumAboReceivedDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(this.dialogProperties.messageVO.subject));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_message_abo_copy")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.updateResourceSection();
  };
  CastlePremiumAboReceivedDialog.prototype.updateResourceSection = function () {
    var e = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_RESOURCE_LIST, new d(20, 20));
    e.tooltip.useAmount = false;
    h.CollectableRenderHelper.displaySingleItem(new l.CollectableRenderClips(this.dialogDisp.icon_ressource).addIconMc(this.dialogDisp.icon_ressource).addTextfield(this.dialogDisp.txt_value), this.dialogProperties.messageVO.goods.getItemByIndexSave(0), e).destroy();
  };
  CastlePremiumAboReceivedDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastlePremiumAboReceivedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumAboReceivedDialog.__initialize_static_members = function () {
    CastlePremiumAboReceivedDialog.NAME = "CastlePremiumAccountMessagePopupEx";
  };
  return CastlePremiumAboReceivedDialog;
}(u.CastleExternalDialog);
exports.CastlePremiumAboReceivedDialog = p;
var h = require("./25.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();