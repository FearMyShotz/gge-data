Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1939.js");
var l = require("./15.js");
var c = require("./10.js");
var u = function (e) {
  function GILCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GILCommand, e);
  Object.defineProperty(GILCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_INSTANCE_LINK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GILCommand.prototype.executeCommand = function (e, t) {
    var i;
    if (t && t.length > 0) {
      i = JSON.parse(t[1]);
    }
    switch (e) {
      case a.ERROR.ALL_OK:
        l.CastleBasicController.getInstance().dispatchEvent(new r.LinkReceivedEvent(i.L));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GILCommand;
}(c.CastleCommand);
exports.GILCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");