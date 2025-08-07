Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = function (e) {
  function ATOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ATOCommand, e);
  Object.defineProperty(ATOCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SET_API_TOKEN;
    },
    enumerable: true,
    configurable: true
  });
  ATOCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.userData.parse_ATO(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ATOCommand;
}(require("./10.js").CastleCommand);
exports.ATOCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");