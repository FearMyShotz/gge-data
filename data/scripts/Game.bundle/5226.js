Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1043.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function GMPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GMPCommand, e);
  Object.defineProperty(GMPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_MONUMENT_PROGRESS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GMPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.monumentsData.updateLandmark(i);
        this.controller.dispatchEvent(new r.CastleMonumentProgressEvent(r.CastleMonumentProgressEvent.NEW_PROGRESS, [i.OID, i.CP]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GMPCommand;
}(c.CastleCommand);
exports.GMPCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");