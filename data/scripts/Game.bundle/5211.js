Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1742.js");
var l = require("./10.js");
var c = function (e) {
  function SUBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SUBCommand, e);
  Object.defineProperty(SUBCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SHOW_ME_UPGRADABLE_BUILDINGS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SUBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleShowUpgradableBuildingsEvent(r.CastleShowUpgradableBuildingsEvent.UPGRADABLE_BUILDINGS_DATA_RECEIVED, i));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SUBCommand;
}(l.CastleCommand);
exports.SUBCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");