Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ACrestSymbolVO(e) {
    this._id = 0;
    this._id = e;
  }
  Object.defineProperty(ACrestSymbolVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACrestSymbolVO.prototype, "graphicClassName", {
    get: function () {
      return "extCrestSymbol_" + this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACrestSymbolVO.prototype, "assetUrl", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CastleCrestSymbols");
    },
    enumerable: true,
    configurable: true
  });
  return ACrestSymbolVO;
}();
exports.ACrestSymbolVO = n;
var o = require("./2.js");