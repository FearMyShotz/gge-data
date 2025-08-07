Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./119.js");
var l = require("./483.js");
var c = require("./10.js");
var u = function (e) {
  function EQECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EQECommand, e);
  Object.defineProperty(EQECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.C2S_ENCHANT_EQUIPMENT_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EQECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.parse_equipment(i.E)));
        break;
      case a.ERROR.ENCHANTING_FAILED:
        this.controller.dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, null));
        break;
      default:
        this.controller.dispatchEvent(new r.CastleEquipmentEvent(r.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  EQECommand.prototype.parse_equipment = function (e) {
    if (!e) {
      return null;
    }
    var t = [];
    var i = l.CastleEquipmentFactory.createEquipmentVO(e);
    t.push(i);
    return t;
  };
  return EQECommand;
}(c.CastleCommand);
exports.EQECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");