Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BasicButtonValueContainer(e) {
    this.more = e.getChildByName("btn_more");
    this.less = e.getChildByName("btn_less");
    this.max = e.getChildByName("btn_max");
  }
  BasicButtonValueContainer.prototype.getMoreButton = function () {
    return this.more;
  };
  BasicButtonValueContainer.prototype.getLessButton = function () {
    return this.less;
  };
  BasicButtonValueContainer.prototype.getMaxButton = function () {
    return this.max;
  };
  return BasicButtonValueContainer;
}();
exports.BasicButtonValueContainer = i;