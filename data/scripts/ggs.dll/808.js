Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./4.js");
var o = require("./25.js");
var l = require("./40.js");
var u = require("./449.js");
var c = require("./12.js");
var _ = require("./6.js");
var d = require("./18.js");
var m = function (e) {
  function BasicPrepareReconnectCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicPrepareReconnectCommand, e);
  BasicPrepareReconnectCommand.prototype.execute = function (e) {
    var t = this;
    if (e === undefined) {
      e = null;
    }
    if (this.layoutManager.currentState != o.BasicLayoutManager.STATE_LOGIN && this.layoutManager.currentState != o.BasicLayoutManager.STATE_CONNECT) {
      c.CommandController.instance.executeCommand(s.BasicController.COMMAND_DESTROY_GAME);
      this.layoutManager.state = o.BasicLayoutManager.STATE_CONNECT;
      this.layoutManager.showDialog(l.CommonDialogNames.ReconnectDialog_NAME, new u.BasicReconnectDialogProperties(d.Localize.text("generic_alert_information"), d.Localize.text("generic_alert_connection_lost_copy"), function () {
        return t.onReconnect();
      }, d.Localize.text("generic_btn_reconnect")));
    }
  };
  BasicPrepareReconnectCommand.prototype.onReconnect = function () {
    if (a.EnvGlobalsHandler.globals.loginIsKeyBased) {
      r.BasicModel.socialData.reloadIFrame();
    } else {
      this.layoutManager.onStartProgressbar();
      c.CommandController.instance.executeCommand(s.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, r.BasicModel.instanceProxy.selectedInstanceVO);
    }
  };
  Object.defineProperty(BasicPrepareReconnectCommand.prototype, "layoutManager", {
    get: function () {
      return o.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return BasicPrepareReconnectCommand;
}(_.SimpleCommand);
exports.BasicPrepareReconnectCommand = m;