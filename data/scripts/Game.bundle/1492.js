Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandObjectRemoveView(t) {
    var i = e.call(this) || this;
    i._vo = t;
    return i;
  }
  n.__extends(IsoCommandObjectRemoveView, e);
  IsoCommandObjectRemoveView.prototype.execute = function () {
    var e = this.isoRenderer.objects.provider.getObjectByVO(this._vo);
    if (e) {
      if (this.mouseHandler.draggedTarget == e) {
        this.mouseHandler.cancelDraggedTarget();
      }
      if (this.mouseHandler.selectedTarget == e) {
        this.mouseHandler.deselectTarget();
      }
      if (this.mouseHandler.focusedTarget == e) {
        this.mouseHandler.unFocusTarget();
      }
      if (this.mouseHandler.hoveredTarget == e) {
        this.mouseHandler.unHoverTarget();
      }
      for (var t = 0, i = Array.from(this.isoRenderer.objects.groups.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.containsObject(e)) {
          n.removeObjectByVE(e);
          this.isoRenderer.objects.invalidateCompleteObjectsList();
          break;
        }
      }
    }
  };
  return IsoCommandObjectRemoveView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectRemoveView = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");