Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./8.js");
var d = function (e) {
  function CastleDefenceAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleDefenceAddUnitsDialog.NAME) || this;
  }
  n.__extends(CastleDefenceAddUnitsDialog, e);
  CastleDefenceAddUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all]);
  };
  CastleDefenceAddUnitsDialog.prototype.setInfoText = function () {
    if (this.addUnitsProperties.unitVO.dollWod != 0) {
      this.itxt_info.textContentVO.textId = "dialog_addDoll_defenceInfo";
    } else {
      this.itxt_info.textContentVO.textId = "dialog_addUnit_defenceInfo";
    }
  };
  CastleDefenceAddUnitsDialog.prototype.showLoaded = function (t = null) {
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.LocalizedTextVO(this.addUnitsProperties.unitVO.getNameString()));
    this.itxt_info = this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new r.LocalizedTextVO(""));
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new r.LocalizedTextVO(""));
    if (this.addUnitsProperties.unitVO.numberofDolls <= 0) {
      i.textContentVO.textId = "dialog_defenceAddToolConsumption";
    }
    this._amountComponent ||= new p.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    this.setInfoText();
    h.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleDefenceAddUnitsDialog.MAX_WIDTH, CastleDefenceAddUnitsDialog.MAX_HEIGHT, c.CastleModel.userData.playerCrest.colorsTwo[0], c.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.dialogDisp.btn_remove.visible = this.addUnitsProperties.editMode;
    var n = l.int(this.addUnitsProperties.unitVO.inventoryAmount);
    if (this.addUnitsProperties.editMode) {
      n += l.int(this.addUnitsProperties.itemVO.unitVO.inventoryAmount);
    }
    if (a.instanceOfClass(this.addUnitsProperties.unitVO, "ToolUnitVO")) {
      n = l.int(Math.min(n, s.DefenseConst.MAX_SLOTSIZE));
    }
    var o = l.int(this.addUnitsProperties.itemVO.isFree() ? 0 : this.addUnitsProperties.itemVO.getAmount());
    if (!this.addUnitsProperties.itemVO.isFree() && this.addUnitsProperties.unitVO.type != this.addUnitsProperties.itemVO.unitVO.type) {
      o = 1;
    }
    n = l.int(Math.min(n, this.addUnitsProperties.itemContainer.freeItems + o));
    this._amountComponent.setNumberOfItems(n);
    this._amountComponent.setSelectedAmount(o);
    u.ButtonHelper.enableButton(this.dialogDisp.btn_close, this.isOutOfTutorial());
    u.ButtonHelper.enableButton(this.dialogDisp.btn_cancle, this.isOutOfTutorial());
    u.ButtonHelper.enableButton(this.dialogDisp.btn_remove, this.isOutOfTutorial());
    u.ButtonHelper.enableButton(this.dialogDisp.btn_all, this.isOutOfTutorial());
    this._amountComponent.selectTextfield();
    this._amountComponent.enablePickerComponent(true);
    this._amountComponent.enableSliderComponent(true);
    e.prototype.showLoaded.call(this, t);
  };
  CastleDefenceAddUnitsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onConfirmToAddUnits();
          break;
        case this.dialogDisp.btn_remove:
          this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, 0);
          this.hide();
      }
    }
  };
  CastleDefenceAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    if (!this.addUnitsProperties.itemVO.isFree()) {
      this.addUnitsProperties.addItemFunction(this.addUnitsProperties.itemVO.unitVO, this.addUnitsProperties.itemVO, 0);
    }
    this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, this._amountComponent.getSelectedAmount());
    this.hide();
  };
  Object.defineProperty(CastleDefenceAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceAddUnitsDialog.__initialize_static_members = function () {
    CastleDefenceAddUnitsDialog.NAME = "CastleDefenceAddUnitsEx";
    CastleDefenceAddUnitsDialog.MAX_WIDTH = 90;
    CastleDefenceAddUnitsDialog.MAX_HEIGHT = 100;
  };
  return CastleDefenceAddUnitsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDefenceAddUnitsDialog = d;
var p = require("./297.js");
var h = require("./63.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();