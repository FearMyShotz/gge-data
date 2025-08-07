Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleListDetailOverviewItemVO(t, i = 0) {
    var n = this;
    n._filter = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._wmoVO = t;
    n._filter = i;
    return n;
  }
  n.__extends(CastleListDetailOverviewItemVO, e);
  Object.defineProperty(CastleListDetailOverviewItemVO.prototype, "wmoVO", {
    get: function () {
      return this._wmoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListDetailOverviewItemVO.prototype, "filter", {
    get: function () {
      return this._filter;
    },
    enumerable: true,
    configurable: true
  });
  return CastleListDetailOverviewItemVO;
}(require("./2.js").ScrollItemVO);
exports.CastleListDetailOverviewItemVO = o;