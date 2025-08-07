Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSkipCraftingDialogProperties(t) {
    var i = e.call(this) || this;
    i._slotVO = t;
    return i;
  }
  n.__extends(CastleSkipCraftingDialogProperties, e);
  Object.defineProperty(CastleSkipCraftingDialogProperties.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSkipCraftingDialogProperties;
}(require("./220.js").BasicProperties);
exports.CastleSkipCraftingDialogProperties = o;