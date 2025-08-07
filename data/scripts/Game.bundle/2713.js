Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CIBlueprintScrollItemVO(t) {
    var i = e.call(this) || this;
    i._blueprintVO = t;
    return i;
  }
  n.__extends(CIBlueprintScrollItemVO, e);
  Object.defineProperty(CIBlueprintScrollItemVO.prototype, "blueprintVO", {
    get: function () {
      return this._blueprintVO;
    },
    enumerable: true,
    configurable: true
  });
  return CIBlueprintScrollItemVO;
}(require("./2.js").ScrollItemVO);
exports.CIBlueprintScrollItemVO = o;