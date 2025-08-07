Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePrimeSaleQuantityComponent(e) {
    this._quantityDisp = e;
    this._itxt_quantity = this.textFieldManager.registerTextField(e.txt_quantity, new a.LocalizedNumberVO(0));
  }
  CastlePrimeSaleQuantityComponent.prototype.update = function (e) {
    this._itxt_quantity.textContentVO.numberValue = e.reward.amount;
    this._quantityDisp.visible = e.reward.amount > 1;
  };
  Object.defineProperty(CastlePrimeSaleQuantityComponent.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeSaleQuantityComponent;
}();
exports.CastlePrimeSaleQuantityComponent = n;
var o = require("./2.js");
var a = require("./3.js");