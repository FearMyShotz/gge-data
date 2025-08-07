Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CIBuildingScrollItemVO(t, i, n, o) {
    var a = e.call(this) || this;
    a._buildingVO = t;
    a._interactionData = i;
    a._slotClickCallback = n;
    a._scrollItemClickCallback = o;
    return a;
  }
  n.__extends(CIBuildingScrollItemVO, e);
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "interactionData", {
    get: function () {
      return this._interactionData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "slotClickCallback", {
    get: function () {
      return this._slotClickCallback;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CIBuildingScrollItemVO.prototype, "scrollItemClickCallback", {
    get: function () {
      return this._scrollItemClickCallback;
    },
    enumerable: true,
    configurable: true
  });
  return CIBuildingScrollItemVO;
}(require("./2.js").ScrollItemVO);
exports.CIBuildingScrollItemVO = o;