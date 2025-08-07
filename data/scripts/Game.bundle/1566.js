Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./69.js");
var s = require("./169.js");
var r = require("./4.js");
var l = require("./8.js");
var c = function (e) {
  function ACastleDismissUnitsDialog(t = null) {
    var i = this;
    i._oldSelectUnitAmount = -1;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t || ACastleDismissUnitsDialog.NAME) || this;
  }
  n.__extends(ACastleDismissUnitsDialog, e);
  ACastleDismissUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.btnHelp.toolTipText = "generic_help";
    this._amountComponent ||= new u.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.updateUnitAmount));
    this.initBasicButtons([this.dialogDisp.btnClose, this.dialogDisp.btnCancel, this.dialogDisp.btnDismiss, this.dialogDisp.btnHelp]);
    l.ButtonHelper.enableButton(this.dialogDisp.btnDismiss, false);
  };
  ACastleDismissUnitsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initAmountComponent(this.dismissUnitsDialogProperties.maxUnits);
    d.WodPicHelper.addUnitPic(this.dismissUnitsDialogProperties.unitVO, this.dialogDisp.mc_content, ACastleDismissUnitsDialog.WODPIC_MAX_WIDTH, ACastleDismissUnitsDialog.WODPIC_MAX_HEIGHT, r.CastleModel.userData.playerCrest.colorsTwo[0], r.CastleModel.userData.playerCrest.colorsTwo[1]);
    l.ButtonHelper.delayEnableButton(this.dialogDisp.btnDismiss, true);
  };
  ACastleDismissUnitsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.dialogDisp.addEventListener(s.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.updateUnitAmount));
  };
  ACastleDismissUnitsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.dialogDisp.removeEventListener(s.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.updateUnitAmount));
  };
  ACastleDismissUnitsDialog.prototype.updateUnitAmount = function (e = null) {
    if (this._oldSelectUnitAmount != this.selectedUnitAmount) {
      this._oldSelectUnitAmount = this.selectedUnitAmount;
      this.onUnitAmountChanged();
    }
  };
  ACastleDismissUnitsDialog.prototype.initAmountComponent = function (e) {
    this._amountComponent.setNumberOfItems(e);
    this._amountComponent.setSelectedAmount(e);
    this._oldSelectUnitAmount = -1;
    this.updateUnitAmount();
  };
  ACastleDismissUnitsDialog.prototype.onClick = function (t) {
    if (!this.isLocked && !this.isWaitingForServerMessage && (e.prototype.onClick.call(this, t), l.ButtonHelper.isButtonEnabled(t.target))) {
      switch (t.target) {
        case this.dialogDisp.btnClose:
        case this.dialogDisp.btnCancel:
          this.hide();
          break;
        case this.dialogDisp.btnDismiss:
          this.dismissUnits();
          this.hide();
          break;
        case this.dialogDisp.btnHelp:
          this.showHelp();
      }
    }
  };
  Object.defineProperty(ACastleDismissUnitsDialog.prototype, "selectedUnitAmount", {
    get: function () {
      return this._amountComponent.getSelectedAmount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleDismissUnitsDialog.prototype, "maxSelectableUnits", {
    set: function (e) {
      this._amountComponent.setMaxNumberOfItems(e);
    },
    enumerable: true,
    configurable: true
  });
  ACastleDismissUnitsDialog.prototype.dismissUnits = function () {
    throw new a.AbstractMethodError();
  };
  ACastleDismissUnitsDialog.prototype.showHelp = function () {
    throw new a.AbstractMethodError();
  };
  ACastleDismissUnitsDialog.prototype.onUnitAmountChanged = function () {};
  Object.defineProperty(ACastleDismissUnitsDialog.prototype, "dismissUnitsDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ACastleDismissUnitsDialog.__initialize_static_members = function () {
    ACastleDismissUnitsDialog.NAME = "CastleRecruitDismissUnitsEx";
    ACastleDismissUnitsDialog.WODPIC_MAX_WIDTH = 100;
    ACastleDismissUnitsDialog.WODPIC_MAX_HEIGHT = 90;
  };
  return ACastleDismissUnitsDialog;
}(require("./11.js").CastleExternalDialog);
exports.ACastleDismissUnitsDialog = c;
var u = require("./297.js");
var d = require("./63.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();