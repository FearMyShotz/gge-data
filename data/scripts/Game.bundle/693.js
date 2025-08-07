Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./18.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./92.js");
var p = function (e) {
  function IsoCommandObjectAddModel(t, i, n = false) {
    var o = this;
    o._addToGridData = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._vo = i;
    o._addToGridData = n;
    return o;
  }
  n.__extends(IsoCommandObjectAddModel, e);
  IsoCommandObjectAddModel.prototype.execute = function () {
    var e = false;
    var t = this.isoData.objects.getGroupByType(this._vo.objectType.groupType);
    if (t) {
      t.addObject(this._vo);
      this.checkInstantBuildTip();
      this.isoData.objects.completeTempObjectList.push(this._vo);
      this.addToGrid(t.groupType);
      e = true;
      c.CastleBasicController.getInstance().dispatchEvent(new d.IsoEvent(d.IsoEvent.ON_OBJECT_ADDED, [this._vo]));
      c.CastleBasicController.getInstance().dispatchEvent(new d.IsoEvent(d.IsoEvent.ON_OBJECT_CHANGED, [this._vo]));
    }
    if (!e) {
      a.debug("Warning: Object with ID '" + this._vo.objectId + "' was not taken by any class.");
    }
  };
  IsoCommandObjectAddModel.prototype.addToGrid = function (e) {
    if (this._addToGridData) {
      switch (e) {
        case g.IsoObjectGroupEnum.GROUNDS:
          this.isoData.grid.updateCompleteMap();
          break;
        case g.IsoObjectGroupEnum.DEFENCE:
          this.isoData.grid.updateDefence();
          break;
        case g.IsoObjectGroupEnum.INNER_BUILDINGS:
          this.isoData.grid.addBuilding(this._vo);
          break;
        case g.IsoObjectGroupEnum.SURROUNDINGS:
        case g.IsoObjectGroupEnum.FIXED_POSITIONS:
          this.isoData.grid.updateOuterMap();
      }
    }
  };
  IsoCommandObjectAddModel.prototype.checkInstantBuildTip = function () {
    if (!IsoCommandObjectAddModel._instantBuildTipShown && u.CastleModel.userData.userLevel == 5 && r.instanceOfClass(this._vo, "ABasicBuildingVO") && this._vo.getBuildDuration() >= IsoCommandObjectAddModel.INSTANT_BUILD_TIP_VALID_DURATION) {
      o.CommandController.instance.executeCommand(h.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [l.ClientConstCastle.TIP_INSTANTBUILD]);
      IsoCommandObjectAddModel._instantBuildTipShown = true;
    }
  };
  IsoCommandObjectAddModel.__initialize_static_members = function () {
    IsoCommandObjectAddModel.INSTANT_BUILD_TIP_VALID_DURATION = 600;
  };
  IsoCommandObjectAddModel._instantBuildTipShown = false;
  return IsoCommandObjectAddModel;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandObjectAddModel = p;
var h = require("./29.js");
var g = require("./143.js");
s.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();