Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./118.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function CEQCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CEQCommand, e);
  Object.defineProperty(CEQCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CRAFT_EQUIPMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CEQCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.equipData.parse_CEQ(i);
        l.CastleModel.equipData.parse_ESL(i.esl);
        l.CastleModel.gemData.parse_ESL(i.esl);
        break;
      default:
        this.controller.dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CEQCommand;
}(c.CastleCommand);
exports.CEQCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");