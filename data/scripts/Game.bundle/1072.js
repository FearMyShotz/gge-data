Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./8.js");
var l = function (e) {
  function CastleSendTroopsAddUnitsDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t ?? CastleSendTroopsAddUnitsDialog.NAME) || this;
  }
  n.__extends(CastleSendTroopsAddUnitsDialog, e);
  CastleSendTroopsAddUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all, this.dialogDisp.mc_slider.btn_slider]);
  };
  CastleSendTroopsAddUnitsDialog.prototype.showLoaded = function (t = null) {
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.i_txt_infoConsumption = this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new a.LocalizedTextVO(this.addUnitsProperties.unitVO.getShortInfoString()));
    this.i_txt_infoConsumption.autoFitToBounds = true;
    this.i_txt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new a.LocalizedTextVO(this.addUnitsProperties.unitVO.getNameString()));
    this._amountComponent ||= new c.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    u.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleSendTroopsAddUnitsDialog.MAX_WIDTH, CastleSendTroopsAddUnitsDialog.MAX_HEIGHT, s.CastleModel.userData.playerCrest.colorsTwo[0], s.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.dialogDisp.btn_remove.visible = this.addUnitsProperties.currentItems > 0;
    this.dialogDisp.mc_slider.visible = true;
    this._amountComponent.setNumberOfItems(this.addUnitsProperties.maxItems);
    this._amountComponent.setSelectedAmount(this.addUnitsProperties.currentItems);
    this._amountComponent.selectTextfield();
    e.prototype.showLoaded.call(this);
  };
  CastleSendTroopsAddUnitsDialog.prototype.onClick = function (t) {
    var i;
    e.prototype.onClick.call(this, t);
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onConfirmToAddUnits();
          break;
        case this.dialogDisp.btn_remove:
          i = [this.addUnitsProperties.unitVO, 0];
          this.addUnitsProperties.addItemFunction(i);
          this.hide();
      }
    }
  };
  CastleSendTroopsAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    var e;
    e = [this.addUnitsProperties.unitVO, this._amountComponent.getSelectedAmount()];
    this.addUnitsProperties.addItemFunction(e);
    this.hide();
  };
  Object.defineProperty(CastleSendTroopsAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSendTroopsAddUnitsDialog.__initialize_static_members = function () {
    CastleSendTroopsAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
    CastleSendTroopsAddUnitsDialog.MAX_WIDTH = 70;
    CastleSendTroopsAddUnitsDialog.MAX_HEIGHT = 70;
  };
  return CastleSendTroopsAddUnitsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSendTroopsAddUnitsDialog = l;
var c = require("./297.js");
var u = require("./63.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();