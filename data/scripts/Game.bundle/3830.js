Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1792.js");
var a = require("./353.js");
var s = function (e) {
  function CastleInitEquipmentFavoritesServiceCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleInitEquipmentFavoritesServiceCommand, e);
  CastleInitEquipmentFavoritesServiceCommand.prototype.execute = function (e = null) {
    a.CastleEquipmentFavoritesMicroservice.Instance.initialize();
  };
  return CastleInitEquipmentFavoritesServiceCommand;
}(o.SimpleCommand);
exports.CastleInitEquipmentFavoritesServiceCommand = s;