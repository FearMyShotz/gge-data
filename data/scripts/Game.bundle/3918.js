Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = function () {
  function CastleUIComponentCreator() {}
  CastleUIComponentCreator.prototype.createFlashComponent = function (e) {
    if (e && typeof e == "function") {
      return new e();
    }
    switch (e) {
      case l.CastleReconnectDialog.NAME:
        return new l.CastleReconnectDialog();
      case s.CastleStandardOkDialog.NAME:
        return new s.CastleStandardOkDialog();
      case r.CastleStandardYesNoDialog.NAME:
        return new r.CastleStandardYesNoDialog();
    }
    if ((e = c.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(e.toString())) && typeof e == "function") {
      return new e();
    }
    if (n.EnvironmentProvider.instance.globals.isLocal) {
      throw new Error("Unknown component: " + e);
    }
    return new s.CastleStandardOkDialog();
  };
  return CastleUIComponentCreator;
}();
exports.CastleUIComponentCreator = a;
var s = require("./38.js");
var r = require("./151.js");
var l = require("./1813.js");
var c = require("./666.js");
o.classImplementsInterfaces(a, "IUIComponentCreator");