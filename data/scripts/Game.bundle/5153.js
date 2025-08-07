Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./1164.js");
var r = require("./7.js");
var l = require("./37.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function GLTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GLTCommand, e);
  Object.defineProperty(GLTCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_TEMPORARY_SERVER_LOGIN_TOKEN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GLTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.userData.specialServerLoginToken = i.TLT;
        this.env.specialServer = this.buildInstanceVO(i);
        this.controller.dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.SPECIAL_SEVER_INFO_ARRIVED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  GLTCommand.prototype.buildInstanceVO = function (e) {
    var t = new s.NetworkInstance();
    t.ip = e.TSIP;
    t.port = e.TSP;
    t.zone = e.TSZ;
    t.zoneId = e.ZID;
    t.instanceId = e.IID;
    if (c.CastleModel.userData.connectToABGServer) {
      t.instanceLocaId = "event_title_113";
    }
    if (c.CastleModel.userData.connectToTempServer) {
      t.instanceLocaId = "event_title_106";
    }
    return t;
  };
  return GLTCommand;
}(u.CastleCommand);
exports.GLTCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");