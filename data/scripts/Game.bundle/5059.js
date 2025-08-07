Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./29.js");
var c = require("./10.js");
var u = function (e) {
  function GTWARACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GTWARACommand, e);
  Object.defineProperty(GTWARACommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GO_TO_WORLD_MAP_AFTER_REMOVE_AREA;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GTWARACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        o.CommandController.instance.executeCommand(l.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GTWARACommand;
}(c.CastleCommand);
exports.GTWARACommand = u;
a.classImplementsInterfaces(u, "IExecCommand");