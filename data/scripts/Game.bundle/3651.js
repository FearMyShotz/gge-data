Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./130.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./36.js");
var d = function (e) {
  function CastlePOFurysBladeMessageDialog() {
    return e.call(this, CastlePOFurysBladeMessageDialog.NAME) || this;
  }
  n.__extends(CastlePOFurysBladeMessageDialog, e);
  CastlePOFurysBladeMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    l.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, u.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_furysBladeFlow_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top1_title, new a.LocalizedTextVO("dialog_furysBladeFlow_top1_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top1_desc, new a.LocalizedTextVO("dialog_furysBladeFlow_top1_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top2_title, new a.LocalizedTextVO("dialog_furysBladeFlow_top2_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top2_desc, new a.LocalizedTextVO("dialog_furysBladeFlow_top2_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top3_title, new a.LocalizedTextVO("dialog_furysBladeFlow_top3_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top3_desc, new a.LocalizedTextVO("dialog_furysBladeFlow_top3_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_title, new a.LocalizedTextVO("dialog_furysBladeFlow_stage1_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_date, new a.LocalizedTextVO("dialog_furysBladeFlow_stage1_date"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_players, new a.LocalizedTextVO("dialog_furysBladeFlow_stage1_players")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage1_desc, new a.LocalizedTextVO("dialog_furysBladeFlow_stage1_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_title, new a.LocalizedTextVO("dialog_furysBladeFlow_stage2_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_date, new a.LocalizedTextVO("dialog_furysBladeFlow_stage2_date"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_players, new a.LocalizedTextVO("dialog_furysBladeFlow_stage2_players")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage2_desc, new a.LocalizedTextVO("dialog_furysBladeFlow_stage2_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_title, new a.LocalizedTextVO("dialog_furysBladeFlow_stage3_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_date, new a.LocalizedTextVO("dialog_furysBladeFlow_stage3_date"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_players, new a.LocalizedTextVO("dialog_furysBladeFlow_stage3_players")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_stage3_desc, new a.LocalizedTextVO("dialog_furysBladeFlow_stage3_desc"));
    s.CastleModel.privateOfferData.addEventListener(r.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastlePOFurysBladeMessageDialog.prototype.hideLoaded = function (t = null) {
    s.CastleModel.privateOfferData.removeEventListener(r.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    e.prototype.hideLoaded.call(this, t);
  };
  CastlePOFurysBladeMessageDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePOFurysBladeMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastlePOFurysBladeMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePOFurysBladeMessageDialog.NAME = "CastlePOFurysBladeMessage";
  CastlePOFurysBladeMessageDialog.OFFER_NAME = "CastlePOFurysBladeMessageDialog";
  return CastlePOFurysBladeMessageDialog;
}(c.CastleExternalDialog);
exports.CastlePOFurysBladeMessageDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");