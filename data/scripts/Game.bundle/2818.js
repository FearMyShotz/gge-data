Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupSurrounding() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupSurrounding, e);
  IsoViewObjectGroupSurrounding.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.surroundings.list, this.list);
  };
  return IsoViewObjectGroupSurrounding;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupSurrounding = o;