Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoViewObjectGroupFixedPosition() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupFixedPosition, e);
  IsoViewObjectGroupFixedPosition.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.fixedPositions.list, this.list);
  };
  IsoViewObjectGroupFixedPosition.prototype.addObject = function (e) {
    var t = o.instanceOfClass(e, "RubyWishingWellFixedPositionBuildingVE");
    if (t && this.isoData.areaData.isMyHomeCastle || !t) {
      this.addObjectToLayerAndList(e, this.list);
    }
  };
  return IsoViewObjectGroupFixedPosition;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupFixedPosition = a;