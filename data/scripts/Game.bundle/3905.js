Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatMaintenanceDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatMaintenanceDialogCommand, e);
  CheatMaintenanceDialogCommand.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("noConnection");
  };
  return CheatMaintenanceDialogCommand;
}(require("./212.js").ABotCommand);
exports.CheatMaintenanceDialogCommand = a;