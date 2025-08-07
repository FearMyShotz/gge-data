Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./122.js");
var a = function (e) {
  function IsoViewObjectGroupInnerBuilding() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupInnerBuilding, e);
  IsoViewObjectGroupInnerBuilding.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.innerBuildings.list, this.list);
  };
  IsoViewObjectGroupInnerBuilding.prototype.addObject = function (e) {
    this.addObjectToLayerAndList(e, this.list);
  };
  IsoViewObjectGroupInnerBuilding.prototype.setCollisionFloorVisibility = function (e) {
    var t = this.isoRenderer.strategies.currentStrategy.isActive(o.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW);
    var i = this.isoRenderer.mouse.draggedTarget;
    if (this.list != null) {
      for (var n = 0, a = this.list; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined) {
          if (s && (e && t && s == i || !e || !t)) {
            s.setCollisionFloorVisibility(e);
          }
        }
      }
    }
  };
  return IsoViewObjectGroupInnerBuilding;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupInnerBuilding = a;