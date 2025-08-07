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
  function GTRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GTRCommand, e);
  Object.defineProperty(GTRCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_ALLIANCE_TOPIC_REPLIES;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GTRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.castleForumData.parseGTR(i);
        break;
      case a.ERROR.TOPIC_NOT_FOUND:
        this.showErrorDialog(e, t);
        r.CastleModel.castleForumData.onDetailTopicWasNotFound();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GTRCommand;
}(l.CastleCommand);
exports.GTRCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");