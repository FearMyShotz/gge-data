Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./1471.js");
var l = require("./37.js");
var c = require("./4.js");
var u = require("./475.js");
var d = function (e) {
  function GCCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GCCCommand, e);
  Object.defineProperty(GCCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_CONSTRUCTION_CRAFTING_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleDispatchingCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GCCCommand.prototype.executeCommand = function (t, i) {
    switch (t) {
      case a.ERROR.ALL_OK:
        c.CastleModel.craftingMaterialData.dispatchEvent(new r.CastleCraftingMaterialEvent(r.CastleCraftingMaterialEvent.MATERIAL_INVENTORY_UPDATED));
    }
    return e.prototype.executeCommand.call(this, t, i);
  };
  Object.defineProperty(GCCCommand.prototype, "eventType", {
    get: function () {
      return l.CastleServerMessageArrivedEvent.GCC_ARRIVED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleDispatchingCommand.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return GCCCommand;
}(u.CastleDispatchingCommand);
exports.GCCCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");