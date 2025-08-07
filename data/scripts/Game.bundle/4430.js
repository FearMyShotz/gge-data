Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./1210.js");
var c = require("./119.js");
var u = require("./233.js");
var d = require("./4.js");
var p = require("./256.js");
var h = function (e) {
  function CastleEquipmentMerchantEventDialog() {
    return e.call(this, CastleEquipmentMerchantEventDialog.NAME) || this;
  }
  n.__extends(CastleEquipmentMerchantEventDialog, e);
  CastleEquipmentMerchantEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_equipmentMerchantEvent_title"));
    this.itxt_storage = this.textFieldManager.registerTextField(this.dialogDisp.mc_storageSpace.txt_storage, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.dialogDisp.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_storageSpace.mouseChildren = false;
    this.itxt_storageGem = this.textFieldManager.registerTextField(this.dialogDisp.mc_storageSpaceGem.txt_storage, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this.dialogDisp.mc_storageSpaceGem.toolTipText = "dialog_gemSpace_tooltip";
    this.dialogDisp.mc_storageSpaceGem.mouseChildren = false;
  };
  CastleEquipmentMerchantEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateStorageText();
    this.lockDialog();
  };
  CastleEquipmentMerchantEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(c.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.addEventListener(u.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SEquipmentSpaceLeftVO());
  };
  CastleEquipmentMerchantEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(c.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.removeEventListener(u.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
  };
  CastleEquipmentMerchantEventDialog.prototype.onInventorySpace = function (e) {
    this.updateStorageText();
    this.unLockDialog();
  };
  CastleEquipmentMerchantEventDialog.prototype.updateStorageText = function () {
    this.itxt_storage.textContentVO.textReplacements = [d.CastleModel.equipData.filledInventorySpace, d.CastleModel.equipData.playerTotalInventorySpace];
    this.itxt_storage.color = d.CastleModel.equipData.isInventoryFull ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
    this.itxt_storageGem.textContentVO.textReplacements = [d.CastleModel.gemData.filledInventorySpace, d.CastleModel.gemData.playerTotalInventorySpace];
    this.itxt_storageGem.color = d.CastleModel.gemData.isInventoryFull ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
  };
  Object.defineProperty(CastleEquipmentMerchantEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return g.EquipmentMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventDialog.NAME = "CastleEquipmentMerchantEvent";
  return CastleEquipmentMerchantEventDialog;
}(p.CastleGenericMerchantDialog);
exports.CastleEquipmentMerchantEventDialog = h;
var g = require("./4431.js");
a.classImplementsInterfaces(h, "ICollectableRendererList");