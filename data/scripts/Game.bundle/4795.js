Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function PIOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PIOCommand, e);
  Object.defineProperty(PIOCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_PLACE_CUSTOM_INVENTORY_OBJECT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PIOCommand.prototype.executeCommand = function (e, t) {
    var i;
    u.Iso.renderer.mouse.cancelDraggedTarget();
    switch (e) {
      case a.ERROR.ALL_OK:
        var n = (i = JSON.parse(t[1])).NO[1];
        r.CastleModel.areaData.activeArea.updater.parseNewIsoObject(i);
        r.CastleModel.decoStorage.parseSIN(i.sin);
        if (u.Iso.data.areaData.isoData) {
          u.Iso.data.updater.onGainedBuildingPoints(n, -1);
        }
        break;
      case a.ERROR.INVALID_POSITION:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return PIOCommand;
}(l.CastleCommand);
exports.PIOCommand = c;
var u = require("./33.js");
o.classImplementsInterfaces(c, "IExecCommand");