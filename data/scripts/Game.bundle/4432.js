Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function EquipmentMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(EquipmentMerchantScrollItem, e);
  Object.defineProperty(EquipmentMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleEquipmentMerchantEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentMerchantScrollItem.prototype.handleDiscount = function (t = true) {
    e.prototype.handleDiscount.call(this, false);
  };
  return EquipmentMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.EquipmentMerchantScrollItem = s;
var r = require("./4433.js");
o.classImplementsInterfaces(s, "MovieClip");