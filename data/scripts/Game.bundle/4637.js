Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = function (e) {
  function CastleVCKCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleVCKCommand, e);
  CastleVCKCommand.prototype.executeCommand = function (e, t) {
    this.env.buildNumberServer = t[1];
    this.env.versionInformation.buildNumberServer = t[1];
    if (e == o.BasicErrorConstants.ALL_OK) {
      this.handleAllOk();
    } else if (e == a.VCKCommand.VERSION_TOO_LOW) {
      this.handleVersionToLow();
      this.logError(e);
    } else if (e == a.VCKCommand.VERSION_TOO_HIGH) {
      this.handleVersionToHigh();
      this.logError(e);
    } else {
      o.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_SERVER_ERROR, new o.ServerErrorVO(e, t, this.cmdId));
      this.logError(e);
    }
    return false;
  };
  CastleVCKCommand.prototype.handleVersionToLow = function () {
    this.handleVersionError();
  };
  CastleVCKCommand.prototype.handleVersionToHigh = function () {
    this.handleVersionError();
  };
  CastleVCKCommand.prototype.handleVersionError = function () {
    if (p.CastleModel.userData.connectToSpecialServer) {
      p.CastleModel.userData.resetConnectToFlags();
    }
    if (this.env.isTest) {
      l.CastleDialogHandler.getInstance().registerDialogs(u.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(s.Localize.text("generic_versioncheck_error"), s.Localize.text("generic_versioncheck_errorcode_1"), this.bindFunction(this.openWorldSelectionDialog)));
    } else {
      l.CastleDialogHandler.getInstance().registerDialogs(u.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(s.Localize.text("generic_versioncheck_error"), s.Localize.text("generic_versioncheck_errorcode_1")));
    }
  };
  CastleVCKCommand.prototype.openWorldSelectionDialog = function (e = null) {
    l.CastleDialogHandler.getInstance().registerDialogs(d.CastleWorldSelectionDialog);
  };
  Object.defineProperty(CastleVCKCommand.prototype, "layoutManager", {
    get: function () {
      return c.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleVCKCommand;
}(a.VCKCommand);
exports.CastleVCKCommand = r;
var l = require("./9.js");
var c = require("./17.js");
var u = require("./38.js");
var d = require("./1115.js");
var p = require("./4.js");