Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./195.js");
var r = function (e) {
  function CollectableItemPaymentDoublerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemPaymentDoublerVE, e);
  CollectableItemPaymentDoublerVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  CollectableItemPaymentDoublerVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemPaymentDoublerVE.prototype.tooltipCreate = function () {
    return {
      t: "dialog_paymentdoubler_tootlipp",
      p: [new a.LocalizedNumberVO(this.vo.amount)]
    };
  };
  Object.defineProperty(CollectableItemPaymentDoublerVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_PaymentDoubler;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemPaymentDoublerVE;
}(s.ACollectableItemSimpleIconVE);
exports.CollectableItemPaymentDoublerVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");