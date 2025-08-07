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
  function ACRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACRCommand, e);
  Object.defineProperty(ACRCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_TOPIC_CHANGE_RANKS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ACRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i.gtr) {
          r.CastleModel.castleForumData.parseGTR(i.gtr);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ACRCommand;
}(l.CastleCommand);
exports.ACRCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");