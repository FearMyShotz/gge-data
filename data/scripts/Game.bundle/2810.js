Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupExpansion() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupExpansion, e);
  IsoViewObjectGroupExpansion.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.expansions.list, this.list);
  };
  return IsoViewObjectGroupExpansion;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupExpansion = o;