Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./176.js");
var u = require("./515.js");
var d = require("./10.js");
var p = function (e) {
  function POLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(POLCommand, e);
  Object.defineProperty(POLCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_PRIVATE_OFFER_LIST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  POLCommand.prototype.executeCommand = function (t, i) {
    if (!c.CastleDataHolder.instance.gbdParsed) {
      u.CommandDelayController.getInstance().addDelayCommandID(r.ClientConstSF.S2C_PRIVATE_OFFER_LIST);
    }
    return e.prototype.executeCommand.call(this, t, i);
  };
  POLCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
      case 10005:
        var n = JSON.parse(i[1]);
        l.CastleModel.privateOfferData.parse_POL(n);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return POLCommand;
}(d.CastleCommand);
exports.POLCommand = p;
o.classImplementsInterfaces(p, "IExecCommand");