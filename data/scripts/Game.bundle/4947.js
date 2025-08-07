Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./10.js");
var c = function (e) {
  function MSPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MSPCommand, e);
  Object.defineProperty(MSPCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SHOW_POPUP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MSPCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  MSPCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    if (t == a.ERROR.ALL_OK) {
      var n = JSON.parse(i[1]);
      u.CastlePopUpHelper.displayPopUps(n);
    } else {
      this.showErrorDialog(t, i);
    }
  };
  return MSPCommand;
}(l.CastleCommand);
exports.MSPCommand = c;
var u = require("./405.js");
o.classImplementsInterfaces(c, "IExecCommand");