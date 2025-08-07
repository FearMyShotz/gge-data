Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function OpenNewServerAnnouncementCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenNewServerAnnouncementCommand, e);
  OpenNewServerAnnouncementCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this, t);
  };
  return OpenNewServerAnnouncementCommand;
}(o.SimpleCommand);
exports.OpenNewServerAnnouncementCommand = s;
a.classImplementsInterfaces(s, "ISimpleCommand");