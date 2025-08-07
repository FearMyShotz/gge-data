Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function CRINCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CRINCommand, e);
  Object.defineProperty(CRINCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_CRAFTING_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CRINCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i[a.CommKeys.CRAFTING_AREA_INFO]) {
          l.CastleModel.craftingData.parseAllQueueData(i);
        } else {
          l.CastleModel.craftingData.parseBuildingQueueData(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CRINCommand;
}(c.CastleCommand);
exports.CRINCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");