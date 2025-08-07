Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1209.js");
var s = function (e) {
  function CastleEquipmentMerchantEventBuyDialog() {
    return e.call(this, CastleEquipmentMerchantEventBuyDialog.NAME) || this;
  }
  n.__extends(CastleEquipmentMerchantEventBuyDialog, e);
  Object.defineProperty(CastleEquipmentMerchantEventBuyDialog.prototype, "dialogTitle", {
    get: function () {
      return "dialog_equipmentMerchantEventBuy_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantBuyDialog.prototype, "dialogTitle").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentMerchantEventBuyDialog.__initialize_static_members = function () {
    CastleEquipmentMerchantEventBuyDialog.NAME = "CastleEquipmentMerchantEventBuy";
  };
  return CastleEquipmentMerchantEventBuyDialog;
}(a.AMerchantBuyDialog);
exports.CastleEquipmentMerchantEventBuyDialog = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");