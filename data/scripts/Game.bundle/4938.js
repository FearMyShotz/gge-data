Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1932.js");
var l = require("./10.js");
var c = function (e) {
  function GPNCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GPNCommand, e);
  Object.defineProperty(GPNCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_PATCH_NOTE_REWARDS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GPNCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = u.CollectableManager.parser.s2cParamObject.createList(i.R);
        this.controller.dispatchEvent(new r.CastleChangelistRewardsEvent(r.CastleChangelistRewardsEvent.DATA_UPDATED, n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GPNCommand;
}(l.CastleCommand);
exports.GPNCommand = c;
var u = require("./50.js");
o.classImplementsInterfaces(c, "IExecCommand");