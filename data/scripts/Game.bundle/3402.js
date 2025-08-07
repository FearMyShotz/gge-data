Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./3403.js");
var r = function (e) {
  function OpenFactionEventMainDialogCommand() {
    var t = this;
    t._subLayerID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(OpenFactionEventMainDialogCommand, e);
  OpenFactionEventMainDialogCommand.prototype.addAssets = function (t) {
    e.prototype.addAssets.call(this, t);
    this._subLayerID = a.int(t ? a.int(t) : -1);
  };
  OpenFactionEventMainDialogCommand.prototype.open = function (e) {
    var t = new s.FactionEventMainDialogProperties(this._subLayerID);
    t.titlesSublayer = e;
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.FactionEventMainDialog, t);
  };
  return OpenFactionEventMainDialogCommand;
}(require("./1651.js").OpenFactionInvasionEventMainDialogCommand);
exports.OpenFactionEventMainDialogCommand = r;
var l = require("./9.js");
var c = require("./661.js");
o.classImplementsInterfaces(r, "ISimpleCommand");