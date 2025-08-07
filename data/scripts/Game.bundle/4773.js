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
  function EGOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EGOCommand, e);
  Object.defineProperty(EGOCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_OBJECT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EGOCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (r.CastleModel.areaData.activeArea) {
          r.CastleModel.areaData.activeArea.updater.parseEGO(i);
        }
        if (i.skl) {
          r.CastleModel.legendSkillData.parse_SKL(i.skl);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return EGOCommand;
}(l.CastleCommand);
exports.EGOCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");