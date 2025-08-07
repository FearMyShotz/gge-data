Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = function (e) {
  function OpenEventDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenEventDialogCommand, e);
  OpenEventDialogCommand.prototype.execute = function (e) {
    var t;
    if (e === undefined) {
      e = null;
    }
    var i = true;
    if (s.instanceOfClass(e, "Array")) {
      if (e.length >= 1) {
        t = e[0];
      }
      if (e.length >= 2) {
        i = e[1];
      }
    } else {
      t = e;
    }
    if (t) {
      t.openDialog(i);
    }
  };
  return OpenEventDialogCommand;
}(o.SimpleCommand);
exports.OpenEventDialogCommand = r;
a.classImplementsInterfaces(r, "ISimpleCommand");