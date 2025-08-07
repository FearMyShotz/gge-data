Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./42.js");
var u = function (e) {
  function CastlePrivateOfferTutorialCompletedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastlePrivateOfferTutorialCompletedDialog.NAME) || this;
  }
  n.__extends(CastlePrivateOfferTutorialCompletedDialog, e);
  CastlePrivateOfferTutorialCompletedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new a.LocalizedTextVO("dialog_tutorialend_teaser_titel")).verticalAlign = c.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_0, new a.LocalizedTextVO("dialog_tutorialend_teaser_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_1, new a.LocalizedTextVO("dialog_tutorialend_teaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_2, new a.LocalizedTextVO("dialog_tutorialend_teaser_copy3"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_anouncement_3, new a.LocalizedTextVO("dialog_tutorialend_teaser_copy4"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_reward_title, new a.LocalizedTextVO("dialog_registerreward_reward"));
    this.initReward();
  };
  CastlePrivateOfferTutorialCompletedDialog.prototype.initReward = function () {
    d.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.dialogDisp, "mc_reward_").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.offerVO.getTotalRewardListFromOfferVO(), new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED));
  };
  CastlePrivateOfferTutorialCompletedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        l.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id);
        this.hide();
    }
  };
  Object.defineProperty(CastlePrivateOfferTutorialCompletedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivateOfferTutorialCompletedDialog.__initialize_static_members = function () {
    CastlePrivateOfferTutorialCompletedDialog.NAME = "CastlePrivateOfferTutorialCompleted";
  };
  return CastlePrivateOfferTutorialCompletedDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastlePrivateOfferTutorialCompletedDialog = u;
var d = require("./25.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();