Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatAddNPCGeneralCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatAddNPCGeneralCommand, e);
  CheatAddNPCGeneralCommand.prototype.execute = function (e = null) {
    var t = prompt("Which GeneralID should be added?", "115");
    if (prompt("Should the general be shown as preview (y/n)", "n") == "y") {
      o.ClientCheatsHelper.performCommand("addNPCGeneralPreview " + t);
    } else {
      o.ClientCheatsHelper.performCommand("addNPCGeneral " + t);
    }
  };
  return CheatAddNPCGeneralCommand;
}(require("./212.js").ABotCommand);
exports.CheatAddNPCGeneralCommand = a;