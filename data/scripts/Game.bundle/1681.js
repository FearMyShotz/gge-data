Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function MaterialBagOpenedDialogProperties(t, i) {
    var n = e.call(this) || this;
    n._rewards = t;
    n._rareness = a.CraftingMaterialBagVO.RARENESS_NAMES[i - 1];
    return n;
  }
  n.__extends(MaterialBagOpenedDialogProperties, e);
  Object.defineProperty(MaterialBagOpenedDialogProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MaterialBagOpenedDialogProperties.prototype, "rareness", {
    get: function () {
      return this._rareness;
    },
    enumerable: true,
    configurable: true
  });
  return MaterialBagOpenedDialogProperties;
}(require("./2.js").BasicProperties);
exports.MaterialBagOpenedDialogProperties = o;
var a = require("./1055.js");