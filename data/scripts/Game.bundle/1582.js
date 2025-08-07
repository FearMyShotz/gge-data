Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./129.js");
var c = require("./4.js");
var u = require("./8.js");
var d = function (e) {
  function CastleRecruitStrongholdAddUnitsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRecruitStrongholdAddUnitsDialog.NAME) || this;
  }
  n.__extends(CastleRecruitStrongholdAddUnitsDialog, e);
  CastleRecruitStrongholdAddUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = "dialog_addUnit_remove";
    this.itxt_name ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new s.LocalizedTextVO(""));
    this.itxt_info ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new s.LocalizedTextVO(""));
    this.dialogDisp.btn_remove.visible = false;
    this.unitIcon = new Library.CastleInterfaceElements_Icons.Icon_UnitsNoshadow_Big();
    this.strongholdIcon = new Library.CastleInterfaceElements.Icon_Stronghold_Big();
    o.MovieClipHelper.scaleToFit(this.unitIcon, 22, 22);
    if (!this._amountComponent) {
      this._amountComponent = new p.CastleUnitAmountComponent();
      this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
      this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    }
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all]);
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._amountComponent.selectTextfield();
    this.controller.addEventListener(l.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(l.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_name.textContentVO.textId = this.addUnitsProperties.unitVO.getNameString();
    this.itxt_info.textContentVO.textId = this.addUnitsProperties.unitVO.getShortInfoString();
    h.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleRecruitStrongholdAddUnitsDialog.MAX_WIDTH, CastleRecruitStrongholdAddUnitsDialog.MAX_HEIGHT, c.CastleModel.userData.playerCrest.colorsTwo[0], c.CastleModel.userData.playerCrest.colorsTwo[1]);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mcHolderLeft);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mcHolderRight);
    if (this.addUnitsProperties.store) {
      this.dialogDisp.mcHolderLeft.scaleX = this.dialogDisp.mcHolderLeft.scaleY = 1.4;
      this.dialogDisp.mcHolderRight.scaleX = this.dialogDisp.mcHolderRight.scaleY = 1;
      this.dialogDisp.mcHolderLeft.addChild(this.unitIcon);
      this.dialogDisp.mcHolderRight.addChild(this.strongholdIcon);
      this.dialogDisp.tooltipHitarea.toolTipText = "stronghold_MoveIn";
    } else {
      this.dialogDisp.mcHolderLeft.scaleX = this.dialogDisp.mcHolderLeft.scaleY = 1;
      this.dialogDisp.mcHolderRight.scaleX = this.dialogDisp.mcHolderRight.scaleY = 1.4;
      this.dialogDisp.mcHolderLeft.addChild(this.strongholdIcon);
      this.dialogDisp.mcHolderRight.addChild(this.unitIcon);
      this.dialogDisp.tooltipHitarea.toolTipText = "stronghold_MoveOut";
    }
    if (this.addUnitsProperties.unitVO.isStronghold) {
      this.initAmountComponent(this.addUnitsProperties.maxAmount, 1);
    } else {
      this.initAmountComponent(this.addUnitsProperties.maxAmount, this.addUnitsProperties.maxAmount);
    }
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.initAmountComponent = function (e, t = 1) {
    this._amountComponent.setNumberOfItems(e);
    this._amountComponent.setSelectedAmount(t);
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.onInventoryUpdated = function (e) {
    var t = this._amountComponent.getSelectedAmount();
    if ((t = this.addUnitsProperties.store ? r.int(Math.min(t, c.CastleModel.militaryData.currentHiddenSoldierSpace, c.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId))) : r.int(Math.min(t, c.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId)))) > 0) {
      if (this.addUnitsProperties.unitVO.isStronghold) {
        this.initAmountComponent(c.CastleModel.militaryData.unitStrongholdInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId), 1);
      } else {
        this.initAmountComponent(Math.min(c.CastleModel.militaryData.currentHiddenSoldierSpace, c.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this.addUnitsProperties.unitVO.wodId)), t);
      }
    } else {
      this.hide();
    }
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO.wodId, this._amountComponent.getSelectedAmount());
    if (this.addUnitsProperties.itemVO) {
      if (!this.addUnitsProperties.itemVO.isFree()) {
        this.addUnitsProperties.addItemFunction(this.addUnitsProperties.itemVO.unitVO, this.addUnitsProperties.itemVO, 0);
      }
      this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, this._amountComponent.getSelectedAmount());
    }
    this.hide();
  };
  CastleRecruitStrongholdAddUnitsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onConfirmToAddUnits();
          break;
        case this.dialogDisp.btn_remove:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleRecruitStrongholdAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitStrongholdAddUnitsDialog.__initialize_static_members = function () {
    CastleRecruitStrongholdAddUnitsDialog.NAME = "CastleRecruitStrongholdAddUnitsEx";
    CastleRecruitStrongholdAddUnitsDialog.MAX_WIDTH = 70;
    CastleRecruitStrongholdAddUnitsDialog.MAX_HEIGHT = 70;
  };
  return CastleRecruitStrongholdAddUnitsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleRecruitStrongholdAddUnitsDialog = d;
var p = require("./297.js");
var h = require("./63.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();