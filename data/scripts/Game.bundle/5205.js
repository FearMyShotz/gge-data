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
  function SKPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SKPCommand, e);
  Object.defineProperty(SKPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ADD_SKILLS_POINT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SKPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.legendSkillData.parse_SKP(i);
        break;
      default:
        r.CastleModel.legendSkillData.stopWaitingForServer();
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SKPCommand;
}(l.CastleCommand);
exports.SKPCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");