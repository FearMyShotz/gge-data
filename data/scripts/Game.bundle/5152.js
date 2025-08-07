Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = require("./4.js");
var c = function (e) {
  function GCTBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GCTBCommand, e);
  Object.defineProperty(GCTBCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_CASTLE_TRASPORTATION_BUILDINGS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GCTBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.prebuiltCastleData.parseCastleTransportationBuildings(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GCTBCommand;
}(r.CastleCommand);
exports.GCTBCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");