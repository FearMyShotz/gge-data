Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./37.js");
var c = require("./15.js");
var u = require("./4.js");
var d = function (e) {
  function GotoMainCastleUniqueBuildingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GotoMainCastleUniqueBuildingCommand, e);
  GotoMainCastleUniqueBuildingCommand.prototype.execute = function (e = null) {
    this.buildingType = e[0];
    var t = u.CastleModel.userData.castleList.getMainCastleByKingdomID(r.WorldClassic.KINGDOM_ID);
    if (this.layoutManager.isInMyCastle && u.CastleModel.areaData.activeAreaInfo.equalsOtherWMO(t.objectId, t.kingdomID)) {
      this.showBuilding();
    } else {
      o.CommandController.instance.executeCommand(g.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, t);
      GotoMainCastleUniqueBuildingCommand.controller.addEventListener(l.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.oJAAArrived));
    }
  };
  GotoMainCastleUniqueBuildingCommand.prototype.oJAAArrived = function (e) {
    GotoMainCastleUniqueBuildingCommand.controller.removeEventListener(l.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.oJAAArrived));
    this.showBuilding();
  };
  GotoMainCastleUniqueBuildingCommand.prototype.showBuilding = function () {
    var e = f.castAs(p.Iso.renderer.objects.provider.getObjectByType(this.buildingType), "ABasicBuildingVE");
    if (e) {
      p.Iso.renderer.camera.scrollToGridPos(e.vo.pos);
      p.Iso.renderer.mouse.changeSelectedTarget(e);
    } else {
      p.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var t = this.layoutManager.getPanel(m.CastleDecoShopPanel);
      var i = u.CastleModel.wodData.voSubList(C.CastleWodData.TYPE_BUILDING);
      if (i != null) {
        for (var n = 0, o = Array.from(i.values()); n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && a instanceof h.ABasicBuildingVO && a instanceof this.buildingType.dataClass && a.level == 1) {
            t.centerAndHighlightBuildingInShop(a);
            break;
          }
        }
      }
    }
  };
  Object.defineProperty(GotoMainCastleUniqueBuildingCommand.prototype, "layoutManager", {
    get: function () {
      return _.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GotoMainCastleUniqueBuildingCommand, "controller", {
    get: function () {
      return c.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return GotoMainCastleUniqueBuildingCommand;
}(a.SimpleCommand);
exports.GotoMainCastleUniqueBuildingCommand = d;
s.classImplementsInterfaces(d, "ISimpleCommand");
var p = require("./34.js");
var h = require("./483.js");
var g = require("./29.js");
var C = require("./56.js");
var _ = require("./17.js");
var m = require("./260.js");
var f = require("./1.js");