Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./55.js");
var c = require("./87.js");
var u = function (e) {
  function IsoDataObjectGroupInnerBuilding() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupInnerBuilding, e);
  IsoDataObjectGroupInnerBuilding.prototype.checkProductionTip = function (e) {
    if (this.isoData.areaData.isMyHomeCastle && l.ClientConstUtils.isObjectClassOf(e, [g.FarmBuildingVO, C.QuarryBuildingVO, _.WoodcutterBuildingVO])) {
      var t = this.isoData.areaData.storage;
      if (t) {
        var i;
        if (a.instanceOfClass(e, "FarmBuildingVO")) {
          i = p.CollectableEnum.FOOD;
        } else if (a.instanceOfClass(e, "QuarryBuildingVO")) {
          i = p.CollectableEnum.STONE;
        } else if (a.instanceOfClass(e, "WoodcutterBuildingVO")) {
          i = p.CollectableEnum.WOOD;
        }
        var n = s.int(t.getItem(i).fieldEfficiency);
        if (e.level == 1) {
          var c = s.int(this.isoData.objects.provider.getObjectAmountByType(e.objectType));
          if (c == n + 1 || c == n + 2) {
            o.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_TIP_DIALOG_COMMAND, [r.ClientConstCastle.TIP_EFFICIENCY]);
          }
        }
      }
    }
  };
  IsoDataObjectGroupInnerBuilding.prototype.addObject = function (t) {
    e.prototype.addObject.call(this, t);
    this.checkProductionTip(t);
  };
  IsoDataObjectGroupInnerBuilding.prototype.updateObjectByServer = function (e, t) {
    if (this.list != null) {
      for (var i = 0, n = this.list; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.objectId == e) {
          h.IsoHelper.data.updateIsoObjectByServer(o, t);
          var a = o;
          switch (a.buildingState) {
            case c.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
            case c.IsoBuildingStateEnum.UPGRADE_COMPLETED:
              this.isoData.updater.removeObjectByObjectId(a.objectId);
          }
          return o;
        }
      }
    }
    return null;
  };
  IsoDataObjectGroupInnerBuilding.prototype.parseGCA = function (e) {
    var t = e.BD;
    if (t) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = h.IsoHelper.data.createIsoObjectVOByServer(o, this.isoData);
          if (a) {
            this.list.push(a);
          }
        }
      }
    }
  };
  return IsoDataObjectGroupInnerBuilding;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupInnerBuilding = u;
var d = require("./29.js");
var p = require("./12.js");
var h = require("./46.js");
var g = require("./635.js");
var C = require("./638.js");
var _ = require("./534.js");