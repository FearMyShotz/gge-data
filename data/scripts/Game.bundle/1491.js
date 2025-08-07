Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./92.js");
var l = function (e) {
  function IsoCommandObjectRemoveModel(t, i) {
    var n = e.call(this, t) || this;
    n._vo = i;
    return n;
  }
  n.__extends(IsoCommandObjectRemoveModel, e);
  IsoCommandObjectRemoveModel.prototype.execute = function () {
    var e = a.int(this._vo.objectId);
    var t = this.isoData.objects.getGroupByType(this._vo.objectType.groupType);
    if (t && t.containsObject(this._vo)) {
      t.removeObject(this._vo);
      this.isoData.objects.completeTempObjectList.splice(this.isoData.objects.completeTempObjectList.indexOf(this._vo), 1);
      this.removeFromGrid(t.groupType);
      s.CastleModel.userData.removeGlobalConstructionItemEffect(e);
      s.CastleModel.userData.removeGlobalConstructionItemBonus(e);
      c.CastleComponent.controller.dispatchEvent(new r.IsoEvent(r.IsoEvent.ON_OBJECT_REMOVED, [e]));
      c.CastleComponent.controller.dispatchEvent(new r.IsoEvent(r.IsoEvent.ON_OBJECT_CHANGED, [null]));
    }
  };
  IsoCommandObjectRemoveModel.prototype.removeFromGrid = function (e) {
    switch (e) {
      case u.IsoObjectGroupEnum.INNER_BUILDINGS:
        this.isoData.grid.removeBuildingById(this._vo.objectId);
    }
  };
  return IsoCommandObjectRemoveModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectRemoveModel = l;
var c = require("./14.js");
var u = require("./143.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");