Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./176.js");
var c = require("./10.js");
var u = function (e) {
  function KGVCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KGVCommand, e);
  Object.defineProperty(KGVCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_KINGDOM_GET_VILLAGE_LIST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KGVCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        if (l.CastleDataHolder.instance.gbdParsed) {
          var i = JSON.parse(t[1]);
          r.CastleModel.userData.parse_KGV(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return KGVCommand;
}(c.CastleCommand);
exports.KGVCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");