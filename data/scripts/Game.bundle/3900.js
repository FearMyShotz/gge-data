Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./4.js");
var a = require("./196.js");
var s = function (e) {
  function CheatBuildingInfoCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatBuildingInfoCommand, e);
  CheatBuildingInfoCommand.prototype.execute = function (e = null) {
    var t = prompt("Which WodID should be shown?", CheatBuildingInfoCommand.wodID);
    if (parseInt(t) > 0 && o.CastleModel.wodData.getBuildingVOById(parseInt(t))) {
      CheatBuildingInfoCommand.wodID = t;
      a.ClientCheatsHelper.performCommand("buildingInfo " + CheatBuildingInfoCommand.wodID);
    }
  };
  CheatBuildingInfoCommand.wodID = "2871";
  return CheatBuildingInfoCommand;
}(require("./212.js").ABotCommand);
exports.CheatBuildingInfoCommand = s;