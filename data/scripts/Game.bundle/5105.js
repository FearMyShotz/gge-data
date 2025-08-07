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
  function GPPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GPPCommand, e);
  Object.defineProperty(GPPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_PACKAGE_PRICE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GPPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.eventPackageData.getPackagePrice(i);
        break;
      default:
        this.layoutManager.hideDialog(u.CastleResourceMerchantEventBuyDialog);
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GPPCommand;
}(l.CastleCommand);
exports.GPPCommand = c;
var u = require("./879.js");
o.classImplementsInterfaces(c, "IExecCommand");