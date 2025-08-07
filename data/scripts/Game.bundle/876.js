Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./20.js");
var u = require("./8.js");
var d = function (e) {
  function CastleShoppingCartPrimeDayConfirmDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleShoppingCartPrimeDayConfirmDialog.NAME) || this;
  }
  n.__extends(CastleShoppingCartPrimeDayConfirmDialog, e);
  CastleShoppingCartPrimeDayConfirmDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initButton(this.dialogDisp.btn_yes, 1, c.ClickFeedbackButtonHover);
    u.ButtonHelper.initButton(this.dialogDisp.btn_no, 1, c.ClickFeedbackButtonHover);
    u.ButtonHelper.initCheckBox(this.dialogDisp.cbx_ok);
    this.cbx_dontShowAgain = u.ButtonHelper.getBasicButton(this.dialogDisp.cbx_ok);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("eventBuilding_decoOffer")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_no.txt_copy, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_shoppingCartPrimeDay_GoToShopButton"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_yes.txt_copy, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_shoppingCartPrimeDay_SeeOfferButton"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new s.LocalizedTextVO("dialog_shoppingCartPrimeDay_selectRewards"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new s.LocalizedTextVO("dialog_shoppingCartPrimeDay_DontShowNotification")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
  };
  CastleShoppingCartPrimeDayConfirmDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.cbx_dontShowAgain.deselected();
  };
  CastleShoppingCartPrimeDayConfirmDialog.prototype.onClick = function (e) {
    if (u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_yes:
          if (this.dialogProperties.functionYes != null) {
            this.dialogProperties.functionYes(null);
          }
          this.hide();
          break;
        case this.dialogDisp.btn_no:
          if (this.dialogProperties.functionNo != null) {
            this.dialogProperties.functionNo(null);
          }
          this.hide();
          break;
        case this.dialogDisp.cbx_ok:
          this.cbx_dontShowAgain.toggleSelected();
          l.CastleModel.localData.saveShoppingCartWarning(!this.cbx_dontShowAgain.isSelected, this.endTimeStamp);
      }
    }
  };
  Object.defineProperty(CastleShoppingCartPrimeDayConfirmDialog.prototype, "endTimeStamp", {
    get: function () {
      return this.dialogProperties.params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayConfirmDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayConfirmDialog.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayConfirmDialog.NAME = "CastleShoppingCartPrimeDayConfirm2";
  };
  return CastleShoppingCartPrimeDayConfirmDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleShoppingCartPrimeDayConfirmDialog = d;
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();