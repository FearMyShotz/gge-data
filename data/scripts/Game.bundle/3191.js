Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./183.js");
var l = require("./273.js");
var c = require("./4.js");
var u = function (e) {
  function ShipSurroundingsVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ShipSurroundingsVE, e);
  ShipSurroundingsVE.prototype.addEventListener = function () {
    c.CastleModel.treasureMapData.addEventListener(r.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
    e.prototype.addEventListener.call(this);
  };
  ShipSurroundingsVE.prototype.removeEventListener = function () {
    c.CastleModel.treasureMapData.removeEventListener(r.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onRefreshTreasureMap));
    e.prototype.removeEventListener.call(this);
  };
  ShipSurroundingsVE.prototype.onRefreshTreasureMap = function (e) {
    if (e.treasureMapVO && l.TMapHelper.isSeaQueenMap(e.treasureMapVO.mapID)) {
      var t = "Level" + s.int(c.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.portLevel);
      if (t != this.vo.type) {
        this.vo.type = t;
        this.updateDisp();
      }
    }
  };
  ShipSurroundingsVE.prototype.onMouseClick = function () {
    o.CommandController.instance.executeCommand(d.IngameClientCommands.OPEN_PORT_UPGRADE_DIALOG_COMMAND);
  };
  return ShipSurroundingsVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.ShipSurroundingsVE = u;
var d = require("./29.js");
a.classImplementsInterfaces(u, "ICollectableRendererList", "IIngameUICapable");