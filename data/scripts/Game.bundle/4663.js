Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./44.js");
var l = require("./1113.js");
var c = require("./10.js");
var u = require("./471.js");
var d = require("./2.js");
var p = require("./1810.js");
var h = require("./4.js");
var g = require("./1112.js");
var C = function (e) {
  function SLMSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SLMSCommand, e);
  Object.defineProperty(SLMSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SOCIAL_LOGIN_MIGRATION_STATUS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SLMSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if ((!!r.SpecialServerHelper.isOnKeyLoginToNormalLoginServer || l.UserSocialLoginMigrationHelper.getNameByInstanceID(d.EnvGlobalsHandler.globals.networkId) != " ") && i.hasPassword !== undefined) {
          if (Boolean(i.hasPassword)) {
            h.CastleModel.userData.toShowDialogsAfterJAA.push(g.CastleChangePasswordForSocialMigrationConfirmedDialog);
          } else {
            if (u.CastleTutorialSpotlight.instance.isVisible) {
              u.CastleTutorialSpotlight.instance.clear();
            }
            h.CastleModel.userData.toShowDialogsAfterJAA.push(p.CastleChangePasswordForSocialMigrationDialog);
          }
        }
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SLMSCommand;
}(c.CastleCommand);
exports.SLMSCommand = C;
o.classImplementsInterfaces(C, "IExecCommand");