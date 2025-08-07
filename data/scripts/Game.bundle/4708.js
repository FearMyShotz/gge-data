Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./604.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function AATCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AATCommand, e);
  Object.defineProperty(AATCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_ANSWER_TOPIC;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AATCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        l.CastleModel.castleForumData.dispatchEvent(new r.CastleAllianceForumEvent(r.CastleAllianceForumEvent.ON_POST_CREATION_ACCEPTED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AATCommand;
}(c.CastleCommand);
exports.AATCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");