Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandObjectUpdateByIdView(t, i) {
    var n = this;
    n._objectId = -1;
    n._wasFastCompleted = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._objectId = t;
    n._wasFastCompleted = i;
    return n;
  }
  n.__extends(IsoCommandObjectUpdateByIdView, e);
  IsoCommandObjectUpdateByIdView.prototype.execute = function () {
    var e = this.isoRenderer.objects.provider.getObjectById(this._objectId);
    if (e) {
      if (this.mouseHandler.draggedTarget == e) {
        this.mouseHandler.cancelDraggedTarget();
      }
      var t = false;
      if (this.mouseHandler.selectedTarget == e) {
        this.mouseHandler.deselectTarget();
        t = true;
      }
      if (this.mouseHandler.focusedTarget == e) {
        this.mouseHandler.unFocusTarget();
      }
      if (r.instanceOfClass(e, "CastlewallDefenceVE")) {
        this.viewObjects.defenceObjects.updateWalls();
        this.viewObjects.defenceObjects.updateTowers();
      } else if (r.instanceOfClass(e, "BasicMoatVE")) {
        this.viewObjects.defenceObjects.initMoat();
        (e = this.viewObjects.defenceObjects.moat).updateDisp();
      } else {
        e.updateDisp();
      }
      var i = e;
      var n = false;
      if (i && !this.mouseHandler.isDragging && !this.mouseHandler.selectedTarget && i.interactiveVO.isRingmenuAvailable && (t || this._wasFastCompleted || i.buildingVO.buildingState.isInProgress) && (s.CastleComponent.layoutManager.numVisibleDialogs == 0 && !i.vo.isInBuildingDistrict || r.instanceOfClass(s.CastleComponent.layoutManager.highestShownDialog, "BuildingDistrictDialog") && i.vo.isInBuildingDistrict)) {
        n = true;
      }
      if (n) {
        this.mouseHandler.changeSelectedTarget(i);
      }
    }
  };
  return IsoCommandObjectUpdateByIdView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectUpdateByIdView = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");
var s = require("./14.js");
var r = require("./1.js");