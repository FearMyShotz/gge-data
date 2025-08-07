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
  function GUICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GUICommand, e);
  Object.defineProperty(GUICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_UNIT_INVENTORY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GUICommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        l.CastleModel.militaryData.parse_GUI(n);
        break;
      case a.ERROR.NOT_IN_OWNED_CASTLE:
    }
  };
  return GUICommand;
}(c.CastleCommand);
exports.GUICommand = u;
o.classImplementsInterfaces(u, "IExecCommand");