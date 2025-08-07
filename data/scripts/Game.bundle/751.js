Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./26.js");
var p = require("./4.js");
var h = require("./8.js");
var g = function (e) {
  function CastleAttackAddUnitsDialog() {
    return e.call(this, CastleAttackAddUnitsDialog.NAME) || this;
  }
  n.__extends(CastleAttackAddUnitsDialog, e);
  CastleAttackAddUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._amountComponent = new C.CastleUnitAmountComponent();
    this._amountComponent.init(this.dialogDisp.mc_slider, this.dialogDisp.amountPicker, this.dialogDisp.btn_all);
    this._amountComponent.registerOnReturnKeyPressed(this.bindFunction(this.onConfirmToAddUnits));
    this.dialogDisp.btn_all.toolTipText = "dialog_addUnit_all";
    this.dialogDisp.btn_remove.toolTipText = l.Localize.text("dialog_addUnit_remove");
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_remove, this.dialogDisp.btn_all, this.dialogDisp.mc_slider.btn_slider]);
  };
  CastleAttackAddUnitsDialog.prototype.showLoaded = function (t = null) {
    var i = this.textFieldManager.registerTextField(this.dialogDisp.txt_infoConsumption, new c.LocalizedTextVO("dialog_defenceAddToolConsumption"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new c.LocalizedTextVO(this.addUnitsProperties.unitVO.getNameString()));
    if (a.instanceOfClass(this.addUnitsProperties.unitVO, "ToolUnitVO")) {
      i.textContentVO.textId = "dialog_defenceAddToolConsumption";
    } else {
      i.textContentVO.textId = this.addUnitsProperties.unitVO.getShortInfoString();
    }
    _.WodPicHelper.addUnitPic(this.addUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleAttackAddUnitsDialog.MAX_WIDTH, CastleAttackAddUnitsDialog.MAX_HEIGHT, p.CastleModel.userData.playerCrest.colorsTwo[0], p.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.dialogDisp.btn_remove.visible = this.addUnitsProperties.editMode;
    this.dialogDisp.mc_slider.visible = true;
    var n = u.int(this.addUnitsProperties.maxAmount);
    var o = u.int(this.addUnitsProperties.unitVO.inventoryAmount);
    if (this.addUnitsProperties.editMode) {
      o += u.int(this.addUnitsProperties.itemVO.unitVO.inventoryAmount);
    }
    o = this.addUnitsProperties.maxAmountOnlyForSoldier && a.instanceOfClass(this.addUnitsProperties.unitVO, "ToolUnitVO") ? u.int(Math.min(o, s.TravelConst.MAX_TOOLS_PER_SLOT)) : u.int(Math.min(o, n));
    var r = u.int(this.addUnitsProperties.itemVO.isFree() ? 0 : this.addUnitsProperties.itemVO.getAmount());
    o = u.int(Math.min(o, this.addUnitsProperties.itemContainer.freeItems + r));
    this._amountComponent.setNumberOfItems(o);
    this._amountComponent.setSelectedAmount(r);
    this._amountComponent.selectTextfield();
    this._amountComponent.enableSliderComponent(true);
    this._amountComponent.enablePickerComponent(true);
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    e.prototype.showLoaded.call(this, t);
  };
  CastleAttackAddUnitsDialog.prototype.hideLoaded = function (t = null) {
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleAttackAddUnitsDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE && this.addUnitsProperties.targetAreaType == r.WorldConst.AREA_TYPE_ALIEN_CAMP || e.specialEventVO.eventId == s.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE && this.addUnitsProperties.targetAreaType == r.WorldConst.AREA_TYPE_RED_ALIEN_CAMP) {
      this.hide();
    }
  };
  CastleAttackAddUnitsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
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
  CastleAttackAddUnitsDialog.prototype.onConfirmToAddUnits = function () {
    if (!this.addUnitsProperties.itemVO.isFree()) {
      this.addUnitsProperties.addItemFunction(this.addUnitsProperties.itemVO.unitVO, this.addUnitsProperties.itemVO, 0);
    }
    this.addUnitsProperties.addItemFunction(this.addUnitsProperties.unitVO, this.addUnitsProperties.itemVO, this._amountComponent.getSelectedAmount());
    this.hide();
  };
  Object.defineProperty(CastleAttackAddUnitsDialog.prototype, "addUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackAddUnitsDialog.NAME = "CastleAttackAddUnitsEx";
  CastleAttackAddUnitsDialog.MAX_WIDTH = 70;
  CastleAttackAddUnitsDialog.MAX_HEIGHT = 70;
  return CastleAttackAddUnitsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAttackAddUnitsDialog = g;
var C = require("./297.js");
var _ = require("./63.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");