Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./1136.js");
var r = require("./364.js");
var l = function (e) {
  function VLNCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(VLNCommand, e);
  Object.defineProperty(VLNCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_VALIDATE_LOGIN_NAME;
    },
    enumerable: true,
    configurable: true
  });
  VLNCommand.prototype.executeCommand = function (e, t) {
    if (e != o.ERROR.ALL_OK) {
      this.controller.dispatchEvent(new r.CastleRegisterErrorEvent(r.CastleRegisterErrorEvent.LLI_ERROR, "LLI", e));
      return false;
    } else {
      this.controller.dispatchEvent(new s.CastleNameValidationEvent(s.CastleNameValidationEvent.VLN_OK));
      return true;
    }
  };
  return VLNCommand;
}(require("./10.js").CastleCommand);
exports.VLNCommand = l;