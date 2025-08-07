Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./1885.js");
var r = require("./5.js");
var l = function (e) {
  function CastleConnectToTemporaryServerCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleConnectToTemporaryServerCommand, e);
  CastleConnectToTemporaryServerCommand.prototype.setConnectFlag = function () {
    a.CastleModel.userData.connectToTempServer = true;
  };
  Object.defineProperty(CastleConnectToTemporaryServerCommand.prototype, "externalServerID", {
    get: function () {
      return r.GlobalServerConst.TEMP_SERVER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleConnectToSpecialServerCommand.prototype, "externalServerID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConnectToTemporaryServerCommand.prototype, "blockerTextID", {
    get: function () {
      return "dialog_clientVersion_switch_confirmDialog_tempServer_mandatory_HTML5_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleConnectToSpecialServerCommand.prototype, "blockerTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleConnectToTemporaryServerCommand;
}(s.CastleConnectToSpecialServerCommand);
exports.CastleConnectToTemporaryServerCommand = l;
o.classImplementsInterfaces(l, "ISimpleCommand");