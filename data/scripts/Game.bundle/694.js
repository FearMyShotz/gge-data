Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./87.js");
var l = function (e) {
  function IsoCommandObjectAddView(t) {
    var i = e.call(this) || this;
    i._vo = t;
    return i;
  }
  n.__extends(IsoCommandObjectAddView, e);
  IsoCommandObjectAddView.prototype.execute = function () {
    if (this.isoRenderer.isoData && this.isoRenderer.isReady) {
      var e = c.IsoHelper.view.createIsoObjectVEFromVO(this._vo);
      if (e) {
        var t = false;
        for (var i = 0, n = Array.from(this.viewObjects.groups.values()); i < n.length; i++) {
          var a = n[i];
          if (a !== undefined && a.isObjectForThisList(e)) {
            a.addObject(e);
            this.viewObjects.invalidateCompleteObjectsList();
            if (s.instanceOfClass(e, "BasicMoatVE")) {
              e = this.viewObjects.defenceObjects.moat;
            }
            if (s.instanceOfClass(e, "CastlewallDefenceVE")) {
              e.destroy();
            } else {
              e.updateDisp();
            }
            t = true;
            break;
          }
        }
        if (t) {
          var l = e;
          if (!!s.instanceOfClass(l, "ABasicBuildingVE") && (l.buildingVO.buildingState == r.IsoBuildingStateEnum.BUILD_IN_PROGRESS || l.buildingVO.buildingState == r.IsoBuildingStateEnum.BUILD_STOPPED) && !!l.interactiveVO.isRingmenuAvailable && !this.mouseHandler.isDragging && !this.mouseHandler.selectedTarget) {
            this.mouseHandler.changeSelectedTarget(l);
          }
        } else {
          o.debug("Warning: Object with ID '" + this._vo.objectId + "' was not taken by any class.");
        }
      }
    }
  };
  return IsoCommandObjectAddView;
}(require("./311.js").AIsoCommandView);
exports.IsoCommandObjectAddView = l;
var c = require("./46.js");
a.classImplementsInterfaces(l, "ICollectableRendererList");