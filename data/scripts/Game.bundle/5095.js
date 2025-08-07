Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function PGLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PGLCommand, e);
  Object.defineProperty(PGLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_PLAYERGIFT_LIST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PGLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        if (t.length > 0) {
          var i = t[1];
          var n = JSON.parse(i.toString());
          r.CastleModel.playerGiftData.parse_PGL(n.G, n.RA);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return PGLCommand;
}(l.CastleCommand);
exports.PGLCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");