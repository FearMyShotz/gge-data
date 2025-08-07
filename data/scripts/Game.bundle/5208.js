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
  function SKRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SKRCommand, e);
  Object.defineProperty(SKRCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SKILLS_RESET;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SKRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.legendSkillData.resetSkills();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SKRCommand;
}(l.CastleCommand);
exports.SKRCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");