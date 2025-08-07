Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./183.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function TUTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TUTCommand, e);
  Object.defineProperty(TUTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_TREASUREMAP_UNIT_TRANSFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TUTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.treasureMapData.parse_TMP(i.tmp);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    l.CastleModel.treasureMapData.dispatchEvent(new r.CastleTreasureMapEvent(r.CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED, null));
    return true;
  };
  return TUTCommand;
}(c.CastleCommand);
exports.TUTCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");