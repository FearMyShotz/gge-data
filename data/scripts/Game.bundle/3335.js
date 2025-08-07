Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./44.js");
var l = require("./4.js");
var c = function (e) {
  function CastleFacebookLoginRegistrationCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleFacebookLoginRegistrationCommand, e);
  CastleFacebookLoginRegistrationCommand.prototype.execute = function (e = null) {
    l.CastleModel.localData.saveLoginData("", "");
    l.CastleModel.localData.saveFacebookID(d.CastleFacebookModule.userID);
    if (!!d.CastleFacebookModule.accessToken && d.CastleFacebookModule.accessToken != "" && !r.SpecialServerHelper.isOnSpecialServer && !o.EnvGlobalsHandler.globals.isSpecialServerConnectStarted && !l.CastleModel.userData.isConnectedToFacebook) {
      o.CommandController.instance.executeCommand(u.IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  };
  return CastleFacebookLoginRegistrationCommand;
}(a.SimpleCommand);
exports.CastleFacebookLoginRegistrationCommand = c;
var u = require("./29.js");
var d = require("./193.js");
s.classImplementsInterfaces(c, "ISimpleCommand");