Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3404.js");
var r = function (e) {
  function OpenFactionInvasionEventMainDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenFactionInvasionEventMainDialogCommand, e);
  OpenFactionInvasionEventMainDialogCommand.prototype.addAssets = function (e) {
    this.loadAsset("GallantryTitlesSublayer", "GallantryTitlesSublayer");
  };
  OpenFactionInvasionEventMainDialogCommand.prototype.openDialog = function () {
    var e = this.getSublayerMc();
    this.open(e);
  };
  OpenFactionInvasionEventMainDialogCommand.prototype.open = function (e) {
    var t = new s.FactionInvasionDialogProperties();
    t.titlesSublayer = e;
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleFactionInvasionEventDialog, t);
  };
  OpenFactionInvasionEventMainDialogCommand.prototype.getSublayerMc = function () {
    return new (a.getDefinitionByName("GallantryTitlesSublayer"))();
  };
  return OpenFactionInvasionEventMainDialogCommand;
}(require("./1061.js").OpenDialogWithAdditionalExternalAssetsCommand);
exports.OpenFactionInvasionEventMainDialogCommand = r;
var l = require("./9.js");
var c = require("./3405.js");
o.classImplementsInterfaces(r, "ISimpleCommand");