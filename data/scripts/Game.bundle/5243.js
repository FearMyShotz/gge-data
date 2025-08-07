Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./87.js");
var l = require("./92.js");
var c = function (e) {
  function IsoCommandObjectUpdateInfoModel(t, i, n) {
    var o = this;
    o._objectId = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._objectId = i;
    o._serverObject = n;
    return o;
  }
  n.__extends(IsoCommandObjectUpdateInfoModel, e);
  IsoCommandObjectUpdateInfoModel.prototype.execute = function () {
    var e = false;
    for (var t = 0, i = Array.from(this.isoData.objects.groups.values()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.containsObjectById(this.objectId)) {
        if (n.groupType == d.IsoObjectGroupEnum.INNER_BUILDINGS) {
          this.isoData.grid.removeBuildingById(this.objectId);
        }
        var a = n.updateObjectByServer(this.objectId, this.serverObject);
        this.updateOnGrid(a, n.groupType);
        e = true;
        u.CastleComponent.controller.dispatchEvent(new l.IsoEvent(l.IsoEvent.ON_OBJECT_UPDATED, [a]));
        u.CastleComponent.controller.dispatchEvent(new l.IsoEvent(l.IsoEvent.ON_OBJECT_CHANGED, [a]));
        break;
      }
    }
    if (!e) {
      o.debug("Warning: Object with ID '" + this.objectId + "' was not found in any list.");
    }
  };
  IsoCommandObjectUpdateInfoModel.prototype.updateOnGrid = function (e, t) {
    switch (t) {
      case d.IsoObjectGroupEnum.GROUNDS:
        this.isoData.grid.updateCompleteMap();
        break;
      case d.IsoObjectGroupEnum.DEFENCE:
        this.isoData.grid.updateDefence();
        break;
      case d.IsoObjectGroupEnum.INNER_BUILDINGS:
        this.handleInnerBuildingUpdateOnGrid(e);
        break;
      case d.IsoObjectGroupEnum.FIXED_POSITIONS:
      case d.IsoObjectGroupEnum.SURROUNDINGS:
      case d.IsoObjectGroupEnum.EVENT_BUILDINGS:
        this.isoData.grid.updateOuterMap();
    }
  };
  IsoCommandObjectUpdateInfoModel.prototype.handleInnerBuildingUpdateOnGrid = function (e) {
    if (s.instanceOfClass(e, "ABasicBuildingVO")) {
      switch (e.buildingState) {
        case r.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
        case r.IsoBuildingStateEnum.UPGRADE_COMPLETED:
          break;
        default:
          this.isoData.grid.addBuilding(e);
      }
    }
  };
  Object.defineProperty(IsoCommandObjectUpdateInfoModel.prototype, "serverObject", {
    get: function () {
      return this._serverObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandObjectUpdateInfoModel.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandObjectUpdateInfoModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectUpdateInfoModel = c;
var u = require("./14.js");
var d = require("./143.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");