Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./243.js");
var c = require("./4.js");
var u = require("./1755.js");
var d = require("./700.js");
var p = require("./10.js");
var h = function (e) {
  function IKRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IKRCommand, e);
  Object.defineProperty(IKRCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_ISLAND_KINGDOM_RESET;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IKRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        c.CastleModel.kingdomData.resetEilandData();
        c.CastleModel.userData.aquaPoints = 0;
        if (c.CastleModel.allianceData.myAllianceVO) {
          c.CastleModel.allianceData.myAllianceVO.aquaPoints = 0;
        }
        c.CastleModel.armyData.removeAllMovementsByKingdomID(s.WorldIsland.KINGDOM_ID);
        c.CastleModel.smartfoxClient.sendCommandVO(new u.C2SKingdomPayInfoVO());
        c.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetBookmarkList());
        this.controller.dispatchEvent(new l.CastleEilandEvent(l.CastleEilandEvent.EILAND_RESET));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return IKRCommand;
}(p.CastleCommand);
exports.IKRCommand = h;
o.classImplementsInterfaces(h, "IExecCommand");