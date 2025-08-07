Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./4.js");
var u = function (e) {
  function CastleConnectToInstanceVOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleConnectToInstanceVOCommand, e);
  CastleConnectToInstanceVOCommand.prototype.onConnectionEstablished = function (e) {
    if (a.BasicModel.localData) {
      if (s.EnvGlobalsHandler.globals.suk == "" && !c.CastleModel.userData.connectToSpecialServer) {
        a.BasicModel.localData.saveInstance(a.BasicModel.instanceProxy.selectedInstanceVO.instanceId, a.BasicModel.instanceProxy.selectedInstanceVO.zoneId);
      }
    }
    a.BasicModel.smartfoxClient.removeEventListener(r.SmartfoxEvent.CONNECT_SUCCESS, this.bindFunction(this.onConnectionEstablished));
  };
  CastleConnectToInstanceVOCommand.NAME = "BasicConnectToInstanceVOCommand";
  return CastleConnectToInstanceVOCommand;
}(o.BasicConnectToInstanceVOCommand);
exports.CastleConnectToInstanceVOCommand = u;
l.classImplementsInterfaces(u, "ISimpleCommand");