Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./5.js");
var r = require("./4.js");
var o = require("./55.js");
var l = require("./30.js");
var u = function (e) {
  function BasicCheckAgeGateActivityCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicCheckAgeGateActivityCommand, e);
  BasicCheckAgeGateActivityCommand.prototype.execute = function (e = null) {
    var t = e;
    if (!s.EnvGlobalsHandler.globals.ageGateFeatureIsActive) {
      l.debug("AgeGate feature is not activated");
      r.BasicModel.ageGateData.isAgeGateActive = false;
      return;
    }
    if (t.ggsCountryCode == o.CountryCodes.USA) {
      var n = s.EnvGlobalsHandler.globals.accountCookie.ageGateData;
      r.BasicModel.ageGateData.isAgeGateActive = !n;
    }
    l.debug("isAgeGateActive: " + r.BasicModel.ageGateData.isAgeGateActive);
  };
  return BasicCheckAgeGateActivityCommand;
}(a.SimpleCommand);
exports.BasicCheckAgeGateActivityCommand = u;