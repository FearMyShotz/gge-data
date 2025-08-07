Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandObjectsInitView(t) {
    var i = e.call(this) || this;
    i._objectsType = t;
    return i;
  }
  n.__extends(IsoCommandObjectsInitView, e);
  IsoCommandObjectsInitView.prototype.execute = function () {
    var e = this.isoRenderer.objects.getGroupByType(this._objectsType);
    if (this.isoRenderer.isReady && e) {
      if (this.objectExistsAndHasGroupType(this.mouseHandler.draggedTarget)) {
        this.mouseHandler.cancelDraggedTarget();
      }
      if (this.objectExistsAndHasGroupType(this.mouseHandler.selectedTarget)) {
        this.mouseHandler.deselectTarget();
      }
      if (this.objectExistsAndHasGroupType(this.mouseHandler.focusedTarget)) {
        this.mouseHandler.unFocusTarget();
      }
      if (this.objectExistsAndHasGroupType(this.mouseHandler.hoveredTarget)) {
        this.mouseHandler.unFocusTarget();
      }
      e.initObjects();
      this.isoRenderer.objects.invalidateCompleteObjectsList();
      e.render();
    }
  };
  IsoCommandObjectsInitView.prototype.objectExistsAndHasGroupType = function (e) {
    return !!e && e.objectType.groupType == this._objectsType;
  };
  return IsoCommandObjectsInitView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectsInitView = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");