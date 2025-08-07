Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function CastleBasicButtonValueContainer(e) {
    this.more = e.amountPicker.btn_right;
    this.less = e.amountPicker.btn_left;
    this.max = e.btn_all;
  }
  CastleBasicButtonValueContainer.prototype.getMoreButton = function () {
    return this.more;
  };
  CastleBasicButtonValueContainer.prototype.getLessButton = function () {
    return this.less;
  };
  CastleBasicButtonValueContainer.prototype.getMaxButton = function () {
    return this.max;
  };
  return CastleBasicButtonValueContainer;
}();
exports.CastleBasicButtonValueContainer = o;
n.classImplementsInterfaces(o, "IButtonsValueDisp");