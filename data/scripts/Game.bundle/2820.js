Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupTreasureChest() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupTreasureChest, e);
  IsoViewObjectGroupTreasureChest.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.treasureChests.list, this.list);
  };
  return IsoViewObjectGroupTreasureChest;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupTreasureChest = o;