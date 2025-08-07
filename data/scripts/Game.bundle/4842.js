Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function ESLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ESLCommand, e);
  Object.defineProperty(ESLCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_EQUIPMENT_INVENTORY_SPACE_LEFT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ESLCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  ESLCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        l.CastleModel.equipData.parse_ESL(n);
        l.CastleModel.gemData.parse_ESL(n);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return ESLCommand;
}(c.CastleCommand);
exports.ESLCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");