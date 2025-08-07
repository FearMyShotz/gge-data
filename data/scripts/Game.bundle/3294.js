Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemPaymentDoublerVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemPaymentDoublerVO, e);
  CollectableItemPaymentDoublerVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t;
  };
  CollectableItemPaymentDoublerVO.prototype.getTooltipTextId = function () {
    return "paymentdoubler_name";
  };
  CollectableItemPaymentDoublerVO.prototype.getDescriptionTextId = function () {
    return "dialog_paymentdoubler_copy";
  };
  CollectableItemPaymentDoublerVO.__initialize_static_members = function () {
    CollectableItemPaymentDoublerVO.SERVER_KEY = "PD";
    CollectableItemPaymentDoublerVO.XML_KEY = "paymentDoppler";
  };
  return CollectableItemPaymentDoublerVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemPaymentDoublerVO = o;
o.__initialize_static_members();