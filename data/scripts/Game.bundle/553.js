Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function StrongholdUnitInventory() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StrongholdUnitInventory, e);
  StrongholdUnitInventory.prototype.onInventoryItemChanged = function (e) {
    this._inventoryItems.get(e).isStronghold = true;
  };
  return StrongholdUnitInventory;
}(require("./156.js").UnitInventoryDictionary);
exports.StrongholdUnitInventory = a;
o.classImplementsInterfaces(a, "IMergedUnitInventory", "IUnitInventory");