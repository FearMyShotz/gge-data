Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CraftingMaterialData(t) {
    var i = e.call(this) || this;
    i.parseFromXML(t);
    return i;
  }
  n.__extends(CraftingMaterialData, e);
  CraftingMaterialData.prototype.parseFromXML = function (e) {
    this._craftingMaterialBags = new Map();
    for (var t = 0, i = e.rewardBags; t < i.length; t++) {
      var n = i[t];
      if (n) {
        var o = new s.CraftingMaterialBagVO(n);
        this._craftingMaterialBags.set(o.bagID, o);
      }
    }
  };
  Object.defineProperty(CraftingMaterialData.prototype, "craftingMaterialBags", {
    get: function () {
      return this._craftingMaterialBags;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingMaterialData;
}(require("./54.js").CastleBasicData);
exports.CraftingMaterialData = a;
var s = require("./1056.js");
o.classImplementsInterfaces(a, "IUpdatable");