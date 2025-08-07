Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./7.js");
var d = require("./728.js");
var p = require("./4.js");
var h = require("./43.js");
var g = require("./10.js");
var C = function (e) {
  function FCSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FCSCommand, e);
  Object.defineProperty(FCSCommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_MAP_FACEBOOK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FCSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case l.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        p.CastleModel.userData.parse_FCS(i);
        this.controller.dispatchEvent(new d.CastleFacebookEvent(d.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED));
        break;
      case l.ERROR.FACEBOOK_MAPPING_NOT_ESTABLISHED:
        this.facebookAccMappedToDifferentPlayer();
        break;
      case l.ERROR.FACEBOOK_WRONG_USER_ID:
        this.resetFacebookPlayerData();
        this.couldNotMapPlayer();
        break;
      default:
        p.CastleModel.userData.resetFacebookData();
        this.controller.dispatchEvent(new d.CastleFacebookEvent(d.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  FCSCommand.prototype.resetFacebookPlayerData = function (e = null) {
    p.CastleModel.userData.resetFacebookData();
    this.controller.dispatchEvent(new d.CastleFacebookEvent(d.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR));
  };
  FCSCommand.prototype.facebookAccMappedToDifferentPlayer = function () {
    m.CastleDialogHandler.getInstance().registerDialogsWithType(O.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(c.Localize.text("dialog_fbAlreadyUsed_header"), c.Localize.text("dialog_fbAlreadyUsed_desc"), this.bindFunction(this.onSwitchToFacebookAccount), this.bindFunction(this.resetFacebookPlayerData)), true, h.CastleDialogConsts.PRIORITY_TOP, 0, h.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  FCSCommand.prototype.onSwitchToFacebookAccount = function (e = null) {
    s.CommandController.instance.executeCommand(_.IngameClientCommands.SWITCH_TO_CACHED_FACEBOOK_ACCOUNT);
  };
  FCSCommand.prototype.couldNotMapPlayer = function () {
    m.CastleDialogHandler.getInstance().registerDialogsWithType(f.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("dialog_fbAlreadyUsed_header"), c.Localize.text("dialog_facebookPlayerAccountAlreadyLinked_desc")), false, h.CastleDialogConsts.PRIORITY_LOW, 0, h.CastleDialogConsts.DIALOG_TYPE_MODAL);
  };
  return FCSCommand;
}(g.CastleCommand);
exports.FCSCommand = C;
var _ = require("./29.js");
var m = require("./9.js");
var f = require("./38.js");
var O = require("./151.js");
r.classImplementsInterfaces(C, "IExecCommand");