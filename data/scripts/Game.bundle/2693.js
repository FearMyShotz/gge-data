Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ConstructionItemScrollItemVO(t) {
    var i = e.call(this) || this;
    i._collectableItem = t;
    return i;
  }
  n.__extends(ConstructionItemScrollItemVO, e);
  Object.defineProperty(ConstructionItemScrollItemVO.prototype, "collectableItem", {
    get: function () {
      return this._collectableItem;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemScrollItemVO;
}(require("./2.js").ScrollItemVO);
exports.ConstructionItemScrollItemVO = o;