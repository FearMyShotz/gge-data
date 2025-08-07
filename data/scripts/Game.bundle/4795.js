Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./725.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function KIKCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KIKCommand, e);
  Object.defineProperty(KIKCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_KIKERIKI;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KIKCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (c.CastleModel.userData.castleList && i.DOW == s.TimeConst.MONDAY) {
          c.CastleModel.userData.castleList.resetOpenGateCounter();
          this.controller.dispatchEvent(new l.OpenGateEvent(l.OpenGateEvent.CHANGE_OPEN_GATE_COUNTER));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return KIKCommand;
}(u.CastleCommand);
exports.KIKCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");