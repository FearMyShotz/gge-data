Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./15.js");
var l = require("./4.js");
var c = require("./10.js");
var u = createjs.Event;
var d = function (e) {
  function HSSCommand() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(HSSCommand, e);
  Object.defineProperty(HSSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SKIP_HOSPITAL_SLOT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HSSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.currencyData.parseGCU(i.gcu);
        break;
      default:
        r.CastleBasicController.getInstance().dispatchEvent(new u(HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED, false, false));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  HSSCommand.__initialize_static_members = function () {
    HSSCommand.EVENT_SKIP_HOSPITAL_SLOT_FAILED = "EVENT_SKIP_HOSPITAL_SLOT_FAILED";
  };
  return HSSCommand;
}(c.CastleCommand);
exports.HSSCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");
d.__initialize_static_members();