Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function ASMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ASMCommand, e);
  Object.defineProperty(ASMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.C2S_ALLIANCE_SET_SEARCH_MEMBER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ASMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        JSON.parse(t[1]);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ASMCommand;
}(r.CastleCommand);
exports.ASMCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");