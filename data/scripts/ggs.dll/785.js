Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./180.js");
var s = require("./23.js");
var r = require("./12.js");
var o = require("./6.js");
var l = require("./5.js");
var u = require("./8.js");
var c = require("./4.js");
var _ = require("./117.js");
var d = require("./121.js");
var m = require("./2.js");
var h = require("./161.js");
var p = m.getLogger("BasicConnectToInstanceVOCommand");
var g = function (e) {
  function BasicConnectToInstanceVOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicConnectToInstanceVOCommand, e);
  BasicConnectToInstanceVOCommand.prototype.execute = function (e) {
    if (!e) {
      p.error("trying to connect to an instance without passing an instance ??");
      s.ExternalLog.logger.log(new a.InstanceErrorLOFactory(a.InstanceErrorLOFactory.CONNECT_TO_INSTANCE_NULL));
      return;
    }
    p.debug("Going to connect to instance: " + e.instanceId);
    if (h.shouldReloadBranch(e)) {
      p.warn("Reloading game because new instance is on a different branch");
      r.CommandController.instance.executeCommand(u.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, e);
    } else {
      if (c.BasicModel.smartfoxClient) {
        c.BasicModel.smartfoxClient.removeEventListener(_.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
        c.BasicModel.smartfoxClient.addEventListener(_.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
      } else {
        c.BasicModel.smartfoxClient = new d.BasicSmartfoxClient();
      }
      var t = window.ggs.worldAssignment;
      if (e.instanceId != t.facade.selectedNetworkInstance.instanceId) {
        t.selectInstance(e);
      }
      r.CommandController.instance.executeCommand(u.BasicController.COMMAND_CHECK_MAINTENANCE, u.BasicController.COMMAND_CONNECT_CLIENT);
    }
  };
  BasicConnectToInstanceVOCommand.prototype.onConnectionEstablished = function (e) {
    if (c.BasicModel.localData && l.EnvGlobalsHandler.globals.suk == "") {
      c.BasicModel.localData.saveInstance(c.BasicModel.instanceProxy.selectedInstanceVO.instanceId, c.BasicModel.instanceProxy.selectedInstanceVO.zoneId);
    }
    c.BasicModel.smartfoxClient.removeEventListener(_.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
  };
  BasicConnectToInstanceVOCommand.NAME = "BasicConnectToInstanceVOCommand";
  return BasicConnectToInstanceVOCommand;
}(o.SimpleCommand);
exports.BasicConnectToInstanceVOCommand = g;