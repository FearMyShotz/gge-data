Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./532.js");
var c = require("./10.js");
var u = function (e) {
  function CRSTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CRSTCommand, e);
  Object.defineProperty(CRSTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CRAFTING_START;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CRSTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.craftingData.parseBuildingQueueData(i);
        if (r.CastleModel.areaData && r.CastleModel.areaData.activeArea && r.CastleModel.areaData.activeAreaInfo && !r.CastleModel.craftingData.currentCastleVO.equalsOtherWMO(r.CastleModel.areaData.activeAreaInfo.objectId, r.CastleModel.areaData.activeAreaInfo.kingdomID)) {
          r.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetCastleResourcesVO(r.CastleModel.craftingData.currentCastleVO.objectId, r.CastleModel.craftingData.currentCastleVO.kingdomID));
        }
        break;
      case a.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CRSTCommand;
}(c.CastleCommand);
exports.CRSTCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");