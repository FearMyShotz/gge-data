Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./23.js");
var r = require("./266.js");
var l = require("./34.js");
var c = require("./4.js");
var u = function (e) {
  function CastleDestroyGameCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleDestroyGameCommand, e);
  CastleDestroyGameCommand.prototype.destroyGameSpecificObjects = function () {
    r.cxfResetCommandCache();
    p.CastleDataHolder.instance.gbdParsed = false;
    p.CastleDataHolder.instance.requestUptOnWorldmapSwitch = false;
    c.CastleModel.settingsData.isLoginReady = false;
    h.CastleIngameMessageHandler.getInstance().destroy();
    d.LordEffectHelper.resetCategoryItems();
    g.OpenTipDialogCommand.repairShown = 0;
    s.TweenMax.killAll();
    l.Iso.destroy();
    c.CastleModel.resetModels();
  };
  return CastleDestroyGameCommand;
}(o.BasicDestroyGameCommand);
exports.CastleDestroyGameCommand = u;
var d = require("./133.js");
var p = require("./176.js");
var h = require("./658.js");
var g = require("./1752.js");
a.classImplementsInterfaces(u, "ISimpleCommand");