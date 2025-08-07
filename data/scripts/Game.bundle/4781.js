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
  function GABCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GABCommand, e);
  Object.defineProperty(GABCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_AREA_BOOSTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GABCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.areaData.activeArea.updater.parseGAB(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GABCommand;
}(l.CastleCommand);
exports.GABCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");