Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupGround() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupGround, e);
  IsoViewObjectGroupGround.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.groundObjects.list, this.list);
  };
  return IsoViewObjectGroupGround;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupGround = o;